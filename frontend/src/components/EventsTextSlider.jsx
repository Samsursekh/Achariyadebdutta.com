import React, { useEffect, useState } from "react";

const EventsTextSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  const slides = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      title: "Nature 1",
    },
    {
      text: "Another piece of text for nature 2.",
      title: "nature 2",
    },
    {
      text: "Text for nature 3.",
      title: "nature 3",
    },
    {
      text: "Some different text for nature 4.",
      title: "nature 4",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex =
        currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, slides.length]);

  useEffect(() => {
    setCurrentText(slides[currentIndex].text);
  }, [currentIndex, slides]);

  return (
    <div className="max-w-[1230px] h-[100px] w-full m-auto py-3 px-4 relative group rounded-2xl flex justify-center bg-gradient-to-b to-blue-300 from-blue-700 text-center items-center text-white font-bold font-poppins">
      <p>{currentText}</p>
    </div>
  );
};

export default EventsTextSlider;
