import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import cors from "cors";

import authRoutes from "./backend/routes/auth.routes.js";
import messageRoutes from "./backend/routes/message.routes.js";
import userRoutes from "./backend/routes/user.routes.js";
import connectToMongoDB from "./backend/db/connectToMongoDB.js";

dotenv.config();

const app = express ();
const PORT = process.env.PORT || 5500;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

//app.get("/", (req, res)=>{
//    // root route http://localhost:5500/
//   res.send("Hello World!") 
//});


app.listen(PORT, () =>{
    connectToMongoDB();
    console.log(`Server Running on Port ${PORT}`)
});