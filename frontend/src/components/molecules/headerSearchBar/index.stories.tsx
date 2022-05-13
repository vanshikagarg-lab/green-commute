
import React from "react";
import HeaderSearchBar from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
export default {
  title: "Molecules/HeaderSearchBar",
  component: HeaderSearchBar,
  
} as ComponentMeta<typeof HeaderSearchBar>;

const Template: ComponentStory<typeof HeaderSearchBar> = (args) => (
  <HeaderSearchBar {...args} />
);

export const Default = Template.bind({});

Default.args = {
    value: "Green Comute"
}