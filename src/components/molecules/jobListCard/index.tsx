import React from "react";
import { styled, Grid, Box, BoxProps } from "@mui/material";
import theme from "../../../theme";
import Image from "../../atoms/Image";
import Typography from "../../atoms/typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Icon from "../../atoms/icon";
import BikeSvg from "../../..//assets/icons/bike.svg";
import BusSvg from "../../../assets/icons/bus.svg";
import CarSvg from "../../../assets/icons/car.svg";
import TrainSvg from "../../../assets/icons/train.svg";
interface VehiclePropsType {
  bike?: boolean;
  bus?: boolean;
  car?: boolean;
  train?: boolean;
}

interface JobListCardProps extends BoxProps {
  jobId: string | number;
  height: string | number;
  width: string | number;
  logo: string;
  jobName: string;
  companyName: string;
  companyAddress: string;
  vehicle?: VehiclePropsType;
  time: string;
  selected?: boolean;
  onClickMoreHorizIcon?: () => {};
}

interface ParentBoxPropsType extends BoxProps {
  height: string | number;
  width: string | number;
  selected: boolean;
}

const ParentBox = styled((props: ParentBoxPropsType) => {
  const { height, width, selected, ...others } = props;
  return <Box {...others} />;
})(({ height, width, selected }) => ({
  height: height,
  width: width,
  borderRadius: "12px",
  padding: "16px 19px 16px 19px",
  border: selected
    ? `2px solid ${theme.palette.primary.main200}`
    : "none",
  margin: "10px"
}));

const StyledGridIcon = styled(Grid)({
  padding: "2px 4px 2px 4px",
  marginRight: "10px",
});

const JobListCard = (props: JobListCardProps) => {
  const {
    jobId,
    height,
    width,
    logo,
    jobName,
    companyName,
    companyAddress,
    vehicle,
    time,
    selected = false,
    onClickMoreHorizIcon,
    ...remProps
  } = props;

  return (
    <ParentBox
      id={`job-${jobId}`}
      height={height}
      width={width}
      selected={selected}
      {...remProps}
      data-testid={`job-${jobId}`}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        position="relative"
      >
        <Box height="55px" width="55px">
          <Image id={`logo-${jobId}`} source={logo} altText="logo not found" />
        </Box>

        <Grid
          container
          direction="column"
          justifyContent="space-between"
          height="127px"
          width="462px"
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            height="70px"
            width="462px"
          >
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              height="100%"
              width="auto"
            >
              <Typography variant="heading2" color="textColor.highEmphasis">
                {jobName}
              </Typography>
              <Typography variant="caption2" color="accent.color2">
                {companyName}
              </Typography>
              <Typography variant="caption2" color="textColor.mediumEmphasis">
                {companyAddress}
              </Typography>
            </Grid>
            <MoreHorizIcon onClick={onClickMoreHorizIcon} />
          </Grid>
          <Grid
            container
            height="24px"
            justifyContent="space-between"
            width="462px"
            alignItems="center"
          >
            <Grid
              container
              alignContent="center"
              width="auto"
              flexDirection="row"
            >
                {vehicle?.bike && (
                    <StyledGridIcon item padding="">
                    <Icon
                        src={BikeSvg}
                        fill={theme.palette.textColor.lowEmphasis}
                        data-testid="vehicle-icon"
                    />
                    </StyledGridIcon>
                )}
                {vehicle?.bus && (
                    <StyledGridIcon item>
                    <Icon
                        src={BusSvg}
                        fill={theme.palette.textColor.lowEmphasis}
                        data-testid="vehicle-icon"
                    />
                    </StyledGridIcon>
                )}
                {vehicle?.car && (
                    <StyledGridIcon item>
                        <Icon
                            src={CarSvg}
                            fill={theme.palette.textColor.lowEmphasis}
                            data-testid="vehicle-icon"
                        />
                    </StyledGridIcon>
                )}
                {vehicle?.train && (
                    <StyledGridIcon item>
                    <Icon
                        src={TrainSvg}
                        fill={theme.palette.textColor.lowEmphasis}
                        data-testid="vehicle-icon"
                    />
                    </StyledGridIcon>
                )}
            </Grid>
            <Typography variant="caption1" color="textColor.mediumEmphasis">
              {time}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </ParentBox>
  );
};

export default JobListCard;
