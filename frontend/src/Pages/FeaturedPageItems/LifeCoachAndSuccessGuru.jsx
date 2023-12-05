import React from "react";
import BottomNavbar from "../../components/BottomNavbar";
import TopNavbar from "../../components/TopNavbar";
import banner3 from "../../images/sliderImages/slide2.jpg";
import { Link } from "react-router-dom";
import feature3 from "../../images/alldebdatta-images/feature3.jpg";
import Footer from "../../components/Footer";

const LifeCoachAndSuccessGuru = () => {
  const imageArray = [
    {
      id: 3,
      image: feature3,
      HeadText: "Life Coach and Success Guru",
      paragraph1:
        "Elevate your essence with a coaching journey: sculpt your style, infuse substance, and claim the trio of Power, Peace, and Prosperity.",
      paragraph2:
        "“Spark your brilliance, own your journey. I guide, you conquer. Transformative success, step into radiance. Embrace your power, thrive in fulfillment.”",
      paragraph3:
        ", seize your power. Transformative guidance for unstoppable success. Your journey to radiance and fulfillment begins today!",
      paragraph4:
        "Just as a dormant seed holds the potential for a vibrant bloom, the reservoir of understanding and wisdom resides within. Nurturing this internal garden requires a guide, someone to accompany you on the journey inward and unearth the treasures of innate power and knowledge. Picture each coaching session as a tailored compass, steering you towards blossoming in both personal and professional realms. ",
      paragraph5:
        "Unlock your inner potential and wisdom with a seasoned guide on a transformative journey. In each coaching session, we tailor a path for your personal and professional flourishing. Drawing from two decades of experience, I aim to harmonize your life for holistic well-being. Together, we navigate towards claiming your might, seizing control of endeavors, and fostering growth.",
      paragraph6:
        "Let the spark of knowledge illuminate your mental space, paving the way for a purposeful and successful life. Join me on this enriching journey to radiance and fulfillment.",
    }
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
          Life Coach and Success Guru
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

export default LifeCoachAndSuccessGuru;
