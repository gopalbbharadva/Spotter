import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { PostCard } from "../../components/componentExport";

export const Profile = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col justify-center items-center">
        <div
          className="w-full max-w-xl m-auto border-b-2 flex justify-start
          flex-col p-3 xs:flex-row 
         "
        >
          <div className="p-2 w-32 h-32 flex xs:self-center">
            <img
              className="w-full h-full object-cover rounded-full"
              src="https://treatiseui.netlify.app/Images/ian-dooley-lg.jpg"
              alt=""
            />
          </div>
          <div className="flex p-2 flex-col flex-wrap">
            <div className="flex items-center flex-wrap">
              <p className="text-2xl mr-3 text-sky-500">Admin user</p>
              <button className="border px-2 mr-3 py-1 rounded text-gray-500 hover:bg-gray-100">
                Edit profile
              </button>
              <button>
                <IoSettingsOutline className="text-2xl" />
              </button>
            </div>
            <div className="profile-area mt-4 flex justify-between flex-wrap">
              <p>
                <span>4</span> posts
              </p>
              <button className="mr-4">
                <span>20 </span>followers
              </button>
              <button>
                <span>10 </span>following
              </button>
            </div>
            <div className="mt-4 text-md">
              <p className="font-bold">John Doe</p>
              <p className="text-gray-600">Reading and writing</p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <PostCard showImage={true} />
          <PostCard showImage={false} />
          <PostCard showImage={true} />
          <PostCard showImage={false} />
          <PostCard showImage={true} />
        </div>
      </div>
    </div>
  );
};
