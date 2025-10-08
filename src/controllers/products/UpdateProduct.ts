import {Request, Response} from 'express'
import { prisma } from '../../database/index'

export class UpdateProduct {
    async handle(req: Request, res: Response){
        try{
            const { id, name, quantity, price, unityType, harvestId, imgUrl} = req.body

            const verifyProduct = await prisma.PRODUCT.findUnique({
                where: {
                    id
                }
            })

            if(!verifyProduct){
                return res.status(400).send({err: "Error updating the product"})
            }

            const updateProduct = await prisma.PRODUCT.update({
                where:{
                    id: verifyProduct.id
                },
                data:{
                    name: name? name : verifyProduct.name,
                    quantity: quantity? quantity : verifyProduct.quantity,
                    price: price? price : verifyProduct.price,
                    unityType: unityType? unityType : verifyProduct.unityType,
                    harvestId: harvestId? harvestId : verifyProduct.harvestId,
                    imgUrl: imgUrl? imgUrl : verifyProduct
                }
            })

            return res.status(200).json(updateProduct)

        }catch{
            return res.status(500).send({err: "Error updating the product"})
        }
    }
}