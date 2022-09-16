import Image from "next/image";
import React from "react";

const SkillItem = ({ skillImg, skillName }) => {
  return (
    <>
      <div>
        <Image src={skillImg} alt={skillName} />
        <p className="font-bold text-4xl">{skillName}</p>
      </div>
    </>
  );
};

export default SkillItem;
