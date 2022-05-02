import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import JobSearch from "./index";
import { Box } from "@mui/material";

export default {
  title: "Organisms/JobSearch",
  component: JobSearch,
} as ComponentMeta<typeof JobSearch>;

const Template: ComponentStory<typeof JobSearch> = (args) => {
  return <JobSearch {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
