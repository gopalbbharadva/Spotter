import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { followUser, unFollowUser } from "../../features/usersSlice";
import { DummyAvatar } from "../componentExport";

export const User = ({ suggestedUser }) => {
  const { _id, firstname, lastname, profileImg, username } = suggestedUser;
  const dispatch = useDispatch();
  const {
    auth: { user, token },
    allUsers: { users },
  } = useSelector((state) => state);
  const currentUser = users?.find(({ username }) => username === user.username);

  const isFollowing = currentUser?.following.find(
    (user) => suggestedUser.username === user.username
  );

  return (
    <div className="mt-5 flex justify-between w-full items-center cursor-pointer">
      <Link to={`/profile/${username}`}>
        <div className="flex">
          <div className="w-10 h-10">
            {!profileImg ? (
              <DummyAvatar firstname={firstname} lastname={lastname} />
            ) : (
              <img
                className="profile-avatar"
                src={profileImg}
                alt="user profile"
              />
            )}
          </div>
          <div className="ml-3 text-sm flex flex-col items-start">
            <p>{username}</p>
            <p className=" text-gray-500">
              {firstname} {lastname}
            </p>
          </div>
        </div>
      </Link>
      {isFollowing ? (
        <button
          onClick={() => dispatch(unFollowUser({ userId: _id, token }))}
          className="text-sm"
        >
          Unfollow
        </button>
      ) : (
        <button
          onClick={() => dispatch(followUser({ userId: _id, token }))}
          className="text-sky-500 hover:text-sky-600 text"
        >
          Follow
        </button>
      )}
    </div>
  );
};
