import React, { useState } from "react";
import { Link } from "react-router-dom";
import thumb1 from "../images/youtube-thumbnails/8 birth day _October 12.10.2023.jpg";
import thumb2 from "../images/youtube-thumbnails/brisho Rashi thamble November.jpg";
import thumb3 from "../images/youtube-thumbnails/dhantarous Thumnail _02.jpg";
import thumb4 from "../images/youtube-thumbnails/mesh thamble _November.jpg";

import thumb5 from "../images/youtube-thumbnails/mohini basikan Thumnail.jpg";
import thumb6 from "../images/youtube-thumbnails/tula rashi thamble _December.jpg";
import thumb7 from "../images/youtube-thumbnails/Najar katanor thamnail _Aug 012.08.2023.jpg";
import thumb8 from "../images/youtube-thumbnails/shotru domon_02.jpg";

import { FaChevronLeft, FaChevronRight, FaYoutube } from "react-icons/fa";

const videoUrls = [
  "https://youtu.be/siINm8m8hfk?si=nQaEGS50JjX5pJLX",
  "https://youtu.be/ij7QMVdcK80?si=27qDCZl6pWlRUcYk",
  "https://youtu.be/Qxe8KjKLSu0?si=tBX5IGKLFcRKLZ51",
  "https://youtu.be/XOkwYYnKd7E?si=D5qe_OQ4ksOdbjtg",
  "https://youtu.be/S8BV7pYv_d0?si=5XwMmKjFKkuRvBkV",
  "https://youtu.be/Arh3aFmjTA8?si=PrjoMZJW6WFZYdvJ",
  "https://youtu.be/ilL_uj-vi8M?si=BKmprkIfURUCKAmT",
  "https://youtu.be/I_eqQTUQ8AA?si=dQgVXoyG3anqTWAv",
];

const FeaturedVideoEmbed = () => {
  const thumbnails = [
    thumb1,
    thumb2,
    thumb3,
    thumb4,
    thumb5,
    thumb6,
    thumb7,
    thumb8,
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handleThumbnailClick = (videoUrl) => {
    window.open(videoUrl, "_blank");
  };

  const handlePrev = () => {
    const newIndex =
      startIndex - itemsPerPage < 0
        ? thumbnails.length - itemsPerPage
        : startIndex - itemsPerPage;
    setStartIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      startIndex + itemsPerPage >= thumbnails.length
        ? 0
        : startIndex + itemsPerPage;
    setStartIndex(newIndex);
  };

  const visibleThumbnails = thumbnails.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleOpenInNewTabToGoToChannel = (event) => {
    event.preventDefault();
    window.open(
      "https://www.youtube.com/channel/UCqDfG4lWZ5OJgJSc2XK7g4A",
      "_blank"
    );
  };

  return (
    <div>
      <h1 className="text-center mt-10 text-2xl md:text-3xl lg:text-4xl m-3 font-philosopher ">
        Featured Videos
      </h1>
      <div className=" m-auto mt-6 mb-10 w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 relative">
        {visibleThumbnails.map((thumbnail, index) => (
          <div className="m-auto" key={index}>
            <img
              src={thumbnail}
              alt={`Thumbnail ${index + startIndex + 1}`}
              style={{ width: "100%", cursor: "pointer" }}
              onClick={() =>
                handleThumbnailClick(videoUrls[index + startIndex])
              }
            />
          </div>
        ))}

        {/* add youtube icons */}

        <div
          className="text-white absolute top-[35%] left-0 text-2xl p-2 group-hover:bg-black/20 cursor-pointer "
          onClick={handlePrev}
        >
          <FaChevronLeft
            size={30}
            disabled={startIndex === 0}
            className="transition duration-300 hover:bg-opacity-100 hover:text-sky-500"
          />
        </div>
        <div
          className="text-white absolute top-[35%] right-0 text-2xl p-2 group-hover:bg-black/20 cursor-pointer "
          onClick={handleNext}
        >
          <FaChevronRight
            size={30}
            disabled={startIndex + itemsPerPage >= thumbnails.length}
            className="transition duration-300 hover:bg-opacity-100 hover:text-sky-500"
          />
        </div>
      </div>

      <Link to="#" onClick={handleOpenInNewTabToGoToChannel}>
        <button className="text-white bg-black hover:bg-transparent border border-black rounded-[4px] px-3 py-1 hover:border hover:border-black transition duration-700 ease-in-out hover:text-black m-auto flex items-center mb-10">
          Visit Our Channel
        </button>
      </Link>
    </div>
  );
};

export default FeaturedVideoEmbed;
