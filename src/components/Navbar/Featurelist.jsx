import React from "react";
import { VscBookmark, VscDiffAdded, VscHome } from "react-icons/vsc";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useModal } from "../../contexts/ModalContext";
import { useDispatch } from "react-redux";
import { showPostModal } from "../../features/postSlice";

export const Featurelist = () => {
  const setProfileLink = (isActive) => {
    return {
      color: isActive ? "#0ea5e9" : "#000000",
    };
  };

  const { setShowNotifyModal } = useModal();
  const dispatch = useDispatch();
  return (
    <>
      <NavLink style={({ isActive }) => setProfileLink(isActive)} to="/">
        <VscHome className="mr-5" />
      </NavLink>
      <button onClick={() => dispatch(showPostModal())}>
        <VscDiffAdded className="mr-5 " />
      </button>
      <MdOutlineExplore className="mr-5" />
      <NavLink
        style={({ isActive }) => setProfileLink(isActive)}
        to="/bookmark"
      >
        <VscBookmark className="mr-5" />
      </NavLink>
    </>
  );
};
