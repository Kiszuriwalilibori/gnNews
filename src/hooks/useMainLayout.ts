import { useSelector } from "react-redux";
import { useMemo } from "react";

import Tile from "../components/main/tile";
import ListItem from "../components/main/list";
import { getNewsLayout } from "../reduxware/reducers/newsLayoutSlice";
import { useDispatchAction } from "./useDispatchAction";
import { LayoutLikeObject } from "../types";

export const mainClassNames: LayoutLikeObject = { list: "main--withList", tile: "main--withTiles" };

export default function useMainLayout() {
    const layout = useSelector(getNewsLayout);
    const { setNewsLayout } = useDispatchAction();

    const MainItem = useMemo(() => {
        switch (layout) {
            case "list":
                return ListItem;

            case "tile":
                return Tile;

            default:
                return ListItem;
        }
    }, [layout]);

    // const mainClassName =mainClassNames[layout];
    const mainClassName = `main ${mainClassNames[layout]}`;

    return { mainClassName, MainItem, setMainLayout: setNewsLayout };
}
