import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconButtonComponent from "./index";
import CarIcon from "../../../assets/images/icons/carIcon.svg";
import BikeIcon from "../../../assets/images/icons/bikeIcon.svg";
import BusIcon from "../../../assets/images/icons/busIcon.svg";
import TrainIcon from "../../../assets/images/icons/trainIcon.svg";

const icons = { CarIcon, BikeIcon, BusIcon, TrainIcon };

export default {
  title: "Atoms/IconButton",
  component: IconButtonComponent,
  argTypes: {
    icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
        labels: {
          CarIcon: "car",
          BikeIcon: "bike",
          BusIcon: "bus",
          TrainIcon: "train",
        },
      },
    },
  },
} as ComponentMeta<typeof IconButtonComponent>;

const Template: ComponentStory<typeof IconButtonComponent> = args => (
  <IconButtonComponent {...args} />
);

export const CarIconStory = Template.bind({});
CarIconStory.args = {
  children:<img src={CarIcon} alt="carIcon" />,
};
