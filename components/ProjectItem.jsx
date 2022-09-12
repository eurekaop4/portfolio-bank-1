import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ backgroundImg, title, desc, overview, projectUrl }) => {
  return (
    // Background
    <div className="relative shadow-xl shadow-gray-400 rounded-xl p-4 bg-red-600 sm:bg-transparent group hover:bg-red-600">
      {/* Background Image */}
      <Image
        className="rounded-xl opacity-10 sm:opacity-100 group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />

      {/* overlay */}
      <div className="group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] sm:hidden">
        <h3 className="text-2xl text-white font-bold tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{desc}</p>
        <div className="flex flex-col gap-2">
          <Link href={overview}>
            <p className="text-center p-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              More Info
            </p>
          </Link>
          <Link href={projectUrl}>
            <p className="text-center p-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              Go Live
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
