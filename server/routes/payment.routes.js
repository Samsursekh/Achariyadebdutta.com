import express from "express";
import {
  checkout,
  paymentVerification,
} from "../controllers/payment.controller.js";

const router = express.Router();
router.get("/", (req, res) => {
  res.send("Welcome to Home page");
});
router.route("/checkout").post(checkout);
router.route("/paymentverification").post(paymentVerification);

export default router;
