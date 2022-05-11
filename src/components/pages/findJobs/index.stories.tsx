import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import FindJobs from ".";


export default {
  title: "Pages/FindJobs",
  component: FindJobs,
} as ComponentMeta<typeof FindJobs>;

const Template: ComponentStory<typeof FindJobs> = (args) => {
  return (
    <FindJobs/>
  );
};

export const Default = Template.bind({});
Default.args = {
}

