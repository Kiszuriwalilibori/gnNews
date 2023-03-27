import { useSelector } from "react-redux";
import Tile from "../components/main/tile";
import ListItem from "../components/main/list";
import { getNewsLayout } from "../reduxware/reducers/newsLayoutSlice";
import { LayoutLikeObject } from "../types";
import { useMemo } from "react";
import { useDispatchAction } from "./useDispatchAction";

const _ClassName: LayoutLikeObject = { list: "main", tile: "main main--withTiles" };

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

    const mainClassName = _ClassName[layout];

    return { mainClassName, MainItem, setMainLayout: setNewsLayout };
}
