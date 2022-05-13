import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Typography from ".";

export default {
  title: "Atoms/Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "heading1",
        "heading2",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption1",
        "caption2"
      ],
      defaultValue: { summary: "heading1" },
      type: "string",
      description: "The variant of the text",
    },
    children: {
      description: "The text to display",
      type: "string",
      defaultValue: { summary: "Company name" },
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
    <Typography {...args}>
      hello
    </Typography>
);

export const Heading1 = Template.bind({});

Heading1.args = {
  variant: "heading1"
};