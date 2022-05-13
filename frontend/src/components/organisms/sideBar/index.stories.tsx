import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import SideBar from "./index";
import { Box } from "@mui/material";
import { list1, list2 } from "./sideBarList";

export default {
  title: "Organisms/SideBar",
  component: SideBar,
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => {
  return (
    <Box width={359}>
      <SideBar {...args} />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  list1: list1,
  list2: list2,
};
