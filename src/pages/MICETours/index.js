import React, { useState, useEffect } from "react";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import View from "layouts/sections/components/View";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { ReactComponent as LiBeach } from "../../assets/icons/li_beach.svg";
import HeaderTwo from "layouts/sections/page-sections/page-headers/components/HeaderTwo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UilHeart, UilMicrophone, UilStore } from "@iconscout/react-unicons";
import soulmateImg from "assets/images/homePage/soulmate.jpeg";
import adventureIcon1 from "assets/images/homePage/adventureIcon1.png";
import adventureIcon2 from "assets/images/homePage/adventureIcon2.png";
import adventureIcon3 from "assets/images/homePage/adventureIcon3.png";
import adventureIcon4 from "assets/images/homePage/adventureIcon4.png";
import { MiceToursPage } from "constants/images";

import NavBar from "components/NavBar";
import {
  Card,
  CardMedia,
  CardContent,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Footer from "components/Footer";
import {
  fetchPropertyPageTexts,
  fetchPropertyPageImages,
} from "services/PropertyService";
import { PageIDs } from "constants/pageId";
import FAQs from "components/FAQs";

function MiceTours() {
  const [pageTexts, setPageTexts] = useState();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState();

  const getPropertyText = async () => {
    // Usage
    fetchPropertyPageTexts(PageIDs.MICETours)
      .then((response) => {
        const headerTexts = response?.data.reduce((acc, item) => {
          acc[item.tag] = item.text;
          return acc;
        }, {});
        console.log("header    Textssss", headerTexts);
        setPageTexts(headerTexts);
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
      });
  };

  const getPropertyImages = () => {
    fetchPropertyPageImages(PageIDs.MICETours, 1)
      .then((response) => {
        const headerImages = response?.data.reduce((acc, item) => {
          acc[item.tag] = item.imgeUrl;
          return acc;
        }, {});
        setImages(headerImages);
        console.log("headerImages", headerImages);
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
      });
  };

  useEffect(() => {
    getPropertyText();
    getPropertyImages();
  }, []);

  const btnArray = [
    {
      title: pageTexts?.headerButton1,
      icon: <UilHeart />,
    },
    { title: pageTexts?.headerButton2, icon: <UilMicrophone /> },
    { title: pageTexts?.headerButton3, icon: <LiBeach fill="white" /> },
    { title: pageTexts?.headerButton4, icon: <UilStore /> },
  ];

  const cardsData = [
    {
      image: images?.section1Item1Image,
      title: pageTexts?.section1Item1Title,
      description: pageTexts?.section1Item1Description,
      buttonText: pageTexts?.section1Item1Button,
    },
    {
      image: images?.section1Item2Image,
      title: pageTexts?.section1Item2Title,
      description: pageTexts?.section1Item2Description,
      buttonText: pageTexts?.section1Item2Button,
    },
    {
      image: images?.section1Item3Image,
      title: pageTexts?.section1Item3Title,
      description: pageTexts?.section1Item3Description,
      buttonText: pageTexts?.section1Item3Button,
    },
    {
      image: images?.section1Item4Image,
      title: pageTexts?.section1Item4Title,
      description: pageTexts?.section1Item4Description,
      buttonText: pageTexts?.section1Item4Button,
    },
  ];

  const adventures = [
    {
      title: "Hospitality",
      des: "Luxurious accommodations and premium services for your comfort.",
      img: MiceToursPage.Mice_Exp_1,
    },
    {
      title: "Transportation",
      des: "Convenient and comfortable travel arrangements throughout your stay.",
      img: MiceToursPage.Mice_Exp_2,
    },
    {
      title: "Event Management",
      des: "Professional event planning and execution to ensure a smooth experience.",
      img: MiceToursPage.Mice_Exp_3,
    },
    {
      title: "Cultural Experiences",
      des: "Unique cultural excursions and experiences tailored to your interests.",
      img: MiceToursPage.Mice_Exp_4,
    },
    {
      title: "Gourmet Dining",
      des: "Exquisite dining options featuring local and international cuisines.",
      img: MiceToursPage.Mice_Exp_5,
    },
    {
      title: "Team Building Activities",
      des: "Engaging activities designed to foster teamwork and collaboration.",
      img: MiceToursPage.Mice_Exp_6,
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

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

  const CustomCard = ({ image, title, description, buttonText, index }) => {
    const isEven = index % 2 === 0;

    return (
      <Card
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : isEven ? "row" : "row-reverse",
          marginBottom: "20px",
          borderRadius: "15px",
          backgroundColor: "#FEFDF5",
          boxShadow: "none",
        }}
      >
        <CardMedia
          component="img"
          height={"300px"}
          alt={title}
          image={image}
          title={title}
          style={{
            width: isMobile ? "93%" : "100%",
            borderRadius: "15px",
          }}
        />
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignSelf: "center",
            padding: isMobile ? "10px" : "20px",
          }}
        >
          <MKTypography
            color="black"
            sx={{
              fontSize: "34px",
              fontFamily: "Playfair Display, serif",
            }}
          >
            {title}
          </MKTypography>
          <MKTypography
            color="black"
            sx={{
              fontSize: "16px",
              fontFamily: "Poppins, sans-serif",
              lineHeight: "30px",
              marginTop: isMobile ? "10px" : "20px",
            }}
          >
            {description}
          </MKTypography>
          <MKButton
            circular
            variant="contained"
            color="black"
            sx={{
              marginTop: 2,
              width: isMobile ? "100%" : "35%",
            }}
          >
            {buttonText}
          </MKButton>
        </CardContent>
      </Card>
    );
  };

  return (
    <div style={{ backgroundColor: "#FEFDF5" }}>
      <NavBar />
      <div style={{ padding: 15 }}>
        <HeaderTwo
          buttonArray={btnArray}
          title={pageTexts?.headerTitle}
          pageId={PageIDs.MICETours}
        />
      </div>
      <div style={{ overflowX: "hidden" }}>
        <Box
          style={{
            backgroundColor: "#FEFDF5",
          }}
        >
          <Grid
            container
            spacing={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {cardsData.map((card, index) => (
              <Grid item xs={12} sm={6} lg={10} key={index}>
                <CustomCard
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  buttonText={card.buttonText}
                  index={index}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Create your own adventure SECTION */}
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "16px",
            paddingRight: "16px",
            backgroundColor: "#EEECE2",
            marginTop: 7,
          }}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "40px",
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
                  {pageTexts?.section2Button}
                </MKButton>
              </Stack>
              <MKTypography
                variant="h1"
                color="black"
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                  fontFamily: "Playfair Display, serif",
                  fontSize: "60px",
                  fontWeight: 400,
                })}
              >
                {pageTexts?.section2Title}
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ textAlign: "center", maxWidth: "90%" }}
              >
                {pageTexts?.section2Description}
              </MKTypography>
            </Grid>
          </Container>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              sx={{
                alignSelf: "center",
                marginBottom: 6,
              }}
              container
              spacing={2}
            >
              {adventures.map((item, index) => (
                <Grid item key={index} xs={12} sm={6} lg={4}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "16px",
                      backgroundColor: "#EEECE2",
                      boxShadow: "none",
                      borderWidth: 1,
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="80px"
                      image={item?.img}
                      alt="Image"
                      sx={{ objectFit: "contain", width: "70px" }}
                    />
                    <MKTypography
                      color="#1A1814"
                      mb={2}
                      sx={{
                        fontSize: "24px",
                        fontFamily: "Playfair Display, serif",
                        fontSize: "28px",
                        fontWeight: 400,
                      }}
                    >
                      {item?.title}
                    </MKTypography>
                    <MKTypography variant="subtitle2">{item?.des}</MKTypography>
                  </Card>
                </Grid>
              ))}
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
                  {pageTexts?.section3Button}
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
                {pageTexts?.section3Title}
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ textAlign: "center", maxWidth: "90%" }}
              >
                {pageTexts?.section3Description}
              </MKTypography>
            </Grid>
          </Container>

          <FAQs title="MICETours" />
        </Grid>
        <Footer />
      </div>
    </div>
  );
}

export default MiceTours;
