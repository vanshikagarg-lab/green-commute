import { Typography, styled } from "@mui/material";
import theme from "../../../theme";
export const StyledTypography = styled(Typography)({
    height: '40px',
    width: '40px',
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});