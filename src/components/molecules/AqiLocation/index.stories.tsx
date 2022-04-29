import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import AqiLocation from "./index";

export default {
  title: "Molecules/AqiLocation",
  component: AqiLocation,
} as ComponentMeta<typeof AqiLocation>;

const Template: ComponentStory<typeof AqiLocation> = args => (
  <AqiLocation {...args} />
);

export const AqiValueLocation = Template.bind({});
AqiValueLocation.args = {
  location: "Hyderabad",
  aqiValue: "894",
};
