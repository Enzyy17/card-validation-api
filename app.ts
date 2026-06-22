import express, { response, type Request, type Response } from 'express'
import cors from "cors"
import helmet from "helmet"
import cardRoutes from './src/routes/card.routes';   // ← Correct

const app = express();
const PORT = process.env.PORT || 7500

app.get('/', (req, res) => {
res.json("Welcome to card validation API")
});

//middlewares
app.use(cors())
app.use(helmet())
app.use(express.json())

//route
app.use('/api', cardRoutes); 

app.listen(PORT, () => {
console.log(`server running on http://localhost:${PORT}`)
})
