import * as React from "react";

import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { getCountryPaths } from "../reduxware/selectors";
import { useDispatchAction } from "../hooks/useDispatchAction";

const useClearCountries = () => {
    const pathName = useLocation().pathname;
    const countryPaths = useSelector(getCountryPaths);
    const { clearSelectedCountry } = useDispatchAction();

    if (!countryPaths.includes(pathName)) clearSelectedCountry();
};

export default useClearCountries;
