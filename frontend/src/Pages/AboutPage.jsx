import React from "react";
import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BottomNavbar";
import Footer from "../components/Footer";
import feature6 from "../images/alldebdatta-images/feature3.jpg";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <div className="hidden md:block">
        <TopNavbar />
      </div>
      <div className="bg-blue-900 h-[70px]">
        <BottomNavbar className="text-black" />
      </div>
      <div className="  bg-white absolute w-full">
        <div className="mt-10 pb-10 px-8 ">
          <h3 className="font-philosopher text-xl pl-3 font-bold">About Me</h3>
          <h3 className="font-dancing text-[20px] leading-9 pl-3 ">
            Namaskar!
          </h3>

          <div className=" flex flex-col md:flex-row justify-between text-gray-700 leading-relaxed">
            <div className=" w-full md:w-[50%] px-3 sm:mb-10 text-popp">
              <p>
                As I extend my warm greetings, I invite you to delve into the
                tapestry of my life's journey. My name is Achariya Debdutta, a
                seasoned professional in the realms of astrology, vastu
                consultancy, numerology, success coaching, and authorship. With
                an enriching experience spanning 21 years, I've dedicated my
                life to unraveling the mysteries of existence and guiding others
                toward a harmonious and prosperous life.
              </p>
              <br />
              <p>
                Born and raised in the culturally rich city of Kolkata, West
                Bengal, my roots are deeply embedded in the spiritual essence of
                India.
              </p>
              <br />
              <p>
                From the early days of my childhood, I felt a profound
                connection to the metaphysical aspects of life, a calling that
                would shape my destiny.
              </p>
              <br />
            </div>
            <div className="w-full md:w-[40%] flex items-center mt-16 sm:mt-8 md:mt-[-50px]">
              <div className="border-2 border-green-200 rounded-3xl w-[300px] h-auto relative overflow-hidden bg-black/20">
                <img
                  src={feature6}
                  className="w-full h-auto rounded-3xl"
                  alt=""
                />
              </div>
              <div className="border-2 border-green-200 rounded-3xl w-[300px] h-auto relative overflow-hidden -ml-[220px] -mt-28">
                <img
                  src={feature6}
                  className="w-full h-auto rounded-3xl"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" pb-10 px-10 m-auto">
          <p className=" text-gray-700 leading-relaxed">
            In the vibrant streets of Kolkata, amidst the hustle and bustle, I
            discovered my spiritual inclination. The diverse experiences and the
            cultural mosaic of the city fuelled my curiosity, leading me to
            explore the intricacies of understanding the vibes of people and
            places. Religious practices, a cornerstone of Indian culture, became
            my refuge during my formative years. Prayer and meditation emerged
            as pillars of solace, laying the foundation for a deeper exploration
            of the mystical arts. My journey into astrology began with an innate
            intuition that guided me to explore the intricate world of
            predicting personalities and glimpses into the future. The pursuit
            of knowledge led me to focus on astrology, a discipline that
            continues to be a guiding light in my life.
          </p>{" "}
          <br />
          <p>
            In addition to my spiritual pursuits, I pursued Honours in
            Philosophy, enriching my understanding of life's philosophical
            underpinnings. The integration of academic knowledge with spiritual
            wisdom formed the cornerstone of my approach to life. During my
            college years, a natural fondness for imparting knowledge led me to
            give tuition at a coaching academy. This effortless exchange of
            knowledge laid the groundwork for what brings you and me here—a
            shared quest for bliss.
          </p>{" "}
          <br />
          <p>
            In the grand tapestry of existence, I acknowledge God as my eternal
            teacher, and the Universe as my guiding force. Insights, courage,
            and wisdom assimilated over the years empower me to fulfill the
            noble purpose of spreading knowledge. My mission is to kindle hope
            in humanity, offering the keys to solving life's puzzles through
            astrology, Vastu, and palmistry. These ancient sciences, when
            understood and applied, unlock abundance for all.
          </p>{" "}
          <br />
          <h3 className="font-sans italic font-bold text-xl">
            - Astro Achariya Debdutta
          </h3>
        </div>
        {/* Mission and vision starts here  */}
        <div className="grid md:flex lg:flex m-auto mb-7 font-sans w-[70%] gap-4">
          <div className=" m-auto bg-purple-600 text-center p-4 w-full rounded-br-3xl rounded-tl-3xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 font-philosopher text-center">
              Mission
            </h1>
            <p className="text-white font-poppains">
              Empower All Through Astrology & Palmistry Wisdom.
            </p>
          </div>

          <div className=" m-auto bg-purple-600 text-center p-4 w-full rounded-bl-3xl rounded-tr-3xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 font-philosopher text-center">
              Vision
            </h1>
            <p className="text-white font-poppins">
              Crafting Better Lives with Astrological Solutions.
            </p>
          </div>
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
