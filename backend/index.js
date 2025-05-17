import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import connectDB from "./lib/connectDB.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json())
app.use(cors());
const PORT = 3000;


app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.use((error,req,res,next)=>{
  res.status(error.status || 500);

  res.json({
    message:error.message || "something went wrong",
    status:error.status,
    stack:error.stack
  })
})

app.listen(PORT, () => {
  connectDB();
  console.log("server is running in my system");
});
