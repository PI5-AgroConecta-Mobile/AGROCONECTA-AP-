import {Request, Response} from 'express'
import { prisma } from '../../database/index'

export class GetProductById {
    async handle(req: Request, res: Response){
        try{
            const {productId} = req.params

            const product = prisma.PRODUCT.findUnique({
                where:{
                    id: productId
                }
            })

            return res.status(200).json(product)

        }catch{
            return res.status(500).send({err: "Error get the product"})
            
        }
    }
}