import { createSelector } from "@reduxjs/toolkit";
import { getNewsData } from "../reducers/newsSlice";
import { getSelectedCountry } from "../reducers/selectedCountrySlice";
import { getCountriesList } from "../reducers/countriesSlice";
import { countriesPath } from "../../fixtures";
import { isEmpty } from "lodash";
import { DataWithCountry } from "../../types";
export { getModal } from "../reducers/modalSlice";

/*helpers */

export const createCountryNews = (news: DataWithCountry[], countryCode: string) => {
    if (news && !isEmpty(news)) {
        if (countryCode === "") {
            const res: any = [];
            news.forEach((item: any) => {
                res.push(...item?.data?.articles);
            });

            return res;
        } else {
            const countryData = news.find((obj: any) => {
                return obj.country === countryCode;
            });

            if (!countryData) return [];

            const countryNews = countryData?.data?.articles;
            if (!countryNews) return [];
            return countryNews;
        }
    } else {
        return [];
    }
};

const createCountryNewsNumber = (news: DataWithCountry[]) => {
    if (!news) return 0;
    const number = news.length;
    return number;
};

const createIsCountrySelected = (country: string) => {
    return country === "" ? false : true;
};

const createCountryPaths = (codes: string[]) => {
    if (!codes || isEmpty(codes)) {
        return [];
    } else {
        const result = codes.map(code => {
            return countriesPath + code;
        });
        return result;
    }
};

/*selectors*/
export const getCountryNews = createSelector(getNewsData, getSelectedCountry, createCountryNews);

export const getCountryNewsNumber = createSelector(getCountryNews, createCountryNewsNumber);

export const getCountryPaths = createSelector(getCountriesList, createCountryPaths);

export const getIsCountrySelected = createSelector(getSelectedCountry, createIsCountrySelected);
