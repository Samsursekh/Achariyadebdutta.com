import React from "react";
import { Link, useNavigate } from "react-router-dom";

const FeaturedVideoEmbed = ({ embedID }) => {
  const navigate = useNavigate();

  const handleCheckoutChannel = () => {
    window.location.href =
      "https://www.youtube.com/channel/UCqDfG4lWZ5OJgJSc2XK7g4A";
  };

  return (
    <div>
      <h1 className="text-center mt-10 text-2xl md:text-3xl lg:text-4xl m-3 font-philosopher">
        Featured Videos
      </h1>
      <div className="m-auto mt-6 mb-10  w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <div className="m-auto">
          <iframe
            width="100%"
            //   height="220"
            src={`https://www.youtube.com/embed/${embedID}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Youtube Video"
          />
        </div>
        <div className="m-auto">
          <iframe
            width="100%"
            //   height="220"
            src={`https://www.youtube.com/embed/${embedID}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Youtube Video"
          />
        </div>
        <div className="m-auto">
          <iframe
            width="100%"
            //   height="220"
            src={`https://www.youtube.com/embed/${embedID}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Youtube Video"
          />
        </div>
        <div className="m-auto">
          <iframe
            width="100%"
            //   height="220"
            src={`https://www.youtube.com/embed/${embedID}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Youtube Video"
          />
        </div>
      </div>
      <Link to="https://www.youtube.com/channel/UCqDfG4lWZ5OJgJSc2XK7g4A">
        <button
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white bg-black hover:bg-transparent border border-black rounded-[4px] px-3 py-1 hover:border hover:border-black transition duration-700 ease-in-out hover:text-black m-auto flex items-center mb-10"
        >
          Visit Channel
        </button>
      </Link>
    </div>
  );
};

export default FeaturedVideoEmbed;
