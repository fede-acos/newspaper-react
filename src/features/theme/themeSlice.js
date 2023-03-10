import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    saveTheme: (state, action) => {
      state.theme = action.payload;
    },
    resetTheme: (state) => {
      state.theme = "light";
    },
  },
});

export const { saveTheme, resetTheme } = themeSlice.actions;

export default themeSlice.reducer;
