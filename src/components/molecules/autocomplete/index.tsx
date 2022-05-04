import React from 'react';
import {Autocomplete} from '@mui/material';
import TextField from '../../atoms/textField';
import FilterChip from '../../molecules/filterChip';
type PropsType = {
    options: Object[];
    getOptionLabel: any;
    value: any;
    onChange: any;
    placeholder: string;
    setOptions?: any;
};

const AutocompleteComponent = ({
    options,
    getOptionLabel,
    value,
    onChange,
    placeholder,
    setOptions,
    ...remProps
} : PropsType) => {


  const deleteHandler = (e: any, value1: any) => {
    // setOptions(options.filter(curr) => curr.value !== value);
  }

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
                data-testid="input-field"
                boxShadow={false}
                variant="outlined"
                placeholder={placeholder}
                width={400}
                height={40}
                {...params}
              />
            )}
            renderTags={(values, getTagProps) =>
                values.map((option, index) => (
                  <FilterChip
                    deleteHandler={deleteHandler}
                    variant="outlined"
                    label={option.title}
                    size="small"
                    backgroundColor={true}
                    {...getTagProps({ index })}
                  />
                ))
              }
            {...remProps}
          />
    );
}

export default AutocompleteComponent;
