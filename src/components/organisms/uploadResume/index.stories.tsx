import { Box } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import UploadResume from ".";

export default {
  title: "Organisms/UploadResume",
  component: UploadResume,
} as ComponentMeta<typeof UploadResume>;

const Template: ComponentStory<typeof UploadResume> = (args) => {
  return (
    <Box width={700}>
      <UploadResume {...args} />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  height: "400px",
  width: "700px",
};
