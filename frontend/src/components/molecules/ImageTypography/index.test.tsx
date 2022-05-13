import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import ImageTypography from "./index";
import LandingImage1 from "../../../assets/images/landingImage1.svg";

test("Should Render Landing page frame", () => {
  render(
    <ImageTypography description="Enter Location to know Time Air Quality Index (AQI)">
      <img
        src={LandingImage1}
        alt="landingImage1"
        width="256px"
        height="244px"
      />
    </ImageTypography>
  );
  const imageElement = screen.getByAltText("landingImage1");
  const textElement = screen.getByText(
    "Enter Location to know Time Air Quality Index (AQI)"
  );
  expect(imageElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
});
