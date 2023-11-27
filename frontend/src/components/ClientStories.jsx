import React, { useEffect, useState } from "react";
import client1 from "../images/clientImage/client1.jpg";
import client2 from "../images/clientImage/client2.jpg";
import client3 from "../images/clientImage/client3.jpg";

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
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, slides.length]);

  useEffect(() => {
    setCurrentText(slides[currentIndex].text);
  }, [currentIndex, slides]);

  useEffect(() => {
    setClient(slides[currentIndex].clientName);
  }, [currentIndex, slides]);

  // const verticalLineStyle = {
  //   borderLeft: "3px solid yellow",
  //   height: "280px",
  //   // position: "absolute",
  //   left: "50%",
  // };

  return (
    // <div className=" h-[30%] w-[80%] m-auto py-3 px-4 bg-[#29C5F6] relative group rounded-2xl flex justify-center bg-gradient-to-b text-center items-center text-white font-bold font-poppins mb-4">
    //   <div>
    //     <p className="italic">{currentText}</p>
    //     <br />
    //     <p className="font-bold text-left">~ {client}</p>
    //   </div>
    // </div>

    <>
      <div className=" bg-black grid h-auto md:flex lg:flex mt-10 m-auto mb-7 font-sans w-[90%] gap-4">
        <div className=" w-[80%] h-full flex justify-evenly items-center m-auto ">
          <div className=" m-auto">
            <h1 className="text-white text-4xl">
              <h1 className="mb-4">HAPPY</h1>
              <span className="text-yellow-400">CUSTOMER</span>
            </h1>
          </div>
          <div className="border-2 m-auto h-[300px] border-yellow-500" />
        </div>
        <div className="m-auto h-full w-full p-3 ">
          <div className="flex justify-evenly items-center bg-slate-800 pb-1 mt-1">
            <div className="w-[20%] rounded-full border-2 border-yellow-500 mt-2 ">
              <img
                src={client2}
                alt=""
                className="rounded-full border-2 border-yellow-500"
              />
            </div>
            <div className="w-[60%] text-white">
              <h2 className="text-yellow-500 text-xl italic font-sans">Mr. John Doe</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores, ab?
              </p>
            </div>
          </div>
          <div className="flex justify-evenly items-center bg-slate-800 pb-1 mt-1">
            <div className="w-[20%] rounded-full border-2 border-yellow-500 mt-2">
              <img
                src={client1}
                alt=""
                className="rounded-full border-2 border-yellow-500"
              />
            </div>
            <div className="w-[60%] text-white">
            <h2 className="text-yellow-500 text-xl italic font-sans">Mr. Rolex</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores, ab?
              </p>
            </div>
          </div>
          <div className="flex justify-evenly items-center bg-slate-800 pb-1 mt-1">
            <div className="w-[20%] rounded-full border-2 border-yellow-500 mt-2">
              <img
                src={client3}
                alt=""
                className="rounded-full border-2 border-yellow-500"
              />
            </div>
            <div className="w-[60%] text-white">
            <h2 className="text-yellow-500 text-xl italic font-sans">Mr. Adam</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores, ab?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientStories;
