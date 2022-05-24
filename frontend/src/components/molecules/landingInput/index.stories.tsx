import { Box } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import LandingInput from "./index";

export default {
  title: "Molecules/LandingInput",
  component: LandingInput,
} as ComponentMeta<typeof LandingInput>;

const locations = [
  {
    title: "Hyderabad",
  },
  {
    title: "Mumbai",
  },
];

const skills = [
  {
    title: "UI/UX Designer",
  },
  {
    title: "Graphic Designer",
  },
];

type props = {
  stage: 1 | 2 | 3;
};

const Org = ({ stage }: props) => {
  const [inputVal, setInputVal] = React.useState<any>([]);

  const onChange = (event: any, value: any) => {
    setInputVal(value);
  };

  const deleteOption = (index: number) => {
    let tempValue = inputVal.slice();
    tempValue.splice(index, 1);
    setInputVal(tempValue);
  };

  const getOptions = (option: any) => option.title;
  return (
    <Box width={600}>
      <LandingInput
        stage={stage}
        skillsOptions={skills}
        inputFieldValue={inputVal}
        inputFieldOnChange={onChange}
        getOptionLabel={getOptions}
        locationOptions={locations}
        deleteOptions={deleteOption}
      />
    </Box>
  );
};
const Template: ComponentStory<typeof Org> = (args) => {
  return <Org {...args} />;
};

export const stage1 = Template.bind({});
export const stage2 = Template.bind({});
export const stage3 = Template.bind({});
stage1.args = {
  stage: 1,
};
stage2.args = {
  stage: 2,
};
stage3.args = {
  stage: 3,
};
