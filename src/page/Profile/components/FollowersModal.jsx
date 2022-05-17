import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { User } from "../../../components/componentExport";

export const FollowersModal = ({ followerList, setIsFollowersList }) => {
  return (
    <div className="modal-container">
      <div className="modal flex-col">
        <button
          className="modal-close-btn"
          onClick={() => setIsFollowersList(false)}
        >
          <VscChromeClose />
        </button>
        {followerList.map((user) => (
          <User suggestedUser={user} key={user._id} />
        ))}
      </div>
    </div>
  );
};
