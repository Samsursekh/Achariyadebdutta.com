import express from "express";
import {
  appointment,
  checkout,
  paymentVerification,
  getAppointments,
  getAllPaymentsOfUser,
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

router.get("/all-appointment-of-users", getAppointments);
router.get("/get-all-payments-of-users", getAllPaymentsOfUser);


export default router;
