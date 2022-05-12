import {render, screen, fireEvent} from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import SaveJobsPage from ".";

test("Should render saved cards and description", () => {
  render(<SaveJobsPage />);

  const cardListElement = screen.getByTestId("cardList");
  expect(cardListElement).toBeInTheDocument();
  const cardDescriptionElement = screen.getByTestId("description");
  expect(cardDescriptionElement).toBeInTheDocument();
});

test("Should show dialog for upload resume when clicked on apply", () => {
  render(<SaveJobsPage />);

  const applyButton = screen.getByText("Apply");
  expect(applyButton).toBeInTheDocument();
  const dialogElement = screen.queryByTestId("dialog");
  expect(dialogElement).toBeNull();
  fireEvent.click(applyButton);
  const dialogElement1 = screen.queryByTestId("dialog");
  expect(dialogElement1).toBeInTheDocument();
});

test("Should remove the card when clicked on unsave", () => {
  render(<SaveJobsPage />);

  const cardListElement = screen.getByTestId("cardList");
  expect(cardListElement.children.length).toBe(3);
  const unsaveButton = screen.getByText("Unsave");
  expect(unsaveButton).toBeInTheDocument();
  fireEvent.click(unsaveButton);
  expect(cardListElement.children.length).toBe(2);
});

test("Should change the border after clicking the card", () => {
  render(<SaveJobsPage />);

  const cardList = screen.getByTestId("cardList");
  const cards = cardList.children;
  expect(cards[0]).toBeInTheDocument();
  fireEvent.click(cards[0]);
  expect(cards[0]).toHaveStyle({
    border: "2px solid #77EDDF",
  });
});
