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

interface CardProps {
  jobId: number;
  logo: string;
  jobName: string;
  companyName: string;
  companyAddress: string;
  vehicle?: {
    bike?: boolean;
    bus?: boolean;
    car?: boolean;
    train?: boolean;
  };
  postTime: string;
}

interface FilterProps {
  filters: Array<Props>;
}

const WrapCardStyle = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  flexWrap: "wrap",
});

const DescriptionStyle = styled(Box)({
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

const JobList = (props: FilterProps) => {
  const [cardList, setCardList] = useState<CardProps[]>();
  const [select, setSelect] = useState<CardProps>();
  const [description, setDescription] = useState<JobDescriptionCardProps>(
    CardDataList[0]
  );
  const [showResumeDialog, setShowResumeDialog] = useState(false);
  const [filters, setFilters] = useState<Props[]>();

  useEffect(() => {
    setCardList(CardDataList);
    setSelect(CardDataList[0]);
    setDescription(CardDataList[0]);
    setFilters(props.filters);
  }, []);

  const handleSelect = (index: number) => {
    const selectedCard = cardList?.find((card) => card.jobId === index + 1);
    setSelect(selectedCard);
    setDescription(CardDataList[index]);
  };

  const saveJobsHandler = () => {
    setDescription((prevState) => ({
      ...prevState,
      saved: prevState.saved ? false : true,
    }));
  };

  const applyJobsHandler = () => {
    setShowResumeDialog(true);
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const deleteFilterChip = (index: number) => {
    console.log(index);
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
            {cardList?.map((card, index) => {
              return (
                <JobListCard
                  key={index}
                  jobId={card.jobId}
                  logo={card.logo}
                  jobName={card.jobName}
                  companyName={card.companyName}
                  companyAddress={card.companyAddress}
                  time={`${card.postTime} ago`}
                  vehicle={card.vehicle}
                  height="159px"
                  width="571px"
                  selected={select?.jobId === card.jobId ? true : false}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSelect(index)}
                />
              );
            })}
          </CardListStyle>
          <DescriptionStyle>
            <JobDescriptionCard
              jobId={description.jobId}
              logo={description.logo}
              jobName={description.jobName}
              companyName={description.companyName}
              companyAddress={description.companyAddress}
              postTime={description.postTime}
              saved={description.saved}
              description={description.description}
              about1={description.about1}
              about2={description.about2}
              startLocation={description.startLocation}
              destination={description.destination}
              cost={description.cost}
              distance={description.distance}
              time={description.time}
              transitOptions={description.transitOptions}
              onSaveClick={() => saveJobsHandler()}
              onApplyClick={() => applyJobsHandler()}
              data-testid={"card-1"}
              vehicle={description.vehicle}
            />
          </DescriptionStyle>
        </WrapCardStyle>
      </ParentStyle>
    </>
  );
};

export default JobList;
