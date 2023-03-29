import { shallowEqual, useSelector } from "react-redux";
import { useLocation } from "react-router";

import { getCountryPaths, getSelectedCountryPath } from "../reduxware/selectors";
import { useDispatchAction } from "./useDispatchAction";
import { paths } from "../paths";
import { useEffect } from "react";

const useAdjustCountriesWithPathname = () => {
    const pathName = useLocation().pathname;
    const countryPaths = useSelector(getCountryPaths, shallowEqual);
    const { clearSelectedCountry, setSelectedCountry } = useDispatchAction();
    const selectedCountryPathName = useSelector(getSelectedCountryPath, shallowEqual);

    if (!countryPaths.includes(pathName)) clearSelectedCountry();

    useEffect(() => {
        if (selectedCountryPathName !== pathName && pathName !== paths.main) {
            setSelectedCountry(pathName.split(paths.countries).join(""));
        }
    }, [selectedCountryPathName, pathName]);
};

export default useAdjustCountriesWithPathname;
