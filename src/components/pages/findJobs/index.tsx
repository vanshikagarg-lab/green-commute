import React, {useState} from "react";
import GreenComute from "../../templates/greenComute";
import JobSearch from '../../organisms/jobSearch';
import RecommendedJobsGrid from "../../organisms/recommendedJobCardGrid";
import Typography from "../../atoms/typography";
import JobList from '../../organisms/jobList';
import {Box} from '@mui/material';
const FindJobs = () =>{
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <GreenComute>
            
            
            {
                    selectedIndex  >= 0 &&
                    <Box>
                        <JobSearch mb="40px"/>
                        <JobList filters={[]}/>
                    </Box>
            }
            {        selectedIndex === -1 && 
                    <Box>
                        <JobSearch mb="40px"/>
                        <Typography variant="heading2" color="textColor.highEmphasis" mb="5px">
                            Recommended for you
                        </Typography>
                        <Typography variant="body2" color="textColor.mediumEmphasis" mb="12px">
                            Based on your profile, skills and search history.
                        </Typography>
                        <RecommendedJobsGrid setIndex={setSelectedIndex}/>
                    </Box>
            }
        </GreenComute>
    )
}

export default FindJobs;