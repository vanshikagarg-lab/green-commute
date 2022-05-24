import { Box } from "@mui/material";
import React from "react";
import RecommendedJobCard from "../../molecules/recommendedJobCard";
import theme from "../../../theme";

interface PropsType {
  setIndex?: any;
  jobsList: any;
}

const RecommendedJobsGrid = (props: PropsType) => {
  return (
    <Box
      data-testid="recommendedJobGrid"
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 320px))",
        gap: `${theme.spacing(2)}`,
        columnWidth: 320,
      }}
    >
      {props.jobsList.map((value: any, index: number) => {
        return (
          <RecommendedJobCard
            onClick={() => {
              props.setIndex(index);
            }}
            routesTitle={"Commute routes available :"}
            jobId={value.id}
            logo={value.companyLogo}
            jobName={value.designation}
            companyName={value.companyName}
            companyAddress={value.location}
            time={value.posted}
            vehicle={value.routes}
            height={""}
            width={""}
          ></RecommendedJobCard>
        );
      })}
    </Box>
  );
};

export default RecommendedJobsGrid;
