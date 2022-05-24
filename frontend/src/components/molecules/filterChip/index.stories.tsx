import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import FilterChip from ".";
import theme from "../../../theme";

export default {
  title: "molecules/FilterChip",
  component: FilterChip,
} as ComponentMeta<typeof FilterChip>;

const Template: ComponentStory<typeof FilterChip> = (args) => {
  return <FilterChip {...args} />;
};

export const LandingPageChip = Template.bind({});

LandingPageChip.args = {
  label: "10-20 kms",
  backgroundColor: true,
};

export const Default = Template.bind({});

Default.args = {
  label: "10-20 kms",
  backgroundColor: false,
  deleteHandler: () => {
  },
};
