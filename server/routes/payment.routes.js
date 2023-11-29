import express from "express";
import {
  appointment,
  checkout,
  paymentVerification,
} from "../controllers/payment.controller.js";

const router = express.Router();
router.get("/", (req, res) => {
  res.send("Welcome to Home page");
});
router.route("/checkout").post(checkout);
router.get("/appointment", (req, res) => {
  res.send("Welcome to appointment page");
});
router.route("/appointment").post(appointment);
router.route("/paymentverification").post(paymentVerification);

export default router;
