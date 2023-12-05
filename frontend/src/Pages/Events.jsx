import React from "react";
import banner3 from "../images/alldebdatta-images/banner3.jpg";
import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BottomNavbar";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import EventsTextSlider from "../components/EventsTextSlider";

const Events = () => {
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
          className="h-[85vh] object-cover w-full"
        />
      </div>
      <div>
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl mt-7 font-semibold mb-4 font-philosopher text-center">
            Events
          </h1>
        </div>
        <EventsTextSlider />
        {/* image slider started here */}
        <ImageSlider />
        {/* image slider ended here */}

      </div>
      <div className="text-center bg-fuchsia-700 mt-6 py-5 text-white w-full px-3">
        <p className="font-poppins">
          To discuss how Dr. Pablo can bring inspiration and enlightenment to
          your gathering.
        </p>
        <h3 className="font-poppins text-2xl">
          Contact Us at: +91 XXXXXXXX / +91 XXXXXXXX
        </h3>
      </div>
      <div className="mt-7">
        <Footer />
      </div>
    </section>
  );
};

export default Events;
