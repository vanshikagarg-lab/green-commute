import React from "react";
import { ReactSVG } from "react-svg";
import "./index.css";

type Props = {
  src: string;
  fill?: string;
  stroke?: string;
  onClick?: any;
};


const Icon = ({ src, fill, stroke, onClick }: Props) => {
  return (
    <ReactSVG
      data-testid="icon"
      src={src}
      wrapper="div"
      className={"icon"}
      style={{
        fill:fill,
        stroke: stroke
      }}
      onClick={onClick}

    />
  );
};

export default Icon;
