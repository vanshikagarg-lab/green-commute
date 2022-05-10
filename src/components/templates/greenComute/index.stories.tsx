import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import GreenComute from ".";
import { list1, list2 } from "../../organisms/sideBar/sideBarList";


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
    list1: list1,
    list2: list2,
}