import React from "react";
import {Typography as MuiTypography} from '@mui/material';
import { TypographyPropsType as PropsType} from "./props";

const Typography = ({...remProps }: PropsType) => {
  return (
    <MuiTypography 
        {...remProps} 
    />
  );
}

export default Typography;
