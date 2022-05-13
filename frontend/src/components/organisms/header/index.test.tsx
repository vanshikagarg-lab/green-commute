import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from ".";
it("renders jobSearch", () => {
  render(<Header value="abc"/>);
  const ReactElement = screen.getByTestId("header");
  expect(ReactElement).toBeInTheDocument();
});