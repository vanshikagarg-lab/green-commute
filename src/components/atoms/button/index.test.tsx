import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import ButtonComponent from "./index";

test("Shoudl Renders a Button", () => {
  render(<ButtonComponent text="Next" variant="contained" />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});
