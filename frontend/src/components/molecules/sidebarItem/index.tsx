import React from "react";
import { styled, Box, BoxProps, Grid } from "@mui/material";
import Icon from "../../atoms/icon";
import theme from "../../../theme";
import Typography from "../../atoms/typography";
interface PropsType extends BoxProps {
  selected?: boolean;
  text: string;
  icon: string;
}

interface IconBoxPropsType extends BoxProps {
  selected?: boolean;
}


const StyledBox = styled(Box)<PropsType>(({selected}) => ({
        height: '48px',
        width: '270px',
        backgroundColor: `${selected ? theme.palette.structural.color1: theme.palette.structural.main}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    })
  );

const IconBox = styled(Box)<IconBoxPropsType>(({selected}) => ({
        height: '40px',
        width: '40px',
        backgroundColor: `${!selected ? theme.palette.greyColors.main100: 'transparent'}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        marginRight: '10px'
    })
  );

  const BorderBox = styled(Box)<IconBoxPropsType>(({selected}) => ({
        height: '48px',
        width: '4px',
        backgroundColor: `${selected ? theme.palette.primary.main500: 'transparent'}`,
        borderRadius: '8px 0px 0px 8px',
        position: 'absolute',
        right: 0,
        top: 0
    })
  );

const SidebarItem = ({ selected = false, text, icon, ...remProps }: PropsType) => {
  return (
    <StyledBox selected={selected} text={text} icon={icon} {...remProps}>
      <Grid
        container
        direction="row"
        justifyContent="start"
        alignItems="center"
        height="48px"
      >
        <IconBox selected={selected}>
          <Icon
            src={icon}
            fill={
              selected
                ? theme.palette.primary.main500
                : theme.palette.textColor.lowEmphasis
            }
          />
        </IconBox>

        <Typography
          variant="body2"
          color={selected ? "primary.main500" : "textColor.highEmphasis"}
        >
          {text}
        </Typography>
      </Grid>
      <BorderBox data-testid="border-box" selected={selected} />
    </StyledBox>
  );
};

export default SidebarItem;
