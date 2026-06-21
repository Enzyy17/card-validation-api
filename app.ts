import express, { type Request, type Response } from 'express'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORRT = process.env.PORT || 7500


app.use(express.json())
