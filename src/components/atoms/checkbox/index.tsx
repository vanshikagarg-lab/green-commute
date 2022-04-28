import React from "react";
import { Checkbox, CheckboxProps } from "@mui/material";
import Icon from "../icon";
import checkboxChecked from "../../../assets/icons/checkboxChecked.svg";
import checkboxUnchecked from "../../../assets/icons/checkboxUnchecked.svg";


type Props = {} & CheckboxProps;

const CheckBox = ({ ...remProps}) => {
    return (
        <Checkbox 
        icon={<Icon src={checkboxUnchecked} /> }
        checkedIcon={<Icon src={checkboxChecked} /> }
        sx={{
            "&:hover": {
                backgroundColor: "transparent"
            }
        }}
        data-testid="checkbox"
        {...remProps}
        
        />
    );
}

export default CheckBox;