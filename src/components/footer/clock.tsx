import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import toDataLocale from "../../functions/toDataLocale";

const Clock = () => {
    const { i18n } = useTranslation();
    const [time, setTime] = useState(toDataLocale(new Date().toString(), i18n.language));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(toDataLocale(new Date().toString(), i18n.language));
        }, 5000);

        return () => clearInterval(intervalId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <span>{time}</span>
        </div>
    );
};
export default Clock;
