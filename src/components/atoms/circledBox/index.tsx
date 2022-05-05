import React from "react";
import { TypographyProps, Typography, styled } from "@mui/material";

type PropsType = {
  backgroundColor?: string;
} & TypographyProps;

const StyledTypography = styled(Typography)({
  height: "40px",
  width: "40px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const CircledBox = ({ ...remProps }: PropsType) => {
  return <StyledTypography variant="subtitle1" {...remProps} />;
};

export default CircledBox;
