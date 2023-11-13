import React, { useState } from "react";
import Achievement from "./Achievement";
import FeaturedVideoEmbed from "./FeaturedVideoEmbed";
import About from "../Pages/About";
import Footer from "./Footer";
import "../App.css";

const FeaturedServices = () => {

  // const [isFlipped, setIsFlipped] = useState(false);

  // const handleFlip = () => {
  //   setIsFlipped(!isFlipped);
  // };

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
          className={`border px-3 py-3 ${isFlipped ? 'flipped' : ''}`}
          onMouseEnter={() => handleFlip(index)}
          onMouseLeave={() => handleFlip(index)}
        >
          <div className={`flipper ${isFlipped ? 'flipped' : ''}`}>
            <div className="front">
              <img
                src="https://images.pexels.com/photos/23547/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="m-auto object-cover"
              />
            </div>
            <div className="back">
              <p className="text-center m-auto">Birth Journal (Kundli)</p>
              <div className="w-[90%]">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, similique?
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
        {/* <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center w-[90%] m-auto border-2 border-red-500 relative">
          <div
            className={` px-3 py-3 border-2 ${isFlipped ? 'flipped' : ''}`}
            onMouseEnter={handleFlip}
            onMouseLeave={handleFlip}
          >
            <div className={`flipper ${isFlipped ? 'flipped' : ''}`}>
              <div className="front">
                <img
                  src="https://images.pexels.com/photos/23547/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="m-auto object-cover"
                />

              </div>
              <div className="back">
                <p className="text-center m-auto">Birth Journal (Kundli)</p>
                <div className="w-[90%]">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, similique?
                  </p>
                </div>
                <button className="text-white mt-2 bg-black hover:bg-transparent border border-black rounded-sm px-3 py-2 hover:border hover:border-black transition duration-700 ease-in-out hover:text-black">
                  Get Started Here
                </button>
              </div>
            </div>
          </div>

          <div
            className={` px-3 py-3 border-2 ${isFlipped ? 'flipped' : ''}`}
            onMouseEnter={handleFlip}
            onMouseLeave={handleFlip}
          >
            <div className={`flipper ${isFlipped ? 'flipped' : ''}`}>
              <div className="front">
                <img
                  src="https://images.pexels.com/photos/23547/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="m-auto object-cover"
                />

              </div>
              <div className="back">
                <p className="text-center m-auto">Birth Journal (Kundli)</p>
                <div className="w-[90%]">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, similique?
                  </p>
                </div>
                <button className="text-white mt-2 bg-black hover:bg-transparent border border-black rounded-sm px-3 py-2 hover:border hover:border-black transition duration-700 ease-in-out hover:text-black">
                  Get Started Here
                </button>
              </div>
            </div>
          </div>

          <div
            className={` px-3 py-3 border-2 ${isFlipped ? 'flipped' : ''}`}
            onMouseEnter={handleFlip}
            onMouseLeave={handleFlip}
          >
            <div className={`flipper ${isFlipped ? 'flipped' : ''}`}>
              <div className="front">
                <img
                  src="https://images.pexels.com/photos/23547/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="m-auto object-cover"
                />

              </div>
              <div className="back">
                <p className="text-center m-auto">Birth Journal (Kundli)</p>
                <div className="w-[90%]">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, similique?
                  </p>
                </div>
                <button className="text-white mt-2 bg-black hover:bg-transparent border border-black rounded-sm px-3 py-2 hover:border hover:border-black transition duration-700 ease-in-out hover:text-black">
                  Get Started Here
                </button>
              </div>
            </div>
          </div>

          <div
            className={` px-3 py-3 border-2 ${isFlipped ? 'flipped' : ''}`}
            onMouseEnter={handleFlip}
            onMouseLeave={handleFlip}
          >
            <div className={`flipper ${isFlipped ? 'flipped' : ''}`}>
              <div className="front">
                <img
                  src="https://images.pexels.com/photos/23547/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="m-auto object-cover"
                />

              </div>
              <div className="back">
                <p className="text-center m-auto">Birth Journal (Kundli)</p>
                <div className="w-[90%]">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, similique?
                  </p>
                </div>
                <button className="text-white mt-2 bg-black hover:bg-transparent border border-black rounded-sm px-3 py-2 hover:border hover:border-black transition duration-700 ease-in-out hover:text-black">
                  Get Started Here
                </button>
              </div>
            </div>
          </div>

          <div
            className={` px-3 py-3 border-2 ${isFlipped ? 'flipped' : ''}`}
            onMouseEnter={handleFlip}
            onMouseLeave={handleFlip}
          >
            <div className={`flipper ${isFlipped ? 'flipped' : ''}`}>
              <div className="front">
                <img
                  src="https://images.pexels.com/photos/23547/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="m-auto object-cover"
                />

              </div>
              <div className="back">
                <p className="text-center m-auto">Birth Journal (Kundli)</p>
                <div className="w-[90%]">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, similique?
                  </p>
                </div>
                <button className="text-white mt-2 bg-black hover:bg-transparent border border-black rounded-sm px-3 py-2 hover:border hover:border-black transition duration-700 ease-in-out hover:text-black">
                  Get Started Here
                </button>
              </div>
            </div>
          </div>

          <div
            className={` px-3 py-3 border-2 ${isFlipped ? 'flipped' : ''}`}
            onMouseEnter={handleFlip}
            onMouseLeave={handleFlip}
          >
            <div className={`flipper ${isFlipped ? 'flipped' : ''}`}>
              <div className="front">
                <img
                  src="https://images.pexels.com/photos/23547/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="m-auto object-cover"
                />

              </div>
              <div className="back">
                <p className="text-center m-auto">Birth Journal (Kundli)</p>
                <div className="w-[90%]">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, similique?
                  </p>
                </div>
                <button className="text-white mt-2 bg-black hover:bg-transparent border border-black rounded-sm px-3 py-2 hover:border hover:border-black transition duration-700 ease-in-out hover:text-black">
                  Get Started Here
                </button>
              </div>
            </div>
          </div>
        </div> */}

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
