import React from "react";
import { VscHeart, VscBookmark, VscComment } from "react-icons/vsc";
import { IoShareSocialOutline } from "react-icons/io5";
import { DummyAvatar, PostModal } from "../componentExport";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPost,
  setDeletePostId,
  showPostFeatureModal,
} from "../../features/postSlice";
import { PostFeatureModal } from "../../page/Posts/components/PostFeatureModal/PostFeatureModal";

export const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const {
    auth: { user },
    allUsers: { users },
    allPosts: { isShowPostFeatureModal, isShowPostModal },
  } = useSelector((state) => state);
  const postUser = users?.find((user) => user.username === post?.username);
  console.log(post)

  return (
    <>
      {isShowPostModal && <PostModal post={post} />}
      {isShowPostFeatureModal ? (
        <PostFeatureModal />
      ) : (
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
            {post.username === user.username ? (
              <button
                onClick={() => {
                  dispatch(showPostFeatureModal());
                  dispatch(setCurrentPost({ post }));
                  dispatch(setDeletePostId(post._id));
                }}
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
            <VscHeart />
            <VscComment className="mx-3" />
            <IoShareSocialOutline />
            <VscBookmark className="ml-auto" />
          </div>
          <div className="p-3">
            <p>
              <small className="text-sm block font-bold">30 likes</small>
              <small className="text-sm font-bold">Admin user </small>
              <small className="text-sm opacity-70">{post?.postCaption}</small>
            </p>
            <small className="text-gray-500">12 hours ago</small>
          </div>
        </div>
      )}
    </>
  );
};
