import {Request, Response} from 'express'
import { prisma } from '../../database/index'
import logger from '../../utils/logger'

export class GetProductById {
    async handle(req: Request, res: Response){
        try{
            const {productId} = req.params

            const product = prisma.PRODUCT.findUnique({
                where:{
                    id: productId
                }
            })
            
            logger.info(`Product retrieved: ${req.params.productId}`);
            return res.status(200).json(product)

        }catch{
            logger.error(`Error getting the product: ${req.params.productId}`);
            return res.status(500).send({err: "Error get the product"})
            
        }
    }
}