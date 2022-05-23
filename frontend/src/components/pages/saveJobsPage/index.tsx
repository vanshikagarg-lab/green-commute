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
    description: 0,
    select: 0,
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
      const mapCardList = cardDataList.map((card:any)=> {
        const routes = {
          bike: false,
          bus: false,
          train: false,
          car: false,
      }
      card.routes.map((route: any) => {
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
        return routes;
      });
      return card;
      })
      setData({
        cardList: mapCardList.filter((card: any) => card.saved === true),
        description: 0,
        select: 0,
        jobLocations: landingData.state.jobLocation,
        jobSkills: landingData.state.jobSkills,
        currLocation: landingData.state.currLocation,
      });
    });
  }, []);

  const handleSelect = (index: number) => {
    console.log(index);
    setData({ ...data, description: index, select: index });
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

  const saveJobsHandler = (index: number) => {
    const unsavedCard = data.cardList[index];
    let tempArray = data.cardList?.slice();
    tempArray?.splice(index, 1);
    setData({
      ...data,
      cardList: tempArray,
      description: 0,
      select: 0,
    });
    unsavedCard.saved = false;
    axios.put(`${getJobsUrl}`, { ...unsavedCard }).then((res) => {
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
                const routes = {
                  bike: false,
                  bus: false,
                  train: false,
                  car: false,
              }
              card.routes.map((route: any) => {
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
                  <JobListCard
                    key={index}
                    jobId={card.jobId}
                    logo={card.companyLogo}
                    jobName={card.designation}
                    companyName={card.companyName}
                    companyAddress={card.location.name}
                    time={`${card.posted}`}
                    vehicle={routes}
                    height="159px"
                    width="calc(100vw - 845px)"
                    // selected={data.select?.id === card.id ? true : false}
                    selected={data.select == index}
                    style={{ cursor: "pointer", backgroundColor: "#FFFFFF" }}
                    onClick={() => handleSelect(index)}
                    data-testid={`cardList-${index}`}
                  />
                );
              })}
            </Box>
            {data.cardList[data.select] && data.cardList[data.select].jobId ? (
              <DescriptionStyle
                style={{ background: "#FFFFFF", borderRadius: "12px" }}
                data-testid={"description"}
              >
                <JobDescriptionCard
                  jobId={data.cardList[data.select].jobId}
                  logo={data.cardList[data.select].companyLogo}
                  jobName={data.cardList[data.select].designation}
                  companyName={data.cardList[data.select].companyName}
                  companyAddress={data.cardList[data.select].companyAddress}
                  postTime={data.cardList[data.select].posted}
                  saved={data.cardList[data.select].saved}
                  description={CardDataList[0].description}
                  about1={CardDataList[0].about1}
                  about2={CardDataList[0].about2}
                  startLocation={data.currLocation}
                  destination={data.cardList[data.select].location.name}
                  cost={100}
                  distance={data.cardList[data.select].distance}
                  time={CardDataList[0].time}
                  transitOptions={CardDataList[0].transitOptions}
                  onSaveClick={() => saveJobsHandler(data.select)}
                  onApplyClick={() => applyJobsHandler()}
                  data-testid={"card-1"}
                  vehicle={data.cardList[data.select].routes}
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
