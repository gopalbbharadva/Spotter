import React from "react";
import { BsCardImage } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { useModal } from "../../contexts/ModalContext";

export const PostModal = () => {
  const { setShowPostModal } = useModal();
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
          <img
            className="profile-avatar"
            src="https://treatiseui.netlify.app/Images/ian-dooley-lg.jpg"
          />
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
