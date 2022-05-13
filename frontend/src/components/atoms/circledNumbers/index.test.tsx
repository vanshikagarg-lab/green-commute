import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import CircledNumebers from "./index";

it("renders circledNum", () => {
  render(<CircledNumebers num={1} />);
  const ReactElement = screen.getByText("1");
  expect(ReactElement).toBeInTheDocument();
});