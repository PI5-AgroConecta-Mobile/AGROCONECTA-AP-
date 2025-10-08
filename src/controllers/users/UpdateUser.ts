import {Request, Response} from 'express'
import { prisma } from '../../database/index'

export class UpdateUser {
    async handle(req: Request, res: Response){
        try{

            const {name, email, password, imgUrl, contact, contactType} = req.body

            const userVerify = await prisma.user.findUnique({
                where:{
                    id: req.userId
                }
            })

            if(!userVerify){
                return res.status(400).send({err: "Error updating user! User not found"})
            }

            const updateUser = await prisma.user.update({
                where:{
                    id: req.userId
                },
                data: {
                    name: name? name : userVerify.name,
                    email: email? email : userVerify.email,
                    password: password? password : userVerify.password,
                    imgUrl: imgUrl? imgUrl : userVerify.imgUrl,
                    contact: contact? contact : userVerify.contact,
                    contactType: contactType? contactType : userVerify.contactType
                }
            })
        }catch{
            return res.status(500).send({err: "Error updating user"})
        }
    }
}