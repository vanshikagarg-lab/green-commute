import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import RecommendedJobsGrid from ".";
import { Data } from "./data";

export default {
  title: "organisms/RecommendedJobsGrid",
  component: RecommendedJobsGrid,
} as ComponentMeta<typeof RecommendedJobsGrid>;

const Template: ComponentStory<typeof RecommendedJobsGrid> = (args) => {
  return <RecommendedJobsGrid {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  jobsList: Data,
};
