import { ChipProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Chip, styled } from "@mui/material";
import React from "react";
import theme from "../../../theme";
import Delete from "./deleteIcon";

export type Props = {
  label?: string;
  backgroundColor?: boolean;
} & ChipProps;

const FilterChip = (props: Props) => {
  const handleDelete = () => {
    console.log("You clicked the delete icon.");
  };

  const colorForBackground = (background: boolean | undefined) => {
    if (background == true) {
      return `${theme.palette.structural.color1}`;
    } else {
      return `${theme.palette.structural.main}`;
    }
  };

  return (
    <Chip
      data-testid="filter-chip"
      label={props.label}
      onDelete={handleDelete}
      deleteIcon={<Delete></Delete>}
      style={{
        backgroundColor: colorForBackground(props.backgroundColor),
        borderRadius: "8px",
        padding: "4px 12px",
      }}
    ></Chip>
  );
};

export default FilterChip;
