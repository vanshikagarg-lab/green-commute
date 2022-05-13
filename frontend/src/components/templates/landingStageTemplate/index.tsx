import React from "react";
import { styled, Box } from "@mui/material";

interface Props {
  inputFrame: React.ReactNode;
  aqiFrame: React.ReactNode;
}

const ParentBox = styled(Box)({
  maxWidth: "1366px",
  maxHeight: "768px",
  display: "flex",
  flexDirection: "row",
  margin: "4vw auto",
  alignContent: "center",
  justifyContent: "center",
  gap: "20px",
});

const InputBox = styled(Box)({
  width: "790px",
  height: "736px",
  marginLeft: "100px",
  paddingTop: "32px",
});

const AqiBox = styled(Box)({
  width: "574px",
  height: "768px",
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
