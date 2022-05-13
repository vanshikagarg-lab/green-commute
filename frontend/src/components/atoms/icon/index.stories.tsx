import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import Icon from "./index";
import saveIcon from "../../../assets/icons/save.svg";
import newsIcon from "../../../assets/icons/news.svg";
import messageIcon from "../../../assets/icons/message.svg";
import { Box } from "@mui/material";

export default {
  title: "Atoms/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => {
  return (
    <Box>
      <Icon {...args} />
    </Box>
  );
};

export const Save = Template.bind({});
export const News = Template.bind({});
export const Message = Template.bind({});

Save.args = {
  src: saveIcon,
};
News.args = {
  src: newsIcon,
};
Message.args = {
  src: messageIcon,
};
