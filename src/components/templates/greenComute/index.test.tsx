import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import GreenComute from "./index";
import {list1, list2} from '../../organisms/sideBar/sideBarList'
it("renders the template", () => {
  render(<GreenComute currentLocation={""} sidebar1={list1} sidebar2={list2}  />);
  const ReactElement = screen.getByTestId("green-template");
  expect(ReactElement).toBeInTheDocument();
});