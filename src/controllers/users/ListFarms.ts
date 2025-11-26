import { Request, Response } from 'express'
import { prisma } from '../../database/index'
import logger from '../../utils/logger'

export class ListFarms {
    async handle(req: Request, res: Response) {
        try {
            const farms = await prisma.user.findMany({
                where: {
                    userType: 1, // 1 = Agricultor
                    farmName: {
                        not: null
                    }
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    farmName: true,
                    imgUrl: true,
                    latitude: true,  
                    longitude: true, 
                    contact: true
                }
            })

            return res.json(farms)
        } catch (e: any) {
            logger.error(e.message)
            return res.status(500).json({ err: "Erro ao listar fazendas" })
        }
    }
}