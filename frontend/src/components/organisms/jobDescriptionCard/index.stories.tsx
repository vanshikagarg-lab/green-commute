import React from "react";
import JobDescriptionCardProps from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import myntraLogo from "../../../assets/images/myntraLogo.png";
import { transitOptions } from "../routeMaps/dataList";

export default {
  title: "Organisms/JobDecriptionCard",
  component: JobDescriptionCardProps,
} as ComponentMeta<typeof JobDescriptionCardProps>;

const Template: ComponentStory<typeof JobDescriptionCardProps> = (args) => (
  <JobDescriptionCardProps {...args} />
);
export const Default = Template.bind({});

Default.args = {
  jobId: 1,
  logo: myntraLogo,
  jobName: "User Experience Designer",
  companyName: "Myntra",
  companyAddress: "Hitech city, Hyderabad - 500072",
  postTime: "36 min ago",
  width: "404px",
  description: `Open Text is seeking a talented, personable interaction designer who
  can assist the User Experience Design team by working with other
  designers and development teams on a variety of projects. The
  OpenText User Experience Design group is a distributed
  multi-disciplinary team of professionals that are responsible for
  enhancing the UX of the company’s collective product suites
  worldwide.`,
  saved: false,
  about1: `High level of proficiency with leading UX Design software packages,
  such as Axure, Sketch, InVision, or Experience Design including the
  core Adobe Creative Suite products.`,
  about2: `Excellent written and oral communication and presentation skills`,
  startLocation: "E Marredpally, Secunderabad",
  destination: "Hitech City, Telanagana, Hyderabad.",
  cost: 100,
  distance: 25,
  time: "1 hr 20 mins",
  transitOptions: transitOptions,
  vehicle: [{routeName: "Bike"},{routeName: "Car"},{routeName: "Train"},{routeName: "Bus"}],
};
