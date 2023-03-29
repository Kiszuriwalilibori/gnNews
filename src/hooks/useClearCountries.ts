import { shallowEqual, useSelector } from "react-redux";
import { useLocation } from "react-router";

import { getCountryPaths, getSelectedCountryPath } from "../reduxware/selectors";
import { useDispatchAction } from "../hooks/useDispatchAction";
import { paths } from "../paths";

const useAdjustCountriesWithPathname = () => {
    const pathName = useLocation().pathname;
    const countryPaths = useSelector(getCountryPaths, shallowEqual);
    const { clearSelectedCountry, setSelectedCountry } = useDispatchAction();
    const selectedCountryPathName = useSelector(getSelectedCountryPath);

    if (!countryPaths.includes(pathName)) clearSelectedCountry();

    if (selectedCountryPathName !== pathName && pathName !== paths.main) {
        setSelectedCountry(pathName.split(paths.countries).join(""));
    }
};

export default useAdjustCountriesWithPathname;
