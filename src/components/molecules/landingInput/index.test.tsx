import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LandingInput from ".";
import theme from "../../../theme";

const locations = [
  {
    title: "Hyderabad",
  },
  {
    title: "Mumbai",
  },
];

const skills = [
  {
    title: "UI/UX Designer",
  },
  {
    title: "Graphic Designer",
  },
];

test("Should render stage 1 of Landing Input", () => {
  render(
    <LandingInput
      stage={1}
      skillsOptions={skills}
      inputFieldValue={""}
      locationOptions={locations}
    />
  );
  const ReactElement = screen.getByText("Where do you stay");
  expect(ReactElement).toBeInTheDocument();
});

test("Should render stage 2 of Landing Input", () => {
  render(
    <LandingInput
      stage={2}
      skillsOptions={skills}
      inputFieldValue={""}
      locationOptions={locations}
    />
  );
  const ReactElement = screen.getByText("Where do you want to work?");
  expect(ReactElement).toBeInTheDocument();
});

test("Should render stage 3 of Landing Input", () => {
  render(
    <LandingInput
      stage={3}
      skillsOptions={skills}
      inputFieldValue={""}
      locationOptions={locations}
    />
  );
  const ReactElement = screen.getByText("What do you want to do?");
  expect(ReactElement).toBeInTheDocument();
});
