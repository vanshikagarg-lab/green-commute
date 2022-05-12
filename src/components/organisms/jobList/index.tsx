import React, { useState, useEffect } from "react";
import { styled, Box, Dialog, DialogContent } from "@mui/material";
import Typography from "../../atoms/typography";
import theme from "../../../theme";
import { CardDataList } from "./cardData";
import JobListCard from "../../molecules/jobListCard";
import JobDescriptionCard, {
  JobDescriptionCardProps,
} from "../../organisms/jobDescriptionCard";
import UploadResume from "../../organisms/uploadResume";
import ButtonComponent from "../../atoms/button";
import FilterChip, { Props } from "../../molecules/filterChip";
import { transitOptions } from "../routeMaps/dataList";
import axios from "axios";

interface CardProps {
  id: number | string;
  designation: string;
  companyLogo: string;
  companyName: string;
  location: string;
  posted: string;
  routes: {
    bike: boolean;
    bus: boolean;
    train: boolean;
    car: boolean;
  };
  distance: number;
  skill: string;
  saved: boolean;
}

interface MainProps {
  cardProps: Array<CardProps>;
  filterProps: Array<Props>;
  setFilters: any;
  selectedIndex?: number;
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
});

const FilterChipsStyle = styled(Box)({
  width: "469px",
  height: "72px",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "8px",
});

const WrapFilterStyle = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "23px",
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
      .put(`http://18.217.145.156:3004/jobs/${description.id}`, {
        ...tempDesc,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  const applyJobsHandler = () => {
    setShowResumeDialog(true);
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const deleteFilterChip = (index: number) => {
    console.log(filters.slice(index - 1, 1));
    setFilters(
      filters.slice().filter((curr, currIndex) => {
        console.log(curr);
        return index !== currIndex;
      })
    );
  };

  const RenderFilteredList = () => {
    const filteredList = props.cardProps?.filter((curr: any) => {
      if (filters.length === 0) {
        return true;
      }
      return (
        filters?.filter((filter: any) => {
          const range = filter?.label.split(" ")[0].split("-");
          return (
            range.length == 2 &&
            parseInt(range[0]) <= curr?.distance &&
            parseInt(range[1]) >= curr?.distance
          );
        }).length > 0
      );
    });
    if (filteredList.length > 0) {
      return filteredList.map((card, index) => {
        return (
          <JobListCard
            key={index}
            jobId={card.id}
            logo={card.companyLogo}
            jobName={card.designation}
            companyName={card.companyName}
            companyAddress={card.location}
            time={`${card.posted} ago`}
            vehicle={card.routes}
            height="159px"
            width="571px"
            selected={select === index ? true : false}
            style={{ cursor: "pointer" }}
            onClick={() => handleSelect(index)}
          />
        );
      });
    } else {
      return props.cardProps.map((card, index) => {
        return (
          <JobListCard
            key={index}
            jobId={card.id}
            logo={card.companyLogo}
            jobName={card.designation}
            companyName={card.companyName}
            companyAddress={card.location}
            time={`${card.posted} ago`}
            vehicle={card.routes}
            height="159px"
            width="571px"
            selected={select === index ? true : false}
            style={{ cursor: "pointer" }}
            onClick={() => handleSelect(index)}
          />
        );
      });
    }
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
                alignSelf: "flex-start",
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
              jobId={description?.id}
              logo={description.companyLogo}
              jobName={description.designation}
              companyName={description.companyName}
              companyAddress={description.location}
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
              startLocation="E Marredpally, Secunderabad"
              destination="Hitech City, Telanagana, Hyderabad."
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
