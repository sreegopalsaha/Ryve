import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import cors from "cors";
import globalErrorHandler from "./middlewares/globalErrorHandler.middleware.js";
import userRouter from "./routes/user.router.js";
import postRouter from "./routes/post.router.js";
import notificationRouter from "./routes/notification.router.js";
import messageRouter from "./routes/message.router.js";

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(cookieParser());
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.send("API IS RUNNING");
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/post", postRouter);
app.use("/api/v1/notifications", notificationRouter);
app.use("/api/v1/messages", messageRouter);

app.use(globalErrorHandler);
export {app}