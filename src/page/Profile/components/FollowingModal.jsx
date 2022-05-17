import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { User } from "../../../components/componentExport";

export const FollowingModal = ({ followingList, setIsFollowingList }) => {
  return (
    <div className="modal-container">
      <div className="modal flex-col">
        <button
          className="modal-close-btn"
          onClick={() => setIsFollowingList(false)}
        >
          <VscChromeClose />
        </button>
        {followingList.map((user) => (
          <User suggestedUser={user} key={user._id} />
        ))}
      </div>
    </div>
  );
};
