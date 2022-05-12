import React from "react";

export const User = ({ imgSrc }) => {
  return (
    <div className="mt-5 flex justify-start items-center cursor-pointer">
      <div className="w-10 h-10">
        <img className="profile-avatar" src={imgSrc} alt="user profile" />
      </div>
      <div className="ml-3 text-sm flex flex-col items-start">
        <p>Tc56</p>
        <p className=" text-gray-500">tom cruise</p>
      </div>
    </div>
  );
};
