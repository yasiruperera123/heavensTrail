import React, { useState } from "react";
import {
  Card,
  Grid,
  Container,
  Stack,
  Divider,
  Box,
  Typography,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import meetingImg from "assets/images/homePage/meetings.jpeg";
import exhibitionImg from "assets/images/homePage/exhibitions.jpeg";
import weddingImg from "assets/images/homePage/wedding.jpeg";
import tourImg from "assets/images/homePage/tours.jpeg";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { UilEdit, UilCommentDots } from "@iconscout/react-unicons";
import CustomDateRangePicker from "components/CustomeDateRangerPicker";

const travelSolutions = [
  {
    title: "Meetings & Conferences",
    btn1: "See Details",
    btn2: "View Packages",
    img: meetingImg,
  },
  {
    title: "Exhibitions",
    btn1: "See Details",
    btn2: "View Packages",
    img: exhibitionImg,
  },
];

const StepTwo = ({ handleInitBtn, initVal }) => {
  const [isInit, setIsInit] = useState(initVal);
  const handleInit = () => {
    console.log("tttt");
    handleInitBtn();
    setIsInit(false);
    console.log("ttfffffftt");
  };

  const handleBack = () => {};

  return (
    <div>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container flexDirection={"column"} spacing={2}>
          <MKTypography
            variant="h1"
            color="black"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
              fontFamily: "Playfair Display, serif",
              fontSize: "40px",
              fontWeight: 400,
              paddingX: "16px",
            })}
          >
            When do you want to go?
          </MKTypography>
          <MKTypography
            variant="h6"
            fontWeight="regular"
            color="black"
            sx={{ textAlign: "left", maxWidth: "90%", paddingX: "16px" }}
          >
            Choose a days range or length of days
          </MKTypography>
          <Grid sx={{ marginTop: 4 }}>
            <CustomDateRangePicker />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default StepTwo;
