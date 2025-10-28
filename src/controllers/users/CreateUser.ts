import { Request, Response } from 'express'
import { prisma } from '../../database'
import { hash } from 'bcryptjs'
import logger from '../../utils/logger'

export class CreateUser {
    async handle(req: Request, res: Response) {
        try {
            const { name, email, password, cpfcnpj, userType } = req.body
            if (!name || !email || !password || !cpfcnpj || userType === undefined) {
                return res.status(400).json({ err: "Por favor, preencha todos os campos." })
            }

            const userAlreadyExists = await prisma.user.findUnique({
                where: { email: email }
            })

            if (userAlreadyExists) {
                logger.warn(`Attempt to create user with existing email: ${email}`);
                return res.status(400).json({ err: "Este email já está em uso." })
            }
            const passwordHashed = await hash(password, 8)
            const user = await prisma.user.create({
                data: {
                    name,
                    email,
                    password: passwordHashed,
                    cpfcnpj,
                    userType, 
                    sellings: 0,
                    rate: 0,
                    imgUrl: '', 
                    contact: '', 
                    contactType: 0
                }
            })

            logger.info(`New user created: ${user.id} - ${user.email}`);
            const userResponse = {
                id: user.id,
                name: user.name,
                email: user.email,
                userType: user.userType
            }
            
            return res.status(201).json(userResponse)

        } catch (e: any) {
            logger.error(`Error creating user: ${e.message}`);
            return res.status(500).json({ err: "Erro interno ao criar usuário." })
        }
    }
}