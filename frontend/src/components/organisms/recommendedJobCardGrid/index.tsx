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
        const routes = {
            bike: false,
            bus: false,
            train: false,
            car: false,
        }
        value.routes.map((route: any) => {
          if(route.routeName.includes("Bike")){
            routes.bike = true;
          }
          if(route.routeName.includes("Car")){
            routes.car = true;
          }
          if(route.routeName.includes("Train")){
            routes.train = true;
          }
          if(route.routeName.includes("Bus")){
            routes.bus = true;
          }
        })
        value.logo = value.companyLogo 
        value.jobName = value.designation
        value.companyAddress = value.location.name
        value.time = value.posted
        return (
          <RecommendedJobCard
            onClick={() => {
              props.setIndex(index);
            }}
            {...value}
            routesTitle={"Commute routes available :"}
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
