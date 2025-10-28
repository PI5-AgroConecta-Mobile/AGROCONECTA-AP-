import { Request, Response } from 'express'
import { prisma } from '../../database'
import { compare } from 'bcryptjs' 
import { sign } from 'jsonwebtoken' 
import logger from '../../utils/logger'

export class Login {
    async handle(req: Request, res: Response) {
        try {
            const { email, password } = req.body
            if (!email || !password) {
                return res.status(400).json({ err: "Email e senha são obrigatórios." })
            }
            const user = await prisma.user.findUnique({
                where: { email: email }
            })
            if (!user) {
                logger.warn(`Login attempt for non-existent user: ${email}`);
                return res.status(404).json({ err: "Usuário ou senha inválidos." })
            }
            const passwordMatch = await compare(password, user.password)

            if (!passwordMatch) {
                logger.warn(`Invalid login attempt for user: ${email}`);
                return res.status(401).json({ err: "Usuário ou senha inválidos." })
            }

            const jwtSecret = process.env.JWT_SECRET
            if (!jwtSecret) {
                logger.error("JWT_SECRET não está definido no .env");
                return res.status(500).json({ err: "Erro interno do servidor." });
            }

            const token = sign(
                {}, 
                jwtSecret, 
                {
                    subject: user.id, // O ID do usuário vai aqui
                    expiresIn: '1d'   // Token expira em 1 dia
                }
            )

            const userResponse = {
                id: user.id,
                name: user.name,
                email: user.email,
                userType: user.userType
            }
            
            logger.info(`User logged in: ${user.email}`);
            return res.status(200).json({
                user: userResponse,
                token: token
            })

        } catch (e: any) {
            logger.error(`Error during login: ${e.message}`);
            return res.status(500).json({ err: "Erro interno no login." })
        }
    }
}