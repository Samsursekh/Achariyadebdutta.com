import React, { useEffect, useState } from "react";
import slide1 from "../images/sliderImages/slide1.jpg";
import slide2 from "../images/sliderImages/slide2.jpg";
import slide3 from "../images/sliderImages/slide3.jpg";
import slide4 from "../images/sliderImages/slide4.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const ifLastSlide = currentIndex === slides.length - 1;
    const newIndex = ifLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlides = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slides = [
    {
      url: slide1,
      title: "Nature 1",
    },
    {
      url: slide2,
      title: "nature 2",
    },
    {
      url: slide3,
      title: "nature 3",
    },
    {
      url: slide4,
      title: "nature 4",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex =
        currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, slides.length]);

  return (
    <div className="max-w-[1400px] h-[380px] w-full m-auto py-3 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft size={30} onClick={prevSlide} />
      </div>

      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight size={30} onClick={nextSlide} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            className="text-2xl cursor-pointer"
            key={slideIndex}
            onClick={() => goToSlides(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
