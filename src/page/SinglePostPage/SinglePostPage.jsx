import React, { useEffect, useState } from "react";
import {
  Loader,
  PostCard,
  Sidebar,
  Comment,
} from "../../components/componentExport";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../features/usersSlice";
import { addCommentToPost, getAllPosts } from "../../features/postSlice";
import { useParams } from "react-router-dom";

export const SinglePostPage = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();

  const {
    auth: { user, token },
    allUsers: { users },
    allPosts: { posts, isLoading },
  } = useSelector((state) => state);

  const [commentData, setCommentData] = useState({ content: "" });

  const currentUser = users?.find(({ username }) => username === user.username);
  const currentPost = posts?.find(({ id }) => id === postId);

  const commentSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addCommentToPost({
        commentData,
        postId: currentPost._id,
        token,
      })
    );
    setCommentData({ content: "" });
  };

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllPosts());
  }, []);

  return (
    <div className="px-2 relative flex flex-col">
      <div className="flex justify-center">
        <div className="w-full m-7 flex justify-center items-end flex-col lg:w-2/3">
          {isLoading ? (
            <Loader />
          ) : (
            <div className="w-full max-w-xl flex justify-center items-start flex-col">
              <PostCard post={currentPost} currentUser={currentUser} />
              <div className="w-full lg:w-2/3">
                <p className="self-start">Comments</p>
                <div
                  className="px-4 py-2 rounded-md border border-sky-500 
                 w-full"
                >
                  <form
                    onSubmit={commentSubmitHandler}
                    className="flex justify-start"
                  >
                    <input
                      onChange={(e) =>
                        setCommentData((prev) => ({
                          ...prev,
                          content: e.target.value,
                        }))
                      }
                      value={commentData?.content}
                      name="content"
                      className="focus:outline-none"
                      type="text"
                      placeholder="Write your comments here"
                    />
                    <button
                      disabled={
                        commentData.content.trim().length > 0 ? false : true
                      }
                      className="disabled:opacity-50 ml-auto text-sky-500 hover:text-sky-600"
                    >
                      Post
                    </button>
                  </form>
                </div>
                {currentPost?.comments.map((comment) => (
                  <Comment
                    key={comment._id}
                    postId={currentPost._id}
                    comment={comment}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="hidden sticky top-10 w-96 p-10 my-2 lg:block">
          <Sidebar currentUser={currentUser} users={users} />
        </div>
      </div>
    </div>
  );
};
