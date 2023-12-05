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
import { Link } from "react-router-dom";

const FeaturedServices = () => {
  const imageArray = [
    {
      image: feature1,
      navigatePath: "astro-birth-chart-reformation",
      HeadText: "Astro Birth Chart Reformation",
      paragraph:
        "Discover the mysteries of your life's path with a profound examination of your birth chart.",
    },
    {
      image: feature2,
      navigatePath: "astro-vastu-consultancy",
      HeadText: "Astro Vastu Consultancy",
      paragraph:
        "Dance through life's energies—immerse yourself in the vibrant hues of happiness.",
    },
    {
      image: feature3,
      navigatePath: "life-coach-and-success-guru",
      HeadText: "Life Coach and Success Guru",
      paragraph:
        "Elevate your essence with a coaching journey: sculpt your style, infuse substance, and claim the trio of Power, Peace, and Prosperity.",
    },
    {
      image: feature4,
      navigatePath: "palmistry",
      HeadText: "Palmistry",
      paragraph:
        "Trace the echoes of your destiny in the lines of your hands; let the journey begin towards a future woven with blissful possibilities.",
    },
    {
      image: feature5,
      navigatePath: "numerology",
      HeadText: "Numerology",
      paragraph:
        "When questions linger, Numerology brings answers, leading you from uncertainty to tranquillity.",
    },
    {
      image: feature6,
      navigatePath: "face-reading",
      HeadText: "Face Reading",
      paragraph:
        "Master face reading for heightened decision-making wisdom. Unveil allure and insist on your success with serene confidence.",
    },
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
                    src={imageArray[index].image}
                    alt=""
                    className="m-auto object-cover"
                  />
                </div>
                <div className="back">
                  <h3 className="text-center m-auto font-bold">
                    {imageArray[index].HeadText}
                  </h3>
                  <div className="w-[90%] m-auto">
                    <p className="text-[14px]">{imageArray[index].paragraph}</p>
                  </div>
                  <Link to={imageArray[index].navigatePath}>
                    <button className="text-white mt-2 bg-black hover:bg-transparent border border-black rounded-sm px-3 py-2 hover:border hover:border-black transition duration-700 ease-in-out hover:text-black">
                      Get Started Here
                    </button>
                  </Link>
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
            have been positively impacted by Achariya Debtauua guidance and
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
