import React from "react";
import { styled, Box } from "@mui/material";
import theme from "../../../theme";

interface Props {
  inputFrame: React.ReactNode;
  aqiFrame: React.ReactNode;
}

const ParentBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  margin: "0 auto",
  alignContent: "center",
  justifyContent: "center",
  gap: "20px",
  height: "98vh",
});

const InputBox = styled(Box)({
  width: "fit",
  height: "736px",
  paddingTop: "32px",
  margin: "auto",
  display: "flex",
  justifyContent: "center",

});

const AqiBox = styled(Box)({
  width: "42%",
  display: "flex",
  alignItems: "center",
  background: theme.palette.structural.linear1,
});

const LandingStageTemplate = (props: Props) => {
  return (
    <>
      <ParentBox>
        <InputBox>{props.inputFrame}</InputBox>
        <AqiBox>{props.aqiFrame}</AqiBox>
      </ParentBox>
    </>
  );
};

export default LandingStageTemplate;
