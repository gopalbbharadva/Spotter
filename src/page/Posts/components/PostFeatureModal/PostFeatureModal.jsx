import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserPost,
  hidePostFeatureModal,
  postEdit,
  setCurrentPost,
  showPostModal,
} from "../../../../features/postSlice";

export const PostFeatureModal = () => {
  const dispatch = useDispatch();
  const {
    auth: { token },
    allPosts: { deletePostId },
  } = useSelector((state) => state);

  return (
    <div className="modal-container">
      <div className="modal flex-col">
        <button
          className="modal-close-btn"
          onClick={() => {
            dispatch(hidePostFeatureModal());
            dispatch(setCurrentPost({ post: {} }));
          }}
        >
          <VscChromeClose />
        </button>
        <button
          onClick={() => {
            dispatch(postEdit(true));
            dispatch(hidePostFeatureModal());
            dispatch(showPostModal());
          }}
          className="text-sky-500 hover:text-sky-600"
        >
          Edit
        </button>
        <button
          className="text-red-500 hover:text-red-600"
          onClick={() => {
            dispatch(deleteUserPost({ postId: deletePostId, token }));
            dispatch(hidePostFeatureModal());
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
