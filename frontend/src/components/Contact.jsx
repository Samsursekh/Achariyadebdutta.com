import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiLoader4Line } from "react-icons/ri";
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";
import Footer from "./Footer";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAIL_JS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_APP_EMAIL_JS_PUBLIC_KEY
      );

      console.log(result.text);
      alert("Message sent successfully!");

      form.current.reset();
    } catch (error) {
      console.log(error.text);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="hidden md:block">
        <TopNavbar />
      </div>
      <div className="bg-black/30 h-[70px]">
        <BottomNavbar className="text-black" />
      </div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl mt-7 font-semibold mb-4 font-philosopher text-center">
        Get in Touch
      </h2>
      <div className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md mb-4">
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label htmlFor="from_name" className="block text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Full Name..."
              name="from_name"
              id="from_name"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="from_email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="from_email"
              placeholder="Enter Your Email..."
              id="from_email"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter Your Message..."
              rows="4"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white mt-2 w-full bg-black hover:bg-transparent border border-black rounded-sm px-3 py-2 hover:border hover:border-black transition duration-700 ease-in-out hover:text-black"
            disabled={loading}
          >
            {loading ? (
              <span className=" animate-spin">Loading...</span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
