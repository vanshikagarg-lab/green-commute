import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, within } from "@testing-library/react";
import FindJobs from ".";
import { BrowserRouter as Router } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import {cardArray} from "../../../constants";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/example/path",
    state: {
      jobLocation: [
        {
          id: 1,
          name: "Hyderabad",
          aqi: 894,
        },
      ],
      jobSkills: [
        {
          id: 1,
          name: "Graphic Designer",
        },
      ],
      currLocation: "Delhi",
    },
  }),
}));

afterEach(() => {
  jest.restoreAllMocks();
});

beforeEach(() => {
  const mAxiosResponse = {
    data: cardArray,
  } as AxiosResponse;
  jest.spyOn(axios, "get").mockResolvedValueOnce(mAxiosResponse);
});

it("the recommended box disappers when recommended-box is clicked", async () => {
  render(
    <Router>
      <FindJobs />
    </Router>
  );
  const ReactElement = await screen.findByTestId("recommendedJobGrid");
  expect(ReactElement).toBeInTheDocument();
  const card = await screen.findAllByTestId("recommended-box");
  expect(card[0]).toBeInTheDocument();
});

it("the search results are displayed", () => {
  render(
    <Router>
      <FindJobs />
    </Router>
  );
  const input = screen.getByPlaceholderText("Location");
  fireEvent.change(input, { target: { value: "Hyderabad" } });
  const jobSearch = screen.getByTestId("jobSearch");
  const searchButton = within(jobSearch).getAllByTestId("icon")[2];
  fireEvent.click(searchButton);
  const ReactElement = screen.getByTestId("recommendedJobGrid");
  expect(ReactElement).toBeInTheDocument();
});

it("filter box appers when the filter-button is clicked", () => {
  render(
    <Router>
      <FindJobs />
    </Router>
  );
  const ReactElement = screen.getByText("Filter");
  fireEvent.click(ReactElement);
  expect(screen.getByTestId("filter-box")).toBeInTheDocument();
});
