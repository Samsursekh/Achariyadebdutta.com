import React, { useState } from "react";
import axios from "axios";
import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BottomNavbar";
import Footer from "../components/Footer";
import banner3 from "../images/sliderImages/slide2.jpg";
import InputElement from "react-input-placeholder";

const Appointment = () => {
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    address: "",
    date: new Date().toISOString().substr(0, 10),
    time: getCurrentTime(),
    preferredSlot: "morning",
    modeOfConsultation: "online",
    priceOfAppointment: 3000,
  });

  // Handle input changes and update the corresponding state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const checkoutHandler = async (e, formData) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    let price = formData.priceOfAppointment;
    console.log(price, "This is the price");

    const {
      data: { key },
    } = await axios.get("http://localhost:5000/api/getkey");

    try {
      const {
        data: { order },
      } = await axios.post(
        "http://localhost:5000/api/checkout",
        { price: price },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const options = {
        key, // Enter the Key ID generated from the Dashboard
        amount: order.price,
        currency: "INR",
        name: "Pablo Import Export",
        description: "Test Transaction",
        image:
          "https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "http://localhost:5000/api/paymentverification",
        prefill: {
          name: `${formData.firstName + formData.lastName}`,
          email: `${formData.email}`,
          contact: `${formData.mobileNumber}`,
        },
        notes: {
          address: "Saggifo Infrastructure pvt. ltd.",
        },
        theme: {
          color: "#003CF0",
        },
      };
      var razor = new window.Razorpay(options);
      razor.open();
      // console.log(data, "Data is there or not...");
    } catch (error) {
      console.error("Error during checkout:", error.message);
    }
  };

  let mandetoryStar = "*";

  return (
    <>
      <section className="bg-gray-100 min-h-screen">
        <div className="hidden md:block">
          <TopNavbar />
        </div>
        <div className="bg-black/30 h-[70px]">
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
                required
                value={formData.firstName}
                onChange={handleInputChange}
                autoComplete="off"
                className="shadow appearance-none border border-blue-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name*"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                autoComplete="off"
                className="shadow appearance-none border border-blue-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <input
                type="text"
                placeholder="Mobile Number*"
                name="mobileNumber"
                required
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
                placeholder="Address*"
                name="address"
                required
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
                  Book Appointment
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
