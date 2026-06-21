import express, { response, type Request, type Response } from 'express'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7500

app.get('/', (req, res) => {
res.json("Welcome to card validation API")
})

app.use(express.json())

app.listen(PORT, () => {
console.log(`server running on http://localhost:${PORT}`)
})
