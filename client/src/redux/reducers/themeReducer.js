import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "activeTheme",
  initialState: {
    activeTheme: "light",
  },
  reducers: {
    getActiveTheme: (state) => {
      state.activeTheme == state.activeTheme ?? "light";
    },
    toggleTheme: (state) => {
      state.activeTheme = state.activeTheme === "light" ? "dark" : "light";
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const { getActiveTheme, toggleTheme } = themeSlice.actions;
export const selectTheme = (state) => state.activeTheme;
