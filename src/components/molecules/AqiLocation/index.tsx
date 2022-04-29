import React from "react";
import { styled } from "@mui/system";
import theme from "../../../theme";
import Typography from "../../atoms/typography";
import "./index.css";

interface Props {
  location: string;
  aqiValue: string;
}

const WrapperStyle = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "32px",
  alignItems: "center",
  width: "320px",
  height: "174px",
  background: theme.palette.structural.linear1,
});

const AQIStyle = styled("div")({
  width: "174px",
  height: "174px",
});

const AQIValue = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  marginTop: "64px",
  color: theme.palette.primary.main,
});

const LocationStyle = styled("div")({
  color: theme.palette.accent.color2,
});

const AqiLocation = (props: Props) => {
  return (
    <>
      <WrapperStyle>
        <AQIStyle className="aqiLocation">
          <AQIValue>
            <Typography variant="aqiText" children={props.aqiValue} />
          </AQIValue>
        </AQIStyle>
        <LocationStyle>
          <Typography variant="heading2" children={props.location} />
        </LocationStyle>
      </WrapperStyle>
    </>
  );
};

export default AqiLocation;
