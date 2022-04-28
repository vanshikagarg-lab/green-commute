import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Image from ".";
import logoImage from "../../../assets/images/myntraLogo.png";


export default {
    title: "atoms/Image",
    component: Image
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />
export const Default = Template.bind({})

Default.args = {
    id:"logo",
    source:logoImage,
    altText:"logo"
};


