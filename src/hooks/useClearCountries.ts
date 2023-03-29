import { shallowEqual, useSelector } from "react-redux";
import { useLocation } from "react-router";

import { getCountryPaths, getSelectedCountryPath } from "../reduxware/selectors";
import { useDispatchAction } from "../hooks/useDispatchAction";
import { paths } from "../paths";

const useClearCountries = () => {
    const pathName = useLocation().pathname;
    const countryPaths = useSelector(getCountryPaths, shallowEqual);
    const { clearSelectedCountry, setSelectedCountry } = useDispatchAction();
    const selectedCountryPathName = useSelector(getSelectedCountryPath);

    // console.log("selected country pathname", selectedCountryPathName);
    // console.log("pathname z paska aderesu", pathName);
    if (!countryPaths.includes(pathName)) clearSelectedCountry();
    // console.log("new country code", pathName.split(paths.countries).join(""));
    if (selectedCountryPathName !== pathName && pathName !== paths.main) {
        setSelectedCountry(pathName.split(paths.countries).join(""));
    }
};

export default useClearCountries;
