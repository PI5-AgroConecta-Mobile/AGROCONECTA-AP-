import { Request, Response } from 'express'
import { prisma } from '../../database/index'
import logger from '../../utils/logger'

export class ListAgendamentosFarmer {
    async handle(req: Request, res: Response) {
        const farmerId = req.userId;

        try {
            const agendamentos = await prisma.aGENDAMENTO.findMany({
                where: {
                    farmerId: farmerId 
                },
                
               include: {
                    product: { 
                        select: {
                            name: true,
                            imgUrl: true
                        }
                    },
                    client: { 
                        select: {
                            name: true,
                            contact: true
                        }
                    }
                },
                orderBy: {
                    scheduledFor: 'asc' 
                }
            });

            logger.info(`Listed all agendamentos for farmer: ${farmerId}`);
            return res.status(200).json(agendamentos);

        } catch (e: any) {
            logger.error(`Error listing agendamentos for farmer ${farmerId}: ${e.message}`);
            return res.status(500).json({ err: "Erro ao listar agendamentos." });
        }
    }
}