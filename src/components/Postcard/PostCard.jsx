import React from "react";
import { VscHeart, VscBookmark, VscComment } from "react-icons/vsc";
import { IoShareSocialOutline } from "react-icons/io5";

export const PostCard = ({ showImage }) => {
  return (
    <div className="my-2 w-full max-w-xl border">
      <div className="p-3 flex justify-start items-center cursor-pointer">
        <div className="w-10 h-10">
          <img
            className="profile-avatar"
            src="https://treatiseui.netlify.app/Images/ian-dooley-lg.jpg"
            alt="profile picture"
          />
        </div>
        <p className="ml-2 text-sm">admin user</p>
      </div>
      {showImage ? (
        <img
          className="cursor-pointer"
          src="https://media.smallbiztrends.com/2021/01/Active-Social-Media-Presence.png"
          alt="social media advertisement"
        />
      ) : (
        <p className="p-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe neque
          eum tenetur iste reiciendis, aliquam explicabo amet ab maxime ratione.
        </p>
      )}
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
