import React, { useEffect, useState } from "react";
import {
  PostCard,
  Loader,
  ProfileModal,
} from "../../components/componentExport";
import { AiOutlineLogout } from "react-icons/ai";
import { logoutUser } from "../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllUsers } from "../../features/usersSlice";

export const Profile = () => {
  const [isEditProfile, setIsEditProfile] = useState(false);

  const dispatch = useDispatch();
  const { userName } = useParams();
  const {
    auth: { user },
    allUsers: { users, isLoading },
  } = useSelector((state) => state);

  const currentUser = users?.find((user) => user.username === userName);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-screen h-screen p-2 ">
          {isEditProfile && (
            <ProfileModal
              currentUser={currentUser}
              setIsEditProfile={setIsEditProfile}
            />
          )}
          <div className="card-container">
            <div className="profile-area">
              <div className="w-20 h-20 xs:w-32 xs:h-32 flex xs:self-center flex-shrink-0">
                {currentUser?.profileImg === "" ? (
                  <div className="profile-avatar dummy-avatar">
                    {currentUser.firstname[0]} {currentUser.lastname[0]}
                  </div>
                ) : (
                  <img
                    className="profile-avatar"
                    src={currentUser?.profileImg}
                    alt="profile picture"
                  />
                )}
              </div>
              <div className="w-full flex-wrap flex m-0 p-2 xs:p-3 xs:ml-2 sm:w-3/5 flex-col ">
                <div className="flex flex-wrap items-center">
                  <p className="text-2xl mr-3 text-sky-500">
                    {currentUser?.username}
                  </p>
                  {user.username !== currentUser?.username ? (
                    <button className="follow-btn">follow</button>
                  ) : (
                    <button
                      onClick={() => setIsEditProfile((prev) => !prev)}
                      className="edit-profile-btn"
                    >
                      Edit profile
                    </button>
                  )}
                  <button onClick={() => dispatch(logoutUser())}>
                    <AiOutlineLogout className="text-2xl hover:text-sky-500" />
                  </button>
                </div>
                <div className="mt-4 flex justify-between flex-wrap">
                  <p className="text-gray-500">
                    <span>4</span> posts
                  </p>
                  <button className="text-gray-500">
                    <span>20 </span>followers
                  </button>
                  <button className="text-gray-500">
                    <span>10 </span>following
                  </button>
                </div>
                <div className="mt-4">
                  <p className="font-bold text-md">
                    {currentUser?.firstname} {currentUser?.lastname}
                  </p>
                  <p className="text-gray-600 text-sm">{currentUser?.bio}</p>
                  <a
                    href={currentUser?.website}
                    target="_blank"
                    className="text-sky-500 text-sm"
                  >
                    {currentUser?.website}
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <PostCard currentUser={currentUser} />
              <PostCard currentUser={currentUser} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
