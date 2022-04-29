import React from 'react';
import TextField from '../../atoms/textField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {TextFieldProps} from "@mui/material";
const icon = {
    startAdornment: <LocationOnIcon sx={{marginRight: '10px'}}/>
}

type PropsType = {

} & TextFieldProps;

const HeaderSearchBar = ({...remProps}: PropsType) => {
    
    return (
        <TextField 
            {...remProps}
            placeholder= "Enter your location"
            height='48px'
            width='340px'
            variant="standard"
            InputProps={icon}
            border={true}
        />
    )
}

export default HeaderSearchBar;