import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import GreenComute from "./index";
import { list1, list2 } from "../../organisms/sideBar/sideBarList";
it("renders the template", () => {
  render(<GreenComute currentLocation={""} selected={0} />);
  const ReactElement = screen.getByTestId("green-template");
  expect(ReactElement).toBeInTheDocument();
});
