import {Request, Response} from 'express'
import { prisma } from '../../database/index'
import logger from '../../utils/logger'

export class GetUser {
    async handle(req: Request, res: Response){
        try{
            const getUser = await prisma.user.findUnique({
                where: {
                    id: req.userId
                }
            })

            if(!getUser){
                return res.status(400).send({err: "Error user not found"})
            }
            
            logger.info(`User data retrieved for user ID: ${req.userId}`);
            return res.status(200).json(getUser)
        }catch{
            logger.error(`Error retrieving user data for user ID: ${req.userId}`);
            return res.status(500).send({err: "Error user not found"})
        }
    }
}