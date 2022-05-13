import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import AqiField from "./index";

test("Should Render Landing page frame", () => {
  render(
    <AqiField
      aqiValue="987"
      description="Real time Air Quality Index (AQI) in this location"
    />
  );

  const aqiValueElement = screen.getByText("987");
  const descriptonElement = screen.getByText(
    "Real time Air Quality Index (AQI) in this location"
  );

  expect(aqiValueElement).toBeInTheDocument();
  expect(descriptonElement).toBeInTheDocument();
});
