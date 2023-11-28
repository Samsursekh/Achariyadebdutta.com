import React from "react";
import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BottomNavbar";
import Footer from "../components/Footer";
import feature1 from "../images/alldebdatta-images/feature1.jpg";
import feature2 from "../images/alldebdatta-images/feature2.jpg";
import feature3 from "../images/alldebdatta-images/feature3.jpg";
import feature4 from "../images/alldebdatta-images/feature4.jpg";
import feature5 from "../images/alldebdatta-images/feature5.jpg";
import feature6 from "../images/alldebdatta-images/feature6.jpg";

const Services = () => {
  const imageArray = [
    feature1,
    feature2,
    feature5,
    feature4,
    feature6,
    feature3,
  ];

  return (
    <section>
      <div className="hidden md:block">
        <TopNavbar />
      </div>
      <div className="bg-blue-900 h-[70px]">
        <BottomNavbar className="text-black" />
      </div>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center w-full m-auto mt-4 relative">
        <div className="px-3 py-3 border relative group transition-opacity duration-700 ease-in-out hover:shadow-xl">
          <div className="relative">
            <img src={feature1} alt="" className="m-auto object-cover" />

            {/* Display text on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-70 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out">
              <div className="text-white">
                <p className="text-center">Birth Journal (Kundli)</p>
                <div className="w-[90%]">
                  <p className="text-xs sm:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Odit, similique?
                  </p>
                </div>
                <button className="mt-4 px-3 py-2 rounded-sm bg-blue-700 text-white border border-blue-700 hover:bg-transparent hover:text-blue-500 hover:border-blue-900 transition duration-700 ease-in-out">
                  Get Started Here
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 py-3 border relative group transition-opacity duration-700 ease-in-out hover:shadow-xl">
          <div className="relative">
            <img src={feature2} alt="" className="m-auto object-cover" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-70 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out">
              <div className="text-white">
                <p className="text-center">Birth Journal (Kundli)</p>
                <div className="w-[90%]">
                  <p className="text-xs sm:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Odit, similique?
                  </p>
                </div>
                <button className="mt-4 px-3 py-2 rounded-sm bg-blue-700 text-white border border-blue-700 hover:bg-transparent hover:text-blue-500 hover:border-blue-900 transition duration-700 ease-in-out">
                  Get Started Here
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 py-3 border relative group transition-opacity duration-700 ease-in-out hover:shadow-xl">
          <div className="relative">
            <img src={feature6} alt="" className="m-auto object-cover" />

            {/* Display text on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-70 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out">
              <div className="text-white">
                <p className="text-center">Birth Journal (Kundli)</p>
                <div className="w-[90%]">
                  <p className="text-xs sm:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Odit, similique?
                  </p>
                </div>
                <button className="mt-4 px-3 py-2 rounded-sm bg-blue-700 text-white border border-blue-700 hover:bg-transparent hover:text-blue-500 hover:border-blue-900 transition duration-700 ease-in-out">
                  Get Started Here
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 py-3 border relative group transition-opacity duration-700 ease-in-out hover:shadow-xl">
          <div className="relative">
            <img src={feature4} alt="" className="m-auto object-cover" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-70 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out">
              <div className="text-white">
                <p className="text-center">Birth Journal (Kundli)</p>
                <div className="w-[90%]">
                  <p className="text-xs sm:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Odit, similique?
                  </p>
                </div>
                <button className="mt-4 px-3 py-2 rounded-sm bg-blue-700 text-white border border-blue-700 hover:bg-transparent hover:text-blue-500 hover:border-blue-900 transition duration-700 ease-in-out">
                  Get Started Here
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 py-3 border relative group transition-opacity duration-700 ease-in-out hover:shadow-xl">
          <div className="relative">
            <img src={feature5} alt="" className="m-auto object-cover" />

            {/* Display text on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-70 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out">
              <div className="text-white">
                <p className="text-center">Birth Journal (Kundli)</p>
                <div className="w-[90%]">
                  <p className="text-xs sm:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Odit, similique?
                  </p>
                </div>
                <button className="mt-4 px-3 py-2 rounded-sm bg-blue-700 text-white border border-blue-700 hover:bg-transparent hover:text-blue-500 hover:border-blue-900 transition duration-700 ease-in-out">
                  Get Started Here
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 py-3 border relative group transition-opacity duration-700 ease-in-out hover:shadow-xl">
          <div className="relative">
            <img src={feature3} alt="" className="m-auto object-cover" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-70 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out">
              <div className="text-white">
                <p className="text-center">Birth Journal (Kundli)</p>
                <div className="w-[90%]">
                  <p className="text-xs sm:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Odit, similique?
                  </p>
                </div>
                <button className="mt-4 px-3 py-2 rounded-sm bg-blue-700 text-white border border-blue-700 hover:bg-transparent hover:text-blue-500 hover:border-blue-900 transition duration-700 ease-in-out">
                  Get Started Here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </section>
  );
};

export default Services;
