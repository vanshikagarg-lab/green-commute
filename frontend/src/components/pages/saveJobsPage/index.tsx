import React, { useEffect, useState } from "react";
import { Box, Dialog, DialogContent } from "@mui/material";
import GreenCommute from "../../templates/greenComute";
import Typography from "../../atoms/typography";
import JobListCard from "../../molecules/jobListCard";
import JobDescriptionCard from "../../organisms/jobDescriptionCard";
import { WrapCardStyle, DescriptionStyle } from "../../organisms/jobList";
import UploadResume from "../../organisms/uploadResume";
import axios from "axios";
import { CardDataList } from "../../organisms/jobList/cardData";
import { useNavigate, useLocation } from "react-router-dom";
import { getJobsUrl } from "../../../constants";
import theme from "../../../theme";

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
        return routes;
      });
      card.logo = card.companyLogo
      card.jobName = card.designation
      card.postTime = card.posted
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
    setData({ ...data, description: index, select: index });
  };

  const saveJobsHandler = (index: number) => {
    const unsavedCard = data.cardList[index];
    let tempArray = data.cardList?.slice();
    tempArray?.splice(index, 1);
    unsavedCard.saved = false;
    axios.post(`${getJobsUrl}`, { ...unsavedCard }).then(() => {
      setData({
        ...data,
        cardList: tempArray,
        description: 0,
        select: 0,
      });
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
                maxWidth: theme.spacing(87.5),
                height: "100%",
                maxHeight: theme.spacing(50),
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
        <Box sx={{ marginLeft: theme.spacing(5.62) }}>
          <Box sx={{ marginBottom: theme.spacing(2.5) }}>
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
              card.logo = card.companyLogo
              card.jobName = card.designation;
              card.companyAddress = card.location.name;
              card.time = card.posted
                return (
                  <JobListCard
                    key={index}
                    {...card}
                    vehicle={routes}
                    height="159px"
                    width="calc(100vw - 845px)"
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
                  {...data.cardList[data.select]}
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
