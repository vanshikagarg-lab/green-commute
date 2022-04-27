import React from "react";
import { Avatar as MUIAvatar, AvatarProps } from "@mui/material";

type Props = {
  src: string;
} & AvatarProps;

const Avatar = ({ src,sx,...remProps }: Props) => {
  return (
    <MUIAvatar
      src={src}
      sx={{ height: 36, width: 36,...sx }}
      data-testid="avatar"
      {...remProps}
    />
  );
};

export default Avatar;
