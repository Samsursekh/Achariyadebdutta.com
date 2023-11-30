import { instance } from "../server.js";
import crypto from "crypto";
import { Payment } from "../models/payment.model.js";
import { Appointment } from "../models/appointment.model.js";
import { nanoid } from "nanoid";

export const checkout = async (req, res) => {
  console.log(req.body, "Req dot body while checkout ...");
  // res.send(req.body, "Req dot body while checkout...");
  try {
    const options = {
      amount: Number(req.body.price) * 100,
      currency: "INR",
      receipt: `RECEIPT_ID_${nanoid()}`,
    };

    console.log(options, "Options is there ..");
    const order = await instance.orders.create(options);

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.log("Error during checkout:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

export const appointment = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      mobileNumber,
      email,
      address,
      date,
      time,
      preferredSlot,
      modeOfConsultation,
      orderID,
    } = req.body;

    const newAppointment = new Appointment({
      firstName,
      lastName,
      mobileNumber,
      email,
      address,
      date,
      time,
      preferredSlot,
      modeOfConsultation,
      orderID,
    });
    await newAppointment.save();

    res.status(201).json({ message: "Appointment booked successfully!" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error while booking appointment", error: err });
  }
};

export const paymentVerification = async (req, res) => {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      req.body;
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.VITE_APP_RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;
    if (isAuthentic) {
      await Payment.create({
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
      });

      return res.redirect(
        `${process.env.VITE_HOST_URL_ENDPOINT_FOR_FRONTEND}/paymentsuccess?reference=${razorpay_payment_id}`
      );
    } else {
      // If not authentic, send a failure JSON response like below
      res.status(400).json({
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};
