import React from "react";
import theme from "../../../theme";
import { StyledTypography } from "./style";
type PropsType = {
  num: number;
};

const CircledNumebers = ({ num }: PropsType) => {
  return (
    <StyledTypography variant="subtitle1" color={theme.palette.structural.main}>
      {num}
    </StyledTypography>
  );
};

export default CircledNumebers;
