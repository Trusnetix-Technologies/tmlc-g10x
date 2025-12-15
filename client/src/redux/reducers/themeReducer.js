import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "activeTheme",
    initialState: {
        activeTheme: "light"
    },
})