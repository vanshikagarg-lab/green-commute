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
import { getJobsUrl,getSearchUrl } from "../../../constants";
import theme from "../../../theme";
import { skill, location } from "../../../interfaces";

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
  const [searchQuery, setSearchQuery] = useState<{
    location: string;
    skill: string;
  }>({ location: "", skill: "" });

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
          if (job.location.name?.includes(location.name)) {
            flag = true;
            break;
          }
        }
        return flag;
      });

      const tempSkills = tempJobSkills.map((skill: skill) => skill.name);
      const skillsFilteredJobs = locFilteredJobs
        .slice()
        .filter((job: any) => tempSkills.includes(job.skill.name));
      setData({
        jobLocations: landingData.state.jobLocation,
        jobSkills: landingData.state.jobSkills,
        currLocation: landingData.state.currLocation,
        dataList: skillsFilteredJobs,
      });
    });
  }, []);

  const searchItems = (skillValue: any, locValue: any) => {
    const searchParams = {
      location: locValue,
      skill: skillValue,
    };
    axios.post(getSearchUrl, searchParams).then((res) => {
      if (selectedIndex != -1) {
        setSelectedIndex(0);
      }
      setFilteredList(res.data);
      setSearchQuery({
        location: locValue,
        skill: skillValue,
      });
    });
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

  const setFiltersWrapper = (filters: any) => {
    const distanceFilter = {
      distance0To10: filters.find(
        (filter: FilterType) => filter.label === "0-10 kms"
      )
        ? true
        : false,
      distance11To20: filters.find(
        (filter: FilterType) => filter.label === "11-20 kms"
      )
        ? true
        : false,

      distance21To30: filters.find(
        (filter: FilterType) => filter.label === "21-30 kms"
      )
        ? true
        : false,
      distance31To40: filters.find(
        (filter: FilterType) => filter.label === "31-40 kms"
      )
        ? true
        : false,
    };
    const searchParams = {
      location: searchQuery.location,
      skill: searchQuery.skill,
      distanceFilter: distanceFilter,
    };
    axios.post(getSearchUrl, searchParams).then((res) => {
      if (selectedIndex != -1) {
        setSelectedIndex(0);
      }
      setFilters(filters);
      setFilteredList(res.data);
    });
  };

  return (
    <GreenComute
      currentLocation={data.currLocation}
      savedJobsOnClick={onSavedJobClick}
      selected={1}
    >
      <Box marginLeft={theme.spacing(5.75)}>
        <JobSearch
          mb={theme.spacing(5)}
          filterClick={filterHandler}
          searchButtonClick={searchItems}
          locationOptions={data.jobLocations}
          skillsOptions={data.jobSkills}
          getSkillLabel={(option: skill) => option.name}
          getLocationLabel={(option: location) => option.name}
        />
        {selectedIndex >= 0 && (
          <JobList
            cardProps={filteredList.length > 0 ? filteredList : data.dataList}
            filterProps={filters}
            setFilters={setFiltersWrapper}
            selectedIndex={selectedIndex}
            currentLocation={data.currLocation}
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
            setFilters={setFiltersWrapper}
            data-testid="filter-box"
            filters={filters}
          />
        </DialogContent>
      </Dialog>
    </GreenComute>
  );
};

export default FindJobs;
