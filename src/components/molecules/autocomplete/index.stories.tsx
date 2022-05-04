import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Autocomplete from ".";
import theme from "../../../theme";

export default {
  title: "Molecules/Autocomplete",
  component: Autocomplete,
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = args => (
  <Autocomplete {...args} />
);

export const Default = Template.bind({});

Default.args = {
    options: [{ title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    ],
    placeholder: "Enter your skills",
    getOptionLabel: (option:any) => option.title
};