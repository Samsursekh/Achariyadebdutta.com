import React from "react";
import BottomNavbar from "../../components/BottomNavbar";
import TopNavbar from "../../components/TopNavbar";
import banner3 from "../../images/sliderImages/slide2.jpg";
import { Link } from "react-router-dom";
import feature1 from "../../images/alldebdatta-images/feature1.jpg";
import Footer from "../../components/Footer";

const AstroBirthChartReformation = () => {
  const imageArray = [
    {
      id: 1,
      image: feature1,
      HeadText: "Astro Birth Chart Reformation",
      paragraph1:
        "Discover the mysteries of your life's path with a profound examination of your birth chart.",
      paragraph2:
        "“In the complex tapestry of life, challenges can burn like a relentless wildfire. Yet, astrological remedies emerge as a soothing river, bringing fruitful serenity amidst the blaze of adversity.”",
      paragraph3:
        "Embark on a celestial journey, unraveling the cosmic choreography of your birth chart—a mystic script inscribed in the stars. This astrological expedition unveils the cosmic influences sculpting your path, an intricate dance of planets shaping your story.",
      paragraph4:
        "Decode the celestial cipher embedded in your birth moment, revealing the clandestine orchestrations of fate—both benevolent and challenging. Astrology, a cosmic storyteller, illuminates the strengths bestowed by astral energies, fostering clarity for mindful decisions.",
      paragraph5:
        "Life's tempest may rage unabated, but within the folds of astral remedies lies a resilient haven. As you weather the storm, these remedies stand as a cosmic umbrella, safeguarding your well-being. In personalized consultations, your horoscope becomes a narrative, a bespoke cosmic dialogue where concerns find expression, and hope becomes an enduring companion.",
      paragraph6:
        "In this cosmic odyssey, transcend the ordinary and discover profound revelations etched in the celestial tapestry. The astral tableau is not just a chart; it's a living narrative, a cosmic whisper guiding you. Uncover the secrets within, for in their revelation lies the key to understanding, resilience, and a connection with the cosmos. ",
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
          Astro Birth Chart Reformation
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

export default AstroBirthChartReformation;
