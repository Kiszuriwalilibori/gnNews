import Button from "@mui/material/Button";

import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatchAction } from "../../../hooks/useDispatchAction";
import { getIsCountrySelected } from "../../../reduxware/selectors";

export default function ResetButton() {
    const { clearSelectedCountry } = useDispatchAction();
    const isCountrySelected = useSelector(getIsCountrySelected);
    const navigate = useNavigate();
    const { t } = useTranslation();

    const clickHandler = useCallback(() => {
        clearSelectedCountry();
        navigate("/countries/");
    }, []);

    return (
        <Button
            variant="contained"
            color="warning"
            size="small"
            disabled={!isCountrySelected}
            sx={{
                textTransform: "none !important",
                color: "#1B3C44",
                fontWeight: 700,
            }}
            onClick={() => {
                clickHandler();
            }}
        >
            {t("sidebar.reset")}
        </Button>
    );
}
