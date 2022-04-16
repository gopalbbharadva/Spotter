import React from "react";

export const User = ({ imgSrc }) => {
  return (
    <div className="mt-5 flex justify-start items-center cursor-pointer">
      <div className="w-10 h-10">
        <img
          className="w-full h-full object-cover rounded-full"
          src={imgSrc}
          alt=""
        />
      </div>
      <p className="ml-2 text-sm">dummy user</p>
    </div>
  );
};
