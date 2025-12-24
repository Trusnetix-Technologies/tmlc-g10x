import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "moviesData",
  initialState: {
    movies: [],
    loading: "idle",
    error: null,
  },

  reducers: {},

});

export const selectMovies = (state) => state.moviesData;
export const movieReducer = moviesSlice.reducer;