import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-[20%] px-12 bg-gradient-to-tr from-black">
      <div>
        <h1 className="text-6xl font-bold py-4 text-white">{title}</h1>
        <p className="w-1/4 text-white">{overview}</p>
      </div>
      <div className="py-4">
        <button className="p-2 px-6 rounded-lg cursor-pointer text-black bg-white hover:bg-white/70">Play</button>
        <button className="p-2 px-4 rounded-lg cursor-pointer text-white bg-gray-500 hover:bg-gray-500/70 mx-1">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
