import { render } from "@testing-library/react";
import AppProvider from "../../AppProvider";
const renderWithContext = (ui: any) => render(ui, { wrapper: AppProvider });
export * from "@testing-library/react";
export { renderWithContext as render };
