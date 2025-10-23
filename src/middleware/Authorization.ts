import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { prisma } from "../database";
type jwtPayload = {
    id: string
}
export default async function midAthorization(req: Request, response: Response, next: NextFunction){
    try{
        const { authorization } = req.headers;
        if (!authorization) {
            return response.status(500).send({ err: "Autorização inválida" });
        }
        const token = authorization.split(' ')[1];
    
        if (!token){
            return response.status(500).send({ err: "Usuário não existe no banco" });
        }

        const {id} = jwt.verify(token as string, process.env.SECRET_TOKEN as string) as jwtPayload

        if (!id){
            return response.status(500).send({ err: "Usuário não existe no banco" });
        }
    
        const user = await prisma.user.findUnique({where:{id}});
    
        if (!user){
            return response.status(500).send({ err: "Usuário não existe no banco" });
        }

        req.userId = id;
    
        return next();
    } catch{
        return response.status(500).send({ err: "Token expirado ou inválido!" });
    }
    
}