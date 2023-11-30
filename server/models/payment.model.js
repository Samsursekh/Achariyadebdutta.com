import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    razorpay_order_id: {
      type: String,
      required: true,
    },
    razorpay_payment_id: {
      type: String,
      required: true,
    },
    razorpay_signature: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    preferredSlot: {
      type: String,
      enum: ["morning", "afternoon", "evening"],
      required: true,
    },
    modeOfConsultation: {
      type: String,
      enum: ["online", "offline"],
      required: true,
    },
    currentDate: {
      type: Date,
      default: Date.now,
    },
    currentTime: {
      type: String,
      default: new Date().toLocaleTimeString(),
    },
  },
  {
    timestamps: true,
  }
);

export const Payment = mongoose.model("Payment", paymentSchema);
