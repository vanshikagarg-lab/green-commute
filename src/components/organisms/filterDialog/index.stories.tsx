import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import FilterDialog from ".";
export default {
  title: "Organisms/FilterDialog",
  component: FilterDialog,
} as ComponentMeta<typeof FilterDialog>;

const Template: ComponentStory<typeof FilterDialog> = (args) => {
  return (
    <FilterDialog {...args} />
  );
};

export const Default = Template.bind({});

Default.args={
  openStatus: true
}
