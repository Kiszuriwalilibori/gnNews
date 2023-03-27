import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { useDataFormat } from "../../../hooks/useDataFormat";
import { useDispatchAction } from "../../../hooks/useDispatchAction";
import { Article } from "../../../types";

interface Props {
    article: Article;
}

export default function ListItem(props: Props) {
    const { showModal } = useDispatchAction();
    const { t } = useTranslation();
    const { title, publishedAt, source } = props.article;

    const handleClick = useCallback(() => {
        showModal({ isOpen: true, ...props.article });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <article className="listItem" onClick={handleClick}>
            <h3 className="listItem__title">{title}</h3>
            <h4 className="listItem__published">
                <b>{t("listitem.publish")}</b>
                {useDataFormat(publishedAt)}
            </h4>
            <h4 className="source listItem__source">
                <b>{t("listitem.source")}</b>
                {source.name}
            </h4>
        </article>
    );
}
