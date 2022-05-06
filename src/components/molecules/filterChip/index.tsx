import { ChipProps } from "@material-ui/core";
import { Chip } from "@mui/material";
import React from "react";
import theme from "../../../theme";
import { Delete } from "./deleteIcon";

export type Props = {
  label?: string;
  backgroundColor?: boolean;
  deleteHandler: any;
} & ChipProps;

const FilterChip = (props: Props) => {
  const colorForBackground = (background: boolean | undefined) => {
    if (background) {
      return `${theme.palette.structural.color1}`;
    } else {
      return `${theme.palette.structural.main}`;
    }
  };

  return (
    <Chip
      data-testid="filter-chip"
      label={props.label}
      onDelete={props.deleteHandler}
      deleteIcon={<Delete onClick={props.deleteHandler}></Delete>}
      style={{
        backgroundColor: colorForBackground(props.backgroundColor),
        borderRadius: "8px",
        padding: "4px 12px",
        margin: "3px",
        cursor: "pointer"
      }}
    ></Chip>
  );
};

export default FilterChip;
