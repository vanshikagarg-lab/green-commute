import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import UploadResume from ".";

export default {
  title: "Organisms/UploadResume",
  component: UploadResume,
} as ComponentMeta<typeof UploadResume>;

const Template: ComponentStory<typeof UploadResume> = (args) => {
  return (
    <UploadResume {...args} />
  );
};

export const Default = Template.bind({});
Default.args = {
  setDisplay: () => {console.log("display")},
  height: '400px',
  width: '700px'
};