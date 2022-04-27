import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Icon from "./index";
import saveIcon from "../../../assets/icons/save.svg";

it("renders an icon", () => {
  render(<Icon src={saveIcon} />);
  const ReactElement = screen.getByTestId("icon");
  expect(ReactElement).toBeInTheDocument();
});
