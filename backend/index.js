import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"; 

import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import playerRoute from "./Routes/player.js";
import reviewRoute from "./Routes/review.js";

dotenv.config();

const app = express();
const port =  8000;

const corsOptions = {
    origin: true
}

app.get('/', (req, res) => {
    res.send('Api is running');
}) 


// Database connection
mongoose.set("strictQuery", false);
const connectDB = async () => {
    try {
        await  mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Successfully connected");
    } catch (error) {
        console.log(error);
        process.exit(1);   
    } 
}

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/v1/auth", authRoute); 
app.use("/api/v1/users", userRoute);
app.use("/api/v1/players", playerRoute);
app.use("/api/v1/reviews", reviewRoute);

async function startServer() {
    await connectDB();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

startServer();
