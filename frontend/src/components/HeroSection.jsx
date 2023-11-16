import React, { useEffect, useState } from "react";
import banner from "../images/banner.jpg";
import mbanner from "../images/alldebdatta-images/mbanner.jpg";
import banner1 from "../images/banner1.jpg";
import BottomNavbar from "./BottomNavbar";
import TopNavbar from "./TopNavbar";
import FeaturedServices from "./FeaturedServices";
import About from "../Pages/About";
import Achievement from "./Achievement";

const HeroSection = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const backgroundImage = isSmallScreen ? mbanner : banner1;

  return (
    <>
      <div className="relative">
        <div className="fixed w-full h-screen">
          <img
            src={backgroundImage}
            alt=""
            className="top-0 left-0 w-full h-screen object-cover"
          />
        </div>
        <div className="hidden md:block">
          <TopNavbar />
        </div>
        <BottomNavbar />
        {/* <About /> */}
        <div className=" flex justify-center items-center w-full absolute m-auto h-screen">
          <div className="absolute text-center top-48 lg:left-32 md:left-14 p-4">
            <h1 className="text-5xl font-philosopher text-white font-semibold">
              Dr Pablo bhaya
            </h1>
            <div className="mt-3 mb-3 ">
              <p className="text-white">
                <strong>Astrologer</strong> of Global Acknowledgement
              </p>
              <p className="text-white">
                Authority in <strong>Vastu</strong>{" "}
              </p>
              <p className="text-white">
                {" "}
                <strong>Motivational Orator</strong>{" "}
              </p>
            </div>
            <button className="text-white bg-black hover:bg-transparent border border-black rounded-sm px-3 py-2 hover:border hover:border-black transition duration-700 ease-in-out">
              Your Journey Begins Here
            </button>
          </div>
        </div>
        {/* <About /> */}
        <FeaturedServices />
        {/* <Achievement /> */}
      </div>
    </>
  );
};

export default HeroSection;
