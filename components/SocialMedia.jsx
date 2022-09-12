import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiFillMail,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="w-full h-full">
      {/* Background Img */}
      <div className="relative h-auto w-full ">
        {/* overlay */}
        <div className="w-full h-full flex flex-col justify-center items-center ">
          {/* Social Icons */}
          <div className="w-full flex justify-between items-center">
            <Link href="/">
              <div className="hover:cursor-pointer bg-white rounded-full hover:scale-105">
                <AiFillMail className="m-2" size={60} />
              </div>
            </Link>
            <Link href="/">
              <div className="hover:cursor-pointer bg-white rounded-full hover:scale-105">
                <AiFillFacebook className="m-2" size={60} />
              </div>
            </Link>
            <Link href="/">
              <div className="hover:cursor-pointer bg-white rounded-full hover:scale-105">
                <AiFillYoutube className="m-2" size={60} />
              </div>
            </Link>
            <Link href="/">
              <div className="hover:cursor-pointer bg-white rounded-full hover:scale-105">
                <AiOutlineTwitter className="m-2" size={60} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
