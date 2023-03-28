/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-node-access */

import Header from "../../../../src/components/header";

import { render, cleanup } from "../../test-utils/testing-library-utils";

beforeEach(() => {
    render(<Header />);
});

afterEach(() => cleanup());

describe("Given Header component", () => {
    describe("when renders", () => {
        test("It displays visible <header> element with 'header' class and with text content 'gnNews'", () => {
            const header = document.querySelector("header");
            expect(header).toBeInTheDocument();
            expect(header).toHaveClass("header");
            expect(header).toHaveTextContent("gnNews");
            expect(header).toBeVisible();
        });
        test("It has 3 chidren with 'header__element-container' class", () => {
            const children = document.querySelectorAll(".header__element-container");
            expect(children).toHaveLength(3);
        });
    });
});
