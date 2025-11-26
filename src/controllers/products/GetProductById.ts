import { Request, Response } from 'express'
import { prisma } from '../../database/index'
import logger from '../../utils/logger'

export class GetProductById {
    async handle(req: Request, res: Response) {
        const { productId } = req.params;

        if (!productId) {
            logger.warn(`GetProductById attempt without productId`);
            return res.status(400).json({ err: "O ID do produto é obrigatório." });
        }
        
        try {
            const product = await prisma.pRODUCT.findUnique({
                where: { id: productId }, 
                
                include: {
                    owner: {
                        select: {
                            id: true,
                            name: true,
                            rate: true,
                            imgUrl: true,
                            latitude: true,
                            longitude: true,
                            farmName: true,
                        }
                    }
                }
            });

            if (!product) {
                logger.warn(`Product not found: ${productId}`);
                return res.status(404).json({ err: "Produto não encontrado." });
            }

            const productComAgricultor = {
                ...product,
                agricultor: product.owner,
                latitude: product.owner.latitude,
                longitude: product.owner.longitude,
                farmName: product.owner.farmName
            };

            // @ts-ignore
            delete productComAgricultor.owner;
            
            logger.info(`Product retrieved: ${productId}`);
            return res.status(200).json(productComAgricultor);

        } catch (e: any) {
            logger.error(`Error getting the product: ${productId} - ${e.message}`);
            return res.status(500).send({ err: "Error getting the product" });
        }
    }
}