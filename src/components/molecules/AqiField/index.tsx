import React from "react";
import { Container } from "@mui/material";
import theme from "../../../theme";
import { styled } from "@mui/system";
import Typography from "../../atoms/typography";
import aqiSvg from "../../../assets/images/aqi.svg";

interface Props {
  aqiValue: string;
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

const AQIStyle = styled("div")({
  margin: "0 auto",
  width: "212px",
  height: "214px",
  backgroundImage: `url(${aqiSvg})`,
});

const AQIValue = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignContent: "center",
  position: "relative",
  top: "83px",
  color: theme.palette.primary.main,
});

const WrapTypography = styled("div")({
  textAlign: "center",
  color: theme.palette.textColor.highEmphasis,
  width: "363px",
  margin: "0 auto",
});

const AqiField = (props: Props) => {
  return (
    <Container style={props.style}>
      <WrapperStyle>
        <AQIStyle className="aqi">
          <AQIValue>
            <Typography variant="aqiText" children={props.aqiValue} />
          </AQIValue>
        </AQIStyle>
        <WrapTypography>
          <Typography variant="heading2" children={props.description} />
        </WrapTypography>
      </WrapperStyle>
    </Container>
  );
};

export default AqiField;
