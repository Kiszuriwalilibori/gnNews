/* eslint-disable testing-library/no-node-access */
import Footer from "../../../components/footer";
import { cleanup } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { render, screen } from "@testing-library/react";
import { fakeState } from "../../../fixtures";

beforeEach(() => {
    cleanup();
});

afterEach(() => cleanup());

describe("Given footer component", () => {
    describe("when renders articles including articles from country which is selected", () => {
        test("it render element displaying number of news and correct number of news from given country", () => {
            const initialState = {
                newsLayot: { layout: "list" },
                newsData: { data: fakeState },
                selectedCountry: { country: "pl" },
            };
            const store = createStore((state: unknown) => state, initialState);
            render(
                <Provider store={store}>
                    <Footer />
                </Provider>
            );
            const number = document.querySelector("#newsNumber");
            expect(number).toBeInTheDocument();
            expect(number).toHaveTextContent("20");
        });
    });
    describe("when renders articles NOT including articles from country which is selected", () => {
        test("it render element displaying number of news and correct number of news from given country", () => {
            const initialState = { newsData: { data: fakeState }, selectedCountry: { country: "gr" } };
            const store = createStore((state: unknown) => state, initialState);
            render(
                <Provider store={store}>
                    <Footer />
                </Provider>
            );
            const number = document.querySelector("#newsNumber");
            expect(number).not.toBeInTheDocument();
            const noNews = screen.getByText("footer.nonews");
            expect(noNews).toBeInTheDocument();
        });
    });
});
