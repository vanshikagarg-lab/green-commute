import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import RouteMaps from "./index";
import { transitOptions } from "./dataList";

it("renders the RouteMaps", () => {
  render(
    <RouteMaps
      startLocation="E Marredpally, Secunderabad"
      destination="Hitech City, Telanagana, Hyderabad."
      cost={100}
      distance={25}
      time="1 hr 20 mins"
      transitOptions={transitOptions}
      vehicle={{ bike: true, car: true, bus: true, train: true }}
    />
  );
  const ReactElement = screen.getByTestId("routeInfo");
  expect(ReactElement).toBeInTheDocument();
  expect(screen.getByAltText("mapView")).toBeInTheDocument();
});

it("should switch to cab options", () => {
  render(
    <RouteMaps
      startLocation="E Marredpally, Secunderabad"
      destination="Hitech City, Telanagana, Hyderabad."
      cost={100}
      distance={25}
      time="1 hr 20 mins"
      transitOptions={transitOptions}
      vehicle={{ bike: true, car: true, bus: true, train: true }}
    />
  );
  const ReactElement = screen.getAllByTestId("iconButton");
  fireEvent.click(ReactElement[3]);
  expect(screen.getAllByTestId("transitOption")[0]).toBeInTheDocument();
});

it("renders should switch to bus options", () => {
  render(
    <RouteMaps
      startLocation="E Marredpally, Secunderabad"
      destination="Hitech City, Telanagana, Hyderabad."
      cost={100}
      distance={25}
      time="1 hr 20 mins"
      transitOptions={transitOptions}
      vehicle={{ bike: true, car: true, bus: true, train: true }}
    />
  );
  const ReactElement = screen.getAllByTestId("iconButton");
  fireEvent.click(ReactElement[3]);
  fireEvent.click(ReactElement[2]);
  expect(screen.getByAltText("mapView")).toBeInTheDocument();
});

it("should render car as default selected", () => {
  render(
    <RouteMaps
      startLocation="E Marredpally, Secunderabad"
      destination="Hitech City, Telanagana, Hyderabad."
      cost={100}
      distance={25}
      time="1 hr 20 mins"
      transitOptions={transitOptions}
      vehicle={{ bike: true, car: true, bus: false, train: true }}
    />
  );
  const ReactElement = screen.getByTestId("routeInfo");
  expect(ReactElement).toBeInTheDocument();
  expect(screen.getAllByTestId("transitOption")[0]).toBeInTheDocument();
});
