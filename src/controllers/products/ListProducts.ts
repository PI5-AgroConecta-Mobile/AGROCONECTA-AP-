import { Request, Response } from 'express'
import { prisma } from '../../database/index'
import logger from '../../utils/logger'

export class ListProducts {
    async handle(req: Request, res: Response) {
        try {
            // Extrair filtros da URL
            const { ownerId, category, minPrice, maxPrice, search } = req.query;

            // Montar o objeto de busca (where)
            const whereClause: any = {};

            if (ownerId) whereClause.ownerId = String(ownerId);
            if (category) whereClause.type = Number(category); // Assumindo que 'type' é a categoria
            if (minPrice) whereClause.price = { gte: Number(minPrice) };
            if (maxPrice) whereClause.price = { ...whereClause.price, lte: Number(maxPrice) };
            
            if (search) {
                whereClause.name = {
                    contains: String(search),
                    mode: 'insensitive' // Busca sem diferenciar maiúscula/minúscula
                };
            }

            const listAllProducts = await prisma.pRODUCT.findMany({
                where: whereClause,
                include: {
                    owner: { // Inclui dados do dono para mostrar no card
                        select: { name: true, farmName: true, imgUrl: true }
                    }
                }
            });

            return res.status(200).json(listAllProducts);

        } catch (e: any) {
            logger.error(`Error listing products: ${e.message}`);
            return res.status(500).send({ err: "Error listing the product" })
        }
    }
}