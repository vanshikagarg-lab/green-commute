import React from "react";
import { Container } from "@mui/material";
import theme from "../../../theme";
import { styled } from "@mui/system";
import Typography from "../../atoms/typography";

interface Props {
  aqi: Array<React.ReactNode>;
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

const AqiFrame = styled("div")({
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});

const WrapTypography = styled("div")({
  textAlign: "center",
  color: theme.palette.textColor.highEmphasis,
  width: "363px",
  margin: "0 auto",
});

const DisplayAqi = (props: Props) => {
  return (
    <Container style={props.style}>
      <WrapperStyle>
        <AqiFrame>{props.aqi}</AqiFrame>
        <WrapTypography>
          <Typography variant="heading2" children={props.description} />
        </WrapTypography>
      </WrapperStyle>
    </Container>
  );
};

export default DisplayAqi;
