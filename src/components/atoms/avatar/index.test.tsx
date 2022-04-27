import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Avatar from "./index";
const avatarImage = require("../../../assets/images/avatarImage.png") as string;

it("renders a avatar", () => {
  render(<Avatar src={avatarImage} />);
  const ReactElement = screen.getByTestId("avatar");
  expect(ReactElement).toBeInTheDocument();
});
