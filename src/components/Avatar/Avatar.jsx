import React from "react";
import { useSelector } from "react-redux";
import { DummyAvatar } from "../componentExport";

export const Avatar = ({ comment, currentUserName }) => {
  const {
    allUsers: { users },
  } = useSelector((state) => state);

  const currentUser = users?.find(
    ({ username }) => username === currentUserName
  );

  return (
    <div className="flex">
      <div className="w-10 h-10">
        {!currentUser?.profileImg ? (
          <DummyAvatar
            firstname={currentUser?.firstname}
            lastname={currentUser?.lastname}
          />
        ) : (
          <img
            className="profile-avatar"
            src={currentUser?.profileImg}
            alt="user profile"
          />
        )}
      </div>
      <div className="ml-3 text-sm flex flex-col items-start">
        <p>{currentUser?.username}</p>
        <p className=" text-gray-500">
          {currentUser?.firstname} {currentUser?.lastname}
        </p>
      </div>
    </div>
  );
};
