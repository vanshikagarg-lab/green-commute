import { render, screen, fireEvent,within } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import JobList from "./index";
import MyntraLogo from "../../../assets/images/myntraaLogo.svg";
import BMWLogo from "../../../assets/images/bmwLogo.svg";
import InstagramLogo from "../../../assets/images/instagramLogo.svg";
import { FilterSharp } from "@mui/icons-material";

const filterArray = [
  { label: "10-20 kms", deleteHandler: () => {} },
  { label: "Past 24 hrs", deleteHandler: () => {} },
  { label: "Full time", deleteHandler: () => {} },
  { label: "Fresher", deleteHandler: () => {} },
  { label: "Green Commute Routes", deleteHandler: () => {} },
];

const cardArray = [
  {
    jobId: 1,
    designation: "User Experience Designer",
    companyLogo: MyntraLogo,
    companyName: "Myntra",
    companyAddress: "Hitech city, Hyderabad - 500072",
    posted: "36 min ago",
    routes: {
      bike: true,
      bus: true,
      train: true,
      car: false,
    },
    distance: 5,
    skill: "Graphic Designer",
    saved: false,
  },
  {
    jobId: 2,
    designation: "Product Designer",
    companyLogo: BMWLogo,
    companyName: "BMW",
    companyAddress: "Hitech city, Hyderabad - 500072",
    posted: "10 days ago",
    routes: {
      bike: true,
      bus: true,
      car: true,
      train: true,
    },
    distance: 5,
    skill: "Graphic Designer",
    saved: false,
  },
  {
    jobId: 3,
    designation: "User Experience Designer",
    companyLogo: InstagramLogo,
    companyName: "Instagram",
    companyAddress: "Mumbai",
    posted: "45 days ago",
    routes: {
      bike: true,
      car: true,
      bus: false,
      train: false,
    },
    distance: 15,
    skill: "Graphic Designer",
    saved: false,
  },
];

test("Should render the title", () => {
  render(
    <JobList filterProps={[]} cardProps={cardArray} setFilters={() => {}} currentLocation="Hyderabad" />
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
    <JobList filterProps={[]} cardProps={cardArray} setFilters={() => {}} currentLocation="Hyderabad"/>
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

test("should click on SavejobCard", () => {
  render(
    <JobList filterProps={[]} cardProps={cardArray} setFilters={() => {}} currentLocation="Hyderabad"/>
  );
  const saveButton = screen.getByText("Save");
  fireEvent.click(saveButton);
  const unSaveButton = screen.getByText("Unsave");
  expect(unSaveButton).toBeInTheDocument();
});

test("Should render Description card", () => {
  render(
    <JobList filterProps={[]} cardProps={cardArray} setFilters={() => {}} currentLocation="Hyderabad"/>
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
