/* eslint-disable no-unused-vars */
import React from "react";

const Hero = () => {
  return (
    <div className="w-full mt-8 px-4 sm:px-8 md:px-16 lg:px-20 py-6 h-full text-center lg:text-left relative z-10">
      <div className="mt-6">
        <h1 className="text-2xl sm:text-3xl font-semibold text-yellow-400">
          Being Autistic & ADHDer Is Not Easy!
        </h1>
        <h1 className="text-2xl sm:text-3xl font-semibold text-green-500">
          We Got YOU!
        </h1>
      </div>
      <div className="flex justify-center lg:justify-start">
        <button className="px-4 py-2 sm:py-3 lg:py-4 mt-4 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-md">
          Take Screening Assessment
        </button>
      </div>
      <div className="relative w-full h-72 sm:h-96 lg:absolute lg:top-[20%] lg:right-[5%] lg:w-72 lg:h-72 bg-red-200 overflow-hidden mt-6 lg:mt-0 z-0">
        <img
          src="src\assets\images\10847.jpg"
          alt="Hero"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="mt-6">
        <h1 className="text-2xl font-semibold text-yellow-300">
          YOU are not alone at LEEZA
        </h1>
        <h3 className="text-2xl font-semibold text-green-500 leading-relaxed">
          From fears to freedom, <br /> From babbling to speech, <br /> We help
          you get there
        </h3>
      </div>
    </div>
  );
};

export default Hero;
