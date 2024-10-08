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
import galleImg from "assets/images/homePage/galle.jpeg";
import firBall from "assets/images/homePage/fireball.jpeg";
import { AboutUsPage } from "constants/images";
import HeaderThree from "layouts/sections/page-sections/page-headers/components/HeaderThree";
import NavBarTwo from "components/NavBarTwo";
import CustomStepper from "components/CustomeStepper";

function TourPlanner() {
  const faq = [
    {
      title: "What is the best time to visit Sri Lanka?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Ut in sed feugiat viverra commodo sed malesuada pharetra tempor. Tempor mauris morbi leo erat. Pellentesque ut convallis interdum condimentum id ultrices pretium. Faucibus lorem accumsan quis mauris ac pellentesque lectus.",
    },
    {
      title: "How can Heaven's Trail help me plan my Sri Lankan tour?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Ut in sed feugiat viverra commodo sed malesuada pharetra tempor. Tempor mauris morbi leo erat. Pellentesque ut convallis interdum condimentum id ultrices pretium. Faucibus lorem accumsan quis mauris ac pellentesque lectus.",
    },
    {
      title: "What should I pack for my trip to Sri Lanka?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Ut in sed feugiat viverra commodo sed malesuada pharetra tempor. Tempor mauris morbi leo erat. Pellentesque ut convallis interdum condimentum id ultrices pretium. Faucibus lorem accumsan quis mauris ac pellentesque lectus.",
    },
    {
      title: "How can I get around Sri Lanka?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Ut in sed feugiat viverra commodo sed malesuada pharetra tempor. Tempor mauris morbi leo erat. Pellentesque ut convallis interdum condimentum id ultrices pretium. Faucibus lorem accumsan quis mauris ac pellentesque lectus.",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [initVal, setInitVal] = useState(false);
  const [clickInitBtn, setInitBtn] = useState(false);

  const stepsData = [
    {
      label: "Step 1",
      content: (
        <StepOne
          handleInitBtn={(data) => {
            console.log("asasasasasasas", clickInitBtn);
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

          {/* Accordion List with Button */}
          <Grid
            container
            item
            xs={12}
            lg={8}
            flexDirection="column"
            alignItems="center"
            sx={{ width: "70%" }}
          >
            <Grid container display={"flex"} flexDirection="column">
              {faq.map((item, index) => (
                <Accordion key={index} sx={{ boxShadow: "none" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id={`panel1-header-${index}`}
                    sx={{ boxShadow: "none", backgroundColor: "#FEFDF5" }}
                  >
                    {item?.title}
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: "#FEFDF5" }}>
                    {item?.answer}
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>

            {/* Load More FAQs Button */}
            <MKButton
              circular
              variant="contained"
              color="black"
              sx={{
                paddingLeft: 5,
                paddingRight: 5,
                marginTop: 5,
                marginBottom: 10,
              }}
            >
              Load More FAQs
            </MKButton>
          </Grid>
        </Grid>
        <Footer />
      </div>
    </div>
  );
}

export default TourPlanner;
