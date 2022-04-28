import React from "react";
import { ThemeProvider, Container } from "@mui/material";
import { styled } from "@mui/system";
import Typography from "../../atoms/typography/index";
import theme from "../../../theme";

interface Props {
  children: React.ReactNode;
  description: string;
  style?: React.CSSProperties;
}

const WrapperStyle = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  gap: "40px",
});

const WrapImage = styled("div")({
  alignSelf: "center",
});

const WrapTypography = styled("div")({
  textAlign: "center",
  color: theme.palette.textColor.highEmphasis,
  width: "363px",
  margin: "0 auto",
});

const ImageTypography = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Container style={props.style}>
        <WrapperStyle>
          <WrapImage>{props.children}</WrapImage>
          <WrapTypography>
            <Typography variant="heading2" children={props.description} />
          </WrapTypography>
        </WrapperStyle>
      </Container>
    </ThemeProvider>
  );
};

export default ImageTypography;
