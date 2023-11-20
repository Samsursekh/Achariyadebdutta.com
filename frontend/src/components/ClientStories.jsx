import React, { useEffect, useState } from "react";

const ClientStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [client, setClient] = useState("");

  const slides = [
    {
      text: "Dr Jai Madaan revived my faith in astrology. She is blessed by god and truly among the best in her field. She has a very nice aura which you will feel being in her presence. She is not like other astrologers who scare people unnecessarily and say baseless things just to keep their shop running. She is the most selfless, compassionate, knowledgeable and helpful astrologer and human being I have ever met. She always looks out for your best interest and guides you in a way using her wisdom that will help you get out of whatever problem you are facing. You can talk to her about anything without having a fear of being judged, she makes that comfortable zone for you to open up about anything",
      clientName: "John Doe",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio distinctio nostrum tempora iusto ducimus blanditiis voluptatum ipsam est unde.        ",
      clientName: "Devid Warm",
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

  useEffect(() => {
    setClient(slides[currentIndex].clientName);
  }, [currentIndex, slides]);
  return (
    <div className=" h-[30%] w-[80%] m-auto py-3 px-4 relative group rounded-2xl flex justify-center bg-gradient-to-b to-blue-300 from-blue-700 text-center items-center text-white font-bold font-poppins mb-4">
      <div>
        <p className="italic">{currentText}</p>
        <br />
        <p className="font-bold text-left">~ {client}</p>
      </div>
    </div>
  );
};

export default ClientStories;
