import { Request, Response } from 'express'
import { prisma } from '../../database'
import logger from '../../utils/logger'

export class SearchUsers {
  async handle(req: Request, res: Response) {
    try {
      const currentUserId = (req as any).userId as string
      if (!currentUserId) {
        return res.status(401).json({ err: 'Unauthorized' })
      }

      const query = (req.query.q as string)?.trim() || ''

      // Se a query estiver vazia, retornar array vazio
      if (!query || query.length === 0) {
        return res.status(200).json([])
      }

      // Buscar usuários por nome, email ou nome da fazenda
      const users = await prisma.user.findMany({
        where: {
          id: { not: currentUserId }, // Excluir usuário atual
          OR: [
            { name: { contains: query, mode: 'insensitive' } },
            { email: { contains: query, mode: 'insensitive' } },
            { farmName: { contains: query, mode: 'insensitive' } }
          ]
        },
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
        take: 20, // Limite de 20 resultados para busca
        orderBy: {
          name: 'asc'
        }
      })

      logger.info(`Users searched: query="${query}" count=${users.length} by user=${currentUserId}`)
      return res.status(200).json(users)
    } catch (e) {
      logger.error(`Error searching users: ${(e as any)?.message || e}`)
      return res.status(500).json({ err: 'Erro ao buscar usuários' })
    }
  }
}