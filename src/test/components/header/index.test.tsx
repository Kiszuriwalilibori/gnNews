/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import Header from "../../../../src/components/header";
import { render, cleanup } from "../../test-utils/testing-library-utils";
import { screen } from "@testing-library/react";

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

// const mockTextItem = jest.fn();

// jest.mock("../../../src/components/common/TextItem", () => props => {
//     mockTextItem(props);
//     return <div>{sampleText1}</div>;
// });

// const mockDeletItemButton = jest.fn();

// jest.mock("../../../src/components/DeleteItemButton/DeleteItemButton", () => props => {
//     mockDeletItemButton(props);
//     return <div>{sampleText2}</div>;
// });

// describe("Given BasicNode component", () => {
//     describe("when called with given props", () => {
//         test("It displays div with id being item and proper class", () => {
//             const div = document.querySelector("div.node#testItem");
//             expect(div).toBeInTheDocument();
//         });
//         test("It has first child being span with text content being item", () => {
//             const firstChild = document.getElementById(props.item).children[0];
//             expect(firstChild).toHaveTextContent(sampleText1);
//         });
//         test("It has second child being being button", () => {
//             const secondChild = document.getElementById(props.item).children[1];
//             expect(secondChild).toHaveTextContent(sampleText2);
//         });

//         test("passes expected props to TextItem child component", () => {
//             expect(mockTextItem).toHaveBeenCalledWith(
//                 expect.objectContaining({
//                     str: props.item,
//                 })
//             );
//         });
//         test("passes expected props to DeleteItemButton child component", () => {
//             expect(mockDeletItemButton).toHaveBeenCalledWith(
//                 expect.objectContaining({
//                     nodeText: props.item,
//                 })
//             );
//         });
//     });
// });
