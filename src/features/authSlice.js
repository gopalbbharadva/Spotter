import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginService, signUpService } from "../services/authServices";

const initialState = {
  isLoading: false,
  user: JSON.parse(localStorage.getItem("authData"))?.user || "",
  token: JSON.parse(localStorage.getItem("authData"))?.token || "",
  error: "",
};

export const userLoginAction = createAsyncThunk(
  "auth/userLoginAction",
  async (loginData, { rejectWithValue }) => {
    try {
      const res = await loginService(loginData);
      if (res.status === 200) return res.data;
    } catch (error) {
      return rejectWithValue("User with these credentials not found");
    }
  }
);

export const userSignUpAction = createAsyncThunk(
  "auth/userSignUpAction",
  async (signUpData, { rejectWithValue }) => {
    try {
      const res = await signUpService(signUpData);
      if (res.status === 201) return res.data;
    } catch (error) {
      return rejectWithValue("User already exists");
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      localStorage.removeItem("authData");
      state.error = "";
      state.isLoading = false;
      state.user = "";
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLoginAction.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(
      userLoginAction.fulfilled,
      (state, { payload: { foundUser, encodedToken } }) => {
        state.isLoading = false;
        state.token = encodedToken;
        state.user = foundUser;
        state.error = "";
        localStorage.setItem(
          "authData",
          JSON.stringify({
            token: encodedToken,
            user: foundUser,
          })
        );
      }
    );

    builder.addCase(userLoginAction.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.user = "";
      state.error = payload;
    });

    builder.addCase(userSignUpAction.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(
      userSignUpAction.fulfilled,
      (state, { payload: { createdUser, encodedToken } }) => {
        state.isLoading = false;
        state.user = createdUser;
        state.token = encodedToken;
        state.error = "";
        localStorage.setItem(
          "authData",
          JSON.stringify({ token: encodedToken, user: createdUser })
        );
      }
    );

    builder.addCase(userSignUpAction.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.user = "";
      state.error = payload;
    });
  },
});

export default authSlice.reducer;
export const { logoutUser } = authSlice.actions;
