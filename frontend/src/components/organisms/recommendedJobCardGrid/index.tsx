import { Box } from "@mui/material";
import React from "react";
import RecommendedJobCard from "../../molecules/recommendedJobCard";
import theme from "../../../theme";

interface PropsType {
  setIndex?: any;
  jobsList: any;
}

const RecommendedJobsGrid = (props: PropsType) => {
  console.log(props.jobsList);
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
        const routes = {
            bike: false,
            bus: false,
            train: false,
            car: false,
        }
        value.routes.map((route: any) => {
          if(route.routeName === "Bike"){
            routes.bike = true;
          }
          if(route.routeName === "Car"){
            routes.car = true;
          }
          if(route.routeName === "Train"){
            routes.train = true;
          }
          if(route.routeName === "Bus"){
            routes.bus = true;
          }
        })
        return (
          <RecommendedJobCard
            onClick={() => {
              props.setIndex(index);
              console.log(index);
            }}
            routesTitle={"Commute routes available :"}
            jobId={value.jobId}
            logo={value.companyLogo}
            jobName={value.designation}
            companyName={value.companyName}
            companyAddress={value.location.name}
            time={value.posted}
            vehicle={routes}
            height={""}
            width={""}
          ></RecommendedJobCard>
        );
      })}
    </Box>
  );
};

export default RecommendedJobsGrid;
