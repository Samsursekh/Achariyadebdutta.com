import React, { useState } from "react";
import Achievement from "./Achievement";
import FeaturedVideoEmbed from "./FeaturedVideoEmbed";
import About from "../Pages/About";
import Footer from "./Footer";
import "../App.css";
import feature1 from "../images/alldebdatta-images/feature1.jpg";
import feature2 from "../images/alldebdatta-images/feature2.jpg";
import feature3 from "../images/alldebdatta-images/feature3.jpg";
import feature4 from "../images/alldebdatta-images/feature4.jpg";
import feature5 from "../images/alldebdatta-images/feature5.jpg";
import feature6 from "../images/alldebdatta-images/feature6.jpg";
import ClientStories from "./ClientStories";

const FeaturedServices = () => {
  const imageArray = [
    feature1,
    feature2,
    feature5,
    feature4,
    feature6,
    feature3,
  ];

  const [isFlippedArray, setIsFlippedArray] = useState(Array(6).fill(false));

  const handleFlip = (index) => {
    const updatedArray = [...isFlippedArray];
    updatedArray[index] = !updatedArray[index];
    setIsFlippedArray(updatedArray);
  };

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
          {isFlippedArray.map((isFlipped, index) => (
            <div
              key={index}
              className={`border px-3 py-3 ${isFlipped ? "flipped" : ""}`}
              onMouseEnter={() => handleFlip(index)}
              onMouseLeave={() => handleFlip(index)}
            >
              <div className={`flipper ${isFlipped ? "flipped" : ""}`}>
                <div className="front">
                  <img
                    src={imageArray[index]}
                    alt=""
                    className="m-auto object-cover"
                  />
                </div>
                <div className="back">
                  <p className="text-center m-auto">Birth Journal (Kundli)</p>
                  <div className="w-[90%]">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Odit, similique?
                    </p>
                  </div>
                  <button className="text-white mt-2 bg-black hover:bg-transparent border border-black rounded-sm px-3 py-2 hover:border hover:border-black transition duration-700 ease-in-out hover:text-black">
                    Get Started Here
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Achievement />
        </div>
        <div>
          <FeaturedVideoEmbed embedID="LK6oYTQ3-6M" />
        </div>
        <div className=" m-auto w-[50%] mb-4">
          <h1 className=" text-2xl text-center md:text-3xl lg:text-4xl m-3 font-philosopher">
            Client Stories
          </h1>
          <p className="text-center">
            Explore the inspiring success stories of individuals whose lives
            have been positively impacted by Dr. Jai Madaan's guidance and
            expertise.
          </p>
        </div>
        <div>
          <ClientStories />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default FeaturedServices;
