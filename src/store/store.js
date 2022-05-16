import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import usersReducer from "../features/usersSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    allUsers: usersReducer,
  },
});

export default store;
