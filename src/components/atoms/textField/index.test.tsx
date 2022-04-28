import React from "react";

import { screen, render } from "@testing-library/react";

import "@testing-library/jest-dom";
import TextField from ".";


test("renders the component with given placeholder", () => {
  render(<TextField variant="outlined" value="hello" placeholder="Enter your location"/>);
  const inputElement = screen.getByPlaceholderText("Enter your location");
  expect(inputElement).toBeInTheDocument();
});