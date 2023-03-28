import { withTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import Clock from "./clock";

import { getCountryNewsNumber } from "../../reduxware/selectors";
import { TFunction } from "i18next";

interface Props {
    t: TFunction<"translation", undefined, "translation">;
}
export function Footer(props: Props) {
    const { t } = props;
    const newsNumber = useSelector(getCountryNewsNumber);
    const newsNumberComment = !newsNumber ? t("footer.nonews") : t("footer.newsnumber");
    return (
        <footer className="footer">
            <div className="footer__element-container">
                <div>{newsNumberComment}</div>
                {newsNumber !== 0 && <span id="newsNumber">{newsNumber}</span>}
            </div>
            <div className="footer__element-container">
                <Clock />
            </div>
        </footer>
    );
}

export default withTranslation()(Footer);
