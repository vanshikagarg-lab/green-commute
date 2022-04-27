import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ButtonComponent from "./index";

export default {
  title: "Atoms/Button",
  component: ButtonComponent,
  argTypes: {
    variant: {
      options: ["text", "contained", "outlined"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = args => (
  <ButtonComponent {...args} />
);

export const ContainedButton = Template.bind({});
ContainedButton.args = {
  text: "Next",
  variant: "contained",
  style: {
    textTransform: "none",
    width: "140px",
    height: "46px",
    borderRadius: "8px",
    background: "#30A193",
  },
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  text: "Back",
  variant: "outlined",
  style: {
    textTransform: "none",
    width: "140px",
    height: "46px",
    borderRadius: "8px",
  },
};
