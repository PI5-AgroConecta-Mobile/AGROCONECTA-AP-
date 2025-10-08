import {Request, Response} from 'express'
import { prisma } from '../../database/index'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken';

export class DeleteProduct {
    async handle(req: Request, res: Response){
        try{
            
            const {productId} = req.params


            const DeleteProduct = await prisma.PRODUCT.delete({
                where:{
                    id: productId,
                    ownerId: req.userId
                }
            })

             return res.status(200).send({ DeleteProduct });
			
			}catch{
            return res.status(500).send({err: "Error deleting the product"})
        }
    	
	}
}