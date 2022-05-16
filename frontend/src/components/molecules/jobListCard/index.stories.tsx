import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import JobListCard from ".";
import Logo from "../../../assets/images/myntraLogo.png";
export default {
  title: "Molecules/JobListCard",
  component: JobListCard,
} as ComponentMeta<typeof JobListCard>;

const Template: ComponentStory<typeof JobListCard> = (args) => (
  <JobListCard {...args} />
);

export const SelectedJobListCard = Template.bind({});
SelectedJobListCard.args = {
  jobId: 1,
  height: "159px",
  width: "1071px",
  logo: Logo,
  jobName: "User Experience Designer",
  companyName: "Myntra",
  companyAddress: "Hitech city, Hyderabad - 500072",
  vehicle: {
    bus: true,
    train: true,
    car: true,
    bike: true,
  },
  time: "36 min ago",
  selected: true,
};
