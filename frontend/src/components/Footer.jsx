import React from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";
import { TfiYoutube } from "react-icons/tfi";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="m-auto w-full bg-black pt-4">
      <div className="flex justify-between w-[250px] m-auto mb-8 mt-3">
        <div className="bg-indigo-700 rounded-full p-1 cursor-pointer">
          <BiLogoFacebook className="text-2xl text-white" />
        </div>
        <div className="bg-[#d63384] rounded-full p-1 cursor-pointer">
          <BiLogoInstagram className="text-2xl text-white" />
        </div>
        <div className="bg-[#dc3545] rounded-full p-1 cursor-pointer">
          <TfiYoutube className="leading-3 text-[22px] text-white" />
        </div>
        <div className="bg-indigo-700 rounded-full p-1 cursor-pointer">
          <BiLogoLinkedin className="leading-3 text-[22px] text-white" />
        </div>
        <div className="bg-[#0dcaf0] rounded-full p-1 cursor-pointer">
          <AiOutlineTwitter className="text-2xl text-white" />
        </div>
      </div>
      <div className="text-[#777777] bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-3 ml-2 font-philosopher">
            Services
          </h2>
          <ul className="ml-2">
            <li>Birth Journal</li>
            <hr className="border border-s-violet-400 border-gray-300 my-2 m-auto" />

            <li>Vastu Consultancy</li>
            <hr className="border border-s-violet-400 border-gray-300 my-2 m-auto" />

            <li>Face Reading</li>
            <hr className="border border-s-violet-400 border-gray-300 my-2 m-auto" />

            <li>Tarot Card Reading</li>
            <hr className="border border-s-violet-400 border-gray-300 my-2 m-auto" />

            <li>Life Style Coaching</li>
            <hr className="border border-s-violet-400 border-gray-300 my-2 m-auto" />

            <li>Palmistry</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-3 ml-2 font-philosopher">
            Quick Links
          </h2>
          <ul className="ml-2">
            <li>About Me</li>
            <hr className="border border-s-violet-400 border-gray-300 my-2 m-auto" />

            <li>Awards & Accolades</li>
            <hr className="border border-s-violet-400 border-gray-300 my-2 m-auto" />

            <li>Events</li>
            <hr className="border border-s-violet-400 border-gray-300 my-2 m-auto" />

            <li>Blogs</li>
            <hr className="border border-s-violet-400 border-gray-300 my-2 m-auto" />

            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-3 font-philosopher">
            Get In Touch
          </h2>
          <p>New Delhi, India</p>
          <p>Email: helpdeskjaimadan@gmail.com</p>
          <p>Phone: +91 98705 91555</p>
          <p>Phone: +91 98107 01006</p>
        </div>
      </div>
      <div>
        <hr className=" w-[90%] border-s-violet-400 border-gray-300 my-10 mb-2 m-auto" />
      </div>
      <div className="m-auto text-center text-[#777777] pb-2">© Copyright 2023, All Rights Reserved,</div>
    </div>
  );
};

export default Footer;
