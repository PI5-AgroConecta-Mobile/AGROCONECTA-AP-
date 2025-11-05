import { Request, Response } from 'express'
import { prisma } from '../../database'

export class ListMessages {
  async handle(req: Request, res: Response) {
    try {
      const userId = (req as any).userId as string
      if (!userId) return res.status(401).json({ err: 'Unauthorized' })
      const { conversationId } = req.params
      if (!conversationId) return res.status(400).json({ err: 'conversationId is required' })

      const convo = await prisma.cONVERSATION.findUnique({ where: { id: conversationId } })
      if (!convo) return res.status(404).json({ err: 'Conversation not found' })
      if (convo.participantAId !== userId && convo.participantBId !== userId)
        return res.status(403).json({ err: 'Forbidden' })

      const limit = Math.min(parseInt((req.query.limit as string) || '50', 10), 200)
      const messages = await prisma.mESSAGE.findMany({
        where: { conversationId },
        orderBy: { createdAt: 'asc' },
        take: limit
      })

      return res.status(200).json(messages)
    } catch (e) {
      return res.status(500).json({ err: 'Error listing messages' })
    }
  }
}


