import React from 'react';
import TextField from '../../atoms/textField';
import LocationOnIcon from '../../../assets/icons/locationHeader.svg';
import {InputAdornment, TextFieldProps} from "@mui/material";
import Icon from '../../atoms/icon';

const icon = {
    startAdornment: <InputAdornment position="start" sx={{mr:2}}>
                        <Icon src={LocationOnIcon}/>
                    </InputAdornment>
}

const HeaderSearchBar = ({...remProps}: TextFieldProps) => {
    
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