import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
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
    razorpay_order_id: {
      type: String,
      // required: true,
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

export const Appointment = mongoose.model("Appointment", appointmentSchema);

// {
//   "firstName": "Pablo",
//    "lastName": "Rolex",
//    "mobileNumber": 1234567890,
//    "email": "pablo@site.dev",
//    "address": "UK",
//    "date": "12/02/23",
//    "time": "12:00",
//    "preferredSlot": "morning",
//    "modeOfConsultation": "online"
// }
