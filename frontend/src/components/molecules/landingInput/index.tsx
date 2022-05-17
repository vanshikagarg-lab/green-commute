import { Box } from "@mui/material";
import React from "react";
import Icon from "../../atoms/icon";
import THEME from "../../../theme";
import logo from "../../../assets/icons/logo.svg";
import Typography from "../../atoms/typography";
import TextField from "../../atoms/textField";
import { NextButton, SkipButton, BackButton } from "./style";
import LandingStage from "../../molecules/landingStage";
import DoneSvg from "../../../assets/icons/done.svg";
import Autocomplete from "../autocomplete";

type Props = {
  stage: 1 | 2 | 3;
  inputFieldValue?: any;
  inputFieldOnChange?: any;
  onNextClick?: any;
  onBackClick?: any;
  locationOptions: any;
  skillsOptions: any;
  getOptionLabel?: any;
  deleteOptions?: any;
};

const LandingInput = ({
  stage,
  inputFieldValue,
  inputFieldOnChange,
  onNextClick,
  onBackClick,
  locationOptions,
  skillsOptions,
  getOptionLabel,
  deleteOptions,
}: Props) => {
  const stage1 = {
    active: stage >= 1,
    done: stage > 1,
    title: "Your Location",
    icon: <Icon src={DoneSvg} />,
    number: "1",
  };
  const stage2 = {
    active: stage >= 2,
    done: stage > 2,
    title: "Job Location",
    icon: <Icon src={DoneSvg} />,
    number: "2",
  };
  const stage3 = {
    active: stage == 3,
    done: false,
    title: "Your Skills",
    icon: <Icon src={DoneSvg} />,
    number: "3",
  };

  return (
    <Box>
      <Icon src={logo} fill={THEME.palette.primary.main500} />
      <Box mt={7}>
        <LandingStage first={stage1} second={stage2} third={stage3} />
      </Box>
      <Typography
        variant="heading1"
        color="textColor.highEmphasis"
        mt={9}
        display="block"
        width={"555px"}
      >
        More than 2000 people are using Green Commute
      </Typography>
      <Typography variant="subtitle1" color="textColor.highEmphasis" mt={8}>
        {stage == 1 && "Where do you stay"}
        {stage == 2 && "Where do you want to work?"}
        {stage == 3 && "What do you want to do?"}
      </Typography>
      <Box mt={1}>
        {stage == 1 && (
          <TextField
            value={inputFieldValue}
            onChange={inputFieldOnChange}
            variant="outlined"
            placeholder="Enter your Location"
            width={420}
            sx={{ "& .MuiOutlinedInput-root": { minHeight: "56px" } }}
          />
        )}
        {stage == 2 && (
          <Autocomplete
            options={locationOptions}
            getOptionLabel={getOptionLabel}
            value={inputFieldValue}
            onChange={inputFieldOnChange}
            placeholder={
              inputFieldValue && inputFieldValue.length > 0
                ? ""
                : "Enter your job location"
            }
            deleteOptions={deleteOptions}
          />
        )}
        {stage == 3 && (
          <Autocomplete
            options={skillsOptions}
            getOptionLabel={getOptionLabel}
            value={inputFieldValue}
            onChange={inputFieldOnChange}
            placeholder={
              inputFieldValue && inputFieldValue.length > 0
                ? ""
                : "Enter your skills"
            }
            deleteOptions={deleteOptions}
          />
        )}
      </Box>
      <Box mt={4.5}>
        {stage > 1 && (
          <BackButton variant="outlined" onClick={onBackClick}>
            <Typography variant="body1" color="primary.main400">
              Back
            </Typography>
          </BackButton>
        )}
        <NextButton variant="contained" onClick={onNextClick}>
          <Typography variant="body1" color="structural.main">
            Next
          </Typography>
        </NextButton>
      </Box>
      <Box mt={12.5}>
        <SkipButton variant="text">
          <Typography variant="subtitle1" color="primary.main400">
            Skip
          </Typography>
        </SkipButton>
      </Box>
    </Box>
  );
};

export default LandingInput;
