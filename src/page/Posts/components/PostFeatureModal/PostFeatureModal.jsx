import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteUserPost,
  hidePostModal,
  postEdit,
  setCurrentPost,
  showPostModal,
} from "../../../../features/postSlice";
import { useClickOutside } from "../../../../hooks/useClickOutSide";

export const PostFeatureModal = ({ setShowPostFeatureModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    auth: { token },
    allPosts: { deletePostId },
  } = useSelector((state) => state);

  const updateHandler = () => {
    dispatch(postEdit(true));
    setShowPostFeatureModal(false);
    dispatch(showPostModal());
  };

  const deletePostHandler = () => {
    dispatch(deleteUserPost({ postId: deletePostId, token }));
    setShowPostFeatureModal(false);
    navigate("/");
  };

  const closeModalHandler = () => {
    setShowPostFeatureModal(false);
    dispatch(hidePostModal());
    dispatch(setCurrentPost({ post: {} }));
  };

  const postFeatureRef = useClickOutside(() => setShowPostFeatureModal());

  return (
    <div className="modal-container">
      <div ref={postFeatureRef} className="modal flex-col">
        <button className="modal-close-btn" onClick={closeModalHandler}>
          <VscChromeClose />
        </button>
        <button
          onClick={updateHandler}
          className="text-sky-500 hover:text-sky-600"
        >
          Edit
        </button>
        <button
          className="text-red-500 hover:text-red-600"
          onClick={deletePostHandler}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
