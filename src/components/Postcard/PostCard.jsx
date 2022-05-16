import React from "react";
import { VscHeart, VscBookmark, VscComment } from "react-icons/vsc";
import { IoShareSocialOutline } from "react-icons/io5";
import { DummyAvatar } from "../componentExport";

export const PostCard = ({ currentUser }) => {
  return (
    <div className="my-2 w-full max-w-xl border">
      <div className="p-3 flex justify-start items-center">
        <div className="w-10 h-10">
          {currentUser?.profileImg === "" ? (
            <DummyAvatar
              firstname={currentUser?.firstname}
              lastname={currentUser?.lastname}
            />
          ) : (
            <img
              className="profile-avatar"
              src={currentUser?.profileImg}
              alt={currentUser?.username}
            />
          )}
        </div>
        <p className="ml-2 text-sm">{currentUser?.username}</p>
      </div>
      <p className="p-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe neque
        eum tenetur iste reiciendis, aliquam explicabo amet ab maxime ratione.
      </p>
      <div className="features flex p-3 text-2xl">
        <VscHeart />
        <VscComment className="mx-3" />
        <IoShareSocialOutline />
        <VscBookmark className="ml-auto" />
      </div>
      <div className="p-3">
        <p>
          <small className="text-sm block font-bold">30 likes</small>
          <small className="text-sm font-bold">Admin user </small>
          <small className="text-sm opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            voluptas!
          </small>
        </p>
        <small className="text-gray-500">12 hours ago</small>
      </div>
    </div>
  );
};
