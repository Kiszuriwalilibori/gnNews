/* eslint-disable testing-library/no-node-access */
import Sidebar from "../../../components/sidebar";
import { cleanup } from "@testing-library/react";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import { render, screen } from "@testing-library/react";
import { HashRouter as Router } from "react-router-dom";

beforeEach(() => {
    cleanup();
});

describe("Given sidebar component", () => {
    describe("when renders", () => {
        it("displays correct (with respect to state) country names", () => {
            const initialState = { countries: { list: ["at", "ca", "cn"] }, selectedCountry: { country: ["at"] } };
            const store = createStore((state: unknown) => state, initialState);
            render(
                <Provider store={store}>
                    <Router>
                        <Routes>
                            <Route>
                                <Route index element={<Sidebar />} />
                            </Route>
                        </Routes>
                    </Router>
                </Provider>
            );

            const austria = screen.queryByText("Austria");
            expect(austria).toBeInTheDocument();
            const canada = screen.queryByText("Canada");
            expect(canada).toBeInTheDocument();
            const china = screen.queryByText("China");
            expect(china).toBeInTheDocument();
            const at = screen.getByDisplayValue("at");
            expect(at).toBeInTheDocument();
        });

        it("has inputs with correct values", () => {
            const initialState = { countries: { list: ["ae", "ar", "be"] }, selectedCountry: { country: ["be"] } };
            const store = createStore((state: unknown) => state, initialState);
            render(
                <Provider store={store}>
                    <Router>
                        <Routes>
                            <Route>
                                <Route index element={<Sidebar />} />
                            </Route>
                        </Routes>
                    </Router>
                </Provider>
            );

            const ae = screen.getByDisplayValue("ae");
            expect(ae).toBeInTheDocument();
            const ar = screen.getByDisplayValue("ar");
            expect(ar).toBeInTheDocument();
            const be = screen.getByDisplayValue("be");
            expect(be).toBeInTheDocument();

            const inputs = document.querySelectorAll("input");
            expect(inputs).toHaveLength(3);
        });
        it("corretly identifies active country by checked attribute", () => {
            const initialState = { countries: { list: ["ae", "ar", "be"] }, selectedCountry: { country: ["be"] } };
            const store = createStore((state: unknown) => state, initialState);
            render(
                <Provider store={store}>
                    <Router>
                        <Routes>
                            <Route>
                                <Route index element={<Sidebar />} />
                            </Route>
                        </Routes>
                    </Router>
                </Provider>
            );

            const be = screen.getByDisplayValue("be");
            expect(be).toHaveAttribute("checked", "");
            const ae = screen.getByDisplayValue("ae");
            expect(ae).not.toHaveAttribute("checked", "");
            const ar = screen.getByDisplayValue("ar");
            expect(ar).not.toHaveAttribute("checked", "");
        });
        it("renders no input when countries table is empty", () => {
            const initialState = { countries: { list: [] }, selectedCountry: { country: ["be"] } };
            const store = createStore((state: unknown) => state, initialState);
            render(
                <Provider store={store}>
                    <Router>
                        <Routes>
                            <Route>
                                <Route index element={<Sidebar />} />
                            </Route>
                        </Routes>
                    </Router>
                </Provider>
            );
            const inputs = document.querySelectorAll("input");
            expect(inputs).toHaveLength(0);
        });
        it("renders no input when countries table is undefined", () => {
            const initialState = { countries: { list: undefined }, selectedCountry: { country: ["be"] } };
            const store = createStore((state: unknown) => state, initialState);
            render(
                <Provider store={store}>
                    <Router>
                        <Routes>
                            <Route>
                                <Route index element={<Sidebar />} />
                            </Route>
                        </Routes>
                    </Router>
                </Provider>
            );
            const inputs = document.querySelectorAll("input");
            expect(inputs).toHaveLength(0);
        });
    });
});
