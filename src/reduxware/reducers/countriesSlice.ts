import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Countries } from "../../types";
const initialState = { list: ["br", "pl", "fr"] as Countries };

// const initialState = { list: [] as Countries };
const countries = createSlice({
    name: "countries",
    initialState,
    reducers: {
        setCountries(state, action: PayloadAction<Countries>) {
            state.list = action.payload;
        },
    },
});
export default countries.reducer;
export const { setCountries } = countries.actions;
export const getCountriesList = (state: { countries: { list: Countries } }) => state.countries.list;
