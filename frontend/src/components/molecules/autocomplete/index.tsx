import React from "react";
import { Autocomplete } from "@mui/material";
import TextField from "../../atoms/textField";
import FilterChip from "../../molecules/filterChip";
import { skill, location } from "../../../interfaces";
type PropsType = {
  options: Object[];
  getOptionLabel: any;
  value: any;
  onChange: any;
  placeholder: string;
  deleteOptions?: any;
};

const AutocompleteComponent = ({
  options,
  getOptionLabel,
  value,
  onChange,
  placeholder,
  deleteOptions,
  ...remProps
}: PropsType) => {
  return (
    <Autocomplete
      data-testid="autocomplete"
      multiple
      freeSolo
      id="tags-outlined"
      options={options}
      getOptionLabel={getOptionLabel}
      filterSelectedOptions
      value={value}
      onChange={onChange}
      disableClearable
      renderInput={(params) => (
        <TextField
          sx={{ "& .MuiOutlinedInput-root": { minHeight: "56px" } }}
          data-testid="input-field"
          boxShadow={false}
          variant="outlined"
          placeholder={placeholder}
          width={420}
          {...params}
        />
      )}
      renderTags={(values, getTagProps) =>
        values.map((option: location|skill, index: number) => (
          <FilterChip
            deleteHandler={() => deleteOptions(index)}
            variant="outlined"
            label={option.name ? option.name : option.name}
            size="small"
            backgroundColor={true}
            {...getTagProps({ index })}
          />
        ))
      }
      {...remProps}
    />
  );
};

export default AutocompleteComponent;
