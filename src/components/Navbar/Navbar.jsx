import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DummyAvatar, Featurelist } from "../componentExport";

export const Navbar = () => {
  const {
    auth: {
      user: { username },
    },
    allUsers: { users },
  } = useSelector((state) => state);

  const currentUser = users?.find((user) => username === user.username);

  return (
    <nav className="p-3 top-0 sticky z-10 shadow-md shadow-sky-100 bg-white">
      <div className="flex justify-between items-center lg:justify-around">
        <Link to="/">
          <h1 className="text-3xl font-lobster text-sky-500 cursor-pointer">
            Spotter
          </h1>
        </Link>
        <div className="flex justify-center items-center">
          <div className="features hidden text-2xl lg:flex lg:justify-center lg:items-center">
            <Featurelist />
          </div>
          <Link to={`/profile/${username}`}>
            <div className="w-8 h-8 cursor-pointer">
              {currentUser?.profileImg === "" ? (
                <DummyAvatar
                  firstname={currentUser?.firstname}
                  lastname={currentUser?.lastname}
                />
              ) : (
                <img
                  className="profile-avatar"
                  src={currentUser?.profileImg}
                  alt={currentUser?.firstname}
                />
              )}
            </div>
          </Link>
        </div>
        <div
          className="features flex p-2 justify-between items-center w-full border 
        fixed bottom-0 text-2xl lg:hidden bg-white"
        >
          <Featurelist />
        </div>
      </div>
    </nav>
  );
};
