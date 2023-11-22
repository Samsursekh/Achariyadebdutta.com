import React from "react";
import feature6 from "../images/alldebdatta-images/feature6.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className=" px-10 bg-white absolute w-full mt-[-400px]">
      <div className="mt-10 pb-10">
        <h3 className="font-philosopher text-xl">About Me</h3>
        <h3 className="font-dancing text-[20px] leading-9">Namaskar!</h3>
        <div className=" flex flex-col md:flex-row justify-between">
          <div className=" w-full md:w-[50%] px-3 sm:mb-10 text-popp">
            <p>
              As I extend my warm greetings, I invite you to delve into the
              tapestry of my life's journey. My name is Achariya Debdutta, a
              seasoned professional in the realms of astrology, vastu
              consultancy, numerology, success coaching, and authorship. With an
              enriching experience spanning 21 years, I've dedicated my life to
              unraveling the mysteries of existence and guiding others toward a
              harmonious and prosperous life.
            </p>
            <br />
            <p>
              Born and raised in the culturally rich city of Kolkata, West
              Bengal, my roots are deeply embedded in the spiritual essence of
              India.
            </p>
            <br />
            <p>
              From the early days of my childhood, I felt a profound connection
              to the metaphysical aspects of life, a calling that would shape my
              destiny.
            </p>
            <br />
            <Link to={"/about-page"}>
              <button className="text-white bg-black hover:bg-transparent border border-black rounded-sm px-3 py-2 hover:border hover:border-black transition duration-700 ease-in-out hover:text-black">
                Know More
              </button>
            </Link>
          </div>
          <div className="w-full md:w-[40%] flex items-center mt-16 sm:mt-8 md:mt-[-50px]">
            <div className="border-2 border-green-200 rounded-3xl w-[300px] h-auto relative overflow-hidden bg-black/20">
              <img
                src={feature6}
                className="w-full h-auto rounded-3xl"
                alt=""
              />
            </div>
            <div className="border-2 border-green-200 rounded-3xl w-[300px] h-auto relative overflow-hidden -ml-[220px] -mt-28">
              <img
                src={feature6}
                className="w-full h-auto rounded-3xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
