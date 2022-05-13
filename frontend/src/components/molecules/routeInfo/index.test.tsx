import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import RouteInfo from "./index";

it("renders routeInfo Molecule", () => {
  render(
    <RouteInfo
      startLocation="E Marredpally, Secunderabad"
      destination="Hitech City, Telanagana, Hyderabad."
    />
  );
  const ReactElement = screen.getByTestId("routeInfo");
  expect(ReactElement).toBeInTheDocument();
});
