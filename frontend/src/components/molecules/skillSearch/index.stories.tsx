import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SkillSearch from ".";
import workIcon from "../../../assets/icons/work.svg";
import theme from "../../../theme";
import { skills } from "../../../constants";

export default {
  title: "molecules/SkillSearch",
  component: SkillSearch,
} as ComponentMeta<typeof SkillSearch>;

const Template: ComponentStory<typeof SkillSearch> = (args) => {
  return <SkillSearch {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  icon: workIcon,
  placeholder: "Skill Search",
  iconFill: `${theme.palette.textColor.lowEmphasis}`,
  options: skills,
};
