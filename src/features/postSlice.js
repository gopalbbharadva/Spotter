import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deletePostService,
  getAllPostsService,
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
} = postSlice.actions;
