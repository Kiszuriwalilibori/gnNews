import uuid from "react-uuid";

import { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import useCheckApiKey from "./hooks/useCheckApiKey";
import useFetchNews from "./hooks/useFetchNews";
import useCheckOnline from "./hooks/useCheckOnline";

import { Header, Footer, Main, Sidebar, NotFound } from "./components";
import { getCountriesList } from "./reduxware/reducers/countriesSlice";
import { countryCodes } from "./fixtures";
import { paths } from "./paths";

function App() {
    const isAPIKeyAvailable = useCheckApiKey();
    const { fetchNews } = useFetchNews();
    const countries = useSelector(getCountriesList, shallowEqual);
    const isOnline = useCheckOnline();

    useEffect(() => {
        isAPIKeyAvailable && isOnline && fetchNews(countryCodes);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!isAPIKeyAvailable) return null;
    if (!isOnline) return null;

    return (
        <div className="App">
            <Header />
            <section className="main-content">
                <Sidebar />
                <Routes>
                    <Route path={paths.main}>
                        <Route index element={<Main />} />
                        <Route path="countries">
                            <Route index element={<Main />} />
                            {countries && countries.map(item => <Route path={item} element={<Main />} key={uuid()} />)}
                            <Route path="*" element={<NotFound />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </section>
            <Footer />
        </div>
    );
}

export default App;
