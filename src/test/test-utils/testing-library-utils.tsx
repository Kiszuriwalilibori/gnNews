import AppProvider from "../../AppProvider";

import { render } from "@testing-library/react";

const renderWithContext = (ui: any) => render(ui, { wrapper: AppProvider });
export * from "@testing-library/react";
export { renderWithContext as render };
