import React from "react";

export const UserNotify = ({ user }) => {
  const { imgSrc, userName, time } = user;

  return (
    <div className="mt-5 flex justify-start items-center relative cursor-pointer">
      <div className="w-10 h-10 flex-shrink-0">
        <img className="profile-avatar " src={imgSrc} />
      </div>
      <p className="ml-3 text-sm font-semibold">
        {userName}
        <span className="font-thin"> started following you</span>
        <span className="text-gray-600 text-xs font-thin"> {time} ago</span>
      </p>
    </div>
  );
};
