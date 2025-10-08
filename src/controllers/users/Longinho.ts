import {Request, Response} from 'express'
import { prisma } from '../../database/index'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken';

export class Login {
    async handle(req: Request, res: Response){
        try{
            const {email, password} = req.body

            const getUser = await prisma.user.findUnique({
                where: {
                    email
                }
            })

            if(!getUser){
                return res.status(400).send({error: "Usuário não encontrado"})
            }

            const isValidPassword = await bcryptjs.compare(password, getUser.password);

            if(!isValidPassword){
                return res.status(401).send({err:"Email ou senha incorretos!"})
            }

            const {id, name} = getUser

            const token = jwt.sign(
                { id, name }, 
                process.env.JWT_TOKEN as string, 
                { expiresIn: '1d' }
            );

            return res.status(200).send({ token, getUser});

        }catch{
            return res.status(500).send({err: "Falha! Por favor tente novamente mais tarde."})
        }
    }
}