import React from "react";
import { styled } from "@mui/system";
import theme from "../../../theme";
import Typography from "../../atoms/typography";
import aqiSvg from "../../../assets/images/aqiLocation.svg";

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
});

const AQIStyle = styled("div")({
  width: "174px",
  height: "174px",
  backgroundImage: `url(${aqiSvg})`,
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
  width: "114px",
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
          <Typography
            variant="heading2"
            children={
              props.location?.length > 9
                ? props.location.substring(0, 9).concat("...")
                : props.location
            }
          />
        </LocationStyle>
      </WrapperStyle>
    </>
  );
};

export default AqiLocation;
