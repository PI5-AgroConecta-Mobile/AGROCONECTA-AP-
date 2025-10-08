import { Request, Response } from "express";
import { prisma } from "../../database";
import logger from '../../utils/logger'

export class ConfirmEmail {
    async handle(req: Request, res: Response){
        try{
            const {email} = req.body

            const userExists = await prisma.user.findUnique({
                where: {
                    email
                }
            })

            if(!userExists){
                return res.status(400).send({err: "Error! User not found"})
            }
            
            logger.info(`Email confirmed for user: ${email}`);
            return res.status(200).json(true)

        }catch{
            logger.error(`Error confirming email for user: ${req.body.email}`);
            return res.status(400).send({err: "Error! User not found"})
        }
    }
}