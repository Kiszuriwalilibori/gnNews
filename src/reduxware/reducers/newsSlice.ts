import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fakeState } from "../../fixtures";
import { DataWithCountry } from "../../types";
const initialState = { data: fakeState as DataWithCountry[] };

// const initialState = { data: [] as DataWithCountry[] };

const newsData = createSlice({
    name: "newsData",
    initialState,
    reducers: {
        setNewsData(state, action: PayloadAction<DataWithCountry[]>) {
            state.data = action.payload;
        },
    },
});
export default newsData.reducer;
export const { setNewsData } = newsData.actions;
export const getNewsData = (state: { newsData: { data: DataWithCountry[] } }) => state.newsData.data;
