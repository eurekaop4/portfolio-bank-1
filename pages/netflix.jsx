import Image from "next/image";
import React from "react";
import netflixImg from "../public/assets/project/netflix-bg-1.png";

import { FaRegStopCircle } from "react-icons/fa";
import Link from "next/link";

const netflix = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="w-screen h-[30vh] relative">
        {/* Overlay */}
        <div className="w-full h-[30vh] absolute top-0 left-0 bg-black/80 z-10" />
        {/* Background */}
        <Image
          className="absolute z-1"
          src={netflixImg}
          alt="netflix-1"
          layout="fill"
          objectFit="cover"
        />
        <div className="w-full max-w-[1240px] absolute top-[50%] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4">
          <h2 className="text-4xl font-bold text-red-600 tracking-widest">
            Netflix App
          </h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-4">
        <div className="col-span-4">
          <div>
            <p>Project</p>
            <h2 className="text-4xl font-bold text-red-600">Overview</h2>
          </div>

          <div className="py-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos hic nisi debitis architecto, deleniti sapiente, culpa
              dolorum dolor provident facere asperiores dolore veritatis nostrum
              fugit ducimus odio. Unde facilis eligendi suscipit esse,
              voluptates ad provident corporis, qui nemo tempora quibusdam rerum
              exercitationem mollitia. Nobis obcaecati officia error recusandae,
              maiores iure.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Link href="https://netflix-react-yt-c834e.web.app/">
              <p className="p-4 bg-red-600 text-white text-center rounded-lg hover:bg-red-800">
                Live
              </p>
            </Link>
            <Link href="/#project">
              <p className="p-4 bg-red-600 text-white text-center rounded-lg hover:bg-red-800">
                Code
              </p>
            </Link>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <FaRegStopCircle className="pr-1" /> React JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <FaRegStopCircle className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <FaRegStopCircle className="pr-1" /> Java Script
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <FaRegStopCircle className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <FaRegStopCircle className="pr-1" /> Google API
              </p>
            </div>
          </div>
        </div>

        <Link href="/#project">
          <p className="underline cursor-pointer hover:text-red-600">back</p>
        </Link>
      </div>
    </div>
  );
};

export default netflix;
