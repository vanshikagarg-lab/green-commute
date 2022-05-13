import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import IconButtonComponent from "./index";
import CarIcon from "../../../assets/images/icons/carIcon.svg";

test("Render Search Button", () => {
  render(
    <IconButtonComponent icon={CarIcon} alt="carIcon">
      <img src={CarIcon} alt="carIcon" />
    </IconButtonComponent>
  );
  const iconElement = screen.getByAltText("carIcon");
  expect(iconElement).toBeInTheDocument();
});
