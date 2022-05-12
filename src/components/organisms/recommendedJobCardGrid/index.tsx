import { Box } from '@mui/material';
import React, { useState } from 'react';
import RecommendedJobCard from '../../molecules/recommendedJobCard';
import { Data } from './data';
import theme from '../../../theme';

interface PropsType {
    setIndex?: any;
    dataList?: any;
}

const RecommendedJobsGrid = ({dataList = Data, setIndex}: PropsType) => {
        return (
            <Box 
            data-testid = "recommendedJobGrid"
            sx = 
            {{ display:'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: `${theme.spacing(2)}`,
            columnWidth: 320 }}>
                {dataList.map((value:any, index:any) => {
                    return(
                    <RecommendedJobCard
                            onClick={() => {setIndex(index); console.log(index);}}
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