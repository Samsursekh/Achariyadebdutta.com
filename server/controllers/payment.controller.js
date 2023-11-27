import { instance } from "../server.js";
import crypto from "crypto";
import { Payment } from "../models/payment.model.js";

export const checkout = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.price) * 100,
      currency: "INR",
      receipt: "order_rcptid_11",
    };

    console.log(req.body, "Req dot body is there or not ");
    console.log(options, "OPTIONS is present ??");
    const order = await instance.orders.create(options);
    console.log("Order is here  ==> ", order);

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

export const paymentVerification = async (req, res) => {
  console.log(req.body, "REQ body is there");

  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      req.body;
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.VITE_APP_RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;
    console.log(isAuthentic, "Authentic or not ...");
    if (isAuthentic) {
      //  it should be add into data base
      await Payment.create({
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
      });

      return res.redirect(
        `http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`
      );
    } else {
      // If not authentic, send a failure JSON response like below
      res.status(400).json({
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    // Handle other errors as needed
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};
