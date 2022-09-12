import React from "react";
import Avatar from "./Avatar";

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center text-red-600">
        {/* Avatar */}
        <div className="sm:scale-110 md:scale-125">
          <Avatar />
        </div>

        <div className="text-center mt-4 sm:mt-12 md:mt-16">
          <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-bold uppercase">
            Theeranai Ratsirikon
          </h1>
          <p className="text-white text-sm md:text-lg lg:text-xl">
            I'm a Frontend Developer & React JS Developer
          </p>
        </div>

        {/* BG */}
        <div className="w-full h-screen absolute top-0 left-0 right-0 bottom-0">
          <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 z-[-2] bg-black/80 " />
          <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 z-[-3] bg-cover bg-fixed bg-center custom-img grayscale" />
        </div>
      </div>
    </>
  );
};

export default Hero;
