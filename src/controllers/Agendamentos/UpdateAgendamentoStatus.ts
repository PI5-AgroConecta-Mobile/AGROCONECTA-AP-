import { Request, Response } from 'express'
import { prisma } from '../../database/index'
import logger from '../../utils/logger'

export class UpdateAgendamentoStatus {
    async handle(req: Request, res: Response) {
        const farmerId = req.userId;
        const { agendamentoId } = req.params;
        const { status } = req.body; // Espera 1 (Confirmar) ou 2 (Cancelar)

        if (!agendamentoId) {
            return res.status(400).json({ err: "ID do agendamento é obrigatório." });
        }
        if (status === undefined || (status !== 1 && status !== 2)) {
            return res.status(400).json({ err: "Status inválido. Deve ser 1 (Confirmar) ou 2 (Cancelar)." });
        }

        try {
            const agendamento = await prisma.aGENDAMENTO.findUnique({
                where: { id: agendamentoId }
            });

            if (!agendamento) {
                return res.status(404).json({ err: "Agendamento não encontrado." });
            }

            if (agendamento.farmerId !== farmerId) {
                logger.warn(`User ${farmerId} attempted to update agendamento ${agendamentoId} owned by ${agendamento.farmerId}`);
                return res.status(403).json({ err: "Acesso negado." });
            }

            if (agendamento.status !== 0) {
                return res.status(400).json({ err: "Este agendamento já foi processado (Confirmado ou Cancelado)." });
            }

           if (status === 2) { 
                await prisma.pRODUCT.update({
                    where: { id: agendamento.productId },
                    data: {
                        quantity: {
                            increment: agendamento.quantity
                        }
                    }
                });
                logger.info(`Stock restored for product ${agendamento.productId} (+${agendamento.quantity})`);
            }
            
            const updatedAgendamento = await prisma.aGENDAMENTO.update({
                where: { id: agendamentoId },
                data: {
                    status: status 
                }
            });

            logger.info(`Agendamento ${agendamentoId} updated to status ${status} by farmer ${farmerId}`);
            return res.status(200).json(updatedAgendamento);

        } catch (e: any) {
            logger.error(`Error updating agendamento ${agendamentoId} for farmer ${farmerId}: ${e.message}`);
            return res.status(500).json({ err: "Erro ao atualizar o agendamento." });
        }
    }
}