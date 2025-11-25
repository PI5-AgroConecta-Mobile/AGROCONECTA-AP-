import 'dotenv/config'
import express, { Application } from 'express'
import { router } from './routes';
import cors from 'cors'
import path from 'path' // Importe o 'path'

const app: Application = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use('/uploads', express.static(path.resolve(__dirname, '..', '..', 'uploads')));
app.use(router)

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World' })
})

export { app };