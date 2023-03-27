import { createSlice } from "@reduxjs/toolkit";
import { NewsLayout } from "../../types";
const initialState = { layout: "list" as NewsLayout };

const newsLayout = createSlice({
    name: "newsLayout",
    initialState,
    reducers: {
        setNewsLayout(state) {
            state.layout = state.layout === "list" ? "tile" : "list";
        },
    },
});
export default newsLayout.reducer;
export const { setNewsLayout } = newsLayout.actions;
export const getNewsLayout = (state: { newsLayout: { layout: NewsLayout } }) => state.newsLayout.layout;
