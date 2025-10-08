import { Request, Response } from "express";
import { prisma } from "../../database";
import logger from '../../utils/logger'

export class UpdatePassword {
    async handle(req: Request, res: Response){
        try{
            const {email, password} = req.body
            
            const userExists = await prisma.user.findUnique({
                where: {
                    email
                }
            })

            if(!userExists){
                return res.status(400).send({err: "Error! User not found"})
            }

            const updatePassword = await prisma.user.update({
                where: {
                    email
                },
                data: {
                    password
                }
            })

            logger.info(`Password updated for user with email: ${email}`);
            return res.status(200).json(updatePassword)
        }catch{
            logger.error(`Error updating password for user with email: ${req.body.email}`);
            return res.status(400).send({err: "Error! Could not change password"})
        }
    }
}