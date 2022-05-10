import React from 'react';
import {Box, Grid, styled, BoxProps} from '@mui/material';
import Header from '../../organisms/header';
import Sidebar from '../../organisms/sideBar';
const StyledGrid = styled(Grid)({
    position: 'absolute',
    top: '80px',
    left: 0,
    right: 0
})

interface PropsType extends BoxProps{
    list1: any;
    list2: any;
}

const GreenComute = (props:PropsType)=>{
    return (
        <Box
        >
            <Header value={'East Marredpally, Secunderabad'} />
            <StyledGrid  
                container
                direction="row"
            >
                <Sidebar list1={props.list1} list2={props.list2}/>
                <Box>
                    {props.children}
                </Box>
            </StyledGrid >
        </Box>
    )
}

export default GreenComute;