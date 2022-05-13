import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import DisplayAqi from "./index";
import AqiLocation from "../AqiLocation";
import theme from "../../../theme";

export default {
  title: "Molecules/DisplayAqi",
  component: DisplayAqi,
} as ComponentMeta<typeof DisplayAqi>;

const Template: ComponentStory<typeof DisplayAqi> = args => (
  <DisplayAqi {...args} />
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

export const AqiFrame = Template.bind({});
AqiFrame.args = {
  aqi: [
    <AqiLocation aqiValue="894" location="Hyderabad" />,
    <AqiLocation aqiValue="953" location="Mumbai" />,
  ],
  description: "Real Time Air Quality Index(AQI) in this Location",
  style: FrameStyle,
};
