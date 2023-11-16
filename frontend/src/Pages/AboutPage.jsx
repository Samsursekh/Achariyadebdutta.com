import React from "react";
import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BottomNavbar";
import Footer from "../components/Footer";
import feature3 from "../images/alldebdatta-images/feature3.jpg";

const AboutPage = () => {
  return (
    <>
      <div className="hidden md:block">
        <TopNavbar />
      </div>
      <div className="bg-black/30 h-[70px]">
        <BottomNavbar className="text-black" />
      </div>
      <div className="  bg-white absolute w-full">
        <div className="mt-10 pb-10 px-4">
          <h3 className="font-philosopher text-xl">About Me</h3>
          <h3 className="font-dancing text-[20px] leading-9">Namaste!</h3>

          <div className=" flex flex-col md:flex-row justify-between">
            <div className=" w-full md:w-[50%] px-3 sm:mb-10 text-popp">
              <p>
                When I meet people, I want to know the ideas which prevail on
                their respective minds, their journey, their experiences and
                lessons. I often think, wouldn't it be the same for them to want
                to know me. So as we all march ahead, my passage through time so
                far, here I wish to share with you.
              </p>{" "}
              <br />
              <p>
                Born and brought up in Delhi (India), I was always spiritually
                bent. Childhood days saw me intrigued by the nature of things
                and experiences around, which found me interested in feeling and
                understanding the vibes of people and places.
              </p>{" "}
              <br />
              <p>
                Religious, as most of the Indians are, I found my solace in
                prayers and meditation.
              </p>{" "}
              <br />
              <button className="text-white bg-black hover:bg-transparent border border-black rounded-sm px-3 py-2 hover:border hover:border-black transition duration-700 ease-in-out hover:text-black">
                Know More
              </button>
            </div>
            <div className="w-full md:w-[40%] flex items-center mt-16 sm:mt-8 md:mt-[-50px]">
              <div className="border-2 border-green-200 rounded-3xl w-[300px] relative overflow-hidden">
                <img
                  src={feature3}
                  className="w-full h-full rounded-3xl"
                  alt=""
                />
              </div>
              <div className="border-2 border-green-200 rounded-3xl w-[300px] relative overflow-hidden -ml-[220px] -mt-28">
                <img
                  src={feature3}
                  className="w-full h-full rounded-3xl"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
