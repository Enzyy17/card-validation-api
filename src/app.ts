import express from 'express'
import type { Request, Response, NextFunction } from 'express';
import cors from "cors"
import helmet from "helmet"
import cardRoutes from './routes/card.routes';   

const app = express();
const PORT = process.env.PORT || 7500;

app.get('/', (req: Request, res: Response) => {
res.json("Welcome to card validation API")
});

//middlewares
app.use(cors())
app.use(helmet())
app.use(express.json())

//route
app.use('/api', cardRoutes); 

app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`)
})
