import React from "react";
import { VscDiffAdded, VscHome } from "react-icons/vsc";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";

export const Featurelist = () => {
  return (
    <>
      <VscHome className="mr-5" />
      <VscDiffAdded className="mr-5 " />
      <MdOutlineExplore className="mr-5" />
      <IoNotificationsOutline className="mr-5" />
    </>
  );
};
