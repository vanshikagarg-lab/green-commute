import React from 'react';
import {Grid, Box, styled, GridProps} from '@mui/material';
import Logo from '../../../assets/icons/logo.svg';
import Icon from '../../atoms/icon';
import SearchBar from '../../molecules/headerSearchBar';
import Avatar from '../../atoms/avatar';
import Message from '../../../assets/icons/message.svg';
import Notification from '../../../assets/icons/notifications.svg';
import avatarImage from "../../../assets/images/avatarImage.png";

const StyledGrid = styled(Grid)({
    backgroundColor : `#0B6D62`,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    padding: '20px',
    zIndex: 99999,
    boxSizing: 'border-box',
    width: '100vw',
    minWidth: '1386px'
});

const Header = ({...remProps} : GridProps) => {
    return (
        <StyledGrid
            height="80px"
            width="1386px"
            container
            justifyContent="space-between"
            alignItems="center"
            {...remProps}
            data-testid="header"
        >
            <Box>
                <Icon src={Logo} fill="white"/>
            </Box>
            <Box>
                <SearchBar 
                    value="Green Comute"
                />
            </Box>
            <Grid
                container
                justifyContent="space-between"
                alignItems="center"   
                width="104px"
            >
                <Icon src={Message} fill="white" stroke="white"/>
                <Icon src={Notification} fill="white"/>
                <Avatar src={avatarImage}/>
            </Grid>
        </StyledGrid>
    )
}

export default Header;