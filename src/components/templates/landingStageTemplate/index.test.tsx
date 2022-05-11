import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import LandingStageTemplate from ".";
import LandingInput from "../../molecules/landingInput";
import ImageTypography from "../../molecules/ImageTypography";
import LandingImage1 from "../../../assets/images/landingImage1.svg";
import theme from "../../../theme";

const locations = [
  {
    title: "Hyderabad",
  },
  {
    title: "Mumbai",
  },
];

const skills = [
  {
    title: "UI/UX Designer",
  },
  {
    title: "Graphic Designer",
  },
];

test("Should render a stage 1 template", () => {
  render(
    <LandingStageTemplate
      inputFrame={
        <LandingInput
          stage={1}
          locationOptions={locations}
          skillsOptions={skills}
        />
      }
      aqiFrame={
        <ImageTypography
          children={<img src={LandingImage1} alt="loading" />}
          description="Enter your location to know your AQI (Air Quality Index)"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            width: "574px",
            height: "768px",
            background: theme.palette.structural.linear1,
          }}
        />
      }
    />
  );

  const stageElement1 = screen.getByText("Your Location");
  const stageElement2 = screen.getByText("Job Location");
  const inputElement = screen.getByText(/Where do you stay/i);
  const imageElement = screen.getByAltText("loading");
  const descriptionElement = screen.getByText(
    "Enter your location to know your AQI (Air Quality Index)"
  );

  expect(stageElement1).toBeInTheDocument();
  expect(stageElement2).toBeInTheDocument();
  expect(stageElement1).toHaveStyle({
    color: theme.palette.primary.main300,
  });
  expect(stageElement2).toHaveStyle({
    color: theme.palette.textColor.highEmphasis,
  });
  expect(inputElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
});
