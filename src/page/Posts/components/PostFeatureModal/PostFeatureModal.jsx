import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
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
  const {
    auth: { token },
    allPosts: { deletePostId },
  } = useSelector((state) => state);

  const updateHandler = () => {
    dispatch(postEdit(true));
    setShowPostFeatureModal(false);
    dispatch(showPostModal());
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
          onClick={() => {
            dispatch(deleteUserPost({ postId: deletePostId, token }));
            setShowPostFeatureModal(false);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
