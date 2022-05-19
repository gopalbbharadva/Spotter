import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DummyAvatar } from "../../../../components/componentExport";
import {
  deletePostComment,
  editPostComment,
} from "../../../../features/postSlice";

export const Comment = ({ comment, postId }) => {
  const {
    auth: { user, token },
    allUsers: { users },
  } = useSelector((state) => state);

  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const commentedUser = users.find(
    ({ username }) => comment.username === username
  );

  const [editComment, setEditComment] = useState(comment);
  const [showOption, setShowOptions] = useState(false);

  const editHandler = (e) => {
    e.preventDefault();
    dispatch(
      editPostComment({
        commentData: editComment,
        commentId: comment._id,
        postId,
        token,
      })
    );
    setIsEdit(false);
  };

  const deleteHandler = () => {
    dispatch(
      deletePostComment({
        commentId: comment._id,
        postId,
        token,
      })
    );
    setShowOptions(false);
  };

  const editOptionHandler = () => {
    setIsEdit(true);
    setShowOptions(false);
  };

  return (
    <>
      <div className="mt-5 border-x-2 border-sky-500 p-2 w-full items-center">
        <div className="flex justify-between ">
          <Link to={`/profile/${commentedUser?.username}`}>
            <div className="flex cursor-pointer">
              <div className="w-10 h-10">
                {!commentedUser?.profileImg ? (
                  <DummyAvatar
                    firstname={commentedUser?.firstname}
                    lastname={commentedUser?.lastname}
                  />
                ) : (
                  <img
                    className="profile-avatar"
                    src={commentedUser?.profileImg}
                    alt="user profile"
                  />
                )}
              </div>
              <div className="ml-3 text-sm flex flex-col items-start">
                <p>{commentedUser?.username}</p>
                <p className=" text-gray-500">
                  {commentedUser?.firstname} {commentedUser?.lastname}
                </p>
              </div>
            </div>
          </Link>
          <div className="relative">
            {user.username === commentedUser.username ? (
              <BsThreeDots
                className="text-xl cursor-pointer hover:text-sky-500"
                onClick={() => setShowOptions((prev) => !prev)}
              />
            ) : null}
            {showOption ? (
              <div
                className="absolute border border-sky-500 bg-white 
            p-3 right-4 top-4 rounded-md"
              >
                <button
                  className="hover:text-sky-500"
                  onClick={editOptionHandler}
                >
                  Edit
                </button>
                <button className="hover:text-red-500" onClick={deleteHandler}>
                  Delete
                </button>
              </div>
            ) : null}
          </div>
        </div>
        {isEdit ? (
          <form onSubmit={editHandler} className="flex flex-col">
            <input
              onChange={(e) =>
                setEditComment((prev) => ({
                  ...prev,
                  content: e.target.value,
                }))
              }
              type="text"
              name="content"
              value={editComment.content}
              placeholder="Write your comment here"
              className="border mt-3 px-4 py-2 focus:outline-none 
              border-sky-500 rounded-md"
            />
            <div className="mt-3">
              <button
                disabled={editComment.content.trim().length > 0 ? false : true}
                type="submit"
                className="disabled:opacity-50 py-1 px-4 rounded-md  text-base 
              bg-sky-500 hover:bg-sky-600 text-white"
              >
                Update
              </button>
              <button
                onClick={() => setIsEdit(false)}
                className="py-1 px-4 ml-3 rounded-md text-base 
              border border-red-500 text-red-500 
              hover:bg-red-500 hover:text-white"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <p className="mt-3">{comment.content}</p>
        )}
      </div>
    </>
  );
};
