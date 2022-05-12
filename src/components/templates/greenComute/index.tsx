import React from "react";
import { Box, Grid, styled, BoxProps } from "@mui/material";
import Header from "../../organisms/header";
import Sidebar from "../../organisms/sideBar";
import { list1, list2 } from "../../organisms/sideBar/sideBarList";
import { EXTRA_COLORS } from "../../../theme";
const StyledGrid = styled(Grid)({
  position: "absolute",
  top: "80px",
  left: 0,
  right: 0,
  backgroundColor: EXTRA_COLORS.greenGrey,
  minHeight: "91.5vh",
});

interface PropsType extends BoxProps {}

const ChildrenComponent = styled(Grid)({
  width: "auto",
});

const GreenComute = (props: PropsType) => {
  return (
    <Box data-testid="green-template">
      <Header value={"East Marredpally, Secunderabad"} />
      <StyledGrid container direction="row">
        <Sidebar list1={list1} list2={list2} />
        <ChildrenComponent
          container
          direction="column"
          alignContent="center"
          justifyItems="space-between"
          pt="40px"
        >
          {props.children}
        </ChildrenComponent>
      </StyledGrid>
    </Box>
  );
};

export default GreenComute;
