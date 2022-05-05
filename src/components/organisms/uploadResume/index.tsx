import React, { useState, useRef } from "react";
import { Box, BoxProps, styled, Grid } from "@mui/material";
import Button from "../../atoms/button";
import theme from "../../../theme";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import DoneIcon from "@mui/icons-material/Done";
import Typography from "../../atoms/typography";
type PropsType = {
  setDisplay: any;
} & BoxProps;

const ParentBox = styled(Box)({
  borderRadius: "8px",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.accent.main,
});

const UploadGridBox = styled(Box)({
  backgroundColor: theme.palette.structural.color4,
  borderRadius: "12px",
  border: `2px dashed ${theme.palette.primary.main400}`,
  height: "268px",
  width: "592px",
  display: "flex",
  justifyItems: "center",
  alignItems: "center",
});

const SuccessButton = styled(Typography)({
  height: "83.33px",
  width: "83.33px",
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.main400,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.accent.main,
});

const UploadResume = ({ setDisplay, ...remProps }: PropsType) => {
  const inputFile: any = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<String>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const changeFileHandler = (event: any) => {
    setSelectedFile((event.target as HTMLInputElement).value);
  };

  const statusHandler = () => {
    inputFile.current.click();
    setIsSubmitted(true);
  };
  console.log(selectedFile);

  return (
    <ParentBox {...remProps}>
      <CloseOutlinedIcon
        data-testid='close-icon'
        onClick={setDisplay}
        sx={{
          position: "absolute",
          color: theme.palette.textColor.mediumEmphasis,
          top: "20px",
          right: "20px",
          padding: "4px",
        }}
      />
      {!isSubmitted && (
        <Grid
          data-testid='resume-not-submitted'
          container
          direction='column'
          width='auto'
        >
          <Typography
            color='textColor.mediumEmphasis'
            variant='heading2'
            mb={1}
          >
            File Upload
          </Typography>
          <UploadGridBox>
            <Button
              data-testid='submit-resume'
              style={{
                width: "281px",
                height: "40px",
                borderRadius: "8px",
                margin: "auto",
              }}
              variant='contained'
              onClick={statusHandler}
            >
              <Typography variant='caption1'>
                Click Here to Upload Files
              </Typography>
              <input
                data-test-id='file-upload'
                type='file'
                hidden
                ref={inputFile}
                onChange={changeFileHandler}
              />
            </Button>
          </UploadGridBox>
        </Grid>
      )}
      {isSubmitted && (
        <Grid
          data-testId='resume-submitted'
          container
          justifyItems='center'
          alignItems='center'
          direction='column'
          height='250px'
        >
          <SuccessButton m={1}>
            <DoneIcon sx={{ height: "80px", width: "80px" }} />
          </SuccessButton>
          <Typography m={1} variant='heading2'>
            <b>Hi Gayatri!</b> Your Resume got Uploaded Successfully !
          </Typography>
          <Button
            style={{ margin: "10px" }}
            variant='contained'
            onClick={setDisplay}
          >
            Okay
          </Button>
        </Grid>
      )}
    </ParentBox>
  );
};

export default UploadResume;
