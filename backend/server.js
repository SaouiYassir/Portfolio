import express from 'express'
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected"))
    .catch(() => console.log("Connection failed"));

app.get("/", (req, res) => {
    res.send("Your server is running successfully...")
});

app.listen(port, (req, res) => {
    console.log(`Your server is in http://localhost:${port}`);
});