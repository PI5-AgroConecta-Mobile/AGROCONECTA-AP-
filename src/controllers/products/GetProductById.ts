import {Request, Response} from 'express'
import { prisma } from '../../database/index'
import logger from '../../utils/logger'

export class GetProductById {
    async handle(req: Request, res: Response){
        try{
            const {productId} = req.params

            const product = await prisma.pRODUCT.findUnique({
                where:{
                    id: productId
                }
            })
            
            if (!product) {
                logger.warn(`Product not found: ${productId}`);
                return res.status(404).json({ error: "Product not found" });
            }

            logger.info(`Product retrieved: ${productId}`);
            return res.status(200).json(product)

        }catch(error){
            logger.error(`Error getting the product: ${req.params.productId} - ${error}`);
            return res.status(500).send({err: "Error getting the product"})
        }
    }
}