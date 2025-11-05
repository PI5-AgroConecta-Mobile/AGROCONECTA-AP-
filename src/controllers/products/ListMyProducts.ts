import {Request, Response} from 'express'
import { prisma } from '../../database/index'
import logger from '../../utils/logger'

export class ListMyProducts {
    async handle (req: Request, res: Response){
        const ownerId = req.userId;

        try{
            const listProducts = await prisma.pRODUCT.findMany({
                where: {
                    ownerId: ownerId 
                },
                orderBy: {
                    name: 'asc' 
                }
            })
            
            logger.info(`Listed all products for user: ${ownerId}`);
            return res.status(200).json(listProducts)

        }catch(e: any){
            logger.error(`Error listing products for user ${ownerId}: ${e.message}`);
            return res.status(500).send({err: "Erro ao listar os seus produtos"})
        }
    }
}