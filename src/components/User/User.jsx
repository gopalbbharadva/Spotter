import React from "react";
import { Link } from "react-router-dom";

export const User = ({ suggestedUser }) => {
  const { firstname, lastname, profileImg, username } = suggestedUser;
  return (
    <div className="mt-5 flex justify-between items-center cursor-pointer">
      <Link to={`/profile/${username}`}>
        <div className="flex">
          <div className="w-10 h-10">
            <img
              className="profile-avatar"
              src={profileImg}
              alt="user profile"
            />
          </div>
          <div className="ml-3 text-sm flex flex-col items-start">
            <p>{username}</p>
            <p className=" text-gray-500">
              {firstname} {lastname}
            </p>
          </div>
        </div>
      </Link>
      <button className="text-sky-500 hover:text-gray-500">follow</button>
    </div>
  );
};
