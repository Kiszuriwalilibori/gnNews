export default function toDataLocale(str: string, country: string) {
    const dat = new Date(str);
    var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    };

    switch (country) {
        case "pl":
            return dat.toLocaleDateString("pl-PL", options as any) + " " + dat.toLocaleTimeString("pl-PL");

        case "en":
            return dat.toLocaleDateString("en-US", options as any) + " " + dat.toLocaleTimeString("en-US");

        default:
            return dat.toLocaleDateString("en-US", options as any) + " " + dat.toLocaleTimeString("en-US");
    }
}
