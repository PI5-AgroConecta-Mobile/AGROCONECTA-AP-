import {Request, Response} from 'express'
import { prisma } from '../../database/index'
import logger from '../../utils/logger'

export class ListProducts {
    async handle (req: Request, res: Response){
        try{
            const listAllProducts = await prisma.PRODUCT.findMany()
            
            logger.info(`All products listed by user: ${req.userId}`);
            return res.status(200).json(listAllProducts)
        }catch{
            logger.error(`Error listing products by user: ${req.userId}`);
            return res.status(500).send({err: "Error listing the product"})
        }
    }
}