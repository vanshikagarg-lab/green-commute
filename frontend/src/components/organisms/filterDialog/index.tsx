import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  FormControl,
  Button,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  GridProps,
  styled,
} from "@mui/material";
import Typography from "../../atoms/typography";
import { options } from "./options";
import Icon from "../../atoms/icon";
import CheckBox from "../../atoms/checkbox";
import RadioButton from "../../atoms/radioButton";
import closeIcon from "../../../assets/icons/close.svg";
import "./style.css";
import theme from "../../../theme";

interface FilterType {
  label: string;
  deleteHandler?: any;
}

interface Props extends GridProps {
  openStatus: boolean;
  openStatusHandler: (arg0: boolean)=>void;
  setFilters: (filters: any) => void;
  filters?: Array<FilterType>;
}

const StyledBox = styled(Box)({
  position: "absolute",
  top: "10px",
  right: "10px",
  height: theme.spacing(3),
  width: theme.spacing(3),
  cursor: "pointer",
});

const data = [
  { label: "0-10 kms" },
  { label: "11-20 kms" },
  { label: "21-30 kms" },
  { label: "31-40 kms" },
];

const FilterDialog = ({
  openStatus,
  openStatusHandler,
  setFilters,
  filters,
  ...remProps
}: Props) => {
  const [formData, setFormData] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  useEffect(()=>{
    const distanceFilter = [
     filters?.find(
        (filter: FilterType) => filter.label === "0-10 kms"
      )
        ? true
        : false,
    filters?.find(
        (filter: FilterType) => filter.label === "11-20 kms"
      )
        ? true
        : false,

      filters?.find(
        (filter: FilterType) => filter.label === "21-30 kms"
      )
        ? true
        : false,
     filters?.find(
        (filter: FilterType) => filter.label === "31-40 kms"
      )
        ? true
        : false,
      ];

      setFormData(distanceFilter);
  },[filters])
  const filter = () => {
    return data.slice().filter((curr, currIndex) => {
      return curr !== null && formData[currIndex];
    });
  };
  const handleChange = (index: number) => {
    let newData = formData.slice();
    newData[index] = !newData[index];
    setFormData(newData);
  };

  const handleClear = () => {
    setFormData([false, false, false, false]);
    setFilters([]);
  };

  const handleSubmit = () => {
    setFilters(filter());
    setFormData([false, false, false, false]);
    openStatusHandler(false);
  };
  const checked = (parentIndex: number, index: number) => {
    return (parentIndex !== 0 && index === 0) || parentIndex === 5;
  };
  const getChoiceType = (parentIndex: number, index: number) => {
    if (parentIndex === 0) {
      return (
        <CheckBox
          data-testid="checkbox-change"
          name={options[parentIndex].name}
          value={options[parentIndex].options[index]}
          checked={formData[index]}
          onChange={() => {
            handleChange(index);
          }}
        />
      );
    } else if (parentIndex !== 2) {
      return (
        <CheckBox
          data-testid="checkbox-change"
          name={options[parentIndex].name}
          value={options[parentIndex].options[index]}
          defaultChecked={checked(parentIndex, index)}
        />
      );
    }
    return (
      <RadioButton
        name={options[2].name}
        value={options[2].options[index]}
        sx={{ marginRight: "7px" }}
        checked={checked(parentIndex, index)}
      />
    );
  };

  const getGroups = (parentIndex: number) => {
    return options[parentIndex].options.map((_data, index) => (
      <FormControlLabel
        control={getChoiceType(parentIndex, index)}
        label={
          <Typography variant="body2" color={`textColor.mediumEmphasis`}>
            {_data}
          </Typography>
        }
      />
    ));
  };

  const getGroupsType = (parentIndex: number) => {
    if (parentIndex !== 2) {
      return <FormGroup>{getGroups(parentIndex)}</FormGroup>;
    }
    return (
      <RadioGroup style={{ padding: "0px 0px 0px 10px" }}>
        {getGroups(parentIndex)}
      </RadioGroup>
    );
  };

  return (
    <Grid
      width={theme.spacing(68.25)}
      height={theme.spacing(58)}
      container
      justifyContent="center"
      sx={{
        position: "relative",
        display: `${openStatus ? "block" : "none"}`,
        padding: "25px",
        borderRadius: "8px",
      }}
      data-testid="filter-box"
      {...remProps}
    >
      <StyledBox
        onClick={() => {
          openStatusHandler(false);
        }}
      >
        <Icon src={closeIcon} />
      </StyledBox>
      <Grid width="498px" height="416px" container justifyContent="center">
        {options.map((_curr, index) => (
          <Grid item md={4} width="148px" height="160px">
            <FormControl sx={{ m: 3 }} component="fieldset">
              <Typography variant="body1">{options[index].name}</Typography>
              {getGroupsType(index)}
            </FormControl>
          </Grid>
        ))}

        <Grid container justifyContent="end" alignItems="center" pr={3}>
          <Button
            style={{
              color: `${theme.palette.primary.main300}`,
              minWidth: "0px",
              marginRight: "16px",
            }}
            variant="text"
            data-testid="handleClearButton"
            onClick={handleClear}
          >
            <Typography height="inherit" variant="caption1" width="inherit">
              Clear All
            </Typography>
          </Button>
          <Button
            onClick={handleSubmit}
            color="primary"
            variant="contained"
            sx={{ height: "32px", width: "101px" }}
            data-testid="handleSubmit"
          >
            <Typography variant="caption1">Apply</Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FilterDialog;
