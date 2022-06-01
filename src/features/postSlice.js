import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addCommentToPostService,
  deleteCommentOfPostService,
  deletePostService,
  disLikePostService,
  editCommentToPostService,
  getAllPostsService,
  likePostService,
  postService,
  updatePostService,
} from "../services/postServices";

const initialState = {
  isLoading: false,
  posts: [],
  error: "",
  isShowPostModal: false,
  isShowPostFeatureModal: false,
  currentPost: {},
  isEditPost: false,
  deletePostId: "",
  isLiked: false,
};

export const getAllPosts = createAsyncThunk(
  "post/getAllposts",
  async (_state, { rejectWithValue }) => {
    try {
      const res = await getAllPostsService();
      if (res.status === 200) return res.data;
    } catch (error) {
      return rejectWithValue({
        message: "Api having problems for getting posts",
      });
    }
  }
);

export const postUserPost = createAsyncThunk(
  "post/postUserPost",
  async ({ postData, token }, { rejectWithValue }) => {
    try {
      const res = await postService(postData, token);
      if (res.status === 201) return res.data;
    } catch (error) {
      return rejectWithValue({ message: "Post is not failed" });
    }
  }
);

export const updateUserPost = createAsyncThunk(
  "post/updateUserPost",
  async ({ postId, postData, token }, { rejectWithValue }) => {
    try {
      const res = await updatePostService(postId, postData, token);
      if (res.status === 201) return res.data;
    } catch (error) {
      return rejectWithValue({ message: "Post is not failed" });
    }
  }
);

export const deleteUserPost = createAsyncThunk(
  "post/deleteUserPost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const res = await deletePostService(postId, token);
      if (res.status === 201) return res.data;
    } catch (error) {
      return rejectWithValue({ message: "Post deletion failed" });
    }
  }
);

export const addCommentToPost = createAsyncThunk(
  "post/addCommentToPost",
  async ({ commentData, postId, token }, { rejectWithValue }) => {
    console.log(commentData);
    try {
      const res = await addCommentToPostService(commentData, postId, token);
      if (res.status === 201) return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue({ message: "Adding comments failed" });
    }
  }
);

export const editPostComment = createAsyncThunk(
  "post/editPostComment",
  async ({ commentData, postId, commentId, token }, { rejectWithValue }) => {
    try {
      const res = await editCommentToPostService(
        commentData,
        postId,
        commentId,
        token
      );
      if (res.status === 201) return res.data;
    } catch (error) {
      return rejectWithValue({ message: "could not update the comment" });
    }
  }
);

export const deletePostComment = createAsyncThunk(
  "post/deletePostComment",
  async ({ commentId, postId, token }, { rejectWithValue }) => {
    try {
      const res = await deleteCommentOfPostService(commentId, postId, token);
      if (res.status === 201) return res.data;
    } catch (error) {
      return rejectWithValue({ message: "could not delete this comment" });
    }
  }
);

export const likePost = createAsyncThunk(
  "post/likePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const res = await likePostService(postId, token);
      if (res.status === 201) return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue({ message: "Like post failed" });
    }
  }
);

export const disLikePost = createAsyncThunk(
  "/post/disLikePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const res = await disLikePostService(postId, token);
      if (res.status === 201) return res.data;
    } catch (error) {
      return rejectWithValue({ message: "dis like post failed" });
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    showPostModal: (state) => {
      state.isShowPostModal = true;
    },
    hidePostModal: (state) => {
      state.isShowPostModal = false;
    },
    showPostFeatureModal: (state) => {
      state.isShowPostFeatureModal = true;
    },
    hidePostFeatureModal: (state) => {
      state.isShowPostFeatureModal = false;
    },
    setCurrentPost: (state, { payload: { post } }) => {
      state.currentPost = post;
    },
    postEdit: (state, { payload }) => {
      state.isEditPost = payload;
    },
    setDeletePostId: (state, { payload }) => {
      state.deletePostId = payload;
    },
    sortByTrending: (state) => {
      state.posts = state.posts.sort(
        (a, b) => b.likes.likeCount - a.likes.likeCount
      );
    },
    sortByLatest: (state) => {
      state.posts = state.posts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    },
    sortByOldest: (state) => {
      state.posts = state.posts.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    },
  },
  extraReducers: (builder) => {
    // getting user posts
    builder.addCase(getAllPosts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getAllPosts.fulfilled, (state, { payload: { posts } }) => {
      state.isLoading = false;
      state.posts = posts.reverse();
      state.error = "";
    });

    builder.addCase(getAllPosts.rejected, (state, payload) => {
      state.isLoading = false;
      state.posts = [];
      state.error = payload.message;
    });

    // posting user post
    builder.addCase(postUserPost.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(postUserPost.fulfilled, (state, { payload: { posts } }) => {
      state.isLoading = false;
      state.posts = posts.reverse();
      state.error = "";
    });

    builder.addCase(postUserPost.rejected, (state, payload) => {
      state.isLoading = false;
      state.posts = [];
      state.error = payload.message;
    });

    // editing user post
    builder.addCase(updateUserPost.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(
      updateUserPost.fulfilled,
      (state, { payload: { posts } }) => {
        state.isLoading = false;
        state.posts = posts.reverse();
        state.error = "";
      }
    );

    builder.addCase(updateUserPost.rejected, (state, payload) => {
      state.isLoading = false;
      state.posts = [];
      state.error = payload.message;
    });

    // deleting user post
    builder.addCase(deleteUserPost.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(
      deleteUserPost.fulfilled,
      (state, { payload: { posts } }) => {
        state.isLoading = false;
        state.posts = posts.reverse();
        state.error = "";
      }
    );

    builder.addCase(deleteUserPost.rejected, (state, payload) => {
      state.isLoading = false;
      state.posts = [];
      state.error = payload.message;
    });

    // comment on user post
    builder.addCase(addCommentToPost.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(
      addCommentToPost.fulfilled,
      (state, { payload: { posts } }) => {
        state.isLoading = false;
        state.posts = posts.reverse();
        state.error = "";
      }
    );

    builder.addCase(addCommentToPost.rejected, (state, payload) => {
      state.isLoading = false;
      state.posts = [];
      state.error = payload.message;
    });

    // edit comment of post
    builder.addCase(editPostComment.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(
      editPostComment.fulfilled,
      (state, { payload: { posts } }) => {
        state.isLoading = false;
        state.posts = posts.reverse();
        state.error = "";
      }
    );

    builder.addCase(editPostComment.rejected, (state, payload) => {
      state.isLoading = false;
      state.posts = [];
      state.error = payload.message;
    });

    // delete comment of post
    builder.addCase(deletePostComment.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(
      deletePostComment.fulfilled,
      (state, { payload: { posts } }) => {
        state.isLoading = false;
        state.posts = posts.reverse();
        state.error = "";
      }
    );

    builder.addCase(deletePostComment.rejected, (state, payload) => {
      state.isLoading = false;
      state.posts = [];
      state.error = payload.message;
    });

    // like a post
    builder.addCase(likePost.pending, (state) => {
      state.isLiked = true;
    });

    builder.addCase(likePost.fulfilled, (state, { payload: { posts } }) => {
      state.isLiked = false;
      state.posts = posts.reverse();
      state.error = "";
    });

    builder.addCase(likePost.rejected, (state, payload) => {
      state.isLiked = false;
      state.posts = [];
      state.error = payload.message;
    });

    // dislike the post
    builder.addCase(disLikePost.pending, (state) => {
      state.isLiked = true;
    });

    builder.addCase(disLikePost.fulfilled, (state, { payload: { posts } }) => {
      state.isLiked = false;
      state.posts = posts.reverse();
      state.error = "";
    });

    builder.addCase(disLikePost.rejected, (state, payload) => {
      state.isLiked = false;
      state.posts = [];
      state.error = payload.message;
    });
  },
});

export default postSlice.reducer;
export const {
  showPostModal,
  hidePostModal,
  showPostFeatureModal,
  hidePostFeatureModal,
  setCurrentPost,
  postEdit,
  setDeletePostId,
  sortByTrending,
  sortByLatest,
  sortByOldest,
} = postSlice.actions;
