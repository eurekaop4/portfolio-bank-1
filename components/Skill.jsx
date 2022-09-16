import React from "react";
import Image from "next/image";
import SkillItem from "./SkillItem";

import htmlImg from "../public/assets/skills/html.png";
import cssImg from "../public/assets/skills/css.png";
import javaScriptImg from "../public/assets/skills/javascript.png";
import reactImg from "../public/assets/skills/react.png";
import tailwindImg from "../public/assets/skills/tailwind.png";
import nodeImg from "../public/assets/skills/nodejs.png";
import firebaseImg from "../public/assets/skills/firebase.png";
import githubImg from "../public/assets/skills//github.png";

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

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> */}
          <div className="flex flex-wrap justify-center">
            <SkillItem skillImg={htmlImg} skillName="HTML" />
            <SkillItem skillImg={cssImg} skillName="CSS" />
            <SkillItem skillImg={javaScriptImg} skillName="Java Script" />
            <SkillItem skillImg={reactImg} skillName="React JS" />
            <SkillItem skillImg={tailwindImg} skillName="Tailwind CSS" />
            <SkillItem skillImg={nodeImg} skillName="Node JS" />
            <SkillItem skillImg={firebaseImg} skillName="Firebase" />
            <SkillItem skillImg={githubImg} skillName="Github" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
