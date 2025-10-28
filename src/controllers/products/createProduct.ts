import { Request, Response } from 'express'
import { prisma } from '../../database/index'
import logger from '../../utils/logger'

export class createProduct {
    async handle(req: Request, res: Response) {
        const ownerId = req.userId 

        try {
            const { 
                name, 
                price, 
                imgUrl, 
                quantity, 
                type, 
                harvestDate, 
                harvestType,
                unityType 
            } = req.body

            if (!name || !price || !quantity || !type || !harvestDate) {
                return res.status(400).json({ err: "Campos obrigatórios em falta." })
            }

            const product = await prisma.pRODUCT.create({
                data: {
                    name,
                    price: parseFloat(price), 
                    imgUrl: imgUrl || '', 
                    quantity: parseInt(quantity), 
                    ownerId: ownerId, 
                    type: parseInt(type),
                    harvestDate: new Date(harvestDate), 
                    harvestType: parseInt(harvestType),
                    unityType: parseInt(unityType),
                    productState: true, 
                    harvest: '' 
                }
            })

            logger.info(`New product created: ${product.id} by user: ${ownerId}`);
            return res.status(201).json(product)

        } catch (e: any) {
            logger.error(`Error creating product for user ${ownerId}: ${e.message}`);
            return res.status(500).json({ err: "Erro ao criar produto." })
        }
    }
}