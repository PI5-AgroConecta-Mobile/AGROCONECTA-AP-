import { Request, Response } from 'express'
import { prisma } from '../../database/index'
import logger from '../../utils/logger'

export class ListProductsByFarmer {
    async handle(req: Request, res: Response) {
        const { farmerId } = req.params;

        if (!farmerId) {
            return res.status(400).json({ err: "ID do agricultor é obrigatório." });
        }

        try {
            const products = await prisma.pRODUCT.findMany({
                where: {
                    ownerId: farmerId,
                    quantity: { gt: 0 } // Apenas produtos com estoque maior que 0
                },
                orderBy: {
                    // CORREÇÃO: Usamos 'harvestDate' pois 'createDate' não existe no schema do Produto
                    harvestDate: 'desc' 
                }
            })

            return res.json(products)
        } catch (e: any) {
            logger.error(`Error listing products for farmer ${farmerId}: ${e.message}`)
            // Retorna array vazio em vez de erro 500 para não quebrar a tela
            return res.status(200).json([]) 
        }
    }
}