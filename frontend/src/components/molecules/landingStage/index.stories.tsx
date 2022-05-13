import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import LandingStage from ".";
import Icon from "../../atoms/icon";
import DoneSvg from "../../../assets/icons/done.svg";

export default {
  title: "Molecules/LandingStage",
  component: LandingStage,
} as ComponentMeta<typeof LandingStage>;

const Template: ComponentStory<typeof LandingStage> = args => (
  <LandingStage {...args} />
);

export const LandingStage1 = Template.bind({});
LandingStage1.args = {
  first: {
    active: true,
    done: false,
    title: "Your Location",
    icon: <Icon src={DoneSvg} />,
    number: "1",
  },
  second: {
    active: false,
    done: false,
    title: "Job Location",
    icon: <Icon src={DoneSvg} />,
    number: "2",
  },
  third: {
    active: false,
    done: false,
    title: "Your Skills",
    icon: <Icon src={DoneSvg} />,
    number: "3",
  },
};

export const LandingStage2 = Template.bind({});
LandingStage2.args = {
  first: {
    active: true,
    done: true,
    title: "Your Location",
    icon: <Icon src={DoneSvg} />,
    number: "1",
  },
  second: {
    active: true,
    done: false,
    title: "Job Location",
    icon: <Icon src={DoneSvg} />,
    number: "2",
  },
  third: {
    active: false,
    done: false,
    title: "Your Skills",
    icon: <Icon src={DoneSvg} />,
    number: "3",
  },
};

export const LandingStage3 = Template.bind({});
LandingStage3.args = {
  first: {
    active: true,
    done: true,
    title: "Your Location",
    icon: <Icon src={DoneSvg} />,
    number: "1",
  },
  second: {
    active: true,
    done: true,
    title: "Job Location",
    icon: <Icon src={DoneSvg} />,
    number: "2",
  },
  third: {
    active: true,
    done: false,
    title: "Your Skills",
    icon: <Icon src={DoneSvg} />,
    number: "3",
  },
};
