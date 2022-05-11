import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import RouteMaps from "./index";
import { Box } from "@mui/material";
import {transitOptions} from "./dataList";

export default {
  title: "Organisms/RouteMaps",
  component: RouteMaps,
} as ComponentMeta<typeof RouteMaps>;

const Template: ComponentStory<typeof RouteMaps> = (args) => {
  return (
    <Box width={359}>
      <RouteMaps {...args} />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  startLocation: "E Marredpally, Secunderabad",
  destination: "Hitech City, Telanagana, Hyderabad.",
  cost: 100,
  distance: 25,
  time: "1 hr 20 mins",
  transitOptions: transitOptions,
  vehicle:{ bike: true, car: true, bus: true, train: true }
};
