import React from "react";
import Image from "next/image";

const Avatar = () => {
  return (
    <>
      <div className="bg-red-600 p-4 rounded-full">
        <div className="w-[200px] h-[200px]">
          <Image
            className="bg-white rounded-full"
            src="/../public/assets/man/man-png-30098-2.png"
            alt="avatar"
            layout="responsive"
            width="80"
            height="80"
            // objectFit="contain"
          />
        </div>
      </div>
    </>
  );
};

export default Avatar;
