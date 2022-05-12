import React from "react";
import { Box, Grid, styled, BoxProps } from "@mui/material";
import Header from "../../organisms/header";
import Sidebar from "../../organisms/sideBar";
import { EXTRA_COLORS } from "../../../theme";
const StyledGrid = styled(Grid)({
  position: "absolute",
  top: "80px",
  left: 0,
  right: 0,
  backgroundColor: EXTRA_COLORS.greenGrey,
  minHeight: "91.5vh"
});

interface PropsType extends BoxProps{
    currentLocation: string;
    sidebar1: any;
    sidebar2: any;
}

interface PropsType extends BoxProps {}

const ChildrenComponent = styled(Grid)({
  width: "auto",
});

const GreenComute = ({currentLocation, sidebar1, sidebar2, children, ...remProps}:PropsType)=>{
    return (
        <Box
        data-testid="green-template"
        {...remProps}
        >
            <Header value={'East Marredpally, Secunderabad'} />
            <StyledGrid  
                container
                direction="row"
            >
                <Sidebar list1={sidebar1} list2={sidebar2} />
                <ChildrenComponent
                    container
                    direction="column"
                    alignContent="center"
                    justifyItems="space-between"
                    pt="40px"
                >
                    {children}
                </ChildrenComponent>
            </StyledGrid >
        </Box>
    )
}

export default GreenComute;
