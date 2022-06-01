import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { User } from "../../../components/componentExport";
import { useClickOutside } from "../../../hooks/useClickOutSide";

export const FollowCombineModal = ({ userList, setShowFollowModal }) => {
  const followModalRef = useClickOutside(() => setShowFollowModal());

  return (
    <div className="modal-container">
      <div ref={followModalRef} className="modal flex-col">
        <button
          className="modal-close-btn"
          onClick={() => setShowFollowModal(false)}
        >
          <VscChromeClose />
        </button>
        {userList.map((user) => (
          <User suggestedUser={user} key={user._id} />
        ))}
      </div>
    </div>
  );
};
