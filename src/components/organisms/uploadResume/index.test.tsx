import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import UploadResume from "./index";

it("resume state change ", () => {
  render(
    <UploadResume
        setDisplay = { () => jest.fn()}
    />
  );
  const CloseIcon = screen.getByTestId("close-icon");
  fireEvent.click(CloseIcon);
  const resumeNotSubmitted = screen.getByTestId("resume-not-submitted");
  expect(resumeNotSubmitted).toBeInTheDocument();
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(resumeNotSubmitted).not.toBeInTheDocument();
  const resumeSubmitted = screen.getByTestId("resume-submitted");
  expect(resumeSubmitted).toBeInTheDocument();
});
