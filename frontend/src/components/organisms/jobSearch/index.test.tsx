import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import JobSearch from "./index";
import saveIcon from "../../../assets/icons/save.svg";
import userEvent from "@testing-library/user-event";
import THEME from "../../../theme";
import { skills, locations } from "../../../constants";

it("renders jobSearch", () => {
  render(<JobSearch />);
  const ReactElement = screen.getByTestId("jobSearch");
  expect(ReactElement).toBeInTheDocument();
});

it("changes color of skills icon", () => {
  render(<JobSearch skillsOptions={skills} />);
  const ReactElement = screen.getByPlaceholderText(
    "Search Skills"
  ) as HTMLInputElement;
  fireEvent.change(ReactElement, {
    target: {
      value: "UI/UX",
    },
  });
  expect(screen.getAllByTestId("icon")[0]).toHaveStyle({
    fill: THEME.palette.textColor.highEmphasis,
  });
});

it("changes color of location icon", () => {
  render(<JobSearch locationOptions={locations} />);
  const ReactElement = screen.getByPlaceholderText(
    "Location"
  ) as HTMLInputElement;
  fireEvent.change(ReactElement, {
    target: {
      value: "Delhi",
    },
  });
  expect(screen.getAllByTestId("icon")[1]).toHaveStyle({
    stroke: THEME.palette.textColor.highEmphasis,
  });
});

it("should call searchClickMethod", () => {
  const handleClick = jest.fn();
  render(<JobSearch searchButtonClick={handleClick} />);
  const ReactElement = screen.getAllByTestId("icon");
  fireEvent.click(ReactElement[2]);
  expect(handleClick).toHaveBeenCalled;
});
