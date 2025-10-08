import {Request, Response} from 'express'
import { prisma } from '../../database/index'
import logger from '../../utils/logger'

export class UpdateProduct {
    async handle(req: Request, res: Response){
        try{
            const { id, name, quantity, price, unityType, harvestId, imgUrl} = req.body

            const verifyProduct = await prisma.pRODUCT.findUnique({
                where: {
                    id
                }
            })

            if(!verifyProduct){
                return res.status(400).send({err: "Error updating the product"})
            }

            const updateProduct = await prisma.pRODUCT.update({
                where:{
                    id: verifyProduct.id
                },
                data:{
                    name: name? name : verifyProduct.name,
                    quantity: quantity? quantity : verifyProduct.quantity,
                    price: price? price : verifyProduct.price,
                    unityType: unityType? unityType : verifyProduct.unityType,
                    harvest: harvestId? harvestId : verifyProduct.harvest,
                    imgUrl: imgUrl? imgUrl : verifyProduct
                }
            })

            logger.info(`Product updated: ${id}`);
            return res.status(200).json(updateProduct)

        }catch{
            logger.error(`Error updating the product: ${req.body.id}`);
            return res.status(500).send({err: "Error updating the product"})
        }
    }
}