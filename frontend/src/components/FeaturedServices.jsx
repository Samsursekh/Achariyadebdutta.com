import React from "react";
import Achievement from "./Achievement";
import FeaturedVideoEmbed from "./FeaturedVideoEmbed";
import About from "../Pages/About";
import Footer from "./Footer";

const FeaturedServices = () => {
  return (
    <>
      <div className=" absolute mt-[1620px] md:mt-[1200px] lg:mt-[1160px] bg-white w-full">
        <About />
        <div>
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl m-3 font-philosopher mt-[800px] md:mt-[300px] lg:mt-[150px] mb-5">
            Featured Services
          </h1>
        </div>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center w-[90%] m-auto">
          <div className="border px-3 py-3">
            <img
              src="http://jaimadaan.com/images/content/sv4.jpg"
              alt=""
              className="m-auto"
            />
            <p>Birth Journal (Kundli)</p>
            <p>
              Unlock the secrets of life's journey through an insightful
              analysis of your birth journal.
            </p>
            <button className="text-white mt-2 bg-black hover:bg-transparent border border-black rounded-sm px-3 py-2 hover:border hover:border-black transition duration-700 ease-in-out hover:text-black">
              Get Started Here
            </button>
          </div>

          <div className="border px-3 py-3">
            <img
              src="http://jaimadaan.com/images/content/sv4.jpg"
              alt=""
              className="m-auto"
            />
            <p>Birth Journal (Kundli)</p>
            <p>
              Unlock the secrets of life's journey through an insightful
              analysis of your birth journal.
            </p>
            <button className="text-white mt-2 bg-black hover:bg-transparent border border-black rounded-sm px-3 py-2 hover:border hover:border-black transition duration-700 ease-in-out hover:text-black">
              Get Started Here
            </button>
          </div>

          <div className="border px-3 py-3">
            <img
              src="http://jaimadaan.com/images/content/sv4.jpg"
              alt=""
              className="m-auto"
            />
            <p>Birth Journal (Kundli)</p>
            <p>
              Unlock the secrets of life's journey through an insightful
              analysis of your birth journal.
            </p>
            <button className="text-white mt-2 bg-black hover:bg-transparent border border-black rounded-sm px-3 py-2 hover:border hover:border-black transition duration-700 ease-in-out hover:text-black">
              Get Started Here
            </button>
          </div>

          <div className="border px-3 py-3">
            <img
              src="http://jaimadaan.com/images/content/sv4.jpg"
              alt=""
              className="m-auto"
            />
            <p>Birth Journal (Kundli)</p>
            <p>
              Unlock the secrets of life's journey through an insightful
              analysis of your birth journal.
            </p>
            <button className="text-white mt-2 bg-black hover:bg-transparent border border-black rounded-sm px-3 py-2 hover:border hover:border-black transition duration-700 ease-in-out hover:text-black">
              Get Started Here
            </button>
          </div>
          <div className="border px-3 py-3">
            <img
              src="http://jaimadaan.com/images/content/sv4.jpg"
              alt=""
              className="m-auto"
            />
            <p>Birth Journal (Kundli)</p>
            <p>
              Unlock the secrets of life's journey through an insightful
              analysis of your birth journal.
            </p>
            <button className="text-white mt-2 bg-black hover:bg-transparent border border-black rounded-sm px-3 py-2 hover:border hover:border-black transition duration-700 ease-in-out hover:text-black">
              Get Started Here
            </button>
          </div>

          <div className="border px-3 py-3">
            <img
              src="http://jaimadaan.com/images/content/sv4.jpg"
              alt=""
              className="m-auto"
            />
            <p>Birth Journal (Kundli)</p>
            <p>
              Unlock the secrets of life's journey through an insightful
              analysis of your birth journal.
            </p>
            <button className="text-white bg-black hover:bg-transparent border border-black rounded-sm px-3 py-2 hover:border hover:border-black transition duration-700 ease-in-out hover:text-black">
              Get Started Here
            </button>
          </div>
        </div>

        <div>
          <Achievement />
        </div>
        <div>
          <FeaturedVideoEmbed embedID="LK6oYTQ3-6M" />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default FeaturedServices;
