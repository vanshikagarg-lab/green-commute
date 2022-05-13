import React from "react";
import RouteInfo from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@mui/material";

export default {
  title: "Molecules/RouteInfo",
  component: RouteInfo,
} as ComponentMeta<typeof RouteInfo>;

const Template: ComponentStory<typeof RouteInfo> = (args) => (
  <Box width={340}>
    <RouteInfo {...args} />
  </Box>
);
export const Default = Template.bind({});

Default.args = {
  startLocation: "E Marredpally, Secunderabad",
  destination: "Hitech City, Telanagana, Hyderabad.",
};
