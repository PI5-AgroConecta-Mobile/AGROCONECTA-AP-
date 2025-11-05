// Este ficheiro "funde" (merges) a nossa definição com a definição original do Express
declare namespace Express {
  export interface Request {
    // Aqui dizemos que a nossa Request pode ter um userId do tipo string
    userId: string;
  }
}