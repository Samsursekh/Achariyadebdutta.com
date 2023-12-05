import React from "react";
import BottomNavbar from "../../components/BottomNavbar";
import TopNavbar from "../../components/TopNavbar";
import banner3 from "../../images/sliderImages/slide2.jpg";
import { Link } from "react-router-dom";
import feature2 from "../../images/alldebdatta-images/feature2.jpg";
import Footer from "../../components/Footer";

const AstroVastuConsultancy = () => {
  const imageArray = [
    {
      id: 2,
      image: feature2,
      HeadText: "Astro Vastu Consultancy",
      paragraph1:
        "Dance through life's energies—immerse yourself in the vibrant hues of happiness.",
      paragraph2:
        "“Craft your space, paint with purpose. Your palette, your floor – energy architects. Choose shades, sculpt growth. Vastu aligns, energy defines.”",
      paragraph3:
        "In the dance of energies within your living or working space, the fusion of Astrology and Vastu Shastra creates a tapestry of optimal support. Elevate your surroundings with a personalized Astro Vastu session, aligning forces that nurture robust health, enrich relationships, usher in success, and foster peace and prosperity",
      paragraph4:
        "Let your habitat resonate with harmonious vibrations, cultivating an environment where bliss and growth effortlessly intertwine.",
      paragraph5:
        "Experience the synergy of celestial wisdom and spatial prudence for a thriving and prosperous abode.",
      paragraph6: "",
    },
  ];
  return (
    <section>
      <div className="hidden md:block">
        <TopNavbar />
      </div>
      <div className="bg-black h-[70px]">
        <BottomNavbar className="text-black" />
      </div>
      <div className="w-full">
        <img
          src={banner3}
          alt="banner image"
          className="h-[50vh] object-cover w-full"
        />
      </div>
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl mt-7 font-semibold mb-4 font-philosopher text-center">
          Astro Vastu Consultancy
        </h1>
      </div>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 text-center w-[90%] m-auto">
        {imageArray.map((item, index) => {
          return (
            <div className="m-auto border-2 w-[100%] h-auto px-7" key={item.id}>
              <img
                src={item.image}
                alt="feature image"
                className="w-[300px] m-auto rounded-full my-4"
              />
              {/* <h3 className="font-bold text-xl my-3">{item.HeadText}</h3> */}
              <p className="text-gray-500">{item.paragraph1}</p>
              <p className="text-gray-800 my-4 font-bold">{item.paragraph2}</p>
              <p className="text-gray-500 my-3">{item.paragraph3}</p>
              <p className="text-gray-500 my-3">{item.paragraph4}</p>
              <p className="text-gray-500 my-3">{item.paragraph5}</p>
              <p className="text-gray-500 my-3">{item.paragraph6}</p>
              <Link to={"/appointment"}>
                <button className="text-white my-5 bg-black hover:bg-transparent border border-black rounded-sm px-3 py-2 hover:border hover:border-black hover:text-black transition duration-700 ease-in-out">
                  Get Started Here
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </section>
  );
};

export default AstroVastuConsultancy;
