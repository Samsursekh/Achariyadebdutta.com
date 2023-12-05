import React from "react";
import BottomNavbar from "../../components/BottomNavbar";
import TopNavbar from "../../components/TopNavbar";
import banner3 from "../../images/sliderImages/slide2.jpg";
import { Link } from "react-router-dom";
import feature5 from "../../images/alldebdatta-images/feature5.jpg";
import Footer from "../../components/Footer";

const Numerology = () => {
  const imageArray = [
    {
      id: 5,
      image: feature5,
      HeadText: "Numerology",
      paragraph1:
        "When questions linger, Numerology brings answers, leading you from uncertainty to tranquillity.",
      paragraph2:
        "“Embark on a heartfelt journey with Numerology's embrace. Let its whispers guide you to love , navigate life, and bask in the glow of success. Your personal magic code for a thriving and meaningful existence.”",
      paragraph3: "",
      paragraph4:
        "Embark on a fascinating journey through Numerology, where numbers become keys to unlocking the universe's enigmas.",
      paragraph5:
        "Each digit carries a cosmic resonance, echoing through your past, present, and future. In personalized Numerology sessions, unravel the intricate codes of your life, finding clarity amidst complexity.",
      paragraph6:
        "Let the magic of numbers guide your relationships, fuel your progress, and anchor your professional success. It's not just about numbers; it's about unveiling the cosmic symphony of your existence.",
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
          Numerology
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
export default Numerology;
