import React from "react";
import CircledBox from ".";
import theme from "../../../theme";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DoneSvg from '../../../assets/icons/done.svg';
import Icon from '../icon';
export default {
  title: "Atoms/CircledBox",
  component: CircledBox,
} as ComponentMeta<typeof CircledBox>;

const Template: ComponentStory<typeof CircledBox> = (args) => <CircledBox {...args} />;
export const Numbered = Template.bind({});
export const Done = Template.bind({});

Numbered.args = {
  backgroundColor: theme.palette.primary.main300,
  children: 1,
  color: theme.palette.structural.color2
};

Done.args = {
  backgroundColor: theme.palette.primary.main300,
  children: <Icon src={DoneSvg}/>,
  color: theme.palette.accent.main
};