import { Request, Response } from 'express'
import { prisma } from '../../database/index'
import logger from '../../utils/logger'

export class GetUser {
    async handle(req: Request, res: Response) {
        try {
            // 1. Tenta pegar o ID da URL (ex: /getUser/123)
            const { id } = req.params;
            
            // 2. Se não tiver ID na URL, tenta pegar do token (caso a rota tenha autenticação)
            const userId = id || (req as any).userId; 

            if (!userId) {
                return res.status(400).json({ err: "ID do usuário não fornecido." })
            }

            const user = await prisma.user.findUnique({
                where: {
                    id: userId
                },
                // Selecionamos os campos explicitamente para garantir que dados sensíveis (senha) não vazem
                // e para garantir que location/farmName venham para o mapa.
                select: {
                    id: true,
                    name: true,
                    email: true,
                    imgUrl: true,
                    contact: true,
                    contactType: true,
                    farmName: true,
                    latitude: true,
                    longitude: true,
                    userType: true,
                    rate: true,
                }
            })

            if (!user) {
                return res.status(404).json({ err: "Usuário não encontrado" })
            }
            
            logger.info(`User data retrieved for user ID: ${userId}`);
            return res.status(200).json(user)

        } catch (error) {
            logger.error(`Error retrieving user: ${error}`);
            return res.status(500).json({ err: "Erro interno ao buscar usuário" })
        }
    }
}