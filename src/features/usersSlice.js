import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
  },
});

export default usersSlice.reducer;
