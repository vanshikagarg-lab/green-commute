import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import RecommendedJobCard from "./index";
import Logo from "../../../assets/images/myntraLogo.png";

export default {
  title: "Molecules/RecommendedJobCard",
  component: RecommendedJobCard,
} as ComponentMeta<typeof RecommendedJobCard>;

const Template: ComponentStory<typeof RecommendedJobCard> = args => (
  <RecommendedJobCard {...args} />
);

export const RecommendedCard = Template.bind({});
RecommendedCard.args = {
  jobId: 1,
  logo: Logo,
  jobName: "User Experience Designer",
  companyName: "Myntra",
  companyAddress: "Hyderabad, Telangana, India",
  routesTitle: "Commute routes available :",
  vehicle: {
    bus: true,
    train: true,
    car: true,
    bike: true,
  },
  time: "45 min ago",
};
