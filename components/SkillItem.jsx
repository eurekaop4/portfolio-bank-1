import Image from "next/image";
import React from "react";

const SkillItem = ({ skillImg, skillName }) => {
  return (
    <div className="p-4 m-4 rounded-xl shadow-lg shadow-red-600 hover:scale-105 ease-in duration-150">
      <div className="w-[200px] h-[200px] flex flex-col justify-center items-center">
        <Image src={skillImg} alt={skillName} />
      </div>
      <p className="font-bold text-center text-[#e63946] mt-4 ">{skillName}</p>
    </div>
  );
};

export default SkillItem;
