import Image from "next/image";
import React from "react";

const Profile = ({ profileImg, profileAlt }) => {
  return (
    <>
      {/* <div className="w-[400px] h-[400px]"> */}
        <Image src={profileImg} alt={profileAlt} />
      {/* </div> */}
    </>
  );
};

export default Profile;
