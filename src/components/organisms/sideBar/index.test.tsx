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

it("fire onClick for list1 elements", () => {
  render(<SideBar list1={list1} list2={list2} />);
  const ReactElement = screen.getAllByTestId("border-box");
  fireEvent.click(ReactElement[0]);
  expect(ReactElement[0]).toHaveStyle({
    backgroundColor: theme.palette.primary.main500,
  });
});

it("fire onClick for list2 elements", () => {
  render(<SideBar list1={list1} list2={list2} />);
  const ReactElement = screen.getAllByTestId("border-box");
  fireEvent.click(ReactElement[ReactElement.length - 1]);
  expect(ReactElement[ReactElement.length - 1]).toHaveStyle({
    backgroundColor: theme.palette.primary.main500,
  });
});
