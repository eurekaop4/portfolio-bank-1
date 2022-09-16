import React from "react";
import Image from "next/image";
import SkillItem from "./SkillItem";

import html5 from "../public/assets/skills/html.png";

const Skills = () => {
  return (
    <div id="skill" className="w-full sm:h-auto lg:h-screen p-4">
      <div className="w-full max-w-[1240px] h-full mx-auto">
        <div className="w-full h-full flex flex-col justify-center">
          <div className="py-4">
            <p className="">What I can do</p>
            <p className="uppercase font-bold text-4xl text-[#e63946] tracking-widest">
              Skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            <div className="rounded-xl p-6 shadow-lg shadow-red-600 hover:scale-105 ease-in duration-150">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/html.png"
                    alt="html"
                    width="72px"
                    height="72px"
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xl ">HTML</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-6 shadow-lg shadow-red-600 hover:scale-105 ease-in duration-150">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/css.png"
                    alt="CSS"
                    width="72px"
                    height="72px"
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xl ">CSS</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-6 shadow-lg shadow-red-600 hover:scale-105 ease-in duration-150">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/javascript.png"
                    alt="Java Script"
                    width="72px"
                    height="72px"
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xl ">Java Script</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-6 shadow-lg shadow-red-600 hover:scale-105 ease-in duration-150">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/react.png"
                    alt="React"
                    width="72px"
                    height="72px"
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xl ">React JS</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-6 shadow-lg shadow-red-600 hover:scale-105 ease-in duration-150">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/tailwind.png"
                    alt="Tailwind"
                    width="72px"
                    height="72px"
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xl ">Tailwind</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-6 shadow-lg shadow-red-600 hover:scale-105 ease-in duration-150">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/nodejs.png"
                    alt="Node"
                    width="72px"
                    height="72px"
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xl ">Node Js</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-6 shadow-lg shadow-red-600 hover:scale-105 ease-in duration-150">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/firebase.png"
                    alt="firebase"
                    width="72px"
                    height="72px"
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xl ">Firebase</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-6 shadow-lg shadow-red-600 hover:scale-105 ease-in duration-150">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/../public/assets/skills/github.png"
                    alt="github"
                    width="72px"
                    height="72px"
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xl ">Github</p>
                </div>
              </div>
            </div>

            <div>
              <SkillItem skillImg={html5} skillName="html555" />
            </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
