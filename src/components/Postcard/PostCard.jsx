import React from "react";
import { VscHeart, VscBookmark, VscComment } from "react-icons/vsc";
import { IoShareSocialOutline } from "react-icons/io5";
import { RiHeartFill } from "react-icons/ri";
import { DummyAvatar, PostModal } from "../componentExport";
import { BsThreeDots } from "react-icons/bs";
import { RiBookmarkFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  disLikePost,
  likePost,
  setCurrentPost,
  setDeletePostId,
  showPostFeatureModal,
} from "../../features/postSlice";
import { PostFeatureModal } from "../../page/Posts/components/PostFeatureModal/PostFeatureModal";
import { Link } from "react-router-dom";
import { bookmarkPost, removeFromBookmark } from "../../features/bookmarkSlice";

export const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const {
    auth: { user, token },
    allUsers: { users },
    allPosts: { isShowPostFeatureModal, isShowPostModal },
    bookmarks: { bookmarkPosts },
  } = useSelector((state) => state);
  const postUser = users?.find((user) => user.username === post?.username);

  const isLikedByUser = post.likes.likedBy.find(
    (post) => post.username === user.username
  );

  const isBookmarked = bookmarkPosts.find((postId) => postId === post._id);

  const showPostHandler = () => {
    dispatch(showPostFeatureModal());
    dispatch(setCurrentPost({ post }));
    dispatch(setDeletePostId(post._id));
  };

  return (
    <>
      {isShowPostModal && <PostModal post={post} />}
      {isShowPostFeatureModal && <PostFeatureModal />}
      <div className="my-2 w-full max-w-xl border">
        <div className="p-3 flex justify-start items-center">
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
          <img src={post?.postImage} alt={post?.username} />
        ) : null}
        <p className="p-3">{post?.postText}</p>
        <div className="features flex p-3 text-2xl">
          {isLikedByUser ? (
            <button
              onClick={() => dispatch(disLikePost({ postId: post._id, token }))}
            >
              <RiHeartFill className="text-sky-500" />
            </button>
          ) : (
            <button
              onClick={() => dispatch(likePost({ postId: post._id, token }))}
            >
              <VscHeart />
            </button>
          )}

          <Link to={`/post/${post?.id}`}>
            <VscComment className="mx-3" />
          </Link>

          <IoShareSocialOutline />
          {isBookmarked ? (
            <button
              onClick={() =>
                dispatch(removeFromBookmark({ postId: post._id, token }))
              }
              className="ml-auto"
            >
              <RiBookmarkFill className="text-sky-500" />
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch(bookmarkPost({ postId: post._id, token }))
              }
              className="ml-auto"
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
