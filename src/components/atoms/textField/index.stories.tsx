
import React from "react";
import TextField from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default {
  title: "Atoms/TextField",
  component: TextField,
  
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const OutlinedTextField = Template.bind({});
OutlinedTextField.args = {
  placeholder: "Enter your location",
  height: '48px',
  width: '400px',
  variant: "outlined",
  border: true,
  boxShadow: true,
  placeholderColor: 'blue'
};

export const StandardTextField = Template.bind({});
StandardTextField.args = {
  placeholder: "Enter your location",
  height: '48px',
  width: '340px',
  variant: "standard",
  InputProps:{
    startAdornment: <LocationOnIcon sx={{marginRight: '10px'}}/>
  },
  border: true,
  value: "East Marredpally, Secunderabad",
  
};