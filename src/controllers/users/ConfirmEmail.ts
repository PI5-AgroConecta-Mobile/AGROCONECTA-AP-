import { Request, Response } from "express";
import { prisma } from "../../database";

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

            return res.status(200).json(userExists)

        }catch{
            return res.status(400).send({err: "Error! User not found"})
        }
    }
}