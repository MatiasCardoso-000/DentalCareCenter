import express from "express";
import { router as authRoutes } from "./routes/authRoutes";
import { connectDB } from "./db";
import { config } from "dotenv";
import cors from 'cors'
import cookieParser from "cookie-parser"

config();

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors({
  origin: "http://localhost:5173"
}))
app.use(express.json());
app.use(cookieParser())



app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDB();
