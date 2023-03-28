import SwitchComponent from "../../../../components/shared-components/switch";

import { cleanup } from "@testing-library/react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
    cleanup();
});

afterEach(() => {
    cleanup();
});

const mockHandler = jest.fn();

const fakeProps = {
    onChangeHandler: mockHandler as (() => void) | undefined,
    labelLeft: "mockLabelLeft",
    labelRight: "mockLabelRight",
    labelText: "mockLabelText",
    isChecked: false,
};

describe("Given Switch Component", () => {
    describe("when renders", () => {
        test("it renders component with correct label", () => {
            render(<SwitchComponent {...fakeProps} />);
            const switch_ = screen.getByText(fakeProps.labelText);
            expect(switch_).toBeInTheDocument();
        });
    });
    describe("when  clicked", () => {
        test("it fires fn passed as onChangehandler prop", () => {
            render(<SwitchComponent {...fakeProps} />);
            const switch_ = screen.getByText(fakeProps.labelText);
            userEvent.click(switch_);
            expect(mockHandler).toBeCalledTimes(1);
        });
    });
});
