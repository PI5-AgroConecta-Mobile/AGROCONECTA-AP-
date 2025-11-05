import { Request, Response } from 'express'
import { prisma } from '../../database'

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

      const pair = normalizePair(me, userId)
      let convo = await prisma.cONVERSATION.findUnique({
        where: { participantAId_participantBId: { participantAId: pair.a, participantBId: pair.b } }
      })
      if (!convo) {
        convo = await prisma.cONVERSATION.create({ data: { participantAId: pair.a, participantBId: pair.b } })
      }
      return res.status(200).json(convo)
    } catch (e) {
      return res.status(500).json({ err: 'Error resolving conversation' })
    }
  }
}


