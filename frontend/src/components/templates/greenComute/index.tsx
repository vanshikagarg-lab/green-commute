import React from "react";
import { Box, Grid, styled, BoxProps } from "@mui/material";
import Header from "../../organisms/header";
import Sidebar from "../../organisms/sideBar";
import theme from "../../../theme";
import { list1, list2 } from "../../organisms/sideBar/sideBarList";

const StyledGrid = styled(Grid)({
  position: "absolute",
  top: "80px",
  left: 0,
  right: 0,
  backgroundColor: theme.palette.greyColors.main100,
  minHeight: "91.5vh",
});

interface PropsType extends BoxProps {
  currentLocation: string;
  findJobsOnClick?: any;
  savedJobsOnClick?: any;
  selected: number;
}

interface PropsType extends BoxProps {}


const GreenComute = ({
  currentLocation,
  findJobsOnClick,
  savedJobsOnClick,
  children,
  selected,
  ...remProps
}: PropsType) => {
  return (
    <Box data-testid="green-template" {...remProps}>
      <Header value={currentLocation} />
      <StyledGrid container direction="row">
        <Sidebar
          list1={list1}
          list2={list2}
          findJobsOnClick={findJobsOnClick}
          savedJobsOnClick={savedJobsOnClick}
          selected={selected}
        />
        <Box display={"flex"} flexDirection="column" pt="40px">
          {children}
        </Box>
      </StyledGrid>
    </Box>
  );
};

export default GreenComute;
