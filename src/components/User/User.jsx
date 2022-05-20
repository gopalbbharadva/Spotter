import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { followUser, unFollowUser } from "../../features/usersSlice";
import { Avatar } from "../componentExport";

export const User = ({ suggestedUser }) => {
  const { _id, username } = suggestedUser;
  const dispatch = useDispatch();
  const {
    auth: { user, token },
    allUsers: { users },
  } = useSelector((state) => state);
  const currentUser = users?.find(({ username }) => username === user.username);

  const isFollowing = currentUser?.following.find(
    (user) => suggestedUser?.username === user.username
  );

  return (
    <div className="mt-5 flex justify-between w-full items-center cursor-pointer">
      <Link to={`/profile/${username}`}>
        <Avatar currentUserName={username} />
      </Link>
      {isFollowing ? (
        <button
          onClick={() => dispatch(unFollowUser({ userId: _id, token }))}
          className="text-sm"
        >
          Unfollow
        </button>
      ) : username !== currentUser.username ? (
        <button
          onClick={() => dispatch(followUser({ userId: _id, token }))}
          className="text-sky-500 hover:text-sky-600 text"
        >
          Follow
        </button>
      ) : null}
    </div>
  );
};
