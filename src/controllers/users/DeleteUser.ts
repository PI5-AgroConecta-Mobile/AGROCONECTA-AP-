import {Request, Response} from 'express'
import { prisma } from '../../database/index'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken';

export class DeleteUser {
    async handle(req: Request, res: Response){
        try{
            
        		const deleteUserC = await prisma.user.delete({
        			where:{
                        id: req.userId            
        			}
        		})
            return res.status(200).send({ deleteUserC });

        }catch{
            return res.status(500).send({err: "Error deleting the user"})
        }
    }
}