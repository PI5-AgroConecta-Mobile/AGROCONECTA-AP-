import { Request, Response } from 'express'
import { prisma } from '../../database/index'
import logger from '../../utils/logger'

export class CreateAgendamento {
    async handle(req: Request, res: Response) {
        const clientId = req.userId;

        const {
            productId,
            quantity,
            scheduledFor 
        } = req.body;

        if (!productId || !quantity || !scheduledFor) {
            return res.status(400).json({ err: "Faltam dados para o agendamento." });
        }

        const parsedQuantity = parseInt(quantity);
        if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
            return res.status(400).json({ err: "A quantidade deve ser um número positivo." });
        }

        try {
            const result = await prisma.$transaction(async (tx) => {
                
                const product = await tx.pRODUCT.findUnique({
                    where: { id: productId }
                });

                if (!product) {
                    throw new Error("Produto não encontrado."); 
                }

                if (product.quantity < parsedQuantity) {
                    throw new Error("Quantidade insuficiente em stock.");
                }

                const totalPrice = product.price * parsedQuantity;

                const updatedProduct = await tx.pRODUCT.update({
                    where: { id: productId },
                    data: {
                        quantity: product.quantity - parsedQuantity
                    }
                });

                const agendamento = await tx.aGENDAMENTO.create({
                    data: {
                        clientId: clientId,
                        farmerId: product.ownerId, 
                        productId: productId,
                        quantity: parsedQuantity,
                        totalPrice: totalPrice,
                        scheduledFor: new Date(scheduledFor),
                        status: 0 
                    }
                });

                logger.info(`New agendamento ${agendamento.id} created by user ${clientId} for product ${productId}`);
                return agendamento;
            });

            return res.status(201).json(result);

        } catch (e: any) {
            logger.error(`Error creating agendamento for user ${clientId}: ${e.message}`);
            if (e.message === "Produto não encontrado.") {
                return res.status(404).json({ err: e.message });
            }
            if (e.message === "Quantidade insuficiente em stock.") {
                return res.status(400).json({ err: e.message });
            }
            
            return res.status(500).json({ err: "Erro ao criar agendamento." });
        }
    }
}