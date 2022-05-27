import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import axios, { AxiosResponse } from "axios";
import SaveJobsPage from ".";
import { BrowserRouter } from "react-router-dom";
import {cardArray} from "../../../constants";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/example/path",
    state: {
      jobLocation: [
        {
          id: 1,
          location: "Hyderabad",
          aqi: 894,
        },
      ],
      jobSkills: [
        {
          id: 1,
          skill: "Graphic Designer",
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
  const mAxiosGetResponse = {
    data: cardArray,
  } as AxiosResponse;
  const mAxiosPutResponse = {
    data: cardArray[0],
  } as AxiosResponse;
  jest.spyOn(axios, "get").mockResolvedValueOnce(mAxiosGetResponse);
  jest.spyOn(axios, "post").mockResolvedValueOnce(mAxiosPutResponse);
});

test("Should render saved cards and description", async () => {
  render(
    <BrowserRouter>
      <SaveJobsPage />
    </BrowserRouter>
  );

  const cardListElement = await screen.findByTestId("cardList");
  expect(cardListElement).toBeInTheDocument();
  const description = await screen.findByTestId("description");
  expect(description).toBeInTheDocument();
});

test("Should show dialog for upload resume when clicked on apply", async () => {
  render(
    <BrowserRouter>
      <SaveJobsPage />
    </BrowserRouter>
  );

  const applyButton = await screen.findByText("Apply");
  expect(applyButton).toBeInTheDocument();
  const dialogElement = screen.queryByTestId("dialog");
  expect(dialogElement).toBeNull();
  fireEvent.click(applyButton);
  const dialogElement1 = screen.queryByTestId("dialog");
  expect(dialogElement1).toBeInTheDocument();
});

test("Should remove the card when clicked on unsave", async () => {
  render(
    <BrowserRouter>
      <SaveJobsPage />
    </BrowserRouter>
  );

  const cardListElement = await screen.findByTestId("cardList");
  expect(cardListElement.children.length).toBe(1);
  const unsaveButton = screen.getByText("Unsave");
  expect(unsaveButton).toBeInTheDocument();
  fireEvent.click(unsaveButton);
  const newCardListElement = await screen.findByTestId("cardList");
  expect(newCardListElement.children.length).toBe(0);
});

test("Should change the border after clicking the card", async () => {
  render(
    <BrowserRouter>
      <SaveJobsPage />
    </BrowserRouter>
  );

  const cardList = await screen.getByTestId("cardList");
  expect(cardList).toBeInTheDocument();
  fireEvent.click(cardList);
  expect(cardList).toHaveStyle(
    `border: "2px solid #77eddf"`,
  );
});
