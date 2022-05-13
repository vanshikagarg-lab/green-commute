import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import CircledBox from "./index";

it("renders circledNum", () => {
  render(<CircledBox children={1} backgroundColor={""}/>);
  const ReactElement = screen.getByText("1");
  expect(ReactElement).toBeInTheDocument();
});