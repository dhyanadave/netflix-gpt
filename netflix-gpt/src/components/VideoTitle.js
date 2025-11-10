import React from "react";
import play from "../assets/play.png";
import info from "../assets/info.png";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex items-center">
        <button className="bg-white text-black px-8 py-3 text-lg items-center rounded-lg hover:bg-opacity-80 flex">
          <img src={play} alt="play" className="w-5 h-5 mr-2" />
          <h3>Play</h3>
        </button>

        <button className="ml-4 bg-gray-500 text-white px-8 py-3 text-lg items-center rounded-lg bg-opacity-50 flex hover:bg-opacity-70">
          <img src={info} alt="info" className="w-7 h-7 mr-2" />
          <h3>More Info</h3>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
