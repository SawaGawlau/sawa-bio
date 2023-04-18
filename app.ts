import express, { Application, Request, Response } from 'express'
// import './middleware/dotenv'

const app: Application = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: '50mb' }))

app.get('/', (req: Request, res: Response) => {
  return res.send('Hello from sawa.bio')
})

app.get('/:name', (req: Request, res: Response) => {
  const name: string = req.params.name

  return res.send(`Hello ${name}!`)
})

const port: number = 8080

app.listen(port, () => {
  console.log(`Start of the application on port ${port}`)
})
