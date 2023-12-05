import React from "react";
import BottomNavbar from "../../components/BottomNavbar";
import TopNavbar from "../../components/TopNavbar";
import banner3 from "../../images/sliderImages/slide2.jpg";
import { Link } from "react-router-dom";
import feature6 from "../../images/alldebdatta-images/feature6.jpg";
import Footer from "../../components/Footer";

const FaceReading = () => {
  const imageArray = [
    {
      id: 6,
      image: feature6,
      HeadText: "Face Reading",
      paragraph1:
        "Master face reading for heightened decision-making wisdom. Unveil allure and insist on your success with serene confidence.",
      paragraph2:
        "“Decode minds, grasp insights, understand deeply, succeed significantly—read faces for the keys to greater success.”",
      paragraph3: "The face reflects the thoughts within",
      paragraph4:
        "Our face, a sophisticated visage, mirrors our unique journey, encapsulating traits and decisions. Linked through the seventh cranial nerve, it records karma and predispositions. Physiognomy decodes these nuances, offering a comprehensive status report—physical, mental, emotional, and spiritual.",
      paragraph5:
        "Amidst lines and expressions lie unseen facets, awaiting revelation. Mastering facial components becomes a potent tool, unraveling mental landscapes for strategic advantages in professional realms. This profound insight fosters success in collaborations, whether coaching entrepreneurs or structured organizations.",
      paragraph6:
        "Believing in the candle's illuminating power, I share this knowledge with varied entities. Equipping with facial analysis basics isn't just pragmatic; it optimizes decision-making, creating reliable, accountable teams for optimal outcomes. It's not a lengthy strategy; it's a concise navigation tool for success.",
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
          Face Reading
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

export default FaceReading;
