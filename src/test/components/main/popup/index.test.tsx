/* eslint-disable testing-library/no-node-access */
import Popup from "../../../../components/main/popup";

import { cleanup } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

beforeEach(() => {
    cleanup();
});

afterEach(() => {
    cleanup();
});

const fakeInitialStateOpen = {
    isOpen: true,
    source: {
        id: "fake",
        name: "fakeSource",
    },
    author: "fakeAuthor",
    title: "fakeTitle",
    description: null,
    url: "fakeLink",
    urlToImage: null,
    publishedAt: "2023-03-23T05:00:00Z",
    content: "fakeContent",
};

const fakeInitialStateClosed = {
    isOpen: false,
    source: {
        id: "fake",
        name: "fake",
    },
    author: "fake",
    title: "fake",
    description: null,
    url: "fake",
    urlToImage: null,
    publishedAt: "2023-03-23T05:00:00Z",
    content: null,
};

describe("Given popup component", () => {
    describe("when proper store slice ore has state with data { isOpen: false }", () => {
        test("it does not render modal", () => {
            const initialState = { articleModal: { modal: fakeInitialStateClosed } };
            const store = createStore((state: unknown) => state, initialState);

            render(
                <Provider store={store}>
                    <Popup />
                </Provider>
            );
            const modal = screen.queryByRole("presentation");
            expect(modal).toBeNull();
        });
    });
    describe("when proper store slice ore has state with data {isOpen : true}", () => {
        test("it renders modal with proper content", () => {
            const initialState = { articleModal: { modal: fakeInitialStateOpen } };
            const store = createStore((state: unknown) => state, initialState);

            render(
                <Provider store={store}>
                    <Popup />
                </Provider>
            );
            const modal = screen.queryByRole("presentation");
            expect(modal).toBeInTheDocument();
            const author = screen.getByText(fakeInitialStateOpen.author);
            const url = screen.getByText("modal.prompt");
            const content = screen.queryByText(fakeInitialStateOpen.content);
            expect(author).toBeInTheDocument();
            expect(url).toBeInTheDocument();
            expect(content).toBeInTheDocument();
            expect(url).toHaveAttribute("href", fakeInitialStateOpen.url);
        });
    });
});
