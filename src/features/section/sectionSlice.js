import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  section: "world",
};

export const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    saveSection: (state, action) => {
      state.section = action.payload;
    },
    resetSection: (state) => {
      state.section = "world";
    },
  },
});

export const { saveSection, resetSection } = sectionSlice.actions;

export default sectionSlice.reducer;
