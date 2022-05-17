import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  followService,
  unFollowService,
} from "../services/followUnfollowServices";

const initialState = {
  isLoading: false,
  users: [],
  error: "",
};

export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (_state, { rejectWithValue }) => {
    try {
      const res = await axios.get("/api/users");
      if (res.status === 200) return res.data;
    } catch (error) {
      return rejectWithValue({
        message: "Oops api having problems can't get the data",
      });
    }
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ userData, token }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "/api/users/edit",
        { userData },
        { headers: { authorization: token } }
      );
      if (res.status === 201) return res.data;
    } catch (error) {
      return rejectWithValue({ message: "Failed to update user! try again" });
    }
  }
);

export const followUser = createAsyncThunk(
  "users/followUser",
  async ({ userId, token }, { rejectWithValue }) => {
    try {
      const res = await followService(userId, token);
      if (res.status === 200) return res.data;
    } catch (error) {
      return rejectWithValue({ message: "User already following" });
    }
  }
);

export const unFollowUser = createAsyncThunk(
  "users/unFollowUser",
  async ({ userId, token }, { rejectWithValue }) => {
    try {
      const res = await unFollowService(userId, token);
      if (res.status === 200) return res.data;
    } catch (error) {
      return rejectWithValue({ message: "User already not following" });
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.users = payload.users;
      state.error = "";
    });

    builder.addCase(getAllUsers.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.users = [];
      state.error = payload.message;
    });

    builder.addCase(updateUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(updateUser.fulfilled, (state, { payload: { user } }) => {
      state.isLoading = false;
      state.users = state.users.map((currentUser) =>
        currentUser.username === user.username ? user : currentUser
      );
      state.error = "";
    });

    builder.addCase(updateUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.message;
    });

    builder.addCase(followUser.pending, (state, { payload }) => {
      state.isLoading = true;
    });

    builder.addCase(
      followUser.fulfilled,
      (state, { payload: { user, followUser } }) => {
        state.isLoading = false;

        state.users = state.users.map((currentUser) =>
          currentUser._id === user._id ? user : currentUser
        );
        state.users = state.users.map((currentUser) =>
          currentUser._id === followUser._id ? followUser : currentUser
        );
        state.error = "";
      }
    );

    builder.addCase(followUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.message;
    });

    builder.addCase(unFollowUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(
      unFollowUser.fulfilled,
      (state, { payload: { user, followUser } }) => {
        state.isLoading = false;

        state.users = state.users.map((currentUser) =>
          currentUser._id === followUser._id ? followUser : currentUser
        );

        state.users = state.users.map((currentUser) =>
          currentUser._id === user._id ? user : currentUser
        );
      }
    );

    builder.addCase(unFollowUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.message;
    });
  },
});

export default usersSlice.reducer;
