import React from "react";
import Icon from "../../atoms/icon";

const CloseIcon = require("../../../assets/icons/close.svg");

type props = {
  onClick?: any;
};

const Delete = ({ onClick }: props) => {
  return <Icon src={CloseIcon} onClick={onClick}></Icon>;
};

export default Delete;
