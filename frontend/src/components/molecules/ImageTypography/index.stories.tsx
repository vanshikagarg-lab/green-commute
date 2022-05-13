import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ImageTypography from "./index";
import LandingImage1 from "../../../assets/images/landingImage1.svg";
import LandingImage2 from "../../../assets/images/landingImage2.svg";
import LandingImage3 from "../../../assets/images/landingImage3.svg";
import theme from "../../../theme";

export default {
  title: "Molecules/ImageTypography",
  component: ImageTypography,
} as ComponentMeta<typeof ImageTypography>;

const Template: ComponentStory<typeof ImageTypography> = args => (
  <ImageTypography {...args} />
);

const FrameStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignContent: "center",
  width: "574px",
  height: "768px",
  background: theme.palette.structural.linear1,
};

export const LandingFrame1 = Template.bind({});
LandingFrame1.args = {
  children: (
    <img src={LandingImage1} alt="loading..." width="256px" height="244px" />
  ),
  description: "Enter Location to know Time Air Quality Index (AQI)",
  style: FrameStyle,
};

export const LandingFrame2 = Template.bind({});
LandingFrame2.args = {
  children: (
    <img src={LandingImage2} alt="loading..." width="380px" height="248px" />
  ),
  description: "Enter Location to know Time Air Quality Index (AQI)",
  style: FrameStyle,
};

export const LandingFrame3 = Template.bind({});
LandingFrame3.args = {
  children: (
    <img src={LandingImage3} alt="loading..." width="417px" height="248px" />
  ),
  description:
    "Enter your Skills to know how many jobs are there in this Location",
  style: FrameStyle,
};
