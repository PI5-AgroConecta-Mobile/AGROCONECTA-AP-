import { Request, Response } from 'express'
import { prisma } from '../../database'

export class ListConversations {
  async handle(req: Request, res: Response) {
    try {
      const userId = (req as any).userId as string
      if (!userId) return res.status(401).json({ err: 'Unauthorized' })

      const conversations = await prisma.cONVERSATION.findMany({
        where: { OR: [{ participantAId: userId }, { participantBId: userId }] },
        orderBy: { createdAt: 'desc' }
      })

      return res.status(200).json(conversations)
    } catch (e) {
      return res.status(500).json({ err: 'Error listing conversations' })
    }
  }
}


