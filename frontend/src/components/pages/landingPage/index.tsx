import React, { useEffect, useState } from "react";
import LandingStageTemplate from "../../templates/landingStageTemplate";
import LandingInput from "../../molecules/landingInput";
import AqiField from "../../molecules/AqiField";
import ImageTypography from "../../molecules/ImageTypography";
import DisplayAqi from "../../molecules/DisplayAqi";
import AqiLocation from "../../molecules/AqiLocation";
import LandingImage1 from "../../../assets/images/landingImage1.svg";
import LandingImage2 from "../../../assets/images/landingImage2.svg";
import LandingImage3 from "../../../assets/images/landingImage3.svg";
import theme from "../../../theme";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getJobsUrl, getLocationsUrl, getSkillsUrl } from "../../../constants";
import { location, skill } from "../../../interfaces";

const LandingPage = () => {
  const [inputVal, setInputVal] = React.useState<any>([]);
  const [jobLocation, setJobLocation] = React.useState<any>([]);
  const [jobSkills, setJobSkills] = useState<any>([]);
  const [stage, setStage] = React.useState(1);
  const [jobCount, setJobCount] = useState<number>(0);
  const [data, setData] = useState<{ locations: any; skills: any; jobs: any }>({
    locations: [],
    skills: [],
    jobs: [],
  });

  const navigate = useNavigate();

  const getData = async () => {
    const locations = await axios.get(getLocationsUrl);
    const skills = await axios.get(getSkillsUrl);
    const jobs = await axios.get(getJobsUrl);

    return { locations: locations.data, skills: skills.data, jobs: jobs.data };
  };

  useEffect(() => {
    getData().then((res) => {
      setData({
        locations: res.locations,
        skills: res.skills,
        jobs: res.jobs,
      });
    });
  }, []);

  const onChange = (event: any, value: any) => {
    if (stage === 1) {
      setInputVal(event.target.value);
    } else if (stage === 2) {
      setJobLocation(value);
    } else if (stage === 3) {
      setJobSkills(value);
      const tempSkills = value.map((skill: skill) => (skill.name));
      console.log(data.jobs);
      const foundJobs = data.jobs.slice().filter((job: any) => (tempSkills.includes(job.skill.name)));
      setJobCount(foundJobs.length);
    }
  };

  const nextHandleChange = () => {
    if (stage === 1 && inputVal.length >= 1) {
      setStage(stage + 1);
    } else if (stage === 2 && jobLocation.length >= 1) {
      setData({
        ...data,
        jobs: data.jobs.slice().filter((job: any) => {
          let flag;
          for (const location of jobLocation) {
            if (job.location.name?.includes(location.name)) {
              flag = true;
              break;
            }
          }
          return flag;
        }),
      });
      setStage(stage + 1);
    } else if (stage === 3 && jobSkills.length >= 1) {
      navigate("/find-jobs", {
        state: {
          currLocation: inputVal,
          jobLocation: jobLocation,
          jobSkills: jobSkills,
        },
      });
    }
  };

  const backHandleChange = () => {
    if (stage > 0) {
      setStage(stage - 1);
    }
  };

  const renderLandingComponents = () => {
    let landingInputComponent;
    let aqiFrame;

    if (stage === 1) {
      landingInputComponent = (
        <LandingInput
          stage={1}
          skillsOptions={data.skills}
          inputFieldValue={inputVal}
          inputFieldOnChange={onChange}
          locationOptions={data.locations}
          onNextClick={nextHandleChange}
        />
      );
      
      if (inputVal && ["Hyderabad","Mumbai"].includes(inputVal)) {
        aqiFrame = (
          <AqiField
            aqiValue={
              data.locations.filter((loc: any) => {
                return loc.name.includes(inputVal);
              })[0]?.aqi
            }
            description="Real Time Air Quality Index (AQI) in this location"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              width: "574px",
              height: "768px",
              background: theme.palette.structural.linear1,
            }}
          />
        );
      } else {
        aqiFrame = (
          <ImageTypography
            children={<img src={LandingImage1} alt="loading" />}
            description="Enter Location to know Time AQI (Air Quality Index)"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              width: theme.spacing(71.75),
              height: theme.spacing(96),
              background: theme.palette.structural.linear1,
            }}
          />
        );
      }
    } else if (stage === 2) {
      const deleteOption = (index: number) => {
        let tempValue = jobLocation.slice();
        tempValue.splice(index, 1);
        onChange(null, tempValue);
      };

      const getOptions = (option: location) => option.name;

      landingInputComponent = (
        <LandingInput
          stage={2}
          skillsOptions={data.skills}
          inputFieldValue={jobLocation}
          inputFieldOnChange={onChange}
          locationOptions={data.locations}
          getOptionLabel={getOptions}
          onBackClick={backHandleChange}
          deleteOptions={deleteOption}
          onNextClick={nextHandleChange}
        />
      );
      if (jobLocation.length >= 1) {
        aqiFrame = (
          <DisplayAqi
            aqi={[
              jobLocation.map((input: any, index: number) => {
                return (
                  <AqiLocation
                    aqiValue={
                      data.locations.filter((loc: any) => {
                        return loc.name === input.name;
                      })[0]?.aqi
                    }
                    location={input.name}
                    key={index}
                  />
                );
              }),
            ]}
            description="Real time Air Quality Index(AQI) in this location"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              width: theme.spacing(71.75),
              height: theme.spacing(96),
              background: theme.palette.structural.linear1,
            }}
          />
        );
      } else {
        aqiFrame = (
          <ImageTypography
            children={<img src={LandingImage2} alt="loading" />}
            description="Enter Location to know Time AQI (Air Quality Index)"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              width: theme.spacing(71.75),
              height: theme.spacing(96),
              background: theme.palette.structural.linear1,
            }}
          />
        );
      }
    } else if (stage === 3) {
      const deleteOption = (index: number) => {
        let tempValue = jobSkills.slice();
        tempValue.splice(index, 1);
        onChange(null, tempValue);
      };

      const getOptions = (option: skill) => option.name;

      landingInputComponent = (
        <LandingInput
          stage={3}
          skillsOptions={data.skills}
          inputFieldValue={jobSkills}
          inputFieldOnChange={onChange}
          locationOptions={data.locations}
          getOptionLabel={getOptions}
          onBackClick={backHandleChange}
          onNextClick={nextHandleChange}
          deleteOptions={deleteOption}
        />
      );
      if (jobSkills.length >= 1) {
        aqiFrame = (
          <AqiField
            aqiValue={`${jobCount}`}
            description={
              jobLocation.length == 1
                ? `Jobs found in ${jobLocation[0].name}.`
                : `Jobs found in ${jobLocation[0].name} and ${jobLocation[1].name}.`
            }
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              width: theme.spacing(71.75),
              height: theme.spacing(96),
              background: theme.palette.structural.linear1,
            }}
          />
        );
      } else {
        aqiFrame = (
          <ImageTypography
            children={<img src={LandingImage3} alt="loading" />}
            description="Enter your Skills to know how many
          jobs are in this Location"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              width: theme.spacing(71.75),
              height: theme.spacing(96),
              background: theme.palette.structural.linear1,
            }}
          />
        );
      }
    }
    return { landingInputComponent: landingInputComponent, aqiFrame: aqiFrame };
  };

  return (
    <>
      <LandingStageTemplate
        inputFrame={renderLandingComponents().landingInputComponent}
        aqiFrame={renderLandingComponents().aqiFrame}
      />
    </>
  );
};

export default LandingPage;
