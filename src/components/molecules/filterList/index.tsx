import * as React from 'react';
import Box from '@mui/material/Box';
import CheckBox from '../../atoms/checkbox';
import './index.css';
import Typography from '../../atoms/typography';
import theme from '../../../theme';
import List from '@mui/material/List';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

interface FilterListProps {
    heading?: string,
    labels: string[]
}

const FilterList = (props: FilterListProps) => {

  return (
    <Box sx={{align: 'center'}} data-testid="filterList">
        <Typography variant='body1' color={`${theme.palette.textColor.highEmphasis}`} style={{marginLeft: '10px'}}>{props.heading}</Typography>
        <List>
            {props.labels.map((value) => {
                return (
            <ListItem disablePadding>
                <ListItemIcon style={{minWidth: '30px'}}><CheckBox></CheckBox></ListItemIcon>
                <ListItemText><Typography variant='body2' color={`${theme.palette.textColor.mediumEmphasis}`}>{value}</Typography></ListItemText>
            </ListItem>
                );    
        })} 
        </List>
         
    </Box>
  );
}

export default FilterList;