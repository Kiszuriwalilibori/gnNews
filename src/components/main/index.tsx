import uuid from "react-uuid";

import { useSelector } from "react-redux";
import { useLocation } from "react-router";

import Popup from "./popup";

import { Article } from "../../types";
import { getCountryNews } from "../../reduxware/selectors";
import { useDispatchAction } from "../../hooks/useDispatchAction";
import useMainLayout from "../../hooks/useMainLayout";
import { getCountryPaths } from "../../reduxware/selectors";
import { isEmpty } from "lodash";

export default function Main() {
    const countryNews = useSelector(getCountryNews);
    const pathName = useLocation().pathname;
    const { clearSelectedCountry } = useDispatchAction();
    const countryPaths = useSelector(getCountryPaths);
    const { mainClassName, MainItem } = useMainLayout();

    if (!countryNews || isEmpty(countryNews)) return null;

    if (!countryPaths.includes(pathName)) clearSelectedCountry();

    return (
        <main className={mainClassName}>
            {countryNews.map((article: Article) => {
                return <MainItem key={uuid()} article={article} />;
            })}
            <Popup />
        </main>
    );
}
