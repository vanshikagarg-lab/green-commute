import React, { useState } from "react";
import { styled, Box, Dialog, DialogContent } from "@mui/material";
import Typography from "../../atoms/typography";
import theme from "../../../theme";
import JobListCard from "../../molecules/jobListCard";
import JobDescriptionCard from "../../organisms/jobDescriptionCard";
import UploadResume from "../../organisms/uploadResume";
import ButtonComponent from "../../atoms/button";
import FilterChip, { Props } from "../../molecules/filterChip";
import { transitOptions } from "../routeMaps/dataList";
import axios from "axios";
import { getJobsUrl } from "../../../constants";

interface CardProps {
  jobId: number | string;
  designation: string;
  companyLogo: string;
  companyName: string;
  companyAddress: string;
  posted: string;
  location?: any;
  routes: any;
  distance: number;
  skill: any;
  saved: boolean;
}

interface MainProps {
  cardProps: Array<CardProps>;
  filterProps: Array<Props>;
  setFilters: any;
  selectedIndex?: number;
  currentLocation: string;
}

export const WrapCardStyle = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  flexWrap: "wrap",
});

export const DescriptionStyle = styled(Box)({
  width: "404px",
  height: "734px",
});

const ParentStyle = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "21px",
});

const TextStyle = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

const CardListStyle = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  width: "calc(100vw - 845px)",
});

const FilterChipsStyle = styled(Box)({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "8px",
});

const WrapFilterStyle = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "calc(100vw - 860px)",
});

const JobList = (props: MainProps) => {
  const [select, setSelect] = useState<number>(
    props.selectedIndex ? props.selectedIndex : 0
  );
  const [description, setDescription] = useState<CardProps>(
    props.cardProps[props.selectedIndex ? props.selectedIndex : 0]
  );
  const [showResumeDialog, setShowResumeDialog] = useState(false);
  const filters = props.filterProps || [];
  const setFilters = props.setFilters;

  const handleSelect = (index: number) => {
    setSelect(index);
    setDescription(props.cardProps[index]);
  };

  const saveJobsHandler = () => {
    setDescription((prevState) => ({
      ...prevState,
      saved: prevState.saved ? false : true,
    }));
    const tempDesc = description;
    tempDesc.saved = description.saved ? false : true;
    axios
      .put(`${getJobsUrl}`, {
        ...tempDesc,
      })
      .then((res) => {
      });
  };

  const applyJobsHandler = () => {
    setShowResumeDialog(true);
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const deleteFilterChip = (index: number) => {
    setFilters(
      filters.slice().filter((curr, currIndex) => {
        return index !== currIndex;
      })
    );
  };

  const renderJobCard = (card: any, index: number) => {
    const routes = {
      bike: false,
      bus: false,
      train: false,
      car: false,
    }

    card.routes.map((route: any) => {
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
    
    return (
      <JobListCard
        key={index}
        {...card}
        logo={card.companyLogo}
        jobName={card.designation}
        companyAddress={card.location.name}
        time={`${card.posted}`}
        vehicle={routes}
        height="159px"
        width="auto"
        selected={select === index ? true : false}
        style={{ cursor: "pointer" }}
        onClick={() => handleSelect(index)}
      />
    );
  };

  const RenderFilteredList = () => {
    return props.cardProps.map((card, index) => {
     return renderJobCard(card, index);
    });
  };


  return (
    <>
      <Dialog
        data-testid="dialog"
        open={showResumeDialog}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "700px",
              height: "100%",
              maxHeight: "400px",
            },
          },
        }}
      >
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            padding: 0,
          }}
        >
          <UploadResume setDisplay={() => setShowResumeDialog(false)} />
        </DialogContent>
      </Dialog>
      <ParentStyle>
        <TextStyle>
          <Typography
            variant="heading2"
            children="Job list"
            color={theme.palette.textColor.highEmphasis}
          />
          <Typography
            variant="body2"
            children="Based on your search"
            color={theme.palette.textColor.mediumEmphasis}
          />
        </TextStyle>
        {filters?.length === 0 ? null : (
          <WrapFilterStyle>
            <FilterChipsStyle>
              {filters?.map((filter, index) => {
                return (
                  <FilterChip
                    label={filter.label}
                    deleteHandler={() => deleteFilterChip(index)}
                  />
                );
              })}
            </FilterChipsStyle>
            <ButtonComponent
              children="Clear All"
              variant="text"
              style={{
                color: theme.palette.primary.main300,
                height: "22px",
                padding: "6px 0px",
                textTransform: "none",
                borderRadius: "0px",
                borderBottom: `2px solid ${theme.palette.primary.main300}`,
              }}
              onClick={() => clearFilters()}
            />
          </WrapFilterStyle>
        )}
        <WrapCardStyle>
          <CardListStyle data-testId="cardId">
            {RenderFilteredList()}
          </CardListStyle>
          <DescriptionStyle>
            <JobDescriptionCard
              {...description}
              logo={description.companyLogo}
              jobName={description.designation}
              postTime={description.posted}
              saved={description.saved}
              description="Open Text is seeking a talented, personable interaction designer who
              can assist the User Experience Design team by working with other
              designers and development teams on a variety of projects. The
              OpenText User Experience Design group is a distributed
              multi-disciplinary team of professionals that are responsible for
              enhancing the UX of the company’s collective product suites
              worldwide."
              about1="High level of proficiency with leading UX Design software packages,
              such as Axure, Sketch, InVision, or Experience Design including the
              core Adobe Creative Suite products."
              about2="Excellent written and oral communication and presentation skills"
              startLocation={props.currentLocation}
              destination={description.location.name}
              cost={100}
              distance={25}
              time="1 hr 20 mins"
              transitOptions={transitOptions}
              onSaveClick={() => saveJobsHandler()}
              onApplyClick={() => applyJobsHandler()}
              data-testid={"card-1"}
              vehicle={description.routes}
            />
          </DescriptionStyle>
        </WrapCardStyle>
      </ParentStyle>
    </>
  );
};

export default JobList;
