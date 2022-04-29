import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CheckBox from ".";


export default {
    title: "Atoms/CheckBox",
    component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => {
    return (
        <CheckBox {...args} />
    );
};

export const Default = Template.bind({});