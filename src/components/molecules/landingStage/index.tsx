import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import CircledBox from "../../atoms/circledBox";
import Typography from "../../atoms/typography";
import theme from "../../../theme";

interface StageProps {
  active: boolean;
  done: boolean;
  title: string;
  icon: React.ReactNode;
  number: string;
}

interface Props {
  first: StageProps;
  second: StageProps;
  third: StageProps;
}

const ParentStyled = styled(Box)({
  width: "531px",
  height: "40px",
  display: "flex",
  flexDirection: "row",
  gap: "32px",
});

const WrapItems = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "12px",
  alignContent: "center",
  alignItems: "center",
});

const LandingStage = (props: Props) => {
  return (
    <>
      <ParentStyled>
        <WrapItems>
          <CircledBox
            backgroundColor={
              props.first.active || props.first.done
                ? theme.palette.primary.main300
                : theme.palette.greyColors.main100
            }
            children={props.first.done ? props.first.icon : props.first.number}
            color={
              props.first.active
                ? theme.palette.structural.main
                : theme.palette.textColor.highEmphasis
            }
          />
          <Typography
            variant="subtitle1"
            children={props.first.title}
            color={
              props.first.active
                ? theme.palette.primary.main300
                : theme.palette.textColor.highEmphasis
            }
          />
        </WrapItems>
        <WrapItems>
          <CircledBox
            backgroundColor={
              props.second.active || props.second.done
                ? theme.palette.primary.main300
                : theme.palette.greyColors.main100
            }
            children={
              props.second.done ? props.second.icon : props.second.number
            }
            color={
              props.second.active
                ? theme.palette.structural.main
                : theme.palette.textColor.highEmphasis
            }
          />
          <Typography
            variant="subtitle1"
            children={props.second.title}
            color={
              props.second.active
                ? theme.palette.primary.main300
                : theme.palette.textColor.highEmphasis
            }
          />
        </WrapItems>
        <WrapItems>
          <CircledBox
            backgroundColor={
              props.third.active || props.third.done
                ? theme.palette.primary.main300
                : theme.palette.greyColors.main100
            }
            children={props.third.done ? props.third.icon : props.third.number}
            color={
              props.third.active
                ? theme.palette.structural.main
                : theme.palette.textColor.highEmphasis
            }
          />
          <Typography
            variant="subtitle1"
            children={props.third.title}
            color={
              props.third.active
                ? theme.palette.primary.main300
                : theme.palette.textColor.highEmphasis
            }
          />
        </WrapItems>
      </ParentStyled>
    </>
  );
};

export default LandingStage;
