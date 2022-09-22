import Image from "next/image";
import React from "react";

import { AboutData } from "./AboutData";
import Profile from "./Profile";
import SocialMedia from "./SocialMedia";

// import AboutMePic from "/../public/images/man-1.jpg";
import bank1 from "../public/assets/man/p2-3.png";

const About = () => {
  return (
    <>
      <div id="about" className="w-full h-screen text-black">
        <div className="w-full max-w-[1240px] h-full p-8 flex flex-col justify-evenly items-center sm:grid grid-cols-2 sm:mx-auto ">
          {/* Left Container*/}
          <div className="grid sm:items-center">
            <div className="mx-auto sm:scale-[100%] md:scale-[120%] lg:scale-[160%]">
              {/* About Me Picture */}
              <div className="w-[300px] h-[300px] bg-red-600 p-4 rounded-full">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <Profile
                    profileImg={bank1}
                    profileAlt={"bank1"}
                    // className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Container */}
          <div className="w-full h-auto sm:h-full flex flex-col justify-center gap-4">
            <div className="w-full ">
              <p className="text-[#] tracking-widest">Discover</p>
              <h1 className="font-bold text-4xl text-red-600 tracking-widest">
                About Me
              </h1>
              <p className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolor excepturi molestiae aut in dolores quisquam eligendi
                tenetur rerum eveniet.
              </p>
            </div>

            <div className="w-full border-2 border-black relative">
              <div className="w-full h-full flex flex-col justify-center p-4">
                {AboutData.map((data) => {
                  return (
                    <div>
                      <span className="font-medium">{data.heading}</span>
                      {data.detail}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* About Footer */}
            <div className="w-full">
              <h3 className="font-bold text-2xl text-center">Social Media</h3>
              <div className="text-[#e63946] mt-4">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
