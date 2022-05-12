import React, {useState} from "react";
import GreenComute from "../../templates/greenComute";
import JobSearch from '../../organisms/jobSearch';
import RecommendedJobsGrid from "../../organisms/recommendedJobCardGrid";
import Typography from "../../atoms/typography";
import JobList from '../../organisms/jobList';
import {Box} from '@mui/material';
import { Data } from './cardData';

const FindJobs = () =>{
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [query, setQuery] = useState("");
    const [filteredList, setFilteredList] = useState({});
    
    const searchItems = (searchValue: any) => {
        setQuery(searchValue);
        if(query !== '') {
            const filteredData = Data.filter((item) => {
                return item.skill.toLowerCase().includes(query.toLowerCase());
            })
            setFilteredList(filteredData);
        }
        else {
            setFilteredList(Data);
        }
    }
    return (
        <GreenComute>
            
            
            {
                    selectedIndex  >= 0 &&
                    <Box marginLeft={"46px"}>
                        <JobSearch mb="40px"/>
                        <JobList filters={[]}/>
                    </Box>
            }
            {        selectedIndex === -1 && 
                    <Box marginLeft={"46px"} marginBottom={"204px"}>
                        <JobSearch mb="40px" searchButtonClick={(e:any) => {
                                    searchItems(e);
                                }}/>
                        <Typography variant="heading2" color="textColor.highEmphasis" mb="5px">
                            Recommended for you
                        </Typography>
                        <Typography variant="body2" color="textColor.mediumEmphasis" mb="12px">
                            Based on your profile, skills and search history.
                        </Typography>
                        <Box>
                        <RecommendedJobsGrid setIndex={setSelectedIndex} dataList={query.length > 1 ? filteredList : Data}/>
                        </Box>
                    </Box>
            }
        </GreenComute>
    )
}

export default FindJobs;