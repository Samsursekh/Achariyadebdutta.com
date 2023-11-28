import React from "react";
import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BottomNavbar";
import mbanner2 from "../images/alldebdatta-images/mbanner2.jpg";
import Footer from "../components/Footer";
import { MdEmojiEvents } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";

const Awards = () => {
  return (
    <>
      <div className="hidden md:block">
        <TopNavbar />
      </div>
      <div className="bg-blue-900 h-[70px]">
        <BottomNavbar className="text-black" />
      </div>
      <div className="m-auto mt-3">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center">
          Awards & Accolades
        </h1>
      </div>
      <div className="grid md:flex lg:flex m-auto w-[90%] mt-4 mb-6 gap-4">
        <div className="m-auto w-[90%] md:w-[85%] lg:w-[80%] px-4">
          <img src={mbanner2} alt="image" className="w-full" />
        </div>
        <div className="grid md:flex lg:flex m-auto font-sans w-[90%] md:w-[85%] lg:w-[80%] gap-4 px-4 ">
          <div className="border w-full px-3 py-4 m-auto hover:shadow-xl  transition duration-700 ease-in-out">
            <hr className="border border-s-violet-400 w-[95%] border-gray-300 my-4 m-auto" />
            <div className="flex justify-evenly items-center px-2 ">
              <MdEmojiEvents size={36} />
              <div className=" pl-5">
                <h3>
                  <strong>Sign01 January, 2017 </strong>
                </h3>{" "}
                <p>
                  <span className="font-bold">
                    Most Prominent Wedding Astrologer
                  </span>{" "}
                  by Ravishing (2014){" "}
                </p>
              </div>
            </div>

            <hr className="border border-s-violet-400 w-[95%] border-gray-300 my-4 m-auto" />
            <div className="flex justify-evenly items-center px-2 ">
              <MdEmojiEvents size={36} />
              <div className=" pl-5">
                <h3>
                  <strong>Sign01 January, 2017 </strong>
                </h3>{" "}
                <p>
                  <span className="font-bold">
                    Most Prominent Wedding Astrologer
                  </span>{" "}
                  by Ravishing (2014){" "}
                </p>
              </div>
            </div>

            <hr className="border border-s-violet-400 w-[95%] border-gray-300 my-4 m-auto" />
            <div className="flex justify-evenly items-center px-2 ">
              <MdEmojiEvents size={36} />
              <div className=" pl-5">
                <h3>
                  <strong>Sign01 January, 2017 </strong>
                </h3>{" "}
                <p>
                  <span className="font-bold">
                    Most Prominent Wedding Astrologer
                  </span>{" "}
                  by Ravishing (2014){" "}
                </p>
              </div>
            </div>
            <hr className="border border-s-violet-400 w-[95%] border-gray-300 my-4 m-auto" />
            <div className="flex justify-evenly items-center px-2 ">
              <MdEmojiEvents size={36} />
              <div className=" pl-5">
                <h3>
                  <strong>Sign01 January, 2017 </strong>
                </h3>{" "}
                <p>
                  <span className="font-bold">
                    Most Prominent Wedding Astrologer
                  </span>{" "}
                  by Ravishing (2014){" "}
                </p>
              </div>
            </div>

            <hr className="border border-s-violet-400 w-[95%] border-gray-300 my-4 m-auto" />
            <div className="flex justify-evenly items-center px-2 ">
              <GiAchievement size={36} />
              <div className=" pl-5">
                <h3>
                  <strong>Sign01 January, 2017 </strong>
                </h3>{" "}
                <p>
                  <span className="font-bold">
                    Most Prominent Wedding Astrologer
                  </span>{" "}
                  by Ravishing (2014){" "}
                </p>
              </div>
            </div>

            <hr className="border border-s-violet-400 w-[95%] border-gray-300 my-4 m-auto" />
            <div className="flex justify-evenly items-center px-2 ">
              <GiAchievement size={36} />
              <div className=" pl-5">
                <h3>
                  <strong>Sign01 January, 2017 </strong>
                </h3>{" "}
                <p>
                  <span className="font-bold">
                    Most Prominent Wedding Astrologer
                  </span>{" "}
                  by Ravishing (2014){" "}
                </p>
              </div>
            </div>

            <hr className="border border-s-violet-400 w-[95%] border-gray-300 my-4 m-auto" />
            <div className="flex justify-evenly items-center px-2 ">
              <GiAchievement size={36} />
              <div className=" pl-5">
                <h3>
                  <strong>Sign01 January, 2017 </strong>
                </h3>{" "}
                <p>
                  <span className="font-bold">
                    Most Prominent Wedding Astrologer
                  </span>{" "}
                  by Ravishing (2014){" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Awards;
