import { Server as HttpServer } from 'http'
import { Server as IOServer, Socket } from 'socket.io'
import { verify } from 'jsonwebtoken'
import { prisma } from '../database'
import logger from '../utils/logger'

type JwtPayload = { sub: string }

function normalizePair(userA: string, userB: string): { a: string; b: string } {
  return userA < userB ? { a: userA, b: userB } : { a: userB, b: userA }
}

export function initSocketServer(server: HttpServer) {
  const io = new IOServer(server, {
    cors: { origin: '*', methods: ['GET', 'POST'] }
  })

  io.use(async (socket, next) => {
    try {
      const authHeader = socket.handshake.headers['authorization'] as string | undefined
      const queryToken = (socket.handshake.query?.token as string | undefined) || undefined
      const authPayloadToken = (socket.handshake as any).auth?.token as string | undefined
      const token = authHeader?.startsWith('Bearer ')
        ? authHeader.slice(7)
        : (authPayloadToken || queryToken)

      if (!token) {
        return next(new Error('Auth token missing'))
      }
      const secret = process.env.JWT_SECRET
      if (!secret) {
        return next(new Error('JWT secret missing'))
      }
      const { sub } = verify(token, secret) as JwtPayload
      ;(socket as any).userId = sub
      socket.join(`user:${sub}`)
      return next()
    } catch (e) {
      return next(new Error('Invalid token'))
    }
  })

  io.on('connection', (socket: Socket) => {
    const userId = (socket as any).userId as string
    logger.info(`Socket connected: user=${userId} id=${socket.id}`)
    console.log(`console> socket connected: user=${userId} id=${socket.id}`)

    socket.on('conversation:join', async (conversationId: string, cb?: (ok: boolean) => void) => {
      try {
        const convo = await prisma.cONVERSATION.findUnique({ where: { id: conversationId } })
        if (!convo) {
          cb?.(false)
          return
        }
        if (convo.participantAId !== userId && convo.participantBId !== userId) {
          cb?.(false)
          return
        }
        socket.join(`conversation:${conversationId}`)
        cb?.(true)
      } catch {
        cb?.(false)
      }
    })

    socket.on(
      'message:send',
      async (
        payload: { conversationId?: string; toUserId?: string; content: string },
        cb?: (data: { success: boolean; conversationId?: string }) => void
      ) => {
        try {
          console.log(
            `console> message:send received from=${userId} payload=`,
            { conversationId: payload.conversationId, toUserId: payload.toUserId, content: payload.content }
          )
          let conversationId = payload.conversationId
          if (!conversationId) {
            if (!payload.toUserId) {
              cb?.({ success: false })
              return
            }
            const pair = normalizePair(userId, payload.toUserId)
            let convo = await prisma.cONVERSATION.findUnique({
              where: { participantAId_participantBId: { participantAId: pair.a, participantBId: pair.b } }
            })
            if (!convo) {
              convo = await prisma.cONVERSATION.create({
                data: { participantAId: pair.a, participantBId: pair.b }
              })
            }
            conversationId = convo.id
          }

          const message = await prisma.mESSAGE.create({
            data: {
              conversationId: conversationId!,
              senderId: userId,
              content: payload.content
            }
          })

          // Dev console output for quick visibility during development
          console.log(
            `console> message: conversation=${conversationId} from=${userId} id=${message.id} content="${payload.content}"`
          )

          // Log message creation
          logger.info(
            `Message sent: conversation=${conversationId} from=${userId} id=${message.id} content="${payload.content}"`
          )

          // Ensure sender is in the conversation room
          socket.join(`conversation:${conversationId}`)

          // Emit to conversation room, excluding the sender to prevent duplicates
          socket.to(`conversation:${conversationId}`).emit('message:new', message)

          // Also send to sender separately (so they can see their own message)
          socket.emit('message:new', message)

          // Also notify the recipient's user room so they can fetch/join if not already
          try {
            const convo = await prisma.cONVERSATION.findUnique({ where: { id: conversationId! } })
            if (convo) {
              const recipientId = convo.participantAId === userId ? convo.participantBId : convo.participantAId
              logger.info(
                `Message delivered notification: conversation=${conversationId} to=${recipientId} id=${message.id}`
              )
              io.to(`user:${recipientId}`).emit('conversation:update', {
                conversationId,
                lastMessage: message
              })
            }
          } catch {}

          cb?.({ success: true, conversationId })
        } catch (e) {
          console.error('console> message:send error:', (e as any)?.message || e)
          cb?.({ success: false })
        }
      }
    )

    // Compatibility with frontend events provided by user prompt
    socket.on('chat:join', ({ roomId }: { roomId?: string }) => {
      const r = roomId || 'global'
      if (r !== 'global') socket.join(`conversation:${r}`)
      else socket.join(r)
      console.log(`console> chat:join user=${userId} room=${r}`)
    })

    socket.on(
      'chat:history',
      async ({ roomId, limit }: { roomId?: string; limit?: number }) => {
        const r = roomId || 'global'
        if (r === 'global') {
          socket.emit('chat:history', [])
          return
        }
        const convo = await prisma.cONVERSATION.findUnique({ where: { id: r } })
        if (!convo || (convo.participantAId !== userId && convo.participantBId !== userId)) {
          socket.emit('chat:history', [])
          return
        }
        const take = Math.min(typeof limit === 'number' ? limit : 50, 200)
        const rows = await prisma.mESSAGE.findMany({
          where: { conversationId: r },
          orderBy: { createdAt: 'asc' },
          take
        })
        const history = rows.map((m) => ({
          id: m.id,
          text: m.content,
          userId: m.senderId,
          createdAt: m.createdAt.toISOString(),
          roomId: r
        }))
        socket.emit('chat:history', history)
      }
    )

    socket.on(
      'chat:message',
      async (
        payload: { roomId?: string; text?: string; toUserId?: string },
        ack?: (res: { ok: boolean; id?: string; conversationId?: string; err?: string }) => void
      ) => {
        try {
          const r = payload?.roomId
          const text = payload?.text || ''
          if (!r && !payload?.toUserId) {
            ack?.({ ok: false, err: 'roomId or toUserId required' })
            return
          }

          // Special case: global room (no persistence) - REMOVED: Use private chats instead
          // Global chat is deprecated in favor of private conversations
          if (r === 'global') {
            ack?.({ ok: false, err: 'Global chat is disabled. Use private chat with toUserId instead.' })
            return
          }

          let conversationId = r
          if (!conversationId && payload?.toUserId) {
            const pair = normalizePair(userId, payload.toUserId)
            let convo = await prisma.cONVERSATION.findUnique({
              where: { participantAId_participantBId: { participantAId: pair.a, participantBId: pair.b } }
            })
            if (!convo) {
              convo = await prisma.cONVERSATION.create({ data: { participantAId: pair.a, participantBId: pair.b } })
            }
            conversationId = convo.id
          }
          if (!conversationId) {
            ack?.({ ok: false, err: 'Unable to resolve conversation' })
            return
          }

          // Validate conversation exists and user participates (prevents FK error)
          const convoById = await prisma.cONVERSATION.findUnique({ where: { id: conversationId } })
          if (!convoById) {
            console.error('console> chat:message invalid conversationId:', conversationId)
            ack?.({ ok: false, err: 'conversation_not_found' })
            return
          }
          if (convoById.participantAId !== userId && convoById.participantBId !== userId) {
            console.error('console> chat:message user not in conversation:', userId, conversationId)
            ack?.({ ok: false, err: 'forbidden' })
            return
          }

          console.log(
            `console> chat:message received from=${userId} conversation=${conversationId} text="${text}"`
          )

          // Ensure sender is in the conversation room
          socket.join(`conversation:${conversationId}`)

          const saved = await prisma.mESSAGE.create({
            data: { conversationId, senderId: userId, content: text }
          })

          const outgoing = {
            id: saved.id,
            text: saved.content,
            userId: saved.senderId,
            createdAt: saved.createdAt.toISOString(),
            roomId: conversationId
          }

          // Emit to conversation room, excluding the sender to prevent duplicates
          socket.to(`conversation:${conversationId}`).emit('chat:message', outgoing)
          
          // Send to sender separately (so they can see their own message)
          socket.emit('chat:message', outgoing)

          try {
            const convo = await prisma.cONVERSATION.findUnique({ where: { id: conversationId } })
            if (convo) {
              const recipientId = convo.participantAId === userId ? convo.participantBId : convo.participantAId
              // Ensure recipient is also in the conversation room
              io.sockets.sockets.forEach((s) => {
                const sUserId = (s as any).userId
                if (sUserId === recipientId) {
                  s.join(`conversation:${conversationId}`)
                }
              })
              io.to(`user:${recipientId}`).emit('conversation:update', {
                conversationId,
                lastMessage: saved
              })
            }
          } catch {}

          ack?.({ ok: true, id: saved.id, conversationId })
        } catch (e) {
          console.error('console> chat:message error:', (e as any)?.message || e)
          ack?.({ ok: false, err: 'internal_error' })
        }
      }
    )

    socket.on('message:typing', (conversationId: string) => {
      socket.to(`conversation:${conversationId}`).emit('message:typing', { conversationId, userId })
    })

    socket.on('message:read', async (conversationId: string) => {
      try {
        await prisma.mESSAGE.updateMany({
          where: { conversationId, readAt: null, NOT: { senderId: userId } },
          data: { readAt: new Date() }
        })
        io.to(`conversation:${conversationId}`).emit('message:read', { conversationId, userId })
      } catch {}
    })

    socket.on('disconnect', () => {
      logger.info(`Socket disconnected: user=${userId} id=${socket.id}`)
    })
  })

  return io
}


