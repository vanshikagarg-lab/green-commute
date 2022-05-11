import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import LandingPage from ".";

test("Should change the Aqi frame while entering the location at stage 1", () => {
  render(<LandingPage />);

  const textElement = screen.getByRole("textbox");
  const imageElement = screen.getByAltText("loading");
  expect(textElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
  const descriptionElement = screen.getByText(
    "Enter Location to know Time AQI (Air Quality Index)"
  );
  expect(descriptionElement).toBeInTheDocument();
  fireEvent.change(textElement, { target: { value: "Hyderabad" } });
  const imageElement1 = screen.queryByAltText("loading");
  expect(imageElement1).toBeNull();
  const descriptionElement1 = screen.getByText(
    "Real Time Air Quality Index (AQI) in this location"
  );
  expect(descriptionElement1).toBeInTheDocument();
  const aqiValue = screen.getByText("894");
  expect(aqiValue).toBeInTheDocument();
});

test("Should change the Aqi frame after entering the job location at stage 2", () => {
  render(<LandingPage />);

  const nextButton = screen.getByText("Next");
  expect(nextButton).toBeInTheDocument();
  const textElement = screen.getByRole("textbox");
  fireEvent.change(textElement, { target: { value: "Hyderabad" } });
  fireEvent.click(nextButton);
  const backButton = screen.getByText("Back");
  expect(backButton).toBeInTheDocument();
  const imageElement = screen.getByAltText("loading");
  expect(imageElement).toBeInTheDocument();
  const descriptionElement = screen.getByText(
    "Enter Location to know Time AQI (Air Quality Index)"
  );
  expect(descriptionElement).toBeInTheDocument();
  const input = screen.getByRole("combobox");
  expect(input).toBeInTheDocument();
  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: "Hyderabad" } });
  fireEvent.keyDown(input, { key: "ArrowDown" });
  fireEvent.keyDown(input, { key: "Enter" });
  const chips = screen.getAllByTestId("filter-chip");
  expect(chips.length).toBe(1);
  const imageElement1 = screen.queryByAltText("loading");
  expect(imageElement1).toBeNull();
  const descriptionElement1 = screen.getByText(
    "Real time Air Quality Index(AQI) in this location"
  );
  expect(descriptionElement1).toBeInTheDocument();
});
