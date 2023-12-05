import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiLoader4Line } from "react-icons/ri";
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";
import Footer from "./Footer";
import doodle from "../images/doodle.svg";
import { SiGooglemaps } from "react-icons/si";
import {
  BiLogoFacebook,
  BiLogoGmail,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiSupport,
} from "react-icons/bi";
import { FaPhone, FaXTwitter } from "react-icons/fa6";
import GoogleMaps from "./GoogleMaps";
import { TfiYoutube } from "react-icons/tfi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";

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
      alert("Message sent successfully!");

      form.current.reset();
    } catch (error) {
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
      <div className="bg-black h-[70px]">
        <BottomNavbar className="text-black" />
      </div>
      <div className=" bg-gray-100 py-6 flex flex-col sm:py-12 ">
        <div className="  m-auto sm:flex sm:items-center sm:justify-between w-[97%] md:w-[90%] lg:w-[70%] sm:m-auto">
          <div className="mb-[50px] border-2 md:w-[46%]">
            <div>
              <div className="flex p-3 gap-4">
                <div className="">
                  <SiGooglemaps size={35} className="cursor-pointer" />
                </div>
                <div className="">
                  <h3 className="text-xl font-bold">Address : </h3>
                  <p>
                    Flat No.713, Devika Tower 6, Nehru Place, New Delhi-110019,
                    India
                  </p>
                </div>
              </div>
              <div className="flex p-3 gap-4 ">
                <div className="">
                  <BiLogoGmail size={35} className="cursor-pointer" />
                </div>
                <div className="">
                  <h3 className="text-xl font-bold">Email Address : </h3>
                  <p>contact@pablotalk.com</p>
                </div>
              </div>
              <div className="flex p-3 gap-4 ">
                <div className="">
                  <BiSupport size={35} className="cursor-pointer" />
                </div>
                <div className="">
                  <h3 className="text-xl font-bold">Customer Support : </h3>
                  <p>We are available 24x7, click to start chat</p>
                </div>
              </div>

              <div className="flex p-3 gap-4 ">
                <div className="">
                  <FaPhone size={35} className="cursor-pointer" />
                </div>
                <div className="">
                  <h3 className="text-xl font-bold">Phone : </h3>
                  <p>+91 XXXXXXXXXX</p>
                  <p>+91 XXXXXXXXXX</p>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly ml-1 my-4 w-1/2  ">
              <div className="bg-[#1877F2] rounded-full p-1 cursor-pointer">
                <BiLogoFacebook className="text-2xl text-white" />
              </div>
              <div className="bg-[#d63384] rounded-full p-1 cursor-pointer">
                <BiLogoInstagram className="text-2xl text-white" />
              </div>
              <div className="bg-[#dc3545] rounded-full p-1 cursor-pointer">
                <BsYoutube className="leading-3 text-[25px] text-white" />
              </div>
              <div className="bg-[#0072b1] rounded-full p-1 cursor-pointer">
                <BiLogoLinkedin className="leading-3 text-[24px] text-white" />
              </div>
              <div className="bg-[#000000] rounded-full p-1 cursor-pointer">
                <FaXTwitter className="text-2xl text-white" />
              </div>
            </div>
          </div>
          <div className="m-auto relative py-3 sm:max-w-xl sm:mx-auto mb-[50px]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative py-10 bg-white border-2 shadow-lg sm:rounded-3xl sm:p-10 px-5">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 font-philosopher text-center">
                    Get in Touch
                  </h1>
                </div>
                <div className="">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-2 relative">
                      <input
                        type="text"
                        placeholder="Full Name*"
                        name="from_name"
                        id="from_name"
                        required
                        autoComplete="off"
                        className="peer placeholder-transparent h-10 w-full px-7 pl-2 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      />
                      <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                        Full Name*
                      </label>
                    </div>
                    <div className="my-3 relative">
                      <input
                        type="email"
                        name="from_email"
                        placeholder=" Email Address*"
                        id="from_email"
                        autoComplete="off"
                        required
                        className="peer placeholder-transparent h-10 w-full px-7 pl-2 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      />
                      <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                        Email Address*
                      </label>
                    </div>
                    <div className="my-3 relative">
                      <textarea
                        name="message"
                        id="message"
                        rows=""
                        required
                        placeholder=" Type a message*"
                        autoComplete="off"
                        className="w-full py-2 border-b-2 border-gray-300 rounded-none focus:outline-none placeholder-gray-600"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white w-full rounded-sm px-2 py-1"
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
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
