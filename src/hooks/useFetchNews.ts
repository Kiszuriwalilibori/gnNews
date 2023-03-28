import axios from "axios";

import useMessage from "./useMessage";
import isOffline from "../functions/isOffline";

import { useCallback } from "react";
import { useDispatchAction } from "./useDispatchAction";
import { Countries, DataWithCountry, Data } from "../types";

const createEndpoint = (code: string) => {
    return `https://newsapi.org/v2/top-headlines?country=${code}&pageSize=100&apiKey=${process.env.REACT_APP_API_KEY}`;
};

const useFetchNews = () => {
    const { setCountries, setNewsData } = useDispatchAction();

    const showMessage = useMessage();

    let news: DataWithCountry[] = [];
    const countries: Countries = [];

    const fatalError = useCallback(() => {
        showMessage.error(`No news available in news source`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const theEndOfRecursiveFetchLoopHandle = () => {
        if (news.length) {
            setCountries(countries);
            setNewsData(news);
        } else {
            fatalError();
        }
    };

    const fetchData = async (codes: string[]) => {
        if (codes.length) {
            let code = codes.shift();
            let URL = createEndpoint(code as string);
            let reducedCodes = [...codes];
            axios
                .get(URL as string)
                .then(data => {
                    if (data.hasOwnProperty("data")) {
                        if (data.data && data.data.status === "ok") {
                            news.push({ country: code as string, data: data.data });
                            countries.push(code as string);
                        } else {
                            news.push({ country: code as string, data: [] as unknown as Data }); // do przemyślenia, nie wiem po co łafować tam pustą tablicę skoro i tak nie pojdzie guzik
                        }

                        if (reducedCodes.length) {
                            fetchData(reducedCodes);
                        } else {
                            theEndOfRecursiveFetchLoopHandle();
                        }
                    } else {
                        const country = URL ? URL : "unknown country";
                        showMessage.warning(`News for ${country} was broken, corrupted or otherwise invalid`);
                    }
                })
                .catch(err => {
                    let code = err.response ? err.response.status : err;
                    showMessage.warning(`Error ${code} encountered when fetching data for ${URL}`);
                    if (reducedCodes.length) {
                        fetchData(reducedCodes);
                    } else {
                        theEndOfRecursiveFetchLoopHandle();
                    }
                });
        } else {
            showMessage.error(`Empty array of URLs passed to useAxiosArray as argument`);
        }
    };
    const fetchNews = (codes: string[]) => {
        if (isOffline()) {
            showMessage.error("No internet connection");
            return;
        }
        showMessage.info("Rozpoczęto pobieranie danych");
        fetchData(codes);
    };

    return { fetchNews };
};

export default useFetchNews;
