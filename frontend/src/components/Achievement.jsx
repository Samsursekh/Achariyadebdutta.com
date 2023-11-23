import React from "react";
import { GiAchievement } from "react-icons/gi";
import { MdEmojiEvents } from "react-icons/md";

const Achievement = () => {
  return (
    <>
      <div className="text-center mt-20">
        <h1 className=" text-2xl md:text-3xl lg:text-4xl m-3 font-philosopher">
          MY JOURNEY
        </h1>
        <h3 className="font-dancing text-xl text-slate-500">
          ...what you seek, seeks you
        </h3>
        <div className="m-auto px-3 text-slate-400 font-sans w-[90%] md:w-[70%] lg:w-[50%] mt-3">
          <p>Embarking on a spiritual odyssey in childhood, </p>
          <p>
            I cultivated a deep passion for astrology and palm reading. Rigorous
            meditation birthed my professional journey in astrology, palmistry,
            numerology, and Vastu.
          </p>
          <p>
            Beyond providing comfort, my services reflect a life well-lived. In
            times of joy, may we all find support. Welcome to a journey where
            spirituality meets practical wisdom.
          </p>
        </div>
      </div>

      <div className="grid md:flex lg:flex mt-10 m-auto mb-7 font-sans w-[90%] gap-4">
        <div className="border w-[90%] px-3 py-4 m-auto">
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

        <div className="border w-[90%] px-3 py-4 m-auto">
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
            <MdEmojiEvents  size={36} />
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
            <MdEmojiEvents  size={36} />
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
    </>
  );
};

export default Achievement;
