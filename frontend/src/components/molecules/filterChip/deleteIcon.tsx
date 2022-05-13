import React from "react";
import Icon from "../../atoms/icon";

import CloseIcon from "../../../assets/icons/close.svg";

type props = {
  onClick?: any;
};

export const Delete = ({ onClick }: props) => {
  return <Icon src={CloseIcon} onClick={onClick}></Icon>;
};
