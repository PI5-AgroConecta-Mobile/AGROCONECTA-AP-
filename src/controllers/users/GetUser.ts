import {Request, Response} from 'express'
import { prisma } from '../../database/index'

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

            return res.status(200).json(getUser)
        }catch{
            return res.status(500).send({err: "Error user not found"})
        }
    }
}