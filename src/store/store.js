import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import usersReducer from "../features/usersSlice";
import postReducer from "../features/postSlice";
import bookmarkReducer from "../features/bookmarkSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    allUsers: usersReducer,
    allPosts: postReducer,
    bookmarks: bookmarkReducer,
  },
});

export default store;
