import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import RadioButton from "./index";


export default {
  title: "Atoms/RadioButton",
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => {
  return (
      <RadioButton {...args} />
  );
};

export const Default = Template.bind({});


