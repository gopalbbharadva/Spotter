import React, { useState } from "react";
import { BsCardImage } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import {
  hidePostModal,
  postEdit,
  postUserPost,
  updateUserPost,
} from "../../features/postSlice";
import { DummyAvatar } from "../componentExport";
import DummyImage from "../../assets/DummyImage.png";
import { useClickOutside } from "../../hooks/useClickOutSide";

export const PostModal = ({ setShowPostModal }) => {
  const {
    auth: { user, token },
    allUsers: { users },
    allPosts: { currentPost, isEditPost },
  } = useSelector((state) => state);

  const dispatch = useDispatch();
  const [postData, setPostData] = useState(
    isEditPost ? currentPost : { postText: "", postCaption: "", postImage: "" }
  );

  const currentUser = users?.find(({ username }) => username === user.username);
  const [image, setImage] = useState("");

  const imageHandler = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (reader.readyState === 2) setImage(reader.result);
    };
  };

  const postSubmitHandler = () => {
    if (isEditPost)
      dispatch(
        updateUserPost({
          postId: postData._id,
          postData: {
            ...postData,
            postImage: image === "" ? postData?.postImage : image,
          },
          token,
        })
      );
    else
      dispatch(
        postUserPost({
          postData: { ...postData, postImage: image },
          token,
        })
      );
  };

  const closeModalHandler = () => {
    setShowPostModal(false);
    dispatch(postEdit(false));
    dispatch(hidePostModal());
  };

  const formHandler = (e) => {
    e.preventDefault();
    postSubmitHandler();
    dispatch(postEdit(false));
    setShowPostModal(false);
    dispatch(hidePostModal());
  };

  const modalRef = useClickOutside(() => setShowPostModal());

  return (
    <div className="modal-container">
      <div ref={modalRef} className="modal">
        <button className="modal-close-btn" onClick={closeModalHandler}>
          <VscChromeClose />
        </button>
        <div className="w-16 h-16 flex-shrink-0 mt-5">
          {currentUser?.profileImg === "" ? (
            <DummyAvatar
              firstname={currentUser.firstname}
              lastname={currentUser.lastname}
            />
          ) : (
            <img
              className="profile-avatar"
              src={currentUser?.profileImg}
              alt={currentUser?.username}
            />
          )}
        </div>
        <form className="post-form" onSubmit={formHandler}>
          {image === "" &&
          (postData?.postImage === undefined || postData?.postImage === "") ? (
            <img className="h-20" src={DummyImage} alt="post preview" />
          ) : (
            <img
              src={`${
                postData?.postImage !== "" && image === ""
                  ? postData?.postImage
                  : image
              }`}
              alt="post not preview"
            />
          )}
          <input
            onChange={(e) =>
              setPostData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            name="postCaption"
            placeholder="Caption..."
            type="text"
            value={postData.postCaption}
          />
          <textarea
            onChange={(e) =>
              setPostData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            name="postText"
            value={postData.postText}
            required
            minLength={1}
            rows={4}
            placeholder="What's Happening?"
          />
          <div className="btn-area">
            <label className="cursor-pointer">
              <BsCardImage />
              <input
                type="file"
                className="hidden"
                onChange={(e) => imageHandler(e)}
                accept="image/*"
              />
            </label>
            <button
              className="disabled:opacity-50"
              disabled={postData.postText.trim().length > 0 ? false : true}
            >
              {isEditPost ? "Update" : "Post"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
