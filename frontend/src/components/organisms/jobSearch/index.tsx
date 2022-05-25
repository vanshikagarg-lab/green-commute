import { Box, BoxProps } from "@mui/system";
import React, { useState } from "react";
import Typography from "../../atoms/typography";
import THEME from "../../../theme/index";
import IconButton from "../../atoms/iconButton";
import Icon from "../../atoms/icon";
import SearchIcon from "../../../assets/icons/search.svg";
import Button from "../../atoms/button";
import filterIcon from "../../../assets/icons/searchFilter.svg";
import { Divider, styled } from "@mui/material";
import SkillSearch from "../../molecules/skillSearch";
import workIcon from "../../../assets/icons/work.svg";
import locIcon from "../../../assets/icons/location.svg";
import {location, skill} from "../../../interfaces";

type Props = {
  filterClick?: any;
  searchButtonClick?: any;
  locationOptions?: any;
  skillsOptions?: any;
  getLocationLabel?: any;
  getSkillLabel?: any;
} & BoxProps;

const FilterButton = styled(Button)({
  backgroundColor: THEME.palette.structural.main,
  borderRadius: "32px",
  boxShadow: "none",
  width: "137px",
  height: "56px",
  marginLeft: "11px",
  "&:hover": {
    backgroundColor: THEME.palette.structural.main,
    boxShadow: "none",
  },
});

const JobSearch = ({
  filterClick,
  searchButtonClick,
  locationOptions,
  skillsOptions,
  getLocationLabel,
  getSkillLabel,
  ...remProps
}: Props) => {
  const [locValue, setLocValue] = useState("");
  const [skillValue, setSkillValue] = useState("");

  const onLocTextFieldChange = (_e: any, value: string) => {
    setLocValue(value);
  };

  const onLocAutoCompleteChange = (_e: any, value: location)=>{
    setLocValue(value.name);
  }

  const onSkillTextFieldChange = (_e: any, value: string) => {
    setSkillValue(value);
  };

  const onSkillAutoCompleteChange = (
    _e: any,
    value: skill
  ) => {
    setSkillValue(value.name);
  };

  return (
    <Box data-testid="jobSearch" {...remProps}>
      <Typography variant="heading2" color="textColor.highEmphasis">
        Find Jobs
      </Typography>
      <Box display="flex" alignItems={"center"} mt={2}>
        <Box
          display="flex"
          bgcolor={THEME.palette.structural.main}
          borderRadius={8}
          minWidth="843"
          pr={0.75}
          alignItems="center"
          height={56}
          border={`1px solid ${THEME.palette.greyColors.main100}`}
        >
          <SkillSearch
            icon={workIcon}
            iconFill={
              skillValue.length > 0
                ? THEME.palette.textColor.highEmphasis
                : THEME.palette.textColor.lowEmphasis
            }
            placeholder={"Search Skills"}
            textFieldOnChange={onSkillTextFieldChange}
            autoCompleteOnChange={onSkillAutoCompleteChange}
            options={skillsOptions}
            getOptionLabel={getSkillLabel}
          />
          <Divider
            orientation="vertical"
            sx={{
              height: "32px",
              color: THEME.palette.greyColors.main,
              width: "1px",
            }}
          />
          <SkillSearch
            icon={locIcon}
            iconStroke={
              locValue.length > 0
                ? THEME.palette.textColor.highEmphasis
                : THEME.palette.textColor.lowEmphasis
            }
            placeholder={"Location"}
            textFieldOnChange={onLocTextFieldChange}
            autoCompleteOnChange={onLocAutoCompleteChange}
            options={locationOptions}
            getOptionLabel={getLocationLabel}
          />
          <IconButton
            style={{
              backgroundColor: THEME.palette.primary.main400,
              width: "44px",
              height: "44px",
            }}
            onClick={() => {
              searchButtonClick(skillValue, locValue);
            }}
          >
            <Icon src={SearchIcon} />
          </IconButton>
        </Box>
        <FilterButton
          variant="contained"
          onClick={filterClick}
          data-testid="filter-button"
        >
          <Box display="flex" alignItems="center">
            <Icon src={filterIcon} />
            <Typography variant="body2" color="textColor.highEmphasis" ml={1.5}>
              Filter
            </Typography>
          </Box>
        </FilterButton>
      </Box>
    </Box>
  );
};

export default JobSearch;
