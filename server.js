import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js"

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/api',userRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Server is Listen at port ${process.env.PORT} `) 
})

