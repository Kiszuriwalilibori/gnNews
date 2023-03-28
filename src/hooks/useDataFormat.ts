import { useTranslation } from "react-i18next";
import toDataLocale from "../functions/toDataLocale";
import { PermittedLanguages } from "../types";

export function useDataFormat(dateString: string) {
    const { i18n } = useTranslation();
    const language = i18n.language as PermittedLanguages;
    const formattedDate = toDataLocale(dateString, language)
        ? toDataLocale(dateString, language)
        : "data conversion error";
    return formattedDate;
}
