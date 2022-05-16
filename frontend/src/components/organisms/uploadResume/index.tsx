import React, { useState, useRef } from "react";
import { Box, BoxProps, styled, Grid } from "@mui/material";
import Button from "../../atoms/button";
import theme from "../../../theme";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import successIcon from "../../../assets/icons/successIcon.svg";
import Typography from "../../atoms/typography";
import Icon from "../../atoms/icon";
type PropsType = {
  setDisplay?: any;
} & BoxProps;

const ParentBox = styled(Box)({
  borderRadius: "8px",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.accent.main,
  width: "100%",
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

const OkayButton = styled(Button)({
  marginTop: "32px",
  padding: "12px 60px",
  backgroundColor: theme.palette.primary.main400,
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: theme.palette.primary.main300,
    boxShadow: "none",
  },
  boxShadow: "none",
});

const UploadButton = styled(Button)({
  width: "281px",
  height: "40px",
  borderRadius: "8px",
  margin: "auto",
  backgroundColor: theme.palette.primary.main400,
  "&:hover": {
    backgroundColor: theme.palette.primary.main300,
  },
});

const UploadResume = ({ setDisplay, ...remProps }: PropsType) => {
  const inputFile: any = useRef<HTMLInputElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const changeFileHandler = (event: any) => {
    const patt = /.*\.pdf$/;
    let fileName;
    if (event.target.file) {
      fileName = event.target.file.name;
    } else {
      fileName = event.target.value;
    }
    if (fileName.search(patt) >= 0) {
      setIsSubmitted(true);
    }
  };

  const statusHandler = () => {
    inputFile.current.click();
  };

  return (
    <ParentBox {...remProps}>
      <CloseOutlinedIcon
        data-testid="close-icon"
        onClick={setDisplay}
        sx={{
          position: "absolute",
          color: theme.palette.textColor.mediumEmphasis,
          top: "20px",
          right: "20px",
          padding: "4px",
          cursor: "pointer",
        }}
      />
      {!isSubmitted && (
        <Grid
          data-testid="resume-not-submitted"
          container
          direction="column"
          width="auto"
        >
          <Typography
            color="textColor.mediumEmphasis"
            variant="heading2"
            mb={1}
          >
            File Upload
          </Typography>
          <UploadGridBox>
            <UploadButton
              data-testid="submit-resume"
              variant="contained"
              onClick={statusHandler}
            >
              <Typography variant="caption1">
                Click Here to Upload Files
              </Typography>
            </UploadButton>
            <input
              data-testid="file-upload"
              type="file"
              style={{ visibility: "collapse", position: "fixed" }}
              ref={inputFile}
              onChange={changeFileHandler}
              accept="application/pdf"
            />
          </UploadGridBox>
        </Grid>
      )}
      {isSubmitted && (
        <Grid
          data-testId="resume-submitted"
          container
          justifyItems="center"
          alignItems="center"
          direction="column"
          height="250px"
        >
          <Icon src={successIcon} />
          <Typography mt={4} variant="heading2">
            <b>Hi Gayatri!</b> Your Resume got Uploaded Successfully !
          </Typography>
          <OkayButton variant="contained" onClick={setDisplay}>
            <Typography variant="caption1">OKAY</Typography>
          </OkayButton>
        </Grid>
      )}
    </ParentBox>
  );
};

export default UploadResume;
