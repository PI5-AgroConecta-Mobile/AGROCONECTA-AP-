import {Request, Response} from 'express'
import { prisma } from '../../database/index'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken';
import logger from '../../utils/logger'

export class CreateUser {
    async handle(req: Request, res: Response){
        try{
            
        		const {name, cpfcnpj, email, password, userType, contact} = req.body

        		const userExists = await prisma.user.findUnique({
        			where: {
        				email
        			}
        		})

        		if(userExists){
        			return res.status(409).send({error: 'Email already in user'})
        		}

        		const passwordHash = bcryptjs.hashSync(password, 8);
        		const newUser = await prisma.user.create({
        			data:{
        				name: `@${name}`,
        				email,
        				cpfcnpj,
        				password: passwordHash,
        				userType,
        				contact
        			}
        		})

			
			logger.info(`New user created with the email: ${email}`);
            return res.status(200).send({ newUser });

        }catch{
			logger.error(`Error creating user: ${req.body.email}`);
            return res.status(500).send({err: "Error creating the user"})
        }
    }
}