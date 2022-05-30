import { render, screen, fireEvent,within } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import JobList from "./index";
import {cardArray} from "../../../constants/index";
import axios, { AxiosResponse } from "axios";


const filterArray = [
  { label: "10-20 kms", deleteHandler: () => {} },
  { label: "Past 24 hrs", deleteHandler: () => {} },
  { label: "Full time", deleteHandler: () => {} },
  { label: "Fresher", deleteHandler: () => {} },
  { label: "Green Commute Routes", deleteHandler: () => {} },
];

beforeEach(() => {
  const mAxiosResponse = {
    data: cardArray[0],
  } as AxiosResponse;
  jest.spyOn(axios, "post").mockResolvedValueOnce(mAxiosResponse);
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("Should render the title", () => {
  render(
    <JobList filterProps={[]} cardProps={cardArray} setFilters={() => {}} currentLocation="Hyderabad" selectedIndex={0}/>
  );

  const text1 = screen.getByText("Job list");
  const text2 = screen.getByText("Based on your search");

  expect(text1).toBeInTheDocument();
  expect(text2).toBeInTheDocument();

  const clearAllElement = screen.queryByText("Clear All");
  expect(clearAllElement).toBeNull();
});

test("Should render the cards", () => {
  render(
    <JobList filterProps={[]} cardProps={cardArray} setFilters={() => {}} currentLocation="Hyderabad" selectedIndex={0}/>
  );

  const cardList = screen.getByTestId("cardId");
  const cardLength = cardList.childElementCount;
  expect(cardLength).toBe(3);

  const cardElement = cardList.children;
  fireEvent.click(cardElement[0]);
  expect(cardElement[0]).toHaveStyle({
    border: "2px solid #77EDDF",
  });
  expect(cardElement[1]).toHaveStyle({
    border: "none",
  });
});

test("should click on SavejobCard", async () => {
  render(
    <JobList filterProps={[]} cardProps={cardArray} setFilters={() => {}} currentLocation="Hyderabad" selectedIndex={0}/>
  );
  const unSaveButton = screen.getByText("Unsave");
  expect(unSaveButton).toBeInTheDocument();
  fireEvent.click(unSaveButton);
  const saveButton = await screen.findByText("Save");
  expect(saveButton).toBeInTheDocument();
});

test("Should render Description card", () => {
  render(
    <JobList filterProps={[]} cardProps={cardArray} setFilters={() => {}} currentLocation="Hyderabad" selectedIndex={0}/>
  );
  const descriptionCard = screen.getByTestId("JobDescriptionCard");
  expect(descriptionCard).toBeInTheDocument();
});

test("Should render Filter Chips and Resume Dialog",async () => {
  render(
    <JobList
      filterProps={filterArray}
      cardProps={cardArray}
      setFilters={() => {}}
      currentLocation="Hyderabad"
      selectedIndex={0}
    />
  );
  const filterChip = screen.getAllByTestId("filter-chip");
  expect(filterChip.length).toBe(5);

  const deleteButton = within(filterChip[0]).getByTestId("icon");
  fireEvent.click(deleteButton);

  const newFilterChip = screen.getAllByTestId("filter-chip");
  expect(newFilterChip.length).toBe(5);

  const dialogElement1 = screen.queryByTestId("dialog");
  expect(dialogElement1).toBeNull();
  const applyElement = screen.getByText("Apply");
  fireEvent.click(applyElement);
  const dialogElement = screen.getByTestId("dialog");
  expect(dialogElement).toBeInTheDocument();

  const clearAllElement = screen.getByText("Clear All");
  expect(clearAllElement).toBeInTheDocument();
});
