import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import LayoutSwitch from "./layout-switch";
import LanguageSwitch from "./language-switch";
import Popup from "./popup";

export default function Header() {
    const { t } = useTranslation();

    return (
        <header className="header">
            <div className="header__element-container">
                <LayoutSwitch />
            </div>
            <div className="header__element-container">
                <div className="header__central">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <h1 className="header__title">{t("header.title")}</h1>
                    </Link>

                    <Popup />
                </div>
            </div>
            <div className="header__element-container">
                <LanguageSwitch />
            </div>
        </header>
    );
}
