import express, { Express, Request, Response } from 'express'

const app: Express = express()

app.get('/sum', (req: Request, res: Response) => {
    const num1 = parseInt(req.query.num1 as string || '0')
    const num2 = parseInt(req.query.num2 as string || '0')
    res.json({ result: num1 + num2 })
})

export default app