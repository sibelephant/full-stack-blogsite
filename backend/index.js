import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/user.route.js";
import commentRouter from "./routes/user.route.js";
import connectDB from "./lib/connectDB.js";
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const PORT = 3000;


app.use("/users",userRouter);
app.use("/posts",postRouter)
app.use("/comments",commentRouter)



app.listen(PORT,()=>{
    connectDB()
    console.log("server is running in my system");
    
})