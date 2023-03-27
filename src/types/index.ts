// import i18next, { ReactOptions, i18n, ThirdPartyModule, Resource, TOptions, StringMap, } from "i18next";

import { AppDispatch } from "../AppProvider";
type NewsLayout = "tile" | "list";

type LayoutLikeObject = { [key in NewsLayout]: string };
type Countries = string[];

interface Article {
    source: {
        id: string;
        name: string;
    };
    author: string;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}
type Articles = Article[];

interface Data {
    articles: Articles;
    totalResults: number;
    status: string;
}
interface DataWithCountry {
    country: string;
    data: Data;
}

interface ArticleModal extends Article {
    isOpen: boolean;
}

type PermittedLanguages = "en" | "pl";

export type {
    NewsLayout,
    Countries,
    AppDispatch,
    Article,
    Articles,
    ArticleModal,
    Data,
    DataWithCountry,
    PermittedLanguages,
    LayoutLikeObject,
};
