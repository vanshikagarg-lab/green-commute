import React from "react";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider } from "@mui/material";
import theme from "../../../theme/index";

interface IconButtonProps {
  children: React.ReactNode;
  icon: string;
  size?: "large" | "small";
  style?: React.CSSProperties;
  alt: string;
}

const IconButtonComponent = (props: IconButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <IconButton style={props.style} size={props.size}>
        <img src={props.icon} alt={props.alt} />
      </IconButton>
    </ThemeProvider>
  );
};

export default IconButtonComponent;
