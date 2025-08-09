import express from "express" 
import "dotenv/config" 
import cors from "cors"
import joyasRouter from "./routes/joyas.routes.js"

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use("/", joyasRouter)



app.listen(PORT, console.log(`server on http://localhost:${PORT}`))