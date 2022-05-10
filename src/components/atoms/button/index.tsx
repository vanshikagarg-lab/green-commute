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
        sx={{
          textTransfrom: "none",
          "&:hover":{
            backgroundColor: `${props.variant === "contained" && theme.palette.primary.main300}`
          }
        }}
        className={props.className}
      >
        {props.children}
      </Button>
    </ThemeProvider>
  );
};

export default ButtonComponent;
