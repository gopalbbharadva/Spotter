import axios from "axios";

export const loginService = (loginData) =>
  axios.post("/api/auth/login", loginData);

export const signUpService = (signUpData) =>
  axios.post("/api/auth/signup", signUpData);
