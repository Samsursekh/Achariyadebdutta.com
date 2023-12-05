import React from "react";
import BottomNavbar from "../../components/BottomNavbar";
import TopNavbar from "../../components/TopNavbar";
import banner3 from "../../images/sliderImages/slide2.jpg";
import { Link } from "react-router-dom";
import feature4 from "../../images/alldebdatta-images/feature4.jpg";
import Footer from "../../components/Footer";

const Palmistry = () => {
  const imageArray = [
    {
      id: 4,
      image: feature4,
      HeadText: "Palmistry",
      paragraph1:
        "Trace the echoes of your destiny in the lines of your hands; let the journey begin towards a future woven with blissful possibilities.",
      paragraph2:
        "“In the rhythm of your workplace, your hand is the brushstroke crafting success”",
      paragraph3:
        "In the heart of your kitchen, it orchestrates the symphony of flavors.",
      paragraph4:
        "On the road, it steers your adventure. On your Mobile Screen, it dances with digital dreams. Yet, within its lines, your hand cradles the script of your being and future.",
      paragraph5:
        "Unearth the connection; let Palmistry reveal the whispers of your life's symphony.",
      paragraph6:
        "Interpreting the physical nuances of hands, palmistry is an art that decodes personality traits and foretells future trajectories. Within this mystic practice, each hand resonates with an elemental archetype: earth, air, fire, or water. By scrutinizing the intricacies of your hand, we unveil latent potential—a toolkit for self-discovery and empowerment. This esoteric journey guides you toward a future characterized by profound fulfillment, harnessing the unique energies imprinted in the palms of your hands.",
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
          Palmistry
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

export default Palmistry;
