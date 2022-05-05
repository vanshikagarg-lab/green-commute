import { Box } from "@mui/system";
import React, { useState } from "react";
import IconButton from "../../atoms/iconButton";
import backIcon from "../../../assets/icons/backBlack.svg";
import Typography from "../../atoms/typography";
import Icon from "../../atoms/icon";
import bikeIcon from "../../../assets/icons/bike.svg";
import carIcon from "../../../assets/icons/car.svg";
import busIcon from "../../../assets/icons/bus.svg";
import trainIcon from "../../../assets/icons/train.svg";
import THEME from "../../../theme";
import rupeeIcon from "../../../assets/icons/rupee.svg";
import ellipse from "../../../assets/icons/ellipse.svg";
import mapView from "../../../assets/images/mapview.png";
import Image from "../../atoms/Image";
import Button from "@mui/material/Button";
import RouteInfo from "../../molecules/routeInfo";
import TransitOption from "../../molecules/transitOption";

export type RouteMapProps = {
  startLocation: string;
  destination: string;
  cost: number | string;
  distance: number | string;
  time: string;
  onBackButtonClick?: any;
  transitOptions: any;
};

const RouteMaps = ({
  startLocation,
  destination,
  cost,
  distance,
  time,
  onBackButtonClick,
  transitOptions,
}: RouteMapProps) => {
  const [option, setOption] = useState(2);

  const onBusClick = () => {
    if (option != 2) {
      setOption(2);
    }
  };

  const onCarClick = () => {
    if (option != 3) {
      setOption(3);
    }
  };

  return (
    <Box pt={3.25} pb={3}>
      <Box display="flex" alignItems="center">
        <IconButton
          style={{
            padding: "0px",
          }}
          icon={backIcon}
          alt="backButton"
          onClick={onBackButtonClick}
        />
        <Typography variant="body1" color="textColor.highEmphasis" ml={1}>
          Common Routes
        </Typography>
      </Box>
      <Box mt={1.5}>
        <RouteInfo startLocation={startLocation} destination={destination} />
      </Box>
      <Box display="flex" alignItems="center" mt={1.5}>
        <IconButton style={{ backgroundColor: "transparent" }}>
          <Icon src={bikeIcon} fill={THEME.palette.textColor.lowEmphasis} />
        </IconButton>
        <IconButton
          style={{
            marginLeft: "8px",
            backgroundColor: `${
              option == 2 ? THEME.palette.primary.main400 : "transparent"
            }`,
          }}
          onClick={onBusClick}
        >
          <Icon
            src={busIcon}
            fill={
              option == 2
                ? THEME.palette.structural.main
                : THEME.palette.textColor.lowEmphasis
            }
          />
        </IconButton>
        <IconButton
          style={{
            marginLeft: "8px",
            backgroundColor: `${
              option == 3 ? THEME.palette.primary.main400 : "transparent"
            }`,
          }}
          onClick={onCarClick}
        >
          <Icon
            src={carIcon}
            fill={
              option == 3
                ? THEME.palette.structural.main
                : THEME.palette.textColor.lowEmphasis
            }
          />
        </IconButton>
        <IconButton
          style={{ marginLeft: "8px", backgroundColor: "transparent" }}
        >
          <Icon src={trainIcon} fill={THEME.palette.textColor.lowEmphasis} />
        </IconButton>
      </Box>
      <Typography variant="body2" color="textColor.highEmphasis" mt={4}>
        Catch a blue line metro towards Raidurg{" "}
      </Typography>
      <Box display="flex" alignItems="center">
        <Icon src={rupeeIcon} fill={THEME.palette.textColor.mediumEmphasis} />
        <Typography
          variant="caption2"
          color="textColor.mediumEmphasis"
          mr={1.25}
        >
          {cost}
        </Typography>
        <Icon src={ellipse} />
        <Typography
          variant="caption2"
          color="textColor.mediumEmphasis"
          mx={1.25}
        >
          {`${distance} Kms`}
        </Typography>
        <Icon src={ellipse} />
        <Typography
          variant="caption2"
          color="textColor.mediumEmphasis"
          mx={1.25}
        >
          {time}
        </Typography>
      </Box>
      {option == 2 && (
        <Box>
          <Box mt={1}>
            <Image id="mapView" source={mapView} altText="mapView" />
          </Box>
          <Button sx={{ padding: "0px", marginTop: "12px" }}>
            <Typography variant="caption1" color="primary.main400">
              View in Google Maps
            </Typography>
          </Button>
        </Box>
      )}
      {option == 3 && (
        <Box>
          {transitOptions.map((transitOption: any, index: number) => (
            <Box mt={index > 0 ? 1 : 0}>
              <TransitOption
                brandLogo={transitOption.brandLogo}
                cost={transitOption.cost}
                brandName={transitOption.brandName}
              />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default RouteMaps;
