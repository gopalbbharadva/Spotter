import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import usersReducer from "../features/usersSlice";
import postReducer from "../features/postSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    allUsers: usersReducer,
    allPosts: postReducer,
  },
});

export default store;
