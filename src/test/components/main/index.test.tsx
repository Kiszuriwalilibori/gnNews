/* eslint-disable testing-library/no-node-access */
import Main from "../../../components/main";
import { cleanup } from "@testing-library/react";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import { render } from "@testing-library/react";
import { HashRouter as Router } from "react-router-dom";
import { fakeState, mainClassNames, sourceNameBR, sourceNameFR, sourceNamePL, articlesBR } from "../../../fixtures";

beforeEach(() => {
    cleanup();
});

describe("Given Main component", () => {
    describe("when renders with list option in store", () => {
        it("displays correctly list with listItem class elements, and not tiles", () => {
            const initialState = {
                newsData: { data: fakeState },
                selectedCountry: { country: "pl" },
                countries: { list: ["pl", "fr", "br"] },
                newsLayout: { layout: "list" },
                articleModal: { modal: { isOpen: false } },
            };
            const store = createStore((state: unknown) => state, initialState);
            render(
                <Provider store={store}>
                    <Router>
                        <Routes>
                            <Route>
                                <Route index element={<Main />} />
                            </Route>
                        </Routes>
                    </Router>
                </Provider>
            );
            // eslint-disable-next-line testing-library/no-debugging-utils

            const list = document.querySelector("." + mainClassNames.list);
            expect(list).toBeInTheDocument();
            const listItems = document.getElementsByClassName("listItem");
            expect(listItems).not.toHaveLength(0);
            const tile = document.querySelector("." + mainClassNames.tile);
            expect(tile).toBeNull();
            const tiles = document.getElementsByClassName("tile");
            expect(tiles).toHaveLength(0);
        });
    });
    describe("when renders with tile option in store", () => {
        it("displays correctly tiles and not list items", () => {
            const initialState = {
                newsData: { data: fakeState },
                selectedCountry: { country: "pl" },
                countries: { list: ["pl", "fr", "br"] },
                newsLayout: { layout: "tile" },
                articleModal: { modal: { isOpen: false } },
            };
            const store = createStore((state: unknown) => state, initialState);
            render(
                <Provider store={store}>
                    <Router>
                        <Routes>
                            <Route>
                                <Route index element={<Main />} />
                            </Route>
                        </Routes>
                    </Router>
                </Provider>
            );
            // eslint-disable-next-line testing-library/no-debugging-utils

            const list = document.querySelector("." + mainClassNames.list);
            expect(list).toBeNull();
            const listItems = document.getElementsByClassName("listItem");
            expect(listItems).toHaveLength(0);
            const tile = document.querySelector("." + mainClassNames.tile);
            expect(tile).toBeInTheDocument();
            const tiles = document.getElementsByClassName("tile");
            expect(tiles).not.toHaveLength(0);
        });
    });
    describe("when selected country code is defined and correct", () => {
        it("displays only articles from that country and not others", () => {
            const initialState = {
                newsData: { data: fakeState },
                selectedCountry: { country: "fr" },
                countries: { list: ["pl", "fr", "br"] },
                newsLayout: { layout: "tile" },
                articleModal: { modal: { isOpen: false } },
            };
            const store = createStore((state: unknown) => state, initialState);
            render(
                <Provider store={store}>
                    <Router>
                        <Routes>
                            <Route>
                                <Route index element={<Main />} />
                            </Route>
                        </Routes>
                    </Router>
                </Provider>
            );
            // eslint-disable-next-line testing-library/no-debugging-utils

            const sources = document.getElementsByClassName("source");
            expect(sources).not.toHaveLength(0);
            [...sources].forEach(source => {
                expect(source).toHaveTextContent(sourceNameFR);
            });
            [...sources].forEach(source => {
                expect(source).not.toHaveTextContent(sourceNamePL);
            });
            [...sources].forEach(source => {
                expect(source).not.toHaveTextContent(sourceNameBR);
            });
        });
        it("displays correct number of articles", () => {
            const initialState = {
                newsData: { data: fakeState },
                selectedCountry: { country: "br" },
                countries: { list: ["pl", "fr", "br"] },
                newsLayout: { layout: "tile" },
                articleModal: { modal: { isOpen: false } },
            };
            const store = createStore((state: unknown) => state, initialState);
            render(
                <Provider store={store}>
                    <Router>
                        <Routes>
                            <Route>
                                <Route index element={<Main />} />
                            </Route>
                        </Routes>
                    </Router>
                </Provider>
            );
            // eslint-disable-next-line testing-library/no-debugging-utils

            const sources = document.getElementsByClassName("source");
            expect(sources).toHaveLength(articlesBR.length);
        });
    });
});
