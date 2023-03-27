import countriesReducer from "./reduxware/reducers/countriesSlice";
import newsLayoutReducer from "./reduxware/reducers/newsLayoutSlice";
import newsDataReducer from "./reduxware/reducers/newsSlice";
import selectedCountryReducer from "./reduxware/reducers/selectedCountrySlice";
import articleModalReducer from "./reduxware/reducers/modalSlice";

import "../src/styles/styles.css";

import React, { ReactNode } from "react";

import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./i18n/config";

import { HashRouter as Router } from "react-router-dom";

import { SnackbarProvider } from "notistack";

const rootReducer = combineReducers({
    countries: countriesReducer,
    newsLayout: newsLayoutReducer,
    newsData: newsDataReducer,
    selectedCountry: selectedCountryReducer,
    articleModal: articleModalReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
                vertical: "top",
                horizontal: "left",
            }}
        >
            <Provider store={store}>
                <Router>{children}</Router>
            </Provider>
        </SnackbarProvider>
    );
};

export default AppProvider;
export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
