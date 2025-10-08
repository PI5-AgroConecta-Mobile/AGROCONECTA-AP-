import {Request, Response} from 'express'
import { prisma } from '../../database/index'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken';

export class createProduct {
    async handle(req: Request, res: Response){
        try{
            
        	const {name, quantity, price, unityType, ownerId, harvestId, imgUrl} = req.body

        	const productExists = await prisma.product.findFirst({
        		where:{
        			name: name,
        			ownerId: ownerId,
        			harvestId: harvestId
        		}
        	})



        	if (productExists) {

        		const storageQuantity = await prisma.product.findFirst({
        			where:{
        			name: name,
        			ownerId: ownerId,
        			harvestId: harvestId
        		},
        		data: {
        			quantity
        		}
        		})

        		const newQuantity = storageQuantity + quantity

        		const updateProduct = await prisma.product.update({
        			where: {
        				name: name,
        				ownerId: ownerId,
        				harvestId: harvestId
        			},
        			data:{
        				quantity: newQuantity
        			}
        		})
        	}else{
        		const newProduct = await prisma.product.create({
        			data:{
        				name,
        				quantity,
        				price,
        				unityType,
        				ownerId,
        				haverstId,
        				imgUrl
        			}
        		})
        	}

            return res.status(200).send({newProduct});

        }catch{
            return res.status(500).send({err: "Error creating the product"})
        }
    }
}