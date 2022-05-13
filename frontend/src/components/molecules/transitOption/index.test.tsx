import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import TransitOption from "./index";
import olaLogo from "../../../assets/images/olaLogo.png";

it("renders a transitOption", () => {
  render(<TransitOption brandLogo={olaLogo} brandName="Ola" cost={45}/>);
  const ReactElement = screen.getByTestId("transitOption");
  expect(ReactElement).toBeInTheDocument();
});
