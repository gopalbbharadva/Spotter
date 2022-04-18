import React from "react";
import { VscDiffAdded, VscHome } from "react-icons/vsc";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { NavLink } from "react-router-dom";

export const Featurelist = () => {
  const setProfileLink = (isActive) => {
    return {
      color: isActive ? "#0ea5e9" : "#000000",
    };
  };

  return (
    <>
      <NavLink style={({ isActive }) => setProfileLink(isActive)} to="/posts">
        <VscHome className="mr-5" />
      </NavLink>
      <VscDiffAdded className="mr-5 " />
      <MdOutlineExplore className="mr-5" />
      <IoNotificationsOutline className="mr-5" />
    </>
  );
};
