import { useTranslation } from "react-i18next";

const NoArticles = () => {
    const { t } = useTranslation();
    return <div className="main main--empty"> {t("main.noarticles")}</div>;
};

export default NoArticles;
