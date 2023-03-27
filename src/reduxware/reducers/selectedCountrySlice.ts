import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = { country: "" };

const selectedCountry = createSlice({
    name: "selectedCountry",
    initialState,
    reducers: {
        setSelectedCountry(state, action: PayloadAction<string>) {
            state.country = action.payload;
        },
        clearSelectedCountry(state) {
            // state.country = action.payload;
            state.country = "";
        },
    },
});
export default selectedCountry.reducer;
export const { setSelectedCountry, clearSelectedCountry } = selectedCountry.actions;
export const getSelectedCountry = (state: { selectedCountry: { country: string } }) => state.selectedCountry.country;
