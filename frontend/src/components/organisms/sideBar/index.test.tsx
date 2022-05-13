import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import SideBar from "./index";
import { list1, list2 } from "./sideBarList";
import theme from "../../../theme";

it("renders the SideBar", () => {
  render(<SideBar list1={list1} list2={list2} />);
  const ReactElement = screen.getByTestId("side-bar");
  expect(ReactElement).toBeInTheDocument();
});

it("fire onClick for savedJobs", () => {
  const mockFunction = jest.fn();
  render(
    <SideBar list1={list1} list2={list2} savedJobsOnClick={mockFunction} />
  );
  const ReactElement = screen.getByText("Saved Jobs");
  fireEvent.click(ReactElement);
  expect(mockFunction).toHaveBeenCalled();
});

it("fire onClick for findJobs", () => {
  const mockFunction = jest.fn();
  render(
    <SideBar list1={list1} list2={list2} findJobsOnClick={mockFunction} />
  );
  const ReactElement = screen.getByText("Find Jobs");
  fireEvent.click(ReactElement);
  expect(mockFunction).toHaveBeenCalled();
});
