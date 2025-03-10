import React, { useState, useEffect } from "react";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import View from "layouts/sections/components/View";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { ReactComponent as LiBeach } from "assets/icons/li_beach.svg";
import HeaderTwo from "layouts/sections/page-sections/page-headers/components/HeaderTwo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MKBox from "components/MKBox";
import footerBg from "assets/images/homePage/beach.jpeg";
import NavBar from "components/NavBar";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import StepSeven from "./StepSeven";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import Footer from "components/Footer";
import NavBarTwo from "components/NavBarTwo";
import CustomStepper from "components/CustomeStepper";
import FAQs from "components/FAQs";

function TourPlanner() {
  const [isMobile, setIsMobile] = useState(false);
  const [initVal, setInitVal] = useState(false);
  const [clickInitBtn, setInitBtn] = useState(false);

  const stepsData = [
    {
      label: "Step 1",
      content: (
        <StepOne
          handleInitBtn={(data) => {
            setInitBtn(!clickInitBtn);
          }}
          initVal={initVal}
        />
      ),
    },
    { label: "Step 2", content: <StepTwo /> },
    { label: "Step 3", content: <StepThree /> },
    { label: "Step 4", content: <StepFour /> },
    { label: "Step 5", content: <StepFive /> },
    { label: "Step 6", content: <StepSix /> },
    { label: "Step 7", content: <StepSeven /> },
  ];

  const [steps, setSteps] = useState(stepsData);

  useEffect(() => {
    // Function to check the window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); // You can adjust the width as per your requirement
    };

    handleResize(); // Check the initial window size
    window.addEventListener("resize", handleResize); // Add resize event listener

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const btnArray = [
    {
      title: "Who We Are",
    },
    {
      title: "Why Choose Us",
    },
    {
      title: "Our Features",
    },
  ];

  return (
    <div style={{ backgroundColor: "#FEFDF5" }}>
      <NavBarTwo />
      <div style={{ overflowX: "hidden" }}>
        {/* WHY choose US */}
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "16px",
            paddingRight: "16px",
            backgroundColor: "#EEECE2",
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              container
              item
              xs={12}
              md={12}
              lg={10}
              flexDirection="column"
              alignItems="center"
              sx={{ width: "100%" }}
            >
              <Grid
                sx={{ width: "100%" }}
                container
                display={"flex"}
                flexDirection="column"
              >
                <CustomStepper steps={stepsData} initBtnHandle={clickInitBtn} />
              </Grid>
            </Grid>
          </Container>
        </Grid>

        {/* Your Questions Answered SECTION */}
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "16px",
            paddingRight: "16px",
            marginBottom: "40px",
            backgroundColor: "#FEFDF5",
            margin: 0,
          }}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid
              container
              item
              xs={12}
              lg={8}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              sx={{ textAlign: "center", marginBottom: "20px" }}
            >
              <Stack direction="row" spacing={1} mt={3}>
                <MKButton circular variant="outlined" color="black">
                  FAQs
                </MKButton>
              </Stack>
              <MKTypography
                variant="h1"
                color="black"
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
              >
                Your Questions Answered
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ textAlign: "center", maxWidth: "90%" }}
              >
                Planning your Sri Lankan adventure? We've got you covered!
                Explore our Frequently Asked Questions (FAQs) to find answers to
                common inquiries about visas, travel seasons, currency, culture,
                and more.
              </MKTypography>
            </Grid>
          </Container>

          <FAQs title="TourPlanner" />
        </Grid>
        <Footer />
      </div>
    </div>
  );
}

export default TourPlanner;
