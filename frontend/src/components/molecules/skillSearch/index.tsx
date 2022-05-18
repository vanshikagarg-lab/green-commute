import React from "react";
import Icon from "../../atoms/icon";
import TextFieldComponent from "../../atoms/textField";
import theme from "../../../theme";
import { styled } from "@mui/system";
import { Autocomplete, Box } from "@mui/material";

const styles = {
  input: {
    border: 0,
    padding: `${theme.spacing(2)} ${theme.spacing(2)}`,
    outline: 0,
  },
};

const WrapIcon = styled("span")({
  display: "flex",
  alignItems: "center",
  padding: `${theme.spacing(2, 0, 2, 4)}`,
});

type Props = {
  textFieldOnChange?: any;
  autoCompleteOnChange?: any;
  icon: string;
  iconFill?: string;
  iconStroke?: string;
  placeholder: string;
  options: readonly any[];
  getOptionLabel?: any;
};

const SkillSearch = ({
  textFieldOnChange,
  autoCompleteOnChange,
  icon,
  iconFill,
  placeholder,
  iconStroke,
  options,
  getOptionLabel,
}: Props) => {
  return (
    <Box
      data-testid="skillSearch"
      sx={{
        display: "flex",
        gridTemplateColumns: "max-content auto",
        maxWidth: "422px",
        alignItems: "center",
      }}
    >
      <WrapIcon>
        <Icon src={icon} fill={iconFill} stroke={iconStroke}></Icon>
      </WrapIcon>
      <Autocomplete
        freeSolo
        id="tags-outlined"
        options={options}
        getOptionLabel={getOptionLabel}
        onChange={autoCompleteOnChange}
        onInputChange={textFieldOnChange}
        disableClearable
        renderInput={(params) => (
          <TextFieldComponent
            border={false}
            boxShadow={false}
            placeholder={placeholder}
            placeholderColor={theme.palette.textColor.mediumEmphasis}
            width={"340px"}
            {...params}
          />
        )}
      ></Autocomplete>
    </Box>
  );
};

export default SkillSearch;
