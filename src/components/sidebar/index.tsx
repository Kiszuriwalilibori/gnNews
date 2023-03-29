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
import { isEmpty } from "lodash";
import { TFunction } from "i18next";

import Flag from "./flag";

import { paths } from "../../paths";
import { getSelectedCountry } from "../../reduxware/reducers/selectedCountrySlice";
import { useDispatchAction } from "../../hooks/useDispatchAction";
import { getSortedCountryCodesWithNames } from "../../reduxware/selectors";
interface Props {
    t: TFunction<"translation", undefined, "translation">;
}
export function Sidebar(props: Props) {
    const selectedCountry = useSelector(getSelectedCountry, shallowEqual);

    const { setSelectedCountry } = useDispatchAction();

    const { t } = props;
    const navigate = useNavigate();

    const sortedCountryCodesWithNames = useSelector(getSortedCountryCodesWithNames, shallowEqual);

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
                {sortedCountryCodesWithNames && !isEmpty(sortedCountryCodesWithNames) && (
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
                        {sortedCountryCodesWithNames.map(country => {
                            return (
                                <div className="country-container" key={uuid()}>
                                    <Flag country={country.code} />

                                    <FormControlLabel
                                        value={country.code}
                                        control={<Radio color="warning" />}
                                        label={country.name}
                                        onClick={() => navigate(paths.countries + country.code)}
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
