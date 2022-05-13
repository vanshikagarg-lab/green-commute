import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import AqiField from "./index";
import theme from "../../../theme";

export default {
  title: "Molecules/AqiField",
  component: AqiField,
} as ComponentMeta<typeof AqiField>;

const Template: ComponentStory<typeof AqiField> = args => (
  <AqiField {...args} />
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
  aqiValue: "947",
  description: "Real Time Air Quality Index(AQI) in this Location",
  style: FrameStyle,
};
