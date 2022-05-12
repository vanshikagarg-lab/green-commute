import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import JobList from "./index";

const filterArray = [
  { label: "10-20 kms", deleteHandler: () => {} },
  { label: "Past 24 hrs", deleteHandler: () => {} },
  { label: "Full time", deleteHandler: () => {} },
  { label: "Fresher", deleteHandler: () => {} },
  { label: "Green Commute Routes", deleteHandler: () => {} },
];

test("Should render the title", () => {
  render(<JobList filters={[]} setFilters={() => {}} />);

  const text1 = screen.getByText("Job list");
  const text2 = screen.getByText("Based on your search");

  expect(text1).toBeInTheDocument();
  expect(text2).toBeInTheDocument();

  const clearAllElement = screen.queryByText("Clear All");
  expect(clearAllElement).toBeNull();
});

test("Should render the cards", () => {
  render(<JobList filters={[]} setFilters={() => {}} />);

  const cardList = screen.getByTestId("cardId");
  const cardLength = cardList.childElementCount;
  expect(cardLength).toBe(6);

  const cardElement = cardList.children;
  fireEvent.click(cardElement[0]);
  expect(cardElement[0]).toHaveStyle({
    border: "2px solid #77EDDF",
  });
  expect(cardElement[1]).toHaveStyle({
    border: "none",
  });
});

test("Should render Description card", () => {
  render(<JobList filters={[]} setFilters={() => {}}/>);
  const descriptionCard = screen.getByTestId("JobDescriptionCard");
  expect(descriptionCard).toBeInTheDocument();
});

test("Should render Filter Chips and Resume Dialog", () => {
  render(<JobList filters={filterArray} setFilters={() => {}}/>);
  const filterChip = screen.getAllByTestId("filter-chip");
  expect(filterChip.length).toBe(5);

  const dialogElement1 = screen.queryByTestId("dialog");
  expect(dialogElement1).toBeNull();
  const applyElement = screen.getByText("Apply");
  fireEvent.click(applyElement);
  const dialogElement = screen.getByTestId("dialog");
  expect(dialogElement).toBeInTheDocument();

  const clearAllElement = screen.getByText("Clear All");
  expect(clearAllElement).toBeInTheDocument();
});
