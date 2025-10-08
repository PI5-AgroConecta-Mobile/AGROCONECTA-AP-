import {Request, Response} from 'express'
import { prisma } from '../../database/index'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken';
import logger from '../../utils/logger'

export class DeleteUser {
    async handle(req: Request, res: Response){
        try{
            
        		const deleteUser = await prisma.user.delete({
        			where:{
                        id: req.userId            
        			}
        		})


            logger.info(`User deleted: ${req.userId}`);    
            return res.status(200).send({ deleteUser });

        }catch{
            logger.error(`Error deleting user: ${req.userId}`);
            return res.status(500).send({err: "Error deleting the user"})
        }
    }
}
