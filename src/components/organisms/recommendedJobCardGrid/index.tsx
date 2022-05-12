import { Box } from '@mui/material';
import React from 'react';
import RecommendedJobCard from '../../molecules/recommendedJobCard';
import { data } from './data';
import theme from '../../../theme';

interface PropsType {
    setIndex: any
}

const RecommendedJobsGrid = (props: PropsType) => {
        return (
            <Box 
            data-testid = "recommendedJobGrid"
            sx = 
            {{ display:'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: `${theme.spacing(2)}`,
            columnWidth: 320 }}>
                {data.map((value, index) => {
                    return(
                    <RecommendedJobCard
                            onClick={() => {props.setIndex(index); console.log(index);}}
                            routesTitle={value.routesTitle}
                            jobId={value.jobId}
                            logo={value.logo}
                            jobName={value.jobName}
                            companyName={value.companyName}
                            companyAddress={value.companyAddress}
                            time={value.time}
                            vehicle={value.vehicle} 
                            height={''} width={''}></RecommendedJobCard>
                );
            })
                }
            </Box>
)}

export default RecommendedJobsGrid;