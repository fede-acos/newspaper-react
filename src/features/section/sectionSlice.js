import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  section: "world",
};

export const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    saveSection: (state, action) => {
      state = action.payload;
    },
    resetSection: (state) => {
      state = initialState.section;
    },
  },
});

export const { saveSection, resetSection } = sectionSlice;
export default sectionSlice.reducer;
