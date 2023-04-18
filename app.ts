import express, { Application, Request, Response } from 'express'
// import './middleware/dotenv'
import path from 'path'

const app: Application = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: '50mb' }))
app.use(express.static(path.join(path.resolve(), './public')))

app.get('/', (req: Request, res: Response) => {
  return res.send('Hello on sawa-bio testing app')
})

app.get('/sawa', (req: Request, res: Response) => {
  return res.send('Hello Sawa!')
})

const port: number = 8080

app.listen(port, () => {
  console.log(`Start of the application on port ${port}`)
})
