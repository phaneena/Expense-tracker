import express from "express"
import connectDB from "./config/db.js"
import dotenv from "dotenv"
import cors from "cors"
import expenseRoutes from "./routes/expenseRoutes.js"

dotenv.config()
const app=express()

// cors
app.use(cors({
    origin: process.env.FRONT_END_URL,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true
}));

app.use(express.json())
connectDB()



const PORT=process.env.PORT || 1100

//routes
app.use("/api",expenseRoutes)

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})