import React from "react";
import { styled } from "@mui/material";
import Button from "../../atoms/button";
import THEME from "../../../theme";

export const NextButton = styled(Button)({
  backgroundColor: THEME.palette.primary.main400,
  borderRadius: "8px",
  padding: "12px 53px",
});

export const SkipButton = styled(Button)({
  borderBottom: `2px solid ${THEME.palette.primary.main400}`,
  padding: 0,
  minWidth: 0,
  minHeight: 0,
  borderRadius: 0,
});

export const BackButton = styled(Button)({
  borderColor: `${THEME.palette.primary.main400}`,
  marginRight: "12px",
  borderRadius: "8px",
  padding: "11px 52px",
  "&:hover": {
    borderColor: `${THEME.palette.primary.main400}`,
  },
});
