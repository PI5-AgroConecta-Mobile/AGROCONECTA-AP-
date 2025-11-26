import { Request, Response } from 'express'
import { prisma } from '../../database'
import logger from '../../utils/logger'

export class ListUsers {
  async handle(req: Request, res: Response) {
    try {
      const currentUserId = (req as any).userId as string
      if (!currentUserId) {
        return res.status(401).json({ err: 'Unauthorized' })
      }

      const limit = req.query.limit ? parseInt(req.query.limit as string) : 50
      const offset = req.query.offset ? parseInt(req.query.offset as string) : 0
      const userType = req.query.userType ? parseInt(req.query.userType as string) : undefined

      // Construir query
      const where: any = {
        id: { not: currentUserId } // Excluir usuário atual
      }

      if (userType !== undefined) {
        where.userType = userType
      }

      // Buscar usuários
      const users = await prisma.user.findMany({
        where,
        select: {
          id: true,
          name: true,
          email: true,
          userType: true,
          imgUrl: true,
          farmName: true,
          contact: true,
          contactType: true,
          createDate: true,
          latitude: true,
          longitude: true
        },
        take: Math.min(limit, 100), // Limite máximo de 100
        skip: offset,
        orderBy: {
          name: 'asc'
        }
      })

      logger.info(`Users listed: count=${users.length} by user=${currentUserId}`)
      return res.status(200).json(users)
    } catch (e) {
      logger.error(`Error listing users: ${(e as any)?.message || e}`)
      return res.status(500).json({ err: 'Erro ao buscar usuários' })
    }
  }
}