import { Box,BoxProps } from "@mui/material";
import React from "react";
import THEME from "../../../theme";
import Icon from "../../atoms/icon";
import currentLocationIcon from "../../../assets/icons/current.svg";
import ellipseIcon from "../../../assets/icons/ellipse.svg";
import destinationIcon from "../../../assets/icons/destination.svg";
import swapIcon from "../../../assets/icons/swap.svg";
import Typography from "../../atoms/typography";

type Props = {
  startLocation: string;
  destination: string;
} & BoxProps;

const RouteInfo = ({ startLocation, destination, ...remProps }: Props) => {
  return (
    <Box
      data-testid="routeInfo"
      borderRadius={2}
      boxShadow={"0px 2px 8px rgba(125, 125, 125, 0.12)"}
      bgcolor={THEME.palette.structural.white}
      pl={1.5}
      py={1.75}
      pr={4}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      {...remProps}
    >
      <Box display="flex" flexDirection={"column"}>
        <Box display="flex" alignItems={"center"}>
          <Icon src={currentLocationIcon} />
          <Typography
            variant="caption2"
            color="textColor.highEmphasis"
            sx={{ marginLeft: "4px" }}
          >
            {startLocation}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          width={"fit-content"}
          ml={1.25}
          height={20}
          justifyContent="space-between"
        >
          <Icon src={ellipseIcon} />
          <Icon src={ellipseIcon} />
          <Icon src={ellipseIcon} />
        </Box>
        <Box display="flex" alignItems={"center"}>
          <Icon src={destinationIcon} />
          <Typography
            variant="caption2"
            color="textColor.highEmphasis"
            sx={{ marginLeft: "4px" }}
          >
            {destination}
          </Typography>
        </Box>
      </Box>
      <Icon src={swapIcon} />
    </Box>
  );
};

export default RouteInfo;
