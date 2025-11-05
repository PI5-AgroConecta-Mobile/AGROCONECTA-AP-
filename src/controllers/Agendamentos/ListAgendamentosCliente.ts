import { Request, Response } from 'express'
import { prisma } from '../../database/index'
import logger from '../../utils/logger'

export class ListAgendamentosCliente {
    async handle(req: Request, res: Response) {
        const clientId = req.userId;

        try {
            const agendamentos = await prisma.aGENDAMENTO.findMany({
                where: {
                    clientId: clientId 
                },
                
                include: {
                    product: { 
                        select: {
                            name: true,
                            imgUrl: true
                        }
                    },
                    farmer: { 
                        select: {
                            name: true,
                            contact: true
                        }
                    }
                },
                orderBy: {
                    scheduledFor: 'desc' 
                }
            });

            logger.info(`Listed all agendamentos for client: ${clientId}`);
            return res.status(200).json(agendamentos);

        } catch (e: any) {
            logger.error(`Error listing agendamentos for client ${clientId}: ${e.message}`);
            return res.status(500).json({ err: "Erro ao listar agendamentos." });
        }
    }
}