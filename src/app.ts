import 'dotenv/config'
import express, { Application } from 'express'
import { router } from './routes';
import cors from 'cors'
import { resolve } from 'path'

const app: Application = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static(resolve('uploads')))
app.use(router)

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World' })
})

export { app };