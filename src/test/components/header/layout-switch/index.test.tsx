/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import LayoutSwitch from "../../../../../src/components/header/layout-switch";
import { render, cleanup } from "../../../test-utils/testing-library-utils";
import { act, fireEvent } from "@testing-library/react";

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

            act(() => {
                fireEvent.click(input as Element);
            });

            expect(input).not.toHaveAttribute("checked", "");
        });
    });
});
