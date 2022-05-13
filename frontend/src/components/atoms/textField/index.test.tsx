import React from "react";

import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextField from ".";


test("renders the component with given placeholder", () => {
  render(<TextField variant="outlined" value="hello" placeholder="Enter your location"boxShadow={false}/>);
  const inputElement = screen.getByPlaceholderText("Enter your location");
  expect(inputElement).toBeInTheDocument();
});

test("renders border if border = true", () => {
  render(<TextField variant="outlined" value="hello" placeholder="Enter your location" border={true}/>);
  const inputElement = screen.getByPlaceholderText("Enter your location");
  expect(inputElement).not.toHaveStyle({border: 'none'})
});

test("do not renders border if border = false", () => {
  render(<TextField variant="outlined" value="hello" placeholder="Enter your location" border={false}/>);
  const inputElement = screen.getByPlaceholderText("Enter your location");
  expect(inputElement).toHaveStyle({border: '0px'})
});