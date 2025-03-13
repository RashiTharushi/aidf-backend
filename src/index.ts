import "dotenv/config";
import express from "express";
import jobRouter from "./api/jobs";
import { connectDB } from "./infrastructure/db";

const app = express();
app.use(express.json());

connectDB();

app.use("/jobs",jobRouter);
app.listen(8000, () => console.log("Server is listening on port 8000."));
