import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG } from "../utils/constants";

const GptComponent = () => {
  return (
    <div>
      <img
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src={BG_IMG}
        alt=""
      />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptComponent;
