import React from "react";
import ProjectItem from "./ProjectItem";
import netflixBg from "../public/assets/project/netflix-bg-1.png";
import theeranaiBg from "../public/assets/project/theeranai-bg-1.png";
import travelBg from "../public/assets/project/travel-bg-1.png";
import capturBg from "../public/assets/project/captur-bg-1.png";

const Work = () => {
  return (
    <>
      <div id="project" className="w-full h-auto p-4">
        <div className="max-w-[1240px] w-full h-full mx-auto">
          <div className="py-4">
            <p className="">What I've done</p>
            <p className="uppercase font-bold text-4xl text-[#e63946] tracking-widest">
              Works
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <ProjectItem
              title="Netflix App"
              desc="React JS, Tailwind, Firebase"
              backgroundImg={netflixBg}
              overview="/netflix"
              projectUrl="https://netflix-react-yt-c834e.web.app/"
            />

            <ProjectItem
              title="Captur"
              desc="Next JS, Tailwind, Java Script"
              backgroundImg={capturBg}
              overview="/captur"
              projectUrl="https://nextjs-captur.vercel.app/"
            />

            <ProjectItem
              title="Travel"
              desc="React JS, Tailwind, Java Script"
              backgroundImg={travelBg}
              overview="/travel"
              projectUrl="https://travel-tailwind.vercel.app/"
            />

            <ProjectItem
              title="Theeranai"
              desc="React JS, Tailwind, Java Script"
              backgroundImg={theeranaiBg}
              overview="/theeranai"
              projectUrl="https://bank-tailwind-eosin.vercel.app/"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
