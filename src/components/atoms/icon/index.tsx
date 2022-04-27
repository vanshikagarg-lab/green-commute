import React from "react";
import { ReactSVG } from "react-svg";
import "./index.css";

type Props = {
  src: string;
  fill?: string;
};

const Icon = ({ src, fill }: Props) => {
  return (
    <ReactSVG
      data-testid="icon"
      src={src}
      wrapper="div"
      className={"icon"}
      fill={fill}
    />
  );
};

export default Icon;
