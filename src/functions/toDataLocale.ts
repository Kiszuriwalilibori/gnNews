import { PermittedLanguages } from "../types";

export default function toDataLocale(str: string, country: PermittedLanguages) {
    const dat = new Date(str);
    var options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    };

    switch (country) {
        case "pl":
            return dat.toLocaleDateString("pl-PL", options) + " " + dat.toLocaleTimeString("pl-PL");

        case "en":
            return dat.toLocaleDateString("en-US", options) + " " + dat.toLocaleTimeString("en-US");

        default:
            return dat.toLocaleDateString("en-US", options) + " " + dat.toLocaleTimeString("en-US");
    }
}
