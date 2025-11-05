import { app } from './app'
import { createServer } from 'http'
import { initSocketServer } from './realtime/socket'

const port = 3333

const httpServer = createServer(app)
initSocketServer(httpServer)

httpServer.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})