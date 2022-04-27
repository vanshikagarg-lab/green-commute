import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import RadioButton from "./index";

it("renders a radioButton", () => {
  render(<RadioButton />);
  const ReactElement = screen.getByTestId("radioButton");
  expect(ReactElement).toBeInTheDocument();
});
