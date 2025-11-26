import { Request, Response } from 'express'
import { prisma } from '../../database'
import logger from '../../utils/logger'

function normalizePair(userA: string, userB: string): { a: string; b: string } {
  return userA < userB ? { a: userA, b: userB } : { a: userB, b: userA }
}

export class GetOrCreateConversationWithUser {
  async handle(req: Request, res: Response) {
    try {
      const me = (req as any).userId as string
      if (!me) return res.status(401).json({ err: 'Unauthorized' })
      
      const { userId } = req.params
      if (!userId) return res.status(400).json({ err: 'userId is required' })
      if (userId === me) return res.status(400).json({ err: 'Cannot chat with yourself' })

      // Verificar se o usuário alvo existe
      const targetUser = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          name: true,
          email: true,
          imgUrl: true,
          userType: true,
          farmName: true
        }
      })

      if (!targetUser) {
        return res.status(404).json({ err: 'Usuário não encontrado' })
      }

      // Normalizar o par de usuários (garantir ordem consistente)
      const pair = normalizePair(me, userId)
      
      // Buscar conversa existente
      let convo = await prisma.cONVERSATION.findUnique({
        where: { 
          participantAId_participantBId: { 
            participantAId: pair.a, 
            participantBId: pair.b 
          } 
        }
      })

      // Se não existe, criar nova conversa
      if (!convo) {
        convo = await prisma.cONVERSATION.create({ 
          data: { 
            participantAId: pair.a, 
            participantBId: pair.b 
          }
        })
        logger.info(`Conversation created: id=${convo.id} between ${pair.a} and ${pair.b}`)
      }

      // Buscar última mensagem da conversa
      const lastMessage = await prisma.mESSAGE.findFirst({
        where: { conversationId: convo.id },
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          content: true,
          senderId: true,
          createdAt: true,
          readAt: true
        }
      })

      // Retornar conversa enriquecida com dados dos participantes
      const response = {
        id: convo.id,
        participantAId: convo.participantAId,
        participantBId: convo.participantBId,
        createdAt: convo.createdAt,
        otherParticipant: {
          id: targetUser.id,
          name: targetUser.name,
          email: targetUser.email,
          imgUrl: targetUser.imgUrl,
          userType: targetUser.userType,
          farmName: targetUser.farmName
        },
        lastMessage: lastMessage ? {
          id: lastMessage.id,
          content: lastMessage.content,
          senderId: lastMessage.senderId,
          createdAt: lastMessage.createdAt,
          readAt: lastMessage.readAt
        } : null
      }

      return res.status(200).json(response)
    } catch (e) {
      logger.error(`Error resolving conversation: ${(e as any)?.message || e}`)
      return res.status(500).json({ err: 'Error resolving conversation' })
    }
  }
}