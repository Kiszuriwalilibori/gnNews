import { useTranslation } from "react-i18next";

const NoArticles = () => {
    const { t } = useTranslation();
    return (
        <div className="main main--empty">
            <span className="main--empty__item">{t("main.noarticles")}</span>
        </div>
    );
};

export default NoArticles;
