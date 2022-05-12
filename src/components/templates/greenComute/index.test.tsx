import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import GreenComute from "./index";

it("renders the template", () => {
  render(<GreenComute currentLocation={""} sidebar1={undefined} sidebar2={undefined}  />);
  const ReactElement = screen.getByTestId("green-template");
  expect(ReactElement).toBeInTheDocument();
});