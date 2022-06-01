import React, { useState } from "react";
import { VscHeart, VscBookmark, VscComment } from "react-icons/vsc";
import { IoShareSocialOutline } from "react-icons/io5";
import { RiHeartFill } from "react-icons/ri";
import { DummyAvatar } from "../componentExport";
import { BsThreeDots } from "react-icons/bs";
import { RiBookmarkFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  disLikePost,
  likePost,
  setCurrentPost,
  setDeletePostId,
} from "../../features/postSlice";
import { Link } from "react-router-dom";
import { bookmarkPost, removeFromBookmark } from "../../features/bookmarkSlice";
import toast from "react-hot-toast";
import { toastProps } from "../../constants";
import { PostFeatureModal } from "../../page/Posts/components/PostFeatureModal/PostFeatureModal";

export const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const {
    auth: { user, token },
    allUsers: { users },
    allPosts: { isLiked },
    bookmarks: { bookmarkPosts, isLoading },
  } = useSelector((state) => state);
  const [isShowPostFeatureModal, setShowPostFeatureModal] = useState(false);

  const postUser = users?.find((user) => user.username === post?.username);

  const isLikedByUser = post.likes.likedBy.find(
    (post) => post.username === user.username
  );

  const isBookmarked = bookmarkPosts?.find((postId) => postId === post._id);

  const copyToClipBoard = async () => {
    await navigator.clipboard.writeText(
      `https://sm-spotter.netlify.app/post/${post.id}`
    );
    toast.success("Link copied to clip board", toastProps);
  };

  const showPostHandler = () => {
    setShowPostFeatureModal(true);
    dispatch(setCurrentPost({ post }));
    dispatch(setDeletePostId(post._id));
  };

  const bookMarkHandler = () => {
    dispatch(bookmarkPost({ postId: post._id, token }));
    !isLoading && toast.success("Bookmarked the post", toastProps);
  };

  const removeBookMarkHandler = () => {
    dispatch(removeFromBookmark({ postId: post._id, token }));
    !isLoading && toast.success("Removed from the bookmark", toastProps);
  };

  const likeHandler = () => {
    dispatch(likePost({ postId: post._id, token }));
    !isLiked && toast.success("Liked the post", toastProps);
  };

  const disLikeHandler = () => {
    dispatch(disLikePost({ postId: post._id, token }));
    !isLiked && toast.success("Removed like from the post", toastProps);
  };

  return (
    <>
      {isShowPostFeatureModal && (
        <PostFeatureModal setShowPostFeatureModal={setShowPostFeatureModal} />
      )}
      <div className="my-2 w-full max-w-xl border">
        <div className="p-3 flex justify-start items-center">
          <Link to={`/profile/${postUser?.username}`}>
            <div className="flex justify-center items-center">
              <div className="w-10 h-10">
                {postUser?.profileImg === "" ? (
                  <DummyAvatar
                    firstname={postUser?.firstname}
                    lastname={postUser?.lastname}
                  />
                ) : (
                  <img
                    className="profile-avatar"
                    src={postUser?.profileImg}
                    alt={postUser?.username}
                  />
                )}
              </div>
              <p className="ml-2 text-sm">{post?.username}</p>
            </div>
          </Link>
          {post?.username === user.username ? (
            <button
              onClick={showPostHandler}
              className="text-xl ml-auto cursor-pointer hover:text-sky-500"
            >
              <BsThreeDots />
            </button>
          ) : null}
        </div>
        {post?.postImage ? (
          <img className="w-full" src={post?.postImage} alt={post?.username} />
        ) : null}
        <p className="p-3">{post?.postText}</p>
        <div className="features flex p-3 text-2xl">
          {isLikedByUser ? (
            <button onClick={disLikeHandler}>
              <RiHeartFill className="text-sky-500" />
            </button>
          ) : (
            <button className="hover:text-sky-500" onClick={likeHandler}>
              <VscHeart />
            </button>
          )}

          <Link to={`/post/${post?.id}`}>
            <VscComment className="mx-3 hover:text-sky-500" />
          </Link>

          <button className="hover:text-sky-500" onClick={copyToClipBoard}>
            <IoShareSocialOutline />
          </button>
          {isBookmarked ? (
            <button onClick={removeBookMarkHandler} className="ml-auto">
              <RiBookmarkFill className="text-sky-500" />
            </button>
          ) : (
            <button
              onClick={bookMarkHandler}
              className="hover:text-sky-500 ml-auto"
            >
              <VscBookmark />
            </button>
          )}
        </div>
        <div className="p-3">
          <p>
            {post.likes.likeCount > 0 ? (
              <small className="text-sm block font-bold">
                {post.likes.likeCount}
                {post.likes.likeCount > 1 ? " likes" : " like"}
              </small>
            ) : null}
            <small className="text-sm font-bold">{post?.username}</small>
            <small className="text-sm opacity-70"> {post?.postCaption}</small>
          </p>
          <small className="text-gray-500">{post?.createdAt}</small>
        </div>
      </div>
    </>
  );
};
