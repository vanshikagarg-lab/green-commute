import React from "react";
import { useState } from "react";
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
import { useNavigate } from "react-router-dom";

const locations = [
  {
    title: "Hyderabad",
    aqi: "894",
  },
  {
    title: "Mumbai",
    aqi: "953",
  },
];

const skills = [
  {
    title: "UI/UX Designer",
  },
  {
    title: "Graphic Designer",
  },
];

const LandingPage = () => {
  const [inputVal, setInputVal] = React.useState<any>([]);
  const [jobLocation, setJobLocation] = React.useState<any>([]);
  const [jobSkills, setJobSkills] = useState<any>([]);
  const [stage, setStage] = React.useState(1);
  const navigate = useNavigate();

  const onChange = (event: any, value: any) => {
    if (stage === 1) {
      setInputVal(event.target.value);
    } else if (stage === 2) {
      setJobLocation(value);
    } else if (stage === 3) {
      setJobSkills(value);
    }
  };
  const getOptions = (option: any) => option.title;

  const nextHandleChange = () => {
    if (stage === 1 && inputVal.length >= 1) {
      setStage(stage + 1);
    } else if (stage === 2 && jobLocation.length >= 1) {
      setStage(stage + 1);
    } else if (stage === 3 && jobSkills.length >= 1) {
      navigate("/search-jobs", {
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
          skillsOptions={skills}
          inputFieldValue={inputVal}
          inputFieldOnChange={onChange}
          locationOptions={locations}
          onNextClick={nextHandleChange}
        />
      );
      if (inputVal.length >= 1) {
        aqiFrame = (
          <AqiField
            aqiValue="894"
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
              width: "574px",
              height: "768px",
              background: theme.palette.structural.linear1,
            }}
          />
        );
      }
    } else if (stage === 2) {
      const deleteOption = (index: number) => {
        let tempValue = jobLocation.slice();
        tempValue.splice(index, 1);
        setJobLocation(tempValue);
      };

      landingInputComponent = (
        <LandingInput
          stage={2}
          skillsOptions={skills}
          inputFieldValue={jobLocation}
          inputFieldOnChange={onChange}
          locationOptions={locations}
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
                      locations.filter((loc) => loc.title === input.title)[0]
                        .aqi
                    }
                    location={input.title}
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
              width: "574px",
              height: "768px",
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
              width: "574px",
              height: "768px",
              background: theme.palette.structural.linear1,
            }}
          />
        );
      }
    } else if (stage === 3) {
      const deleteOption = (index: number) => {
        let tempValue = jobSkills.slice();
        tempValue.splice(index, 1);
        setJobSkills(tempValue);
      };
      landingInputComponent = (
        <LandingInput
          stage={3}
          skillsOptions={skills}
          inputFieldValue={jobSkills}
          inputFieldOnChange={onChange}
          locationOptions={locations}
          getOptionLabel={getOptions}
          onBackClick={backHandleChange}
          onNextClick={nextHandleChange}
          deleteOptions={deleteOption}
        />
      );
      if (jobSkills.length >= 1) {
        aqiFrame = (
          <AqiField
            aqiValue="1500"
            description={
              jobLocation.length == 1
                ? `Jobs found in ${jobLocation[0].title}.`
                : `Jobs found in ${jobLocation[0].title} and ${jobLocation[1].title}.`
            }
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
            children={<img src={LandingImage3} alt="loading" />}
            description="Enter your Skills to know how many
          jobs are in this Location"
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
