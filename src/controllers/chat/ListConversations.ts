import { Request, Response } from 'express'
import { prisma } from '../../database'
import logger from '../../utils/logger'

export class ListConversations {
  async handle(req: Request, res: Response) {
    try {
      const userId = (req as any).userId as string
      if (!userId) return res.status(401).json({ err: 'Unauthorized' })

      // Buscar todas as conversas onde o usuário é participante
      const conversations = await prisma.cONVERSATION.findMany({
        where: { 
          OR: [
            { participantAId: userId }, 
            { participantBId: userId }
          ] 
        },
        orderBy: { createdAt: 'desc' }
      })

      // Enriquecer com dados dos participantes e última mensagem
      const enrichedConversations = await Promise.all(
        conversations.map(async (convo) => {
          // Identificar o outro participante
          const otherParticipantId = convo.participantAId === userId 
            ? convo.participantBId 
            : convo.participantAId

          // Buscar dados do outro participante
          const otherParticipant = await prisma.user.findUnique({
            where: { id: otherParticipantId },
            select: {
              id: true,
              name: true,
              email: true,
              imgUrl: true,
              userType: true,
              farmName: true
            }
          })

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

          return {
            id: convo.id,
            participantAId: convo.participantAId,
            participantBId: convo.participantBId,
            createdAt: convo.createdAt,
            otherParticipant: otherParticipant || {
              id: otherParticipantId,
              name: 'Usuário não encontrado',
              email: null,
              imgUrl: null,
              userType: null,
              farmName: null
            },
            lastMessage: lastMessage ? {
              id: lastMessage.id,
              content: lastMessage.content,
              senderId: lastMessage.senderId,
              createdAt: lastMessage.createdAt,
              readAt: lastMessage.readAt
            } : null
          }
        })
      )

      // Ordenar por última mensagem (se houver) ou por data de criação
      enrichedConversations.sort((a, b) => {
        const aTime = a.lastMessage?.createdAt || a.createdAt
        const bTime = b.lastMessage?.createdAt || b.createdAt
        return bTime.getTime() - aTime.getTime()
      })

      logger.info(`Conversations listed: count=${enrichedConversations.length} for user=${userId}`)
      return res.status(200).json(enrichedConversations)
    } catch (e) {
      logger.error(`Error listing conversations: ${(e as any)?.message || e}`)
      return res.status(500).json({ err: 'Error listing conversations' })
    }
  }
}