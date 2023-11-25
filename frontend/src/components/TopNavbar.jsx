import React from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";
import { TfiYoutube } from "react-icons/tfi";
import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";

const TopNavbar = () => {
  return (
    <div className=" h-[50px] relative z-10 flex justify-between items-center w-full m-auto px-20 bg-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center text-[15px] justify-around mr-2">
          <BsTelephoneFill className="mr-1" />
          <p>+91 91 98705 91555 / 98107 01006</p>
        </div>
        <div className="flex items-center text-[15px] justify-around ml-2">
          <AiOutlineMail className="mr-1" />
          <p>kaaushik.kar@gmail.com</p>
        </div>
      </div>
      <div className="flex justify-between w-[250px] ">
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
    </div>
  );
};

export default TopNavbar;
