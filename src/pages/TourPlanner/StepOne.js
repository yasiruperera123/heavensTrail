import React, { useState } from "react";
import { Card, Grid, Stack } from "@mui/material";
import meetingImg from "assets/images/homePage/meetings.jpeg";
import exhibitionImg from "assets/images/homePage/exhibitions.jpeg";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { UilEdit, UilCommentDots } from "@iconscout/react-unicons";

const travelSolutions = [
  {
    title: "Create your tour start to end",
    btn1: "Plan a Trip",
    img: meetingImg,
    btnIcon: <UilEdit style={{ marginRight: "10px" }} />,
  },
  {
    title: "Create your tour with help",
    btn1: "Ask a expert for assistance",
    btn2: "View Packages",
    img: exhibitionImg,
    btnIcon: <UilCommentDots style={{ marginRight: "10px" }} />,
  },
];

const StepOne = ({ handleInitBtn, initVal }) => {
  const [isInit, setIsInit] = useState(initVal);
  const handleInit = () => {
    console.log("tttt");
    handleInitBtn();
    setIsInit(false);
    console.log("ttfffffftt");
  };

  return (
    <div>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2}>
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
            Create your customized tour
          </MKTypography>
          <MKTypography
            variant="h6"
            fontWeight="regular"
            color="black"
            sx={{ textAlign: "left", maxWidth: "90%", paddingX: "16px" }}
          >
            Lorem ipsum dolor sit amet consectetur. Tempor eleifend integer
            aenean neque parturient.
          </MKTypography>
          <Grid
            lg={10}
            sx={({ breakpoints }) => ({
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginX: "16px",
              marginTop: 4,
              [breakpoints.down("sm")]: {
                flexDirection: "column",
              },
            })}
          >
            {travelSolutions.map((item, index) => (
              <Grid item key={index}>
                <Card
                  sx={({ breakpoints }) => ({
                    height: "440px",
                    width: "400px",
                    backgroundImage: `url(${item?.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "16px",
                    marginRight: 4,
                    [breakpoints.down("sm")]: {
                      width: "100%",
                      marginY: 1,
                    },
                  })}
                >
                  <MKTypography
                    color="white"
                    sx={{
                      fontSize: "34px",
                      fontFamily: "Playfair Display, serif",
                      textAlign: "center",
                      maxWidth: "80%",
                    }}
                  >
                    {item?.title}
                  </MKTypography>
                  <MKTypography
                    variant="h6"
                    fontWeight="regular"
                    color="white"
                    sx={{ textAlign: "center", maxWidth: "90%" }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Tempor eleifend
                    integer aenean neque parturient.
                  </MKTypography>
                  <Stack spacing={1} mt={1}>
                    <MKButton
                      size="small"
                      circular
                      color="white"
                      onClick={() => handleInit()}
                      sx={{
                        width: "100%",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "600",
                      }}
                    >
                      {item?.btnIcon}
                      {item?.btn1}
                    </MKButton>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default StepOne;
