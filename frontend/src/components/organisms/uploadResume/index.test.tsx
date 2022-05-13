import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UploadResume from "./index";

it("resume state change ", async () => {
  render(<UploadResume setDisplay={() => jest.fn()} />);
  const CloseIcon = screen.getByTestId("close-icon");
  fireEvent.click(CloseIcon);
  const resumeNotSubmitted = screen.getByTestId("resume-not-submitted");
  expect(resumeNotSubmitted).toBeInTheDocument();
  const button = screen.getByRole("button");
  fireEvent.click(button);
  const input = screen.getByTestId("file-upload");
  const file = new File(
    ["hello"],
    "test.pdf",
    {
      type: "application/pdf",
    }
  );
  fireEvent.change(input, { target: { file: file } });
  expect(resumeNotSubmitted).not.toBeInTheDocument();
  const resumeSubmitted = screen.getByTestId("resume-submitted");
  expect(resumeSubmitted).toBeInTheDocument();
});
