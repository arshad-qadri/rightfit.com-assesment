import React from "react";

const Hero = () => {
  return (
    <div className="h-[575px] w-full bg-[url('./assets/man.png')] bg-cover bg-center flex justify-start items-center">
      <div className="ml-36 mt-7 text-white">
        <h1 className="text-5xl font-bold">Latest Styles</h1>
        <p className="text-xl font-semibold mt-1">At Yesterday's Prices</p>
        <button className="bg-[#CA4022] px-3 py-2 my-4 rounded-lg uppercase text-lg">
          Browse all styles
        </button>
      </div>
    </div>
  );
};

export default Hero;
