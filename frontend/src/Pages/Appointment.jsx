import React, { useState } from "react";
import axios from "axios";
import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BottomNavbar";
import Footer from "../components/Footer";
import banner3 from "../images/sliderImages/slide2.jpg";
import * as Yup from "yup";
import logo from "../images/logo/llogo icon-01.png";
import emailjs from "@emailjs/browser";

const Appointment = () => {
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const initialFormValue = {
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    address: "",
    date: new Date().toISOString().substr(0, 10),
    time: getCurrentTime(),
    preferredSlot: "morning",
    modeOfConsultation: "online",
    price: 3000,
  };
  const [formData, setFormData] = useState(initialFormValue);

  // const sendEmailWhilePaymentSuccess = () => {
  //   axios.post(`${import.meta.env.VITE_HOST_URL_ENDPOINT}/api/sendemailtoadmin`, {
  //     formData: formData,
  //   }, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //   .then((response) => {
  //     if (response.status === 200) {
  //       console.log('Email sent successfully!');
  //     } else {
  //       console.error('Error sending email:', response.statusText);
  //     }
  //   })
  //   .catch((error) => {
  //     console.error('Error sending email:', error);
  //   });
  // };

  const [loading, setLoading] = useState(false);

  const [userDataFromPayment, setUserDataFromPayment] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const emailRegex = /^[^\s@]+@[^\s@]+\[^\s@]+$/;

    if (name === "mobileNumber" && !/^\d{0,10}$/.test(value)) {
      return;
    }

    if (name === "email" && emailRegex.test(value)) {
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const checkoutHandler = async (e, formData) => {
    e.preventDefault();
    const { firstName, lastName, mobileNumber, address, price } = formData;

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !mobileNumber.trim() ||
      !address.trim()
    ) {
      alert("Please fill all the details.");
      return;
    }
    if (mobileNumber.trim().length !== 10) {
      alert("Please enter 10 digit mobile number ");
      return;
    }
    if (firstName.trim().length < 3) {
      alert("Please enter your name properly");
      return;
    }
    if (lastName.trim().length < 3) {
      alert("Please enter your last name properly ");
      return;
    }

    setLoading(true);

    // const options = {
    //   order_id: order.id,
    //   prefill: {
    //     name: `${formData.firstName} ${formData.lastName}`,
    //     email: `${formData.email}`,
    //     contact: `${formData.mobileNumber}`,
    //     address: `${formData.address}`,
    //   },
    // };

    // gettingDataFromPlacingOrder(options, order);

    //************************   After completion of the validation process this below code would be uncommented   ************************

    const {
      data: { key },
    } = await axios.get(`${import.meta.env.VITE_HOST_URL_ENDPOINT}/api/getkey`);

    try {
      const {
        data: { order },
      } = await axios.post(
        `${import.meta.env.VITE_HOST_URL_ENDPOINT}/api/checkout`,
        { price },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const options = {
        key,
        amount: order.price,
        currency: "INR",
        name: "Pablo Import Export",
        description: "Test Transaction",
        image: logo,
        order_id: order.id,
        callback_url: `${
          import.meta.env.VITE_HOST_URL_ENDPOINT
        }/api/paymentverification`,
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: `${formData.email}`,
          contact: `${formData.mobileNumber}`,
          address: `${formData.address}`,
        },
        notes: {
          address: "Saggifo Infrastructure pvt. ltd.",
        },
        theme: {
          color: "#003CF0",
        },
      };
      var razor = new window.Razorpay(options);
      gettingDataFromPlacingOrder(options, order);
      // ************************** ONCE I WANT TO ADD RAZORPAY IN APPONEMENT LETS UNCOMMENT THIS BELOW ************************

      razor.open();

      // ************************** ONCE I WANT TO ADD RAZORPAY IN APPONEMENT LETS UNCOMMENT THIS ABOVE ************************
    } catch (error) {
      console.error("Error during checkout:", error.message);
    } finally {
      setLoading(false);
    }
  };
  //************************   After completion of the validation process this above code would be uncommented   ************************

  const gettingDataFromPlacingOrder = async (allTheData, order) => {
    try {
      const razorpay_order_id = order.id;
      setUserDataFromPayment(razorpay_order_id);

      const dataToSend = {
        firstName: allTheData.prefill.name.split(" ")[0],
        lastName: allTheData.prefill.name.split(" ")[1],
        mobileNumber: allTheData.prefill.contact,
        email: allTheData.prefill.email,
        address: allTheData.prefill.address,
        date: formData.date,
        time: formData.time,
        preferredSlot: formData.preferredSlot,
        modeOfConsultation: formData.modeOfConsultation,
        razorpay_order_id: razorpay_order_id,
        currentDate: new Date(),
        currentTime: getCurrentTime(),
      };

      const response = await axios.post(
        `${import.meta.env.VITE_HOST_URL_ENDPOINT}/api/appointment`,
        dataToSend
      );
      console.log(response, "Response getting or not ...");
      alert(response.data.message);
    } catch (error) {
      console.error("Error while adding data to the database:", error);
    }
  };

  const currentDate = new Date().toISOString().split("T")[0];
  //  console.log(currentDate)
  return (
    <>
      <section className="bg-gray-100 min-h-screen">
        <div className="hidden md:block">
          <TopNavbar />
        </div>
        <div className="bg-black h-[70px]">
          <BottomNavbar className="text-black" />
        </div>
        <div className="w-full">
          <img
            src={banner3}
            alt="banner image"
            className="h-[50vh] object-cover w-full"
          />
        </div>
        <div className="grid md:flex lg:flex m-auto mb-7 font-sans w-[90%] gap-4">
          <div className="m-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mt-7 font-semibold mb-4 font-philosopher text-center">
              Book an Appointment
            </h2>
            <h3 className="text-[13px] italic font-sans md:text-[16px] lg:text-[18px] text-gray-500 mb-3">
              Unlock Solutions, Embrace Serenity.
            </h3>
            <div>
              <p>
                In years of practicing astrology, I've discovered a profound
                truth - every problem is a lock with a key. Whether it's delving
                into horoscopes, tarot, or palmistry, I provide seekers with
                remedies, unlocking doors to happiness and goals.
              </p>
              <p>
                Life becomes precious, and the lessons learned are cherished for
                good. Find solutions, feel sorted, and embrace the journey
                towards a fulfilled life.
              </p>
            </div>
          </div>
          <div className="px-4 m-auto md:px-0 py-8 max-w-lg mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl mt-7 font-semibold mb-4 font-philosopher text-center">
              Appointment Form
            </h1>
            <form
              action=""
              onSubmit={(e) => checkoutHandler(e, formData)}
              className="bg-white font-poppins shadow-md rounded px-3 pt-6 pb-8 mb-4 space-y-4 border border-blue-300"
            >
              <input
                type="text"
                placeholder={`First Name*`}
                name="firstName"
                // required
                value={formData.firstName}
                onChange={handleInputChange}
                autoComplete="off"
                className="shadow appearance-none border border-blue-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name*"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                autoComplete="off"
                className="shadow appearance-none border border-blue-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <input
                type="number"
                placeholder="Mobile Number*"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                autoComplete="off"
                className="shadow appearance-none border rounded border-blue-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="off"
                className="shadow appearance-none border rounded border-blue-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <textarea
                type="text"
                placeholder="Full Address*"
                name="address"
                rows={4}
                value={formData.address}
                onChange={handleInputChange}
                autoComplete="off"
                className="shadow appearance-none border rounded border-blue-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {/* Date & Time selection */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  placeholder="Select Date here*"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleInputChange}
                  min={currentDate}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <input
                  type="time"
                  placeholder="Select Time here*"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              {/* preferredSlot & modeOfConsultation selection */}

              <div className="grid grid-cols-2 gap-4">
                <select
                  name="preferredSlot"
                  value={formData.preferredSlot}
                  onChange={handleInputChange}
                  id=""
                  className="shadow appearance-none border border-blue-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </select>
                <select
                  name="modeOfConsultation"
                  value={formData.modeOfConsultation}
                  onChange={handleInputChange}
                  id=""
                  className="shadow appearance-none border border-blue-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>
              </div>
              <div className="flex items-center justify-center mt-6">
                <button
                  className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  {loading ? "Loading..." : "Book Appointment"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className=" w-[60%] m-auto px-3 mb-7 text-center">
          <p>
            In life's journey, our paths intertwine, and our actions can touch
            lives.
          </p>
          <p>
            A warm, service-oriented touch transforms the world into a happier
            place.
          </p>
          <p>
            As you reach for my knowledge, it's not just about comfort; it's
            about doing justice to the essence of life—making it meaningful and
            impactful.
          </p>
          <div className="text-[13px] italic font-sans md:text-[16px] lg:text-[18px] text-gray-500 mb-3 mt-3">
            - Astro Achariya Debdutta
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Appointment;
