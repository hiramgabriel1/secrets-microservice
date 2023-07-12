import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import cors from "cors"
import colors from "colors"
import routerSecret from "./routes/secrets.js"
import { connectDB } from "./config/connectionDB.js"

connectDB()
dotenv.config()

// config
const PORT = process.env.PORT || 3000
const app = express()

// middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

// routes
app.use(routerSecret)

app.listen(PORT)