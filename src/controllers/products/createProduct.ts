import {Request, Response} from 'express'
import { prisma } from '../../database/index'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken';
import logger from '../../utils/logger'

export class createProduct {
    async handle(req: Request, res: Response){
        try{
            
        	const {name, quantity, price, unityType, harvestId, imgUrl} = req.body
        	
        		const newProduct = await prisma.product.create({
        			data:{
        				name,
        				quantity,
        				price,
        				unityType,
        				ownerId: req.userId,
        				harvestId,
        				imgUrl
        			}
        		})
        	
			logger.info(`Product created: ${req.params.productId}`);
            return res.status(200).send({newProduct});

        }catch{
			logger.error(`Error creating t he product: ${req.params.productId}`);
            return res.status(500).send({err: "Error creating the product"})
        }
    }
}

