import React, { useEffect, useState } from "react";
import { Box, Dialog, DialogContent } from "@mui/material";
import GreenCommute from "../../templates/greenComute";
import Typography from "../../atoms/typography";
import JobListCard from "../../molecules/jobListCard";
import JobDescriptionCard, {
  JobDescriptionCardProps,
} from "../../organisms/jobDescriptionCard";
import { WrapCardStyle, DescriptionStyle } from "../../organisms/jobList";
import UploadResume from "../../organisms/uploadResume";
import axios from "axios";
import { CardDataList } from "../../organisms/jobList/cardData";
import { useNavigate, useLocation } from "react-router-dom";
import { getJobsUrl } from "../../../constants";

const SaveJobsPage = () => {
  const [showResumeDialog, setShowResumeDialog] = useState(false);
  const [data, setData] = useState<{
    jobLocations: any;
    jobSkills: any;
    currLocation: any;
    cardList: any;
    description: any;
    select: any;
  }>({
    jobLocations: [],
    jobSkills: [],
    currLocation: "",
    cardList: [],
    description: {},
    select: {},
  });
  const landingData: any = useLocation();

  const navigate = useNavigate();

  const findJobsOnClick = () => {
    navigate("/find-jobs", {
      state: {
        currLocation: data.currLocation,
        jobLocation: data.jobLocations,
        jobSkills: data.jobSkills,
      },
    });
  };

  useEffect(() => {
    axios.get(getJobsUrl).then((res) => {
      const cardDataList = res.data;
      setData({
        cardList: cardDataList.filter((card: any) => card.saved === true),
        description: cardDataList?.find((card: any) => card.saved === true),
        select: cardDataList?.find((card: any) => card.saved === true),
        jobLocations: landingData.state.jobLocation,
        jobSkills: landingData.state.jobSkills,
        currLocation: landingData.state.currLocation,
      });
    });
  }, []);

  const handleSelect = (index: number) => {
    console.log(index);
    const selectedCard = data.cardList?.find((card: any) => card.id === index);
    setData({ ...data, description: selectedCard, select: selectedCard });
  };

  const getIndex = (card: JobDescriptionCardProps | undefined) => {
    let tempIndex: number = -1;
    data.cardList?.map((item: any, index: number) => {
      if (card?.jobId === item.jobId) {
        tempIndex = index;
      }
    });
    return tempIndex;
  };

  const saveJobsHandler = (id: string | number) => {
    const unsavedCard = data.cardList?.find((card: any) => card.id === id);
    let tempArray = data.cardList?.slice();
    tempArray?.splice(getIndex(unsavedCard), 1);
    setData({
      ...data,
      cardList: tempArray,
      description: tempArray?.find((card: any) => card.saved === true),
      select: tempArray?.find((card: any) => card.saved === true),
    });
    unsavedCard.saved = false;
    axios.put(`${getJobsUrl}/${id}`, { ...unsavedCard }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  const applyJobsHandler = () => {
    setShowResumeDialog(true);
  };

  return (
    <>
      <GreenCommute
        currentLocation={data.currLocation}
        findJobsOnClick={findJobsOnClick}
        selected={2}
      >
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
        <Box sx={{ marginLeft: "45px" }}>
          <Box sx={{ marginBottom: "20px" }}>
            <Typography variant="heading2" children="Saved Jobs" />
          </Box>
          <WrapCardStyle>
            <Box data-testid={"cardList"}>
              {data.cardList?.map((card: any, index: number) => {
                return (
                  <JobListCard
                    key={index}
                    jobId={card.id}
                    logo={card.companyLogo}
                    jobName={card.designation}
                    companyName={card.companyName}
                    companyAddress={card.location}
                    time={`${card.posted}`}
                    vehicle={card.routes}
                    height="159px"
                    width="54.7vw"
                    selected={data.select?.id === card.id ? true : false}
                    style={{ cursor: "pointer", backgroundColor: "#FFFFFF" }}
                    onClick={() => handleSelect(card.id)}
                    data-testid={`cardList-${index}`}
                  />
                );
              })}
            </Box>
            {data.description && data.description.id ? (
              <DescriptionStyle
                style={{ background: "#FFFFFF", borderRadius: "12px" }}
                data-testid={"description"}
              >
                <JobDescriptionCard
                  jobId={data.description.id}
                  logo={data.description.companyLogo}
                  jobName={data.description.designation}
                  companyName={data.description.companyName}
                  companyAddress={data.description.location}
                  postTime={data.description.posted}
                  saved={data.description.saved}
                  description={CardDataList[0].description}
                  about1={CardDataList[0].about1}
                  about2={CardDataList[0].about2}
                  startLocation={data.currLocation}
                  destination={data.description.location}
                  cost={100}
                  distance={data.description.distance}
                  time={CardDataList[0].time}
                  transitOptions={CardDataList[0].transitOptions}
                  onSaveClick={() => saveJobsHandler(data.description.id)}
                  onApplyClick={() => applyJobsHandler()}
                  data-testid={"card-1"}
                  vehicle={data.description.routes}
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
