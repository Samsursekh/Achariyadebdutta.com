import express from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/payment.routes.js";
import cors from "cors";
import bodyParser from 'body-parser';

// config({ path: "./config/config.env" });
config({ path: ".env" });

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", paymentRoute);
app.get("/api/getkey", (req, res) => {
    res.status(200).json({
        key: process.env.VITE_APP_RAZORPAY_KEY_ID
    })
})
