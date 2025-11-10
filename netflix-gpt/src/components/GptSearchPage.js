import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img
        className="h-screen w-screen object-cover"
          src={BG_URL}
          defaultValue={"Body img"}
        />
      </div>
      <div 
      // className="pt-[30%] md:p-0"
      >
      <GptSearchBar />
      <GptMovieSuggestions />
      </div>

    </>
  );
};

export default GptSearchPage;
