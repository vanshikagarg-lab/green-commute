import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import GreenComute from ".";


export default {
  title: "Templates/GreenComute",
  component: GreenComute,
} as ComponentMeta<typeof GreenComute>;

const Template: ComponentStory<typeof GreenComute> = (args) => {
  return (
    <GreenComute {...args}/>
  );
};

export const Default = Template.bind({});
Default.args = {
}