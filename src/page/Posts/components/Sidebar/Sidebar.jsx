import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { User } from "../../../../components/componentExport";
import { DummyAvatar, Loader } from "../../../../components/componentExport";

export const Sidebar = ({ currentUser, users }) => {
  const {
    user: { username },
  } = useSelector((state) => state.auth);

  const { isLoading } = useSelector((state) => state.allUsers);
  const suggestedUsers = users.filter((item) => item.username !== username);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="sticky top-28">
          <Link to={`/profile/${username}`}>
            <div className="flex justify-start items-center cursor-pointer">
              <div className="w-16 h-16">
                {currentUser?.profileImg === "" ? (
                  <DummyAvatar
                    firstname={currentUser?.firstname}
                    lastname={currentUser?.lastname}
                  />
                ) : (
                  <img
                    className="profile-avatar"
                    src={currentUser?.profileImg}
                    alt="user profile dp"
                  />
                )}
              </div>
              <p className="ml-2 text-sm">{currentUser?.username}</p>
            </div>
          </Link>

          <p className="mt-5 text-sky-500">Suggestions for you</p>
          {suggestedUsers.map((user) => (
            <User suggestedUser={user} key={user._id} />
          ))}
        </div>
      )}
    </>
  );
};
