import {
  render,
  screen,
  fireEvent,
  within,
  findByText,
  waitFor,
} from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import LandingPage from ".";
import { BrowserRouter as Router } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

afterEach(() => {
  jest.restoreAllMocks();
});

beforeEach(() => {
  const locations = {
    data: [
      {
        id: 1,
        name: "Hyderabad",
        aqi: 894,
      },
      {
        id: 2,
        name: "Mumbai",
        aqi: 953,
      },
    ],
  } as AxiosResponse;

  const skills = {
    data: [
      {
        id: 1,
        skill: "UI/UX Designer",
      },
      {
        id: 2,
        skill: "Graphic Designer",
      },
    ],
  } as AxiosResponse;
  const jobs = {
    data: [
      {
        id: 1,
        designation: "User Experience Designer",
        companyLogo: "./images/myntraLogo.svg",
        companyName: "Myntra",
        location: "Hitech city, Hyderabad - 500072",
        posted: "36 min ago",
        routes: { bike: true, bus: true, train: true, car: false },
        distance: 5,
        skill: "Graphic Designer",
        saved: false,
      },
    ],
  };
  const mockGet = jest.spyOn(axios, "get");
  mockGet.mockImplementation((url) => {
    if (url == "http://18.223.206.231:9005/location") {
      return Promise.resolve(locations);
    } else if (url == "http://18.217.145.156:3004/skills") {
      return Promise.resolve(skills);
    } else {
      return Promise.resolve(jobs);
    }
  });
});

test("Should change the Aqi frame while entering the location at stage 1", async () => {
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
  const aqiValue = await screen.findByText("894");
  expect(aqiValue).toBeInTheDocument();
});

test("Should change the Aqi frame after entering the job location at stage 2", async () => {
  render(
    <Router>
      <LandingPage />
    </Router>
  );
  expect(await screen.findByText("Next")).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.getByText("Next")).toBeInTheDocument();
  });
  const nextButton = screen.getByText("Next");
  expect(nextButton).toBeInTheDocument();
  const textElement = screen.getByRole("textbox");
  fireEvent.change(textElement, { target: { value: "Hyderabad" } });
  fireEvent.click(nextButton);
  await waitFor(() => {
    const backButton = screen.getByText("Back");
    expect(backButton).toBeInTheDocument();
  });
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

test("Should change the Aqi frame after entering the skills at stage 3", async () => {
  render(
    <Router>
      <LandingPage />
    </Router>
  );

  const nextButton = await screen.findByText("Next");
  expect(nextButton).toBeInTheDocument();
  const textElement = screen.getByRole("textbox");
  const imageElement = screen.getByAltText("loading");
  expect(imageElement).toBeInTheDocument();
  fireEvent.change(textElement, { target: { value: "Hyderabad" } });
  fireEvent.click(nextButton);
  const input = screen.getByRole("combobox");
  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: ["Hyderabad"] } });
  fireEvent.keyDown(input, { key: "ArrowDown" });
  fireEvent.keyDown(input, { key: "Enter" });
  fireEvent.click(nextButton);
  const jobsInput = screen.getByRole("combobox");
  fireEvent.focus(jobsInput);
  fireEvent.change(jobsInput, { target: { value: ["Graphic Designer"] } });
  fireEvent.keyDown(jobsInput, { key: "ArrowDown" });
  fireEvent.keyDown(jobsInput, { key: "Enter" });
  const chips = screen.getAllByTestId("filter-chip");
  const deleteButton = within(chips[0]).getByTestId("icon");
  fireEvent.click(deleteButton);
  fireEvent.focus(jobsInput);
  fireEvent.change(jobsInput, { target: { value: ["Graphic Designer"] } });
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
