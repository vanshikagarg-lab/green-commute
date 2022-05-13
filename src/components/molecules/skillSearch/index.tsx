import React from "react";
import Icon from "../../atoms/icon";
import TextFieldComponent from "../../atoms/textField";
import theme from "../../../theme";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

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
  onChange?: any;
  icon: string;
  iconFill?: string;
  iconStroke?: string;
  placeholder: string;
};

const SkillSearch = ({
  onChange,
  icon,
  iconFill,
  placeholder,
  iconStroke,
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
      <TextFieldComponent
        border={false}
        boxShadow={false}
        placeholder={placeholder}
        placeholderColor={theme.palette.textColor.mediumEmphasis}
        width={"340px"}
        onChange={onChange}
      ></TextFieldComponent>
    </Box>
  );
};

export default SkillSearch;
