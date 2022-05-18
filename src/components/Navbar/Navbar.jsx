import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DummyAvatar } from "../componentExport";
import { Featurelist } from "./Featurelist";

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
      <div className="flex justify-evenly items-center">
        <Link to="/">
          <h1 className="text-3xl font-lobster text-sky-500 cursor-pointer">
            Spotter
          </h1>
        </Link>
        <input
          className="p-1 max-w-xs mx-2 w-full border rounded bg-gray-100 
          focus:outline-none focus:border-sky-500"
          type="search"
          placeholder="Search"
        />
        <div className="flex justify-center items-center">
          <div className="features hidden text-2xl lg:flex">
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
          className="features flex p-2 justify-between w-full border 
        fixed bottom-0 text-2xl lg:hidden bg-white"
        >
          <Featurelist />
        </div>
      </div>
    </nav>
  );
};
