import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'
dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to Mongodb')
    })
    .catch((err) => {
        console.log(err)
    })

const app = express();

app.use(express.json());

app.listen(5000, () => {
    console.log("server is running")
})

app.use("/api/user", userRoutes)
app.use("/api/auth", authRoutes)

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
})