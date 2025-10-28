import { Request, Response } from 'express'
import { prisma } from '../../database/index'
import logger from '../../utils/logger'

export class DeleteProduct {
    async handle(req: Request, res: Response) {
        const userId = req.userId;
        const { productId } = req.params;

        if (!productId) {
            return res.status(400).json({ err: "ID do produto é necessário." });
        }

        try {
            const product = await prisma.pRODUCT.findUnique({
                where: { id: productId }
            });

            if (!product) {
                return res.status(404).json({ err: "Produto não encontrado." });
            }

            if (product.ownerId !== userId) {
                logger.warn(`User ${userId} attempted to delete product ${productId} owned by ${product.ownerId}`);
                return res.status(403).json({ err: "Acesso negado. Você não é o dono deste produto." });
            }

            await prisma.pRODUCT.delete({
                where: { id: productId }
            });

            logger.info(`Product ${productId} deleted by user ${userId}`);
            return res.status(200).json({ message: "Produto apagado com sucesso." });

        } catch (e: any) { 
            logger.error(`Error deleting product ${productId} for user ${userId}: ${e.message}`);
            return res.status(500).json({ err: "Erro ao apagar o produto." });
        }
    }
}