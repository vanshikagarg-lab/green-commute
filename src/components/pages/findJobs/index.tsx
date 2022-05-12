import React, { useState } from "react";
import GreenComute from "../../templates/greenComute";
import JobSearch from "../../organisms/jobSearch";
import RecommendedJobsGrid from "../../organisms/recommendedJobCardGrid";
import Typography from "../../atoms/typography";
import JobList from "../../organisms/jobList";
import { Box, DialogContent, Dialog } from "@mui/material";
import FilterBox from "../../organisms/filterDialog";
import { list1, list2 } from "../../organisms/sideBar/sideBarList";
import { Data } from "./cardData";

interface FilterType {
  label: string;
  deleteHandler: any;
}

const FindJobs = () => {
  const [query, setQuery] = useState("");
  const [filteredList, setFilteredList] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [filterBoxStatus, setFilterBoxStatus] = useState(false);
  const [filters, setFilters] = useState<FilterType[]>([]);
  const searchItems = (searchValue: any) => {
    setQuery(searchValue);
    if (query !== "") {
      const filteredData = Data.filter((item) => {
        return item.skill.toLowerCase().includes(query.toLowerCase());
      });
      setFilteredList(filteredData);
    } else {
      setFilteredList(Data);
    }
  };
  const filterHandler = () => {
    setFilterBoxStatus(true);
  };
  return (
    <GreenComute
      currentLocation={"East Marredpally, Secunderabad"}
      sidebar1={list1}
      sidebar2={list2}
    >
      {selectedIndex >= 0 && (
        <Box marginLeft={"46px"}>
          <JobSearch mb="40px" filterClick={filterHandler} />
          <JobList filters={filters} setFilters={setFilters} />
        </Box>
      )}
      {selectedIndex === -1 && (
        <Box marginLeft={"46px"} marginBottom={"204px"}>
          <JobSearch
            mb="40px"
            searchButtonClick={(e: any) => {
              searchItems(e);
            }}
            filterClick={filterHandler}
          />
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
              dataList={query.length > 1 ? filteredList : Data}
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
