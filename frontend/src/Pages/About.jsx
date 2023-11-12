import React from "react";

const About = () => {
  return (
    <div className=" px-10 bg-white absolute w-full mt-[-400px]">
      <div className="mt-10 pb-10">
        <h3 className="font-philosopher text-xl">About Me</h3>
        <h3 className="font-dancing text-[20px] leading-9">Namaste!</h3>

        <div className=" flex flex-col md:flex-row justify-between">
          <div className=" w-full md:w-[50%] px-3 sm:mb-10 text-popp">
            <p>
              When I meet people, I want to know the ideas which prevail on
              their respective minds, their journey, their experiences and
              lessons. I often think, wouldn't it be the same for them to want
              to know me. So as we all march ahead, my passage through time so
              far, here I wish to share with you.
            </p>{" "}
            <br />
            <p>
              Born and brought up in Delhi (India), I was always spiritually
              bent. Childhood days saw me intrigued by the nature of things and
              experiences around, which found me interested in feeling and
              understanding the vibes of people and places.
            </p>{" "}
            <br />
            <p>
              Religious, as most of the Indians are, I found my solace in
              prayers and meditation.
            </p>{" "}
            <br />
            <button className="text-white bg-black hover:bg-transparent border border-black rounded-sm px-3 py-2 hover:border hover:border-black transition duration-700 ease-in-out hover:text-black">
              Know More
            </button>
          </div>
          {/* <div className=" w-full md:w-[40%] flex items-center mt-16 md:mt-[-50px]"> */}
          <div className="w-full md:w-[40%] flex items-center mt-16 sm:mt-8 md:mt-[-50px]">
            <div className="border-2 border-green-200 rounded-3xl w-[300px] relative overflow-hidden">
              <img
                src="http://jaimadaan.com/images/promo-2.png"
                className="w-full h-auto rounded-3xl"
                alt=""
              />
            </div>
            <div className="border-2 border-green-200 rounded-3xl w-[300px] relative overflow-hidden -ml-[220px] -mt-28">
              <img
                src="http://jaimadaan.com/images/promo-2.png"
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
