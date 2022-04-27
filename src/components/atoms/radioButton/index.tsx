import React from "react";
import Radio, { RadioProps } from "@mui/material/Radio";
import radioTrueIcon from "../../../assets/icons/radioTrue.svg";
import radioFalseIcon from "../../../assets/icons/radioFalse.svg";
import Icon from "../icon";

type Props = {} & RadioProps;

const RadioButton = ({ sx, ...remProps }: Props) => {
  return (
    <Radio
      data-testid="radioButton"
      icon={<Icon src={radioFalseIcon} />}
      checkedIcon={<Icon src={radioTrueIcon} />}
      sx={{
        padding: 0,
        "&:hover": {
          backgroundColor: "transparent",
        },
        ...sx,
      }}
      {...remProps}
    />
  );
}

export default RadioButton;
