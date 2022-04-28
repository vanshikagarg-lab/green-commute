import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material";
import theme from "../../../theme/index";

interface ButtonProps {
  children: React.ReactNode;
  variant: "contained" | "outlined" | "text";
  style?: React.CSSProperties;
  onClick?: () => void;
  className?: string;
}

const ButtonComponent = (props: ButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant={props.variant}
        style={props.style}
        onClick={props.onClick}
      >
        {props.children}
      </Button>
    </ThemeProvider>
  );
};

export default ButtonComponent;
