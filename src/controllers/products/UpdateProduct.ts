import { Request, Response } from 'express'
import { prisma } from '../../database/index'
import logger from '../../utils/logger'

export class UpdateProduct {
    async handle(req: Request, res: Response) {
        const userId = req.userId;
        
        const { 
            productId, 
            name, 
            price, 
            quantity, 
            type, 
            harvestDate, 
            harvestType, 
            unityType, 
            imgUrl,
            description 
        } = req.body;

        if (!productId) {
            return res.status(400).json({ err: "O ID do produto é obrigatório." });
        }

        try {
             const product = await prisma.pRODUCT.findUnique({
                where: { id: productId }
            });

            if (!product) {
                return res.status(404).json({ err: "Produto não encontrado." });
            }

            if (product.ownerId !== userId) {
                logger.warn(`User ${userId} attempted to update product ${productId} owned by ${product.ownerId}`);
                return res.status(403).json({ err: "Acesso negado. Você não é o dono deste produto." });
            }

            const updateData = {
                ...(name && { name }),
                ...(price !== undefined && { price }),
                ...(quantity !== undefined && { quantity }),
                ...(type !== undefined && { type }),
                ...(harvestDate && { harvestDate: new Date(harvestDate) }),
                ...(harvestType !== undefined && { harvestType }),
                ...(unityType !== undefined && { unityType }),
                ...(imgUrl && { imgUrl }),
                ...(description !== undefined && { description }), 
            };

            const updatedProduct = await prisma.pRODUCT.update({
                where: { id: productId },
                data: updateData
            });

            logger.info(`Product ${productId} updated by user ${userId}`);
            return res.status(200).json(updatedProduct);

        } catch (e: any) {
            logger.error(`Error updating product ${productId} for user ${userId}: ${e.message}`);
            return res.status(500).json({ err: "Erro ao atualizar o produto." });
        }
    }
}