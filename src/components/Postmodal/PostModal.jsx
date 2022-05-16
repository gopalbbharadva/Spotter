import React from "react";
import { BsCardImage } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { useModal } from "../../contexts/ModalContext";

export const PostModal = () => {
  const { setShowPostModal } = useModal();

  const {
    auth: { user },
    allUsers: { users },
  } = useSelector((state) => state);

  const currentUser = users?.find(({ username }) => username === user.username);

  return (
    <div className="post-modal-container">
      <div className="post-modal">
        <button
          className="modal-close-btn"
          onClick={() => setShowPostModal(false)}
        >
          <VscChromeClose />
        </button>
        <div className="w-16 h-16 flex-shrink-0 mt-5">
          {currentUser?.profileImg === "" ? (
            <div className="profile-avatar dummy-avatar">
              {currentUser?.firstname[0]} {currentUser?.lastname[0]}
            </div>
          ) : (
            <img
              className="profile-avatar"
              src={currentUser?.profileImg}
              alt="profile dp"
            />
          )}
        </div>
        <form className="post-form">
          <input placeholder="Caption..." type="text" />
          <textarea rows={4} placeholder="What's Happening?" />
          <div className="btn-area">
            <label className="cursor-pointer">
              <BsCardImage />
              <input type="file" className="hidden" />
            </label>
            <button>Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};
