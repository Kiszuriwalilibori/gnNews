import uuid from "react-uuid";

import { useSelector } from "react-redux";
import { isEmpty } from "lodash";

import Popup from "./popup";
import NoArticles from "./noarticles";
import useMainLayout from "../../hooks/useMainLayout";
import useAdjustCountriesWithPathname from "../../hooks/useAdjustCountriesWithPathname";

import { Article } from "../../types";
import { getCountryNews } from "../../reduxware/selectors";

export default function Main() {
    useAdjustCountriesWithPathname();
    const countryNews = useSelector(getCountryNews);
    const { mainClassName, MainItem } = useMainLayout();

    if (!countryNews || isEmpty(countryNews)) return <NoArticles />;

    return (
        <main className={mainClassName}>
            {countryNews.map((article: Article) => {
                return <MainItem key={uuid()} article={article} />;
            })}
            <Popup />
        </main>
    );
}
