import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("red");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ff0000");
        setTextColor("#ffffff");
      } else {
        setColor("transparent");
        setTextColor("#ff0000");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed w-full h-[60px] bg-red-600 z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] h-full p-4 mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="text-2xl font-bold">
            THEERANAI
          </h1>
        </Link>

        <ul
          style={{ color: `${textColor}` }}
          className="hidden sm:flex items-center"
        >
          <li className="m-4">
            <Link href="/">Home</Link>
          </li>
          <li className="m-4">
            <Link href="/#about">About</Link>
          </li>
          <li className="m-4">
            <Link href="/#skill">Skill</Link>
          </li>
          <li className="m-4">
            <Link href="/#project">Project</Link>
          </li>
          <li className="m-4">
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div
          onClick={handleNav}
          className="block sm:hidden z-20 rounded-md p-1"
        >
          {nav ? (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden z-20 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-red-600 500 text-center ease-in duration-300"
              : "sm:hidden z-10 absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-red-600 500 text-center duration-300"
          }
        >
          <ul className="h-full w-full flex flex-col justify-center text-white">
            <li onClick={handleNav} className="my-8 text-4xl font-bold">
              <Link href="/">Home</Link>
            </li>
            <li onClick={handleNav} className="my-8 text-4xl font-bold">
              <Link href="/#about">About</Link>
            </li>
            <li onClick={handleNav} className="my-8 text-4xl font-bold">
              <Link href="/#skill">Skill</Link>
            </li>
            <li onClick={handleNav} className="my-8 text-4xl font-bold">
              <Link href="/#project">Project</Link>
            </li>
            <li onClick={handleNav} className="my-8 text-4xl font-bold">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>

          <div onClick={handleNav} className="absolute top-0 right-0 m-4">
            {nav ? (
              <AiOutlineClose size={40} style={{ color: "#ffffff" }} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
