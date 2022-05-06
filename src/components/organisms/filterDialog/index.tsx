import React, {useState} from 'react';
import {Box, Grid, FormControl,  Button, FormGroup, FormControlLabel, RadioGroup, GridProps} from '@mui/material';
import Typography from "../../atoms/typography";
import options from './options';
import Icon from "../../atoms/icon";
import CheckBox from '../../atoms/checkbox';
import RadioButton from '../../atoms/radioButton';
import closeIcon from "../../../assets/icons/close.svg";
import './style.css';
interface Props extends GridProps{
    openStatus: boolean;
}

const FilterDialog = ({openStatus,...remProps}:Props) => {
    const [open, setOpen] = useState(openStatus);
    const [formData, setFormData] = useState<boolean[]>([false, false, false, false])
    const handleChange = (index : number) =>{
       let newData = formData.slice();
       newData[index] = !newData[index];
       setFormData(newData);
    }

    const handleClear= () => {
        setFormData([false, false, false, false]);
    }

    const handleSubmit= () => {
        console.log(formData);
        setFormData([false, false, false, false]);
    }
    return(
        <Grid
            width="546px"
            height="464px"
            container
            justifyContent="center"
            sx={{
                position: 'relative',
                display: `${open ? 'block' : 'none'}`  ,
                padding: '25px'  
            }}
            data-testid="filter-box"
        >
        <Box style={{position: 'absolute', top : '10px', right: '10px', height: '24px', width: '24px', cursor: 'pointer'}} onClick={() => {setOpen(false)}}>
            <Icon src={closeIcon} />
          </Box>
        <Grid
            width="498px"
            height="416px"
            container
            justifyContent="center"
        >
                <Grid item md={4}
                    width="148px"
                    height="160px"
                >
                    <FormControl sx={{ m: 3 }} component="fieldset">
                        <Typography variant="body1">{options[0].name}</Typography>
                        <FormGroup>
                            {
                                options[0].options.map((_data, i) => (
                                    <FormControlLabel
                                        control={
                                        <CheckBox 
                                            data-testid="checkbox-change"
                                            name={options[0].name} value={_data} checked={formData[i]}
                                            onChange={() => { handleChange(i)}}
                                        />}
                                        label={<Typography variant='body2' color={`textColor.mediumEmphasis`}>{_data}</Typography>}
                                    />
                                ))
                            }
                        </FormGroup>
                    </FormControl>
                </Grid>
                <Grid item md={4}
                    width="148px"
                    height="160px"
                >
                    <FormControl sx={{ m: 3 }} component="fieldset">
                        <Typography variant="body1">{options[1].name}</Typography>
                        <FormGroup>
                            {
                                options[1].options.map((_data) => (
                                    <FormControlLabel
                                        control={
                                        <CheckBox 
                                            name={options[1].name} value={_data}
                                        />}
                                        label={<Typography variant='body2' color={`textColor.mediumEmphasis`}>{_data}</Typography>}
                                    />
                                ))
                            }
                        </FormGroup>
                    </FormControl>
                </Grid>
                <Grid item md={4}
                    width="148px"
                    height="160px"
                >
                    <FormControl sx={{ m: 3 }} component="fieldset">
                        <Typography variant="body1">{options[2].name}</Typography>
                        <RadioGroup style={{padding: '0px 0px 0px 10px'}}>
                            {
                                options[2].options.map((_data) => (
                                        <FormControlLabel
                                        control={
                                        <RadioButton
                                            name={options[2].name} value={_data}
                                            sx={{marginRight: '7px'}}
                                        />}
                                        label={<Typography variant='body2' color={`textColor.mediumEmphasis`}>{_data}</Typography>}
                                    />
                                    
                                ))
                            }
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item md={4}
                    width="148px"
                    height="160px"
                >
                    <FormControl sx={{ m: 3 }} component="fieldset">
                        <Typography variant="body1">{options[3].name}</Typography>
                        <FormGroup>
                            {
                                options[3].options.map((_data) => (
                                    <FormControlLabel
                                        control={
                                        <CheckBox 
                                            name={options[3].name} value={_data}
                                        />}
                                        label={<Typography variant='body2' color={`textColor.mediumEmphasis`}>{_data}</Typography>}
                                    />
                                ))
                            }
                        </FormGroup>
                    </FormControl>
                </Grid>
                <Grid item md={4}
                    width="148px"
                    height="160px"
                >
                    <FormControl sx={{ m: 3 }} component="fieldset">
                        <Typography variant="body1">{options[4].name}</Typography>
                        <FormGroup>
                            {
                                options[4].options.map((_data) => (
                                    <FormControlLabel
                                        control={
                                        <CheckBox 
                                            name={options[4].name} value={_data}
                                        />}
                                        label={<Typography variant='body2' color={`textColor.mediumEmphasis`}>{_data}</Typography>}
                                    />
                                ))
                            }
                        </FormGroup>
                    </FormControl>
                </Grid>
                <Grid item md={4}
                    width="148px"
                    height="160px"
                >
                    <FormControl sx={{ m: 3 }} component="fieldset">
                        <Typography variant="body1">{options[5].name}</Typography>
                        <FormGroup>
                            {
                                options[5].options.map((_data) => (
                                    <FormControlLabel
                                        control={
                                        <CheckBox 
                                            name={options[5].name} value={_data}
                                        />}
                                        label={<Typography variant='body2' color={`textColor.mediumEmphasis`}>{_data}</Typography>}
                                    />
                                ))
                            }
                        </FormGroup>
                    </FormControl>
                </Grid>
            
            <Grid
                container
                justifyContent="end" 
                alignItems="center"
                pr={3}
            >
             <Button
                style={{
                color: "#4ABAAD",
                minWidth: "0px",
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
                onClick={handleSubmit} color="primary" variant="contained"
                sx={{height: '32px', width: '101px'}}
                data-testid="handleSubmit"
            >
                <Typography variant="caption1">Apply</Typography>
            </Button>
            </Grid>
        </Grid>
        </Grid>
        
    )
}

export default FilterDialog;