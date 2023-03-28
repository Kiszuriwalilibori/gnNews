import uuid from "react-uuid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ResetButton from "./resetButton";

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { shallowEqual, useSelector } from "react-redux";

import Flag from "./flag";

import { countryList } from "../../fixtures";
import { getSelectedCountry } from "../../reduxware/reducers/selectedCountrySlice";
import { getCountriesList } from "../../reduxware/reducers/countriesSlice";
import { useDispatchAction } from "../../hooks/useDispatchAction";
import { isEmpty } from "lodash";
import { TFunction } from "i18next";

function getCountryName(code: string) {
    const capitalized = code.toUpperCase();
    return (countryList as { [key: string]: string })[capitalized] || code;
}
interface Props {
    t: TFunction<"translation", undefined, "translation">;
}
export function Sidebar(props: Props) {
    const countries = useSelector(getCountriesList, shallowEqual);
    const selectedCountry = useSelector(getSelectedCountry, shallowEqual);
    const { setSelectedCountry } = useDispatchAction();

    // const { t } = useTranslation();
    const { t } = props;
    const navigate = useNavigate();

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedCountry((event.target as HTMLInputElement).value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <aside className="sidebar">
            <FormControl>
                <FormLabel
                    className="group-label"
                    id="radio-buttons-group-label"
                    sx={{
                        margin: "0 auto",
                    }}
                >
                    {t("sidebar.title")}
                </FormLabel>
                {countries && !isEmpty(countries) && (
                    <RadioGroup
                        aria-labelledby="radio-buttons-group-label"
                        name="controlled-radio-buttons-group"
                        value={selectedCountry}
                        onChange={handleChange}
                        sx={{
                            "@media (max-width: 768px)": {
                                flexDirection: "row",
                                justifyContent: "center",
                            },
                        }}
                    >
                        {countries.map(country => {
                            return (
                                <div className="country-container" key={uuid()}>
                                    <Flag country={country} />

                                    <FormControlLabel
                                        value={country}
                                        control={<Radio color="warning" />}
                                        label={getCountryName(country)}
                                        onClick={() => navigate("/countries/" + country)}
                                    />
                                </div>
                            );
                        })}
                    </RadioGroup>
                )}
                <div></div>
            </FormControl>
            <ResetButton />
        </aside>
    );
}

export default withTranslation()(Sidebar);
