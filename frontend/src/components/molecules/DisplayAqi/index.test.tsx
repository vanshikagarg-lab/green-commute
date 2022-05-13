import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import DisplayAqi from "./index";
import AqiLocation from "../AqiLocation/index";

test("Renders Mulitple Aqi values with location", () => {
  render(
    <DisplayAqi
      aqi={[
        <AqiLocation aqiValue="894" location="Hyderabad" />,
        <AqiLocation aqiValue="953" location="Mumbai" />,
      ]}
      description="Real time Air Quality Index (AQI)"
    />
  );

  const aqiValue1 = screen.getByText("894");
  const aqiValue2 = screen.getByText("953");
  const aqiLocation1 = screen.getByText("Hyderabad");
  const aqiLocation2 = screen.getByText("Mumbai");
  const descriptionElement = screen.getByText(
    "Real time Air Quality Index (AQI)"
  );

  expect(aqiValue1).toBeInTheDocument();
  expect(aqiValue2).toBeInTheDocument();
  expect(aqiLocation1).toBeInTheDocument();
  expect(aqiLocation2).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
});
