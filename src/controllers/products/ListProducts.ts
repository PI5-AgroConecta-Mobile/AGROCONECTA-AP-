import {Request, Response} from 'express'
import { prisma } from '../../database/index'

export class ListProducts {
    async handle (req: Request, res: Response){
        try{
            const listAllProducts = await prisma.PRODUCT.findMany()

            return res.status(200).json(listAllProducts)
        }catch{
            return res.status(500).send({err: "Error listing the product"})
        }
    }
}