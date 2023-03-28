/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-unnecessary-act */

import { act, screen } from "@testing-library/react";
import { render } from "./test-utils/testing-library-utils";
import App from "../App";
import userEvent from "@testing-library/user-event";
import { mainClassNames } from "../fixtures";

describe("Given App component", () => {
    describe("when renders", () => {
        test("It displays list of articles, but after clicking the switch it displays tiles", () => {
            render(<App />);
            const list = screen.getByText("list");
            expect(list).toBeInTheDocument();
            screen.debug(document.getElementsByTagName("main")[0]);
            // eslint-disable-next-line testing-library/no-node-access
            const listing = document.querySelector(".main--withList");
            expect(listing).toBeInTheDocument();
            const listItemss = document.getElementsByClassName("listItem");
            expect(listItemss).not.toHaveLength(0);
            const tiless = document.querySelector("." + mainClassNames.tile);
            expect(tiless).toBeNull();

            act(() => {
                userEvent.click(list);
            });

            screen.debug(document.getElementsByTagName("main")[0]);
            const tile = document.querySelector(".main--withTiles");
            expect(tile).toBeInTheDocument();
            const tiles = document.getElementsByClassName("tile");
            expect(tiles).not.toHaveLength(0);
            const listItems = document.getElementsByClassName("listItem");
            expect(listItems).toHaveLength(0);
        });
    });
});
