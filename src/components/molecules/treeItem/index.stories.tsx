import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TreeItem from ".";
import SettingsIcon from "../../../assets/icons/settings.svg";

export default {
  title: "Molecules/TreeItem",
  component: TreeItem,
} as ComponentMeta<typeof TreeItem>;

const Template: ComponentStory<typeof TreeItem> = args => (
  <TreeItem {...args} />
);


export const TreeItemNotSelected= Template.bind({});
TreeItemNotSelected.args = {
    selected: false,
    icon: SettingsIcon,
    text: "Settings"
};
