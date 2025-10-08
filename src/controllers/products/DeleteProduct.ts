import {Request, Response} from 'express'
import { prisma } from '../../database/index'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken';
import logger from '../../utils/logger'

export class DeleteProduct {
    async handle(req: Request, res: Response){
        try{
            
            const {productId} = req.params


            const DeleteProduct = await prisma.pRODUCT.delete({
                where:{
                    id: productId,
                    ownerId: req.userId
                }
            })
            
            logger.info(`Product deleted: ${req.params.productId}`);
             return res.status(200).send({ DeleteProduct });
			
			}catch{
                logger.error(`Error deleting the product: ${req.params.productId}`);
            return res.status(500).send({err: "Error deleting the product"})
        }
    	
	}
}