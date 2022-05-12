import React, {useEffect} from "react";
import {useState} from "react";
import {Box, Dialog, DialogContent} from "@mui/material";
import GreenCommute from "../../templates/greenComute";
import {CardDataList} from "../../organisms/jobList/cardData";
import Typography from "../../atoms/typography";
import JobListCard from "../../molecules/jobListCard";
import JobDescriptionCard, {
  JobDescriptionCardProps,
} from "../../organisms/jobDescriptionCard";
import {WrapCardStyle, DescriptionStyle} from "../../organisms/jobList";
import UploadResume from "../../organisms/uploadResume";

const SaveJobsPage = () => {
  const [cardList, setCardList] = useState<JobDescriptionCardProps[]>();
  const [select, setSelect] = useState<JobDescriptionCardProps>();
  const [description, setDescription] = useState<JobDescriptionCardProps>();
  const [showResumeDialog, setShowResumeDialog] = useState(false);

  useEffect(() => {
    setCardList(() => {
      return CardDataList.filter(card => card.saved === true);
    });
    setDescription(() => {
      return CardDataList?.find(card => card.saved === true);
    });
    setSelect(CardDataList?.find(card => card.saved === true));
    console.log(description);
  }, []);

  const handleSelect = (index: string) => {
    const selectedCard = cardList?.find(
      card => card.jobId.toString() === index
    );
    setSelect(selectedCard);
    setDescription(selectedCard);
  };

  const getIndex = (card: JobDescriptionCardProps | undefined) => {
    let tempIndex: number = -1;
    cardList?.map((item, index) => {
      if (card?.jobId === item.jobId) {
        tempIndex = index;
      }
    });
    return tempIndex;
  };

  const saveJobsHandler = (id: string) => {
    const unsavedCard = cardList?.find(card => card.jobId.toString() === id);
    let tempArray = cardList?.slice();
    tempArray?.splice(getIndex(unsavedCard), 1);
    setCardList(tempArray);
    setDescription(() => {
      return tempArray?.find(card => card.saved === true);
    });
    setSelect(() => {
      return tempArray?.find(card => card.saved === true);
    });
  };

  const applyJobsHandler = () => {
    setShowResumeDialog(true);
  };
  return (
    <>
      <GreenCommute>
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
        <Box sx={{marginLeft: "45px"}}>
          <Box sx={{marginBottom: "20px"}}>
            <Typography variant="heading2" children="Saved Jobs" />
          </Box>
          <WrapCardStyle>
            <Box data-testid={"cardList"}>
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
                    style={{cursor: "pointer", backgroundColor: "#FFFFFF"}}
                    onClick={() => handleSelect(card.jobId.toString())}
                    data-testid={`cardList-${index}`}
                  />
                );
              })}
            </Box>
            {description ? (
              <DescriptionStyle
                style={{background: "#FFFFFF", borderRadius: "12px"}}
                data-testid={"description"}
              >
                <JobDescriptionCard
                  jobId={description!.jobId}
                  logo={description!.logo}
                  jobName={description!.jobName}
                  companyName={description!.companyName}
                  companyAddress={description!.companyAddress}
                  postTime={description!.postTime}
                  saved={description!.saved}
                  description={description!.description}
                  about1={description!.about1}
                  about2={description!.about2}
                  startLocation={description!.startLocation}
                  destination={description!.destination}
                  cost={description!.cost}
                  distance={description!.distance}
                  time={description!.time}
                  transitOptions={description!.transitOptions}
                  onSaveClick={() =>
                    saveJobsHandler(description!.jobId.toString())
                  }
                  onApplyClick={() => applyJobsHandler()}
                  data-testid={"card-1"}
                  vehicle={description!.vehicle}
                />
              </DescriptionStyle>
            ) : null}
          </WrapCardStyle>
        </Box>
      </GreenCommute>
    </>
  );
};

export default SaveJobsPage;
