import React, { useState, useEffect } from "react";
import GreenComute from "../../templates/greenComute";
import JobSearch from "../../organisms/jobSearch";
import RecommendedJobsGrid from "../../organisms/recommendedJobCardGrid";
import Typography from "../../atoms/typography";
import JobList from "../../organisms/jobList";
import { Box, DialogContent, Dialog } from "@mui/material";
import FilterBox from "../../organisms/filterDialog";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { getJobsUrl } from "../../../constants";

interface FilterType {
  label: string;
  deleteHandler: any;
}

const FindJobs = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [filterBoxStatus, setFilterBoxStatus] = useState(false);
  const [filters, setFilters] = useState<FilterType[]>([]);
  const [data, setData] = useState<{
    jobLocations: any;
    jobSkills: any;
    dataList: any;
    currLocation: any;
  }>({
    jobLocations: [],
    jobSkills: [],
    dataList: [],
    currLocation: "",
  });

  const landingData: any = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const tempJobLocation = landingData.state.jobLocation;
    const tempJobSkills = landingData.state.jobSkills;
    axios.get(getJobsUrl).then((res) => {
      const tempJobs = res.data;
      const locFilteredJobs = tempJobs.slice().filter((job: any) => {
        let flag;
        for (const location of tempJobLocation) {
          if (job.location.includes(location.location)) {
            flag = true;
            break;
          }
        }
        return flag;
      });
      const skillsFilteredJobs = locFilteredJobs.slice().filter((job: any) => {
        let flag;
        for (const skill of tempJobSkills) {
          flag = job.skill.includes(skill.skill);
          if (flag) {
            break;
          }
        }
        return flag;
      });
      setData({
        jobLocations: landingData.state.jobLocation,
        jobSkills: landingData.state.jobSkills,
        currLocation: landingData.state.currLocation,
        dataList: skillsFilteredJobs,
      });
    });
  }, []);

  const searchItems = (skillValue: any, locValue: any) => {
    console.log(skillValue,locValue);
    const tempJobs = data.dataList;
    const locFilteredJobs = tempJobs.slice().filter((job: any) => {
      if (locValue.length<1) {
        return true;
      }
      return job.location.includes(locValue);
    });
    const skillsFilteredJobs = locFilteredJobs.slice().filter((job: any) => {
      if (skillValue.length<1) {
        return true;
      }
      return job.skill.includes(skillValue);
    });
    setFilteredList(skillsFilteredJobs);
  };
  const filterHandler = () => {
    setFilterBoxStatus(true);
  };

  const onSavedJobClick = () => {
    navigate("/saved-jobs", {
      state: {
        currLocation: data.currLocation,
        jobLocation: data.jobLocations,
        jobSkills: data.jobSkills,
      },
    });
  };
  return (
    <GreenComute
      currentLocation={data.currLocation}
      savedJobsOnClick={onSavedJobClick}
      selected={1}
    >
      <Box marginLeft={"46px"}>
        <JobSearch
          mb="40px"
          filterClick={filterHandler}
          searchButtonClick={searchItems}
          locationOptions={data.jobLocations}
          skillsOptions={data.jobSkills}
          getLocationLabel={(option: any) => option.location}
          getSkillLabel={(option: any) => option.skill}
        />
        {selectedIndex >= 0 && (
          <JobList
            cardProps={filteredList.length > 0 ? filteredList : data.dataList}
            filterProps={filters}
            setFilters={setFilters}
            selectedIndex={selectedIndex}
          />
        )}
      </Box>

      {selectedIndex === -1 && (
        <Box marginLeft={"46px"} width={"75vw"}>
          <Typography
            variant="heading2"
            color="textColor.highEmphasis"
            mb="5px"
          >
            Recommended for you
          </Typography>
          <Typography
            variant="body2"
            color="textColor.mediumEmphasis"
            mb="12px"
          >
            Based on your profile, skills and search history.
          </Typography>
          <Box>
            <RecommendedJobsGrid
              setIndex={setSelectedIndex}
              jobsList={filteredList.length > 0 ? filteredList : data.dataList}
            />
          </Box>
        </Box>
      )}
      <Dialog
        data-testid="dialog"
        open={filterBoxStatus}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              borderRadius: "8px",
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
            borderRadius: "8px",
          }}
        >
          <FilterBox
            openStatus={filterBoxStatus}
            openStatusHandler={setFilterBoxStatus}
            setFilters={setFilters}
            data-testid="filter-box"
          />
        </DialogContent>
      </Dialog>
    </GreenComute>
  );
};

export default FindJobs;
