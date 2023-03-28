import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import Switch from "../../shared-components/switch";

export default function LanguageSwitch() {
    const [language, setLanguage] = useState("en");
    const { i18n, t } = useTranslation();

    const changeLanguage = useCallback(
        () => {
            if (language === "en") {
                setLanguage("pl");
                i18n.changeLanguage("pl");
            } else {
                setLanguage("en");
                i18n.changeLanguage("en");
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [language]
    );

    return (
        <div className="language-switch-container">
            <img className="country-image switch-image" alt="text" src="https://flagcdn.com/28x21/gb.png" />
            <Switch
                labelLeft={t("header.language-switch.leftLabel")}
                labelRight={t("header.language-switch.rightLabel") as string}
                onChangeHandler={changeLanguage}
                optionClassName="option option--desktop-visible"
            />
            <img className="country-image switch-image" alt="text" src="https://flagcdn.com/28x21/pl.png" />
        </div>
    );
}
