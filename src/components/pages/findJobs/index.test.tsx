import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import FindJobs from ".";

it("the recommended box disappers when recommended-box is clicked", () => {
  render(<FindJobs />);
  const ReactElement = screen.getAllByTestId("recommended-box");
  fireEvent.click(ReactElement[0]);
  expect(ReactElement[0]).not.toBeInTheDocument();
});