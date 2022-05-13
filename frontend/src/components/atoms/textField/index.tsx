import React from "react";
import { styled, TextField, TextFieldProps } from "@mui/material";
import theme from "../../../theme";
type PropsType = {
  height?: string | number;
  width?: string | number;
  border?: boolean;
  boxShadow?: boolean;
  placeholderColor?: string;
  textColor?: string;
} & TextFieldProps;

const StyledTextField = styled((props: PropsType) => {
  const { height, width, border, placeholderColor, boxShadow, textColor, ...other } =
    props;
  return <TextField {...other} />;
})(
  ({
    height,
    width,
    border,
    placeholderColor = theme.palette.textColor.lowEmphasis,
    boxShadow,
    textColor
  }) => ({
    height: height,
    width: width,
    "& .MuiInput-root": {
      "&:before, :after, :hover:not(.Mui-disabled):before": {
        borderBottom: border && `1px solid ${theme.palette.structural.main}`,
      },
      color: textColor || theme.palette.structural.main,
    },
    "&.MuiTextField-root": {
      "& .MuiOutlinedInput-input": {
        color: textColor || theme.palette.textColor.highEmphasis,
        fontWeight: 500,
        lineHeight: "16px",
        fontSize: "12px",
        "&::placeholder": {
          color: placeholderColor,
          opacity: 1,
        },
        "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
          border: border
            ? `1px solid ${theme.palette.greyColors.main400} !important`
            : "none",
        },
      },
      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: border ? `1px solid ${theme.palette.primary.main200}` : "none",
        boxShadow: boxShadow && "0 4px 4px -4px rgba(0, 0, 0, 0.25)",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "8px",
      border: border ? `1px solid ${theme.palette.greyColors.main400}` : "none",
    },
  })
);
const TextFieldComponent: React.FC<PropsType> = ({
  height,
  width,
  border = true,
  placeholderColor,
  boxShadow = true,
  ...remProps
}: PropsType) => {
  return (
    <StyledTextField
      height={height}
      width={width}
      border={border}
      boxShadow={boxShadow}
      placeholderColor={placeholderColor}
      {...remProps}
    />
  );
};

export default TextFieldComponent;
