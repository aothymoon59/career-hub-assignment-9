import React from "react";
import bannerImg from "../../assets/All Images/banner.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse gap-7 md:flex-row justify-between items-center w-full max-w-screen-xl mx-auto py-3 md:py-5 px-4 md:px-8 bg-[#F9F9FF]">
      <div className="flex flex-col gap-5 sm:gap-8 items-start">
        <div className="font-extrabold flex flex-col md:gap-3 text-3xl md:text-5xl lg:text-[80px] text-[#1A1919] ">
          <h1>One Step</h1>
          <h1>Closer To Your</h1>
          <h1 className="my-gradient-text">Dream Job</h1>
        </div>
        <p className="text-[#757575] text-sm sm:text-lg font-medium">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>

        <button>
          <Link
            to=""
            className="my-btn px-3 sm:px-7 py-2 sm:py-5 text-sm sm:text-xl"
          >
            Get Started
          </Link>
        </button>
      </div>
      <div>
        <img src={bannerImg} alt="banner image" />
      </div>
    </div>
  );
};

export default Banner;
