import { Box } from "@mui/material";
import React from "react";
import THEME from "../../../theme";
import Icon from "../../atoms/icon";
import rupeeIcon from "../../../assets/icons/rupee.svg";
import Button from "../../atoms/button";
import Typography from "../../atoms/typography";

type Props = {
  brandLogo: string;
  cost: string | number;
  brandName: string;
};

const TransitOption = ({ cost, brandName, brandLogo }: Props) => {
  return (
    <Box
      data-testid="transitOption"
      bgcolor={THEME.palette.structural.main}
      boxShadow={"0px 2px 8px rgba(125, 125, 125, 0.12)"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={1}
    >
      <Box display="flex" alignItems={"center"}>
        <Box src={brandLogo} component="img"></Box>
        <Box display="flex" flexDirection="column" ml={0.5}>
          <Typography variant="caption1" color="textColor.highEmphasis">
            {brandName}
          </Typography>
          <Box display="flex" alignItems={"center"} mt={0.5}>
            <Typography
              variant="caption2"
              color="textColor.mediumEmphasis"
              mr={1}
            >
              Approximately
            </Typography>
            <Icon src={rupeeIcon} fill={THEME.palette.textColor.highEmphasis} />
            <Typography
              variant="caption2"
              color="textColor.highEmphasis"
              ml={-0.5}
            >{`${cost}`}</Typography>
          </Box>
        </Box>
      </Box>
      <Button variant="text">
        <Typography variant="caption1" color="primary.main400">
          Book Now
        </Typography>
      </Button>
    </Box>
  );
};

export default TransitOption;
