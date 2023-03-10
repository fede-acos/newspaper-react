import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  section: "home",
};

export const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    saveSection: (state, action) => {
      state.section = action.payload;
    },
    resetSection: (state) => {
      state.section = "home";
    },
  },
});

export const { saveSection, resetSection } = sectionSlice.actions;

export default sectionSlice.reducer;
