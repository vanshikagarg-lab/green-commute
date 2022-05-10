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
  const [stage, setStage] = React.useState(1);
  const [image, setImage] = useState(LandingImage1);

  const onChange = (event: any, value: any) => {
    if (stage === 1) {
      setInputVal(event.target.value);
    } else if (stage === 2) {
      setJobLocation(value);
    }
  };
  const getOptions = (option: any) => option.title;

  const nextHandleChange = () => {
    setStage(2);
    setImage(LandingImage2);
  };

  const backHandleChange = () => {
    setStage(1);
    setImage(LandingImage1);
  };

  const deleteOption = (index: number) => {
    let tempValue = jobLocation.slice();
    tempValue.splice(index, 1);
    setJobLocation(tempValue);
  };

  let landingInput;
  if (stage === 1) {
    landingInput = (
      <LandingInput
        stage={1}
        skillsOptions={skills}
        inputFieldValue={inputVal}
        inputFieldOnChange={onChange}
        locationOptions={locations}
        onNextClick={nextHandleChange}
      />
    );
  } else if (stage === 2) {
    landingInput = (
      <LandingInput
        stage={2}
        skillsOptions={skills}
        inputFieldValue={jobLocation}
        inputFieldOnChange={onChange}
        locationOptions={locations}
        getOptionLabel={getOptions}
        onBackClick={backHandleChange}
        deleteOptions={deleteOption}
      />
    );
  }

  let aqiFrame;
  if (stage === 1 && inputVal.length >= 1) {
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
  } else if (stage === 2 && jobLocation.length >= 1) {
    aqiFrame = (
      <DisplayAqi
        aqi={[
          jobLocation.map((input: any, index: number) => {
            return (
              <AqiLocation
                aqiValue={
                  locations.map(loc => {
                    console.log(loc.title + " " + input.title);
                    if (loc.title === input.title) {
                      console.log(loc.aqi);
                      return loc.aqi;
                    }
                  })[0] ?? "884"
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
  }
  return (
    <>
      <LandingStageTemplate
        inputFrame={landingInput}
        aqiFrame={
          (stage === 1 && inputVal.length >= 1) ||
          (stage === 2 && jobLocation.length >= 1) ? (
            aqiFrame
          ) : (
            <ImageTypography
              children={<img src={image} alt="loading" />}
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
          )
        }
      />
    </>
  );
};

export default LandingPage;
