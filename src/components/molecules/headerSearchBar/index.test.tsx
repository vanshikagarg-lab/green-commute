import React from "react";

import { screen, render, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom";
import HeaderSearchBar from ".";



type TestElement = Document | Element | Window | Node

function hasInputValue(e: TestElement, inputValue: string) {
    return screen.getByDisplayValue(inputValue) === e
}

test("renders the typed content", () => {
  render(<HeaderSearchBar />);
  const inputElement = screen.getByPlaceholderText("Enter your location");
  fireEvent.change(inputElement, {
      target: {
          value: "hello"
      }
  });
  expect(hasInputValue(inputElement, "hello")).toBe(true)
});