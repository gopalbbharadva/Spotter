import React, { useState } from "react";
import { VscBookmark, VscDiffAdded, VscHome } from "react-icons/vsc";
import { MdOutlineExplore } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { PostModal } from "../componentExport";

export const Featurelist = () => {
  const [showPostModal, setShowPostModal] = useState(false);
  const {
    allPosts: { isShowPostModal },
  } = useSelector((state) => state);


  const setProfileLink = (isActive) => {
    return {
      color: isActive ? "#0ea5e9" : "#000000",
    };
  };

  return (
    <>
      <NavLink style={({ isActive }) => setProfileLink(isActive)} to="/">
        <VscHome className="mr-5" />
      </NavLink>
      <button onClick={() => setShowPostModal(true)}>
        <VscDiffAdded className="mr-5 " />
      </button>
      <NavLink style={({ isActive }) => setProfileLink(isActive)} to="/explore">
        <MdOutlineExplore className="mr-5" />
      </NavLink>
      <NavLink
        style={({ isActive }) => setProfileLink(isActive)}
        to="/bookmark"
      >
        <VscBookmark className="mr-5" />
      </NavLink>
      {showPostModal || isShowPostModal ? (
        <PostModal setShowPostModal={setShowPostModal} />
      ) : (
        ""
      )}
    </>
  );
};
