import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload;
    },
    logOut: (state) => {
      state.email = "";
    },
  },
});

export const { login, logOut } = authSlice.actions;

export default authSlice.reducer;
