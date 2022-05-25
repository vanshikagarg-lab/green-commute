import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { JobListCardProps } from "../jobListCard/index";
import Image from "../../atoms/Image";
import Icon from "../../atoms/icon";
import Typography from "../../atoms/typography";
import More from "../../../assets/icons/more.svg";
import BikeSvg from "../../..//assets/icons/bike.svg";
import BusSvg from "../../../assets/icons/bus.svg";
import CarSvg from "../../../assets/icons/car.svg";
import TrainSvg from "../../../assets/icons/train.svg";
import theme from "../../../theme";

interface PropsType extends JobListCardProps {
  routesTitle: string;
}

const ParentStyle = styled(Box)({
  width: theme.spacing(40),
  height: theme.spacing(33.87),
  borderRadius: "12px",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  cursor: "pointer",
  backgroundColor: theme.palette.structural.main
});

const InnerFrame = styled(Box)({
  margin: "16px 17.5px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "32px",
});

const HeaderFrame = styled(Box)({
  width: theme.spacing(35.37),
  height: theme.spacing(7.87),
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const ContentFrame = styled(Box)({
  width: "214px",
  height: "64px",
  display: "flex",
  flexDirection: "column",
  alignContent: "space-between",
  gap: "4px",
});

const FooterFrame = styled(Box)({
  width: theme.spacing(35.62),
  height: theme.spacing(6),
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const FooterInnerFrame = styled(Box)({
  width: theme.spacing(23),
  height: theme.spacing(6),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const IconsFrame = styled(Box)({
  width: theme.spacing(18),
  height: theme.spacing(3),
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  gap: "17px",
});

const RecommendedJobCard = (props: PropsType) => {
  return (
    <>
      <ParentStyle onClick={props.onClick} data-testid="recommended-box">
        <InnerFrame>
          <HeaderFrame>
            <Box height="45px" width="45px" alignSelf="center" padding="9px">
              <Image
                id={`logo-${props.jobId}`}
                source={props.logo}
                altText="logo not found"
              />
            </Box>
            <Icon src={More} fill={theme.palette.textColor.lowEmphasis} />
          </HeaderFrame>
          <ContentFrame>
            <Typography variant="subtitle1" color="textColor.highEmphasis">
              {props.jobName}
            </Typography>
            <Typography variant="caption2" color="accent.color2">
              {props.companyName}
            </Typography>
            <Typography variant="caption2" color="textColor.mediumEmphasis">
              {props.companyAddress}
            </Typography>
          </ContentFrame>
          <FooterFrame>
            <FooterInnerFrame>
              <Typography variant="caption2" color="textColor.highEmphasis">
                {props.routesTitle}
              </Typography>
              <IconsFrame>
                {props.vehicle?.bike && (
                  <Icon
                    src={BikeSvg}
                    fill={theme.palette.textColor.lowEmphasis}
                    data-testid="vehicle-icon"
                  />
                )}
                {props.vehicle?.bus && (
                  <Icon
                    src={BusSvg}
                    fill={theme.palette.textColor.lowEmphasis}
                    data-testid="vehicle-icon"
                  />
                )}
                {props.vehicle?.car && (
                  <Icon
                    src={CarSvg}
                    fill={theme.palette.textColor.lowEmphasis}
                    data-testid="vehicle-icon"
                  />
                )}
                {props.vehicle?.train && (
                  <Icon
                    src={TrainSvg}
                    fill={theme.palette.textColor.lowEmphasis}
                    data-testid="vehicle-icon"
                  />
                )}
              </IconsFrame>
            </FooterInnerFrame>
            <Typography
              variant="caption2"
              color="textColor.highEmphasis"
              sx={{ alignSelf: "flex-end", justifySelf: "flex-end" }}
            >
              {props.time}
            </Typography>
          </FooterFrame>
        </InnerFrame>
      </ParentStyle>
    </>
  );
};

export default RecommendedJobCard;
