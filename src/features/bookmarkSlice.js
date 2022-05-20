import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  bookmarkService,
  removeFromBookmarkService,
} from "../services/bookmarkServices";

const initialState = {
  isLoading: false,
  bookmarkPosts: [],
  error: "",
};

export const getBookMarkPosts = createAsyncThunk(
  "bookmark/getBookMarkPosts",
  async ({ token }, { rejectWithValue }) => {
    try {
      const res = await bookmarkService(token);
      return res.data;
    } catch (error) {
      return rejectWithValue({ message: "Getting bookmarks failed" });
    }
  }
);

export const bookmarkPost = createAsyncThunk(
  "bookmark/bookmarkPost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const res = await bookmarkService(postId, token);
      if (res.status === 200) return res.data;
      return res.data;
    } catch (error) {
      return rejectWithValue({ message: "Bookmark post failed" });
    }
  }
);

export const removeFromBookmark = createAsyncThunk(
  "bookmark/removeFromBookmark",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const res = await removeFromBookmarkService(postId, token);
      if (res.status === 200) return res.data;
    } catch (error) {
      return rejectWithValue({ message: "Rmove post from bookmark failed" });
    }
  }
);

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  extraReducers: (builder) => {
    //   getting bookmarks
    builder.addCase(getBookMarkPosts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(
      getBookMarkPosts.fulfilled,
      (state, { payload: { bookmarks } }) => {
        state.isLoading = false;
        state.bookmarkPosts = bookmarks;
      }
    );

    builder.addCase(getBookMarkPosts.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.message;
    });

    // add to bookmark
    builder.addCase(bookmarkPost.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(
      bookmarkPost.fulfilled,
      (state, { payload: { bookmarks } }) => {
        state.isLoading = false;
        state.bookmarkPosts = bookmarks;
      }
    );

    builder.addCase(removeFromBookmark.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.mesasge;
    });

    // remove from book mark
    builder.addCase(removeFromBookmark.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(
      removeFromBookmark.fulfilled,
      (state, { payload: { bookmarks } }) => {
        state.isLoading = false;
        state.bookmarkPosts = bookmarks;
      }
    );

    builder.addCase(bookmarkPost.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.mesasge;
    });
  },
});

export default bookmarkSlice.reducer;
