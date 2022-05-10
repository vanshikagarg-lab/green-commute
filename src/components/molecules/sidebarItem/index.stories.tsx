import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TreeItem from ".";
import SettingsIcon from "../../../assets/icons/settings.svg";
import { Box } from "@mui/material";

export default {
  title: "Molecules/SidebarItem",
  component: TreeItem,
} as ComponentMeta<typeof TreeItem>;

const Template: ComponentStory<typeof TreeItem> = (args) => (
  <Box width={270}>
    <TreeItem {...args} />
  </Box>
);

export const TreeItemNotSelected = Template.bind({});
TreeItemNotSelected.args = {
  selected: false,
  icon: SettingsIcon,
  text: "Settings",
};
