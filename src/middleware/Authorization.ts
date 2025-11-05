import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import logger from '../utils/logger'

// Interface para definir o formato do payload do nosso token
interface IPayload {
  sub: string; // 'subject' (que definimos como o user.id no Longinho.ts)
}

export default function midAthorization(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // 1. Obter o token do header
  const authToken = req.headers.authorization

  // 2. Se não houver token
  if (!authToken) {
    logger.warn('Authorization attempt without token');
    return res.status(401).json({ err: 'Token não fornecido.' })
  }

  // 3. O token vem como "Bearer <token>". Vamos separar.
  const parts = authToken.split(' ')

  // 4. Verificar se o formato está correto
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    logger.warn(`Token malformatted. Received: ${authToken}`);
    return res.status(401).json({ err: 'Token mal formatado.' });
  }

  // 5. 'token' ainda é (string | undefined) para o TypeScript
  const token = parts[1]; 

  // 6. Obter o segredo do .env
  const jwtSecret = process.env.JWT_SECRET

  // 7. Verifique o segredo
  if (!jwtSecret) {
    logger.error("JWT_SECRET não está definido no .env");
    return res.status(500).json({ err: "Erro interno do servidor." });
  }

  // 8. !! A NOVA CORREÇÃO !!
  // Verificação explícita que o 'token' (parts[1]) não é undefined
  if (!token) {
    logger.warn(`Token missing after split`);
    return res.status(401).json({ err: 'Token mal formatado.' });
  }

  // 9. O 'try' vem DEPOIS de todas as verificações
  try {
    
    // Agora o TypeScript sabe que 'token' é 'string' (devido à linha 48)
    // E nós forçamos 'jwtSecret' a ser 'string' (com o '!')
    const { sub } = verify(token, jwtSecret!) as IPayload 

    // Anexar o ID do utilizador ao objeto 'req'
    req.userId = sub 

    return next() // Continua para o controller (ex: createProduct)

  } catch (err) {
    // 10. Se o token for inválido ou expirado
    logger.warn(`Invalid authorization token received`);
    return res.status(401).json({ err: 'Token inválido ou expirado.' })
  }
}