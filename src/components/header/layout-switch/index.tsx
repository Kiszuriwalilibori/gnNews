import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import Switch from "../../shared-components/switch";

import useMainLayout from "../../../hooks/useMainLayout";

export default function LayoutSwitch() {
    const { setMainLayout } = useMainLayout();
    const { t } = useTranslation();
    const changeLayout = useCallback(
        () => {
            setMainLayout();
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );
    return (
        <Switch
            labelRight={t("header.layout-switch.rightLabel")}
            labelLeft={t("header.layout-switch.leftLabel")}
            onChangeHandler={changeLayout}
        />
    );
}
