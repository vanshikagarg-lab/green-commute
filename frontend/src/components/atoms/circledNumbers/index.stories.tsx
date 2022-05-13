import React from "react";
import CircledNumeber from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/CircledNumeber",
  component: CircledNumeber,
} as ComponentMeta<typeof CircledNumeber>;

const Template: ComponentStory<typeof CircledNumeber> = (args) => <CircledNumeber {...args} />;
export const Default = Template.bind({});

Default.args = {
    num:1
};