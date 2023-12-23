import { instance } from "../server.js";
import crypto from "crypto";
import { Payment } from "../models/payment.model.js";
import { Appointment } from "../models/appointment.model.js";
import { nanoid } from "nanoid";
import emailjs from "@emailjs/browser";
import nodemailer from "nodemailer";
// import logo from "../../frontend/src/images/logo/llogo icon-01.png";

export const checkout = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.price) * 100,
      currency: "INR",
      receipt: `RECEIPT_ID_${nanoid()}`,
    };

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
      razorpay_order_id,
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
      razorpay_order_id,
    });
    await newAppointment.save();
    await sendEmailToAdminWhenMakeAnAppointment(req.body);
    res.status(201).json({ message: "Appointment booked successfully!" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error while booking appointment", error: err });
  }
};

export const sendEmailToAdminWhenMakeAnAppointment = async (
  appointmentDetails
) => {
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
    } = appointmentDetails;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.VITE_APP_USER_EMAIL_TO_SEND_EMAIL,
        pass: process.env.VITE_APP_GOOGLE_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `${firstName} <${email}>`,
      to: process.env.VITE_APP_USER_EMAIL_TO_SEND_EMAIL,
      subject: `Appointment Information send by ${firstName}`,
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Mobile Number: ${mobileNumber}
        Email: ${email}
        Address: ${address}
        Date: ${date}
        Time: ${time}
        Preferred Slot: ${preferredSlot}
        Mode of Consultation: ${modeOfConsultation}
      `,
      html: `
        <h1>Appointment Information</h1>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Preferred Slot:</strong> ${preferredSlot}</p>
        <p><strong>Mode of Consultation:</strong> ${modeOfConsultation}</p>
      `,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.status(200).json({ message: "Email sent successfully!" });
      }
    });
  } catch (error) {
    console.error("Something went wrong while sending email:", error);
    res.status(500).json({ error: "Internal Server Error" });
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
      const paymentByUser = await Appointment.findOne({
        razorpay_order_id: razorpay_order_id,
      });

      if (paymentByUser) {
        await Payment.create({
          razorpay_payment_id,
          razorpay_order_id,
          razorpay_signature,
          firstName: paymentByUser.firstName,
          lastName: paymentByUser.lastName,
          mobileNumber: paymentByUser.mobileNumber,
          email: paymentByUser.email,
          address: paymentByUser.address,
          date: paymentByUser.date,
          time: paymentByUser.time,
          preferredSlot: paymentByUser.preferredSlot,
          modeOfConsultation: paymentByUser.modeOfConsultation,
          currentDate: paymentByUser.currentDate,
          currentTime: paymentByUser.currentTime,
        });

        if (paymentByUser?.email) {
          await sendEmailToAdminAfterSuccessfullPayment(
            paymentByUser,
            razorpay_payment_id
          );

          await userWillgetEmailAfterSuccessfullPayment(
            paymentByUser,
            razorpay_payment_id
          );
        } else {
          console.log("Email address not provided. Skipping email sending.");
        }

        return res.redirect(
          `${process.env.VITE_HOST_URL_ENDPOINT_FOR_FRONTEND}/paymentsuccess?reference=${razorpay_payment_id}`
        );
      } else {
        return res
          .status(404)
          .json({ success: false, message: "Appointment data not found" });
      }
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Request not authentic" });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
};

export const sendEmailToAdminAfterSuccessfullPayment = async (
  paymentByUser,
  razorpay_payment_id,
  res
) => {
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
    } = paymentByUser;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.VITE_APP_USER_EMAIL_TO_SEND_EMAIL,
        pass: process.env.VITE_APP_GOOGLE_APP_PASSWORD,
      },
    });

    // const mailOptions = {
    //   from: `${firstName} <${email}>`,
    //   to: process.env.VITE_APP_USER_EMAIL_TO_SEND_EMAIL,
    //   subject: `Successfull payment done by ${firstName}`,
    //   text: `
    //     First Name: ${firstName}
    //     Last Name: ${lastName}
    //     Mobile Number: ${mobileNumber}
    //     Email: ${email}
    //     Address: ${address}
    //     Date: ${date}
    //     Time: ${time}
    //     Preferred Slot: ${preferredSlot}
    //     Mode of Consultation: ${modeOfConsultation}
    //     Payment of rupees: 3000
    //   `,
    //   html: `
    //     <h1>Successfull payment Information</h1>
    //     <p><strong>First Name:</strong> ${firstName}</p>
    //     <p><strong>Last Name:</strong> ${lastName}</p>
    //     <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Address:</strong> ${address}</p>
    //     <p><strong>Date:</strong> ${date}</p>
    //     <p><strong>Time:</strong> ${time}</p>
    //     <p><strong>Preferred Slot:</strong> ${preferredSlot}</p>
    //     <p><strong>Mode of Consultation:</strong> ${modeOfConsultation}</p>
    //     <p><strong>Payment of rupees: 3000 </strong></p>
    //   `,
    // };

    const mailOptions = {
      from: `${firstName} ${email}`,
      to: process.env.VITE_APP_USER_EMAIL_TO_SEND_EMAIL,
      subject: `Successful Payment Confirmation - Astrology Consultation`,
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Mobile Number: ${mobileNumber}
        Email: ${email}
        Address: ${address}
        Date: ${date}
        Time: ${time}
        Preferred Slot: ${preferredSlot}
        Mode of Consultation: ${modeOfConsultation}
        Payment Amount: Rs. 3000
        Payment ID : ${razorpay_payment_id}
      `,
      html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <style>
            body {
              font-family: "Arial", sans-serif;
              background-color: #f8f8f8;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #fff;
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
              color: #333;
            }
            p {
              margin-bottom: 10px;
              color: #555;
            }
            .logo {
              max-width: 50px;
              height: auto;
            }
            .social-icons {
              margin-top: 20px;
            }
            .social-icons a {
              display: inline-block;
              margin-right: 10px;
            }
            .social-icons-img {
              width: 160px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <img
              src="https://cdn.pixabay.com/photo/2015/12/09/13/44/vector-1084755_1280.png"
              alt="Your Logo"
              class="logo"
            />
            <h1>Successful Payment Information</h1>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${time}</p>
            <p><strong>Preferred Slot:</strong> ${preferredSlot}</p>
            <p><strong>Mode of Consultation:</strong> ${modeOfConsultation}</p>
            <p><strong>Payment Amount:</strong> Rs. 3000</p>
           
            <p><strong> Payment ID :</strong> ${razorpay_payment_id}</p>
      
            <div class="social-icons">
              <a
                href="https://cdn.pixabay.com/photo/2021/02/08/15/34/social-media-5995251_1280.png"
                target="_blank"
                ><img
                  src="https://cdn.pixabay.com/photo/2021/02/08/15/34/social-media-5995251_1280.png"
                  alt="Facebook"
                  class="social-icons-img"
              /></a>
            </div>
          </div>
        </body>
      </html>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        alert(
          "There is a problem while inform to admin, But payment done successfully!"
        );
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.status(200).json({ message: "Email sent successfully!" });
      }
    });
  } catch (error) {
    console.error("Something went wrong while sending email:", error);
    res?.status(500).json({ error: "Internal Server Error" });
  }
};

export const userWillgetEmailAfterSuccessfullPayment = async (
  paymentByUser,
  razorpay_payment_id,
  res
) => {
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
    } = paymentByUser;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.VITE_APP_USER_EMAIL_TO_SEND_EMAIL,
        pass: process.env.VITE_APP_GOOGLE_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `${firstName} ${process.env.VITE_APP_USER_EMAIL_TO_SEND_EMAIL}`,
      to: `${email}`,
      subject: `Successful Payment Confirmation - Astrology Consultation`,
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Mobile Number: ${mobileNumber}
        Email: ${email}
        Address: ${address}
        Date: ${date}
        Time: ${time}
        Preferred Slot: ${preferredSlot}
        Mode of Consultation: ${modeOfConsultation}
        Payment Amount: Rs. 3000
        Payment ID : ${razorpay_payment_id}
      `,
      html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <style>
            body {
              font-family: "Arial", sans-serif;
              background-color: #f8f8f8;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #fff;
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
              color: #333;
            }
            p {
              margin-bottom: 10px;
              color: #555;
            }
            .logo {
              max-width: 50px;
              height: auto;
            }
            .social-icons {
              margin-top: 20px;
            }
            .social-icons a {
              display: inline-block;
              margin-right: 10px;
            }
            .social-icons-img {
              width: 160px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <img
              src="https://cdn.pixabay.com/photo/2015/12/09/13/44/vector-1084755_1280.png"
              alt="Your Logo"
              class="logo"
            />
            <h1>Successful Payment Information</h1>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${time}</p>
            <p><strong>Preferred Slot:</strong> ${preferredSlot}</p>
            <p><strong>Mode of Consultation:</strong> ${modeOfConsultation}</p>
            <p><strong>Payment Amount:</strong> Rs. 3000</p>
           
            <p><strong> Payment ID :</strong> ${razorpay_payment_id}</p>
      
            <p>Hi ${firstName}, Your payment has done successfully. Our team will get back to soon.</p>
            <div class="social-icons">
              <a
                href="https://cdn.pixabay.com/photo/2021/02/08/15/34/social-media-5995251_1280.png"
                target="_blank"
                ><img
                  src="https://cdn.pixabay.com/photo/2021/02/08/15/34/social-media-5995251_1280.png"
                  alt="Facebook"
                  class="social-icons-img"
              /></a>
            </div>
          </div>
        </body>
      </html>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Internal Server Error" });
        alert(
          "There is a problem while inform to admin, But payment done successfully!"
        );
      } else {
        res.status(200).json({ message: "Email sent successfully!" });
      }
    });
  } catch (error) {
    console.error("Something went wrong while sending email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    return res.status(200).json({ success: true, data: appointments });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
};

export const getAllPaymentsOfUser = async (req, res) => {
  try {
    const payments = await Payment.find();
    return res.status(200).json({ success: true, data: payments });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
};
