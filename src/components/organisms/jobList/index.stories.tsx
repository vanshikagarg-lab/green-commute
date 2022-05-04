import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import JobList from ".";

export default {
  title: "Organisms/JobList",
  component: JobList,
} as ComponentMeta<typeof JobList>;

const Template: ComponentStory<typeof JobList> = args => <JobList {...args} />;

export const JobListFilters = Template.bind({});
JobListFilters.args = {
  filters: [
    { label: "10-20 kms", deleteHandler: () => {} },
    { label: "Past 24 hrs", deleteHandler: () => {} },
    { label: "Full time", deleteHandler: () => {} },
    { label: "Fresher", deleteHandler: () => {} },
    { label: "Green Commute Routes", deleteHandler: () => {} },
  ],
};

export const Default = Template.bind({});
Default.args = {
  filters: [],
};
