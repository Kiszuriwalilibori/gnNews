import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { useDispatchAction } from "../../../hooks/useDispatchAction";
import { Article } from "../../../types";
import { useDataFormat } from "../../../hooks/useDataFormat";

interface Props {
    article: Article;
}

export default function Tile(props: Props) {
    const { showModal } = useDispatchAction();

    const { t } = useTranslation();
    const { title, publishedAt, source, urlToImage, description } = props.article;
    const handleClick = useCallback(() => {
        showModal({ isOpen: true, ...props.article });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <article className="tile" onClick={handleClick}>
            <div className="tile__image-container">
                {urlToImage && <img src={urlToImage as string} alt={title} className="tile__image"></img>}
            </div>
            <div className="tile__title">{title}</div>
            <h4 className="tile__published">
                <b>{t("listitem.publish")}</b>
                {useDataFormat(publishedAt)}
            </h4>
            <h4 className="tile__source">
                <b>{t("listitem.source")}</b>
                {source.name}
            </h4>
            {description && (
                <h4 className="tile__description">
                    <b>{t("listitem.description")}</b>
                    {description}
                </h4>
            )}
        </article>
    );
}
