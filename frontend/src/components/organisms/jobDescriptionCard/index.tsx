import { Box, BoxProps } from "@mui/material";
import React, { useState,useEffect } from "react";
import Image from "../../atoms/Image";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Typography from "../../atoms/typography";
import Button from "../../atoms/button";
import THEME from "../../../theme/index";
import Icon from "../../atoms/icon";
import rightArrow from "../../../assets/icons/arrowRight.svg";
import RouteMaps from "../routeMaps";
import { RouteMapProps } from "../routeMaps/index";

export interface JobDescriptionCardProps extends BoxProps, RouteMapProps {
  jobId: string | number;
  logo: string;
  jobName: string;
  companyName: string;
  companyAddress: string;
  postTime: string;
  onClickMoreHorizIcon?: () => {};
  width?: string | number;
  height?: string | number;
  saved: boolean;
  description?: string;
  about1?: string;
  about2?: string;
  onSaveClick?: any;
  onApplyClick?: any;
  vehicle: any;
}

const JobDescriptionCard = ({
  jobName,
  companyName,
  companyAddress,
  postTime,
  logo,
  width,
  height = "fit-content",
  saved,
  description,
  about1,
  about2,
  onSaveClick,
  onApplyClick,
  startLocation,
  destination,
  cost,
  distance,
  time,
  transitOptions,
  vehicle,
}: JobDescriptionCardProps) => {
  const [displayRoutes, setDisplayRoutes] = useState<boolean>(false);
  const [routes,setRoutes] = useState<{
    bike: boolean,
    bus: boolean,
    train: boolean,
    car: boolean,
  }>({
    bike: false,
    bus: false,
    train: false,
    car: false,
  })

  useEffect(()=>{
    const tempRoutes = {
      bike: false,
      bus: false,
      train: false,
      car: false,
    }
    vehicle.map((route: any) => {
      if(route.routeName.includes("Bike")){
        tempRoutes.bike = true;
      }
      if(route.routeName.includes("Car")){
        tempRoutes.car = true;
      }
      if(route.routeName.includes("Train")){
        tempRoutes.train = true;
      }
      if(route.routeName.includes("Bus")){
        tempRoutes.bus = true;
      }
    })

    setRoutes(tempRoutes);

  },[vehicle]);

  return (
    <Box
      height={height}
      width={width}
      borderRadius={3}
      boxSizing={"border-box"}
      data-testid="JobDescriptionCard"
      bgcolor={THEME.palette.structural.main}
    >
      <Box px={2.75}>
        <Box
          display={"flex"}
          py={3}
          borderBottom={1}
          borderColor={THEME.palette.greyColors.main}
          justifyContent={"space-between"}
        >
          <Box display="flex">
            <Box>
              <Box
                width={55}
                height={55}
                display="flex"
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Image source={logo} id="brandLogo" altText="brandLogo" />
              </Box>
            </Box>
            <Box display={"flex"} flexDirection={"column"} ml={2}>
              <Typography variant="subtitle1" color="textColor.highEmphasis">
                {jobName}
              </Typography>
              <Typography
                variant="caption2"
                color="textColor.mediumEmphasis"
                mt={0.5}
              >
                {companyName}
              </Typography>
              <Typography
                variant="caption2"
                color="textColor.mediumEmphasis"
                mt={0.5}
              >
                {companyAddress}
              </Typography>
              <Typography
                variant="caption1"
                color="textColor.mediumEmphasis"
                mt={0.5}
              >
                {postTime}
              </Typography>
              <Box display="flex" alignItems="center" mt={3}>
                <Button
                  variant="outlined"
                  style={{
                    borderColor: THEME.palette.primary.main300,
                    borderRadius: "8px",
                    padding: "8px 31px",
                  }}
                  onClick={onSaveClick}
                >
                  <Typography
                    variant="caption1"
                    color={THEME.palette.primary.main300}
                  >
                    {saved ? "Unsave" : "Save"}
                  </Typography>
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: THEME.palette.primary.main400,
                    boxShadow: "none",
                    marginLeft: "8px",
                    borderRadius: "8px",
                    padding: "8px 31px",
                  }}
                  onClick={onApplyClick}
                >
                  <Typography
                    variant="caption1"
                    color={THEME.palette.structural.main}
                  >
                    Apply
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
          <MoreHorizIcon />
        </Box>
        {!displayRoutes && (
          <Box pt={3} pb={4} px={0.5} data-testid="decription">
            <Typography
              variant="body1"
              color={THEME.palette.textColor.highEmphasis}
            >
              Description
            </Typography>
            <Typography
              variant="body2"
              color={THEME.palette.textColor.mediumEmphasis}
              mt={1}
            >
              {description}
            </Typography>
            <Typography
              variant="body1"
              color={THEME.palette.textColor.highEmphasis}
              mt={3}
            >
              About the Company
            </Typography>
            <Typography
              variant="body2"
              color={THEME.palette.textColor.mediumEmphasis}
              mt={1}
            >
              {about1}
            </Typography>
            <Box mt={1.5}>
              <Typography
                variant="body2"
                color={THEME.palette.textColor.mediumEmphasis}
                display={"inline"}
              >
                {about2}
              </Typography>
              <Typography
                variant="body1"
                color={THEME.palette.primary.main400}
                display="inline"
                ml={1}
              >
                SEE MORE
              </Typography>
            </Box>
          </Box>
        )}
        {displayRoutes && (
          <Box>
            <RouteMaps
              startLocation={startLocation}
              destination={destination}
              cost={cost}
              distance={distance}
              time={time}
              transitOptions={transitOptions}
              onBackButtonClick={() => {
                setDisplayRoutes(false);
              }}
              vehicle={routes}
            />
          </Box>
        )}
      </Box>
      {!displayRoutes && (
        <Box sx={{ boxShadow: "0px -2px 8px rgba(125, 125, 125, 0.12)" }}>
          <Button
            variant="text"
            style={{
              width: "100%",
              borderRadius: "0",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
            onClick={() => {
              setDisplayRoutes(true);
            }}
          >
            <Box display="flex" alignItems={"center"}>
              <Typography
                mr={2}
                variant="subtitle1"
                color={THEME.palette.primary.main400}
              >
                Green Commute Routes
              </Typography>
              <Icon src={rightArrow} />
            </Box>
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default JobDescriptionCard;
