import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { PostCard } from "../../components/componentExport";

export const Profile = () => {
  return (
    <div className="w-screen h-screen p-2 ">
      <div className="card-container">
        <div className="profile-area">
          <div className="w-20 h-20 xs:w-32 xs:h-32 flex xs:self-center flex-shrink-0">
            <img
              className="profile-avatar"
              src="https://treatiseui.netlify.app/Images/ian-dooley-lg.jpg"
              alt="profile picture"
            />
          </div>
          <div className="flex m-0 p-2 xs:p-3 xs:ml-2 flex-col flex-wrap">
            <div className="flex items-center flex-wrap">
              <p className="text-2xl mr-3 text-sky-500">Admin user</p>
              <button className="edit-btn">Edit profile</button>
              <button>
                <IoSettingsOutline className="text-2xl" />
              </button>
            </div>
            <div className="mt-4 flex justify-between flex-wrap">
              <p className="text-gray-500">
                <span>4</span> posts
              </p>
              <button>
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
