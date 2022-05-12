import { render, screen, fireEvent, within } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import LandingPage from ".";
import { BrowserRouter as Router } from "react-router-dom";

test("Should change the Aqi frame while entering the location at stage 1", () => {
  render(
    <Router>
      <LandingPage />
    </Router>
  );

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
  render(
    <Router>
      <LandingPage />
    </Router>
  );

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
  fireEvent.change(input, { target: { value: ["Hyderabad"] } });
  fireEvent.keyDown(input, { key: "ArrowDown" });
  fireEvent.keyDown(input, { key: "Enter" });
  const chips = screen.getAllByTestId("filter-chip");
  const deleteButton = within(chips[0]).getByTestId("icon");
  fireEvent.click(deleteButton);
  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: ["Hyderabad"] } });
  fireEvent.keyDown(input, { key: "ArrowDown" });
  fireEvent.keyDown(input, { key: "Enter" });
  expect(chips.length).toBe(1);
  const imageElement1 = screen.queryByAltText("loading");
  expect(imageElement1).toBeNull();
  const descriptionElement1 = screen.getByText(
    "Real time Air Quality Index(AQI) in this location"
  );
  expect(descriptionElement1).toBeInTheDocument();
});

test("Should change the Aqi frame after entering the skills at stage 3", () => {
  render(
    <Router>
      <LandingPage />
    </Router>
  );

  const nextButton = screen.getByText("Next");
  expect(nextButton).toBeInTheDocument();
  const textElement = screen.getByRole("textbox");
  fireEvent.change(textElement, { target: { value: "Hyderabad" } });
  fireEvent.click(nextButton);
  const input = screen.getByRole("combobox");
  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: ["Hyderabad"] } });
  fireEvent.keyDown(input, { key: "ArrowDown" });
  fireEvent.keyDown(input, { key: "Enter" });
  fireEvent.click(nextButton);
  const imageElement = screen.getByAltText("loading");
  expect(imageElement).toBeInTheDocument();
  const jobsInput = screen.getByRole("combobox");
  fireEvent.focus(jobsInput);
  fireEvent.change(jobsInput, { target: { value: ["UI/UX Designer"] } });
  fireEvent.keyDown(jobsInput, { key: "ArrowDown" });
  fireEvent.keyDown(jobsInput, { key: "Enter" });
  const chips = screen.getAllByTestId("filter-chip");
  const deleteButton = within(chips[0]).getByTestId("icon");
  fireEvent.click(deleteButton);
  fireEvent.focus(jobsInput);
  fireEvent.change(jobsInput, { target: { value: ["UI/UX Designer"] } });
  fireEvent.keyDown(jobsInput, { key: "ArrowDown" });
  fireEvent.keyDown(jobsInput, { key: "Enter" });
  expect(chips.length).toBe(1);
  const imageElement1 = screen.queryByAltText("loading");
  expect(imageElement1).toBeNull();
  fireEvent.click(nextButton);
});

test("Should go back to stage 1", () => {
  render(
    <Router>
      <LandingPage />
    </Router>
  );

  const nextButton = screen.getByText("Next");
  expect(nextButton).toBeInTheDocument();
  const textElement = screen.getByRole("textbox");
  fireEvent.change(textElement, { target: { value: "Hyderabad" } });
  fireEvent.click(nextButton);
  const backButton = screen.getByText("Back");
  expect(backButton).toBeInTheDocument();
  fireEvent.click(backButton);
  const descriptionElement1 = screen.getByText(
    "Real Time Air Quality Index (AQI) in this location"
  );
  expect(descriptionElement1).toBeInTheDocument();
});
