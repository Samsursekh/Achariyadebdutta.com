import React from "react";
import banner3 from "../images/banner3.jpg";
import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BottomNavbar";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";

const Events = () => {
  return (
    <section>
      <div className="hidden md:block">
        <TopNavbar />
      </div>
      <div className="bg-black/30 h-[70px]">
        <BottomNavbar className="text-black" />
      </div>
      <div className="w-full">
        <img src={banner3} alt="banner image" className="h-[85vh] object-cover w-full" />
      </div>
      <div>
        {/* image slider started here */}
        <ImageSlider />
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </section>
  );
};

export default Events;
