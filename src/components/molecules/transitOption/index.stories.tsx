import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import TransitOption from "./index";
import uberLogo from "../../../assets/images/uber.png";
import { Box } from "@mui/material";

export default {
  title: "Molecules/TransitOption",
  component: TransitOption,
} as ComponentMeta<typeof TransitOption>;

const Template: ComponentStory<typeof TransitOption> = (args) => {
  return (
    <Box width={340}>
      <TransitOption {...args} />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  cost: 25,
  brandName: "Ola",
  brandLogo: uberLogo,
};
