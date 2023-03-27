/* eslint-disable testing-library/no-node-access */
import Main from "../../../components/main";
import { cleanup } from "@testing-library/react";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import { render, screen } from "@testing-library/react";
import { HashRouter as Router } from "react-router-dom";
import { fakeState } from "../../../fixtures";

beforeEach(() => {
    cleanup();
});

describe("Given Main component", () => {
    describe("when renders", () => {
        it("displays correct (with respect to state) country names", () => {
            const initialState = {
                newsData: { data: fakeState },
                selectedCountry: { country: ["pl"] },
                countries: { list: ["pl", "fr", "br"] },
                newsLayout: { layout: "list" },
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
            screen.debug();
        });
    });
});
