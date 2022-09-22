import React from "react";
import Profile from "./Profile";

import bank1 from "../public/assets/man/p1-3.jpg";

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center text-red-600">
        {/* Profile Picture */}
        <div className="sm:scale-110 md:scale-125 lg:scale-150">
          <div className="bg-red-600 p-4 rounded-full">
            <div className="rounded-full overflow-hidden w-[200px] h-[200px]">
              <Profile profileImg={bank1} profileAlt={"bank1"} />
            </div>
          </div>
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
