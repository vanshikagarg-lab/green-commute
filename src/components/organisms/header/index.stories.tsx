import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import Header from ".";

export default {
  title: "Organisms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
  return <Header {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  value: "East Marredpally, Secunderabad"
};
