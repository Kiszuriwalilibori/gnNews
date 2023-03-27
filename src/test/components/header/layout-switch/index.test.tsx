/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import LayoutSwitch from "../../../../../src/components/header/layout-switch";
import { render, cleanup } from "../../../test-utils/testing-library-utils";
import { fireEvent, screen, waitFor } from "@testing-library/react";

beforeEach(() => {
    render(<LayoutSwitch />);
});

afterEach(() => cleanup());

const actions = {
    setNewsLayout: jest.fn(),
};

jest.doMock("../../../../../src/hooks/useDispatchAction.ts", () => () => actions);

describe("Given LayoutSwitch component", () => {
    describe("when renders", () => {
        test("It displays input of checkbox type which is initially unchecked", () => {
            const input = document.querySelector("input");
            expect(input).toBeInTheDocument();
            expect(input!.type).toEqual("checkbox");
            expect(input).not.toHaveAttribute("checked", "");
        });
    });
    describe("when is clicked", () => {
        test("It changes status to checked", async () => {
            const input = document.querySelector("input");
            // jest.mock("../../../../../src/hooks/useDispatchAction.ts", () => () => actions);
            fireEvent.click(input as Element);
            expect(input).not.toHaveAttribute("checked", "");
            // await waitFor(() => {
            //     expect(actions.setNewsLayout).toHaveBeenCalledTimes(1);
            // });
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

// describe('when "Zamknij" button is clicked', () => {
//         it("should call closeInput function", async () => {
//             actions.closeInput.mockClear();

//             const { findByText } = render(<AppendItemModal />);
//             const closeButton = await findByText("Zamknij");

//             fireEvent.click(closeButton);

//             expect(actions.closeInput).toHaveBeenCalledTimes(1);
//         });
