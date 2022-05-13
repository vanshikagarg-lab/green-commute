import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import AqiLocation from "./index";

test("Renders Aqi with location", () => {
  render(<AqiLocation aqiValue="894" location="Hyderabad" />);

  const aqiValueElement = screen.getByText("894");
  const locationElement = screen.getByText("Hyderabad");

  expect(aqiValueElement).toBeInTheDocument();
  expect(locationElement).toBeInTheDocument();
});
