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
import {
  UilPlaneDeparture,
  UilTicket,
  UilUtensils,
  UilBedDouble,
  UilBuilding,
  UilCalender,
  UilGlassMartini,
} from "@iconscout/react-unicons";
import soulmateImg from "assets/images/homePage/soulmate.jpeg";
import adventureIcon1 from "assets/images/homePage/adventureIcon1.png";
import adventureIcon2 from "assets/images/homePage/adventureIcon2.png";
import adventureIcon3 from "assets/images/homePage/adventureIcon3.png";
import adventureIcon4 from "assets/images/homePage/adventureIcon4.png";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Typography,
} from "@mui/material";
import Footer from "components/Footer";
import galleImg from "assets/images/homePage/galle.jpeg";
import firBall from "assets/images/homePage/fireball.jpeg";
import { AboutUsPage } from "constants/images";

function Accomadation() {
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

  const cardsData = [
    {
      image: AboutUsPage.About_Us_Card,
      title: "Destination Weddings",
      description:
        "Heaven's Trail is a proud subsidiary of a respected Sri Lankan group of companies, offering extraordinary journeys across Sri Lanka with support from our hotels, agriculture ventures, and event industry ties in Australia. As a locally owned and Sri Lanka Tourist Board Approved Destination Management Company (DMC), we specialize in crafting personalized holidays that showcase the island’s diverse landscapes, rich heritage, and warm hospitality.",
      description2:
        'Sri Lanka, often called the "Pearl of the Indian Ocean," is a tropical paradise with a unique blend of stunning beaches, lush tea estates, vibrant wildlife, and ancient cultural sites. Our dedicated team leverages deep local expertise to create memorable itineraries that highlight the best of Sri Lanka, from its 8 UNESCO World Heritage Sites to its pristine coastlines and majestic national parks.',
      btnText: "Contact Us",
    },
  ];

  const adventures = [
    {
      title: "Custom Tour Packages",
      des: "Our expert wedding planners work with you to customize every detail, ensuring your wedding day reflects your unique love story.",
      img: AboutUsPage.About_Us_Feature_1,
    },
    {
      title: "MICE Packages",
      des: "Our expert wedding planners work with you to customize every detail, ensuring your wedding day reflects your unique love story.",
      img: AboutUsPage.About_Us_Feature_2,
    },
    {
      title: "Comprehensive Custom Tour Planner",
      des: "Our expert wedding planners work with you to customize every detail, ensuring your wedding day reflects your unique love story.",
      img: AboutUsPage.About_Us_Feature_3,
    },
    {
      title: "Special Interest Tours",
      des: "Our expert wedding planners work with you to customize every detail, ensuring your wedding day reflects your unique love story.",
      img: AboutUsPage.About_Us_Feature_4,
    },
    {
      title: "24/7 Customer Support",
      des: "Our expert wedding planners work with you to customize every detail, ensuring your wedding day reflects your unique love story.",
      img: AboutUsPage.About_Us_Feature_5,
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
    setSelected(packages[0].key);
    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const CustomCard = ({
    image,
    title,
    description,
    description2,
    index,
    btnText,
  }) => {
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
          alt={title}
          image={image}
          title={title}
          style={{
            borderRadius: "15px",
            height: "500px",
            flex: 1,
          }}
        />
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignSelf: "center",
            padding: isMobile ? "10px" : "20px",
            flex: 1,
          }}
        >
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
          <MKTypography
            color="black"
            sx={{
              fontSize: "16px",
              fontFamily: "Poppins, sans-serif",
              lineHeight: "30px",
              marginTop: isMobile ? "10px" : "20px",
            }}
          >
            {description2}
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
            {btnText}
          </MKButton>
        </CardContent>
      </Card>
    );
  };
  const [selected, setSelected] = useState("web");

  const handleButtonClick = (value) => {
    setSelected(value);
  };

  const ToggleButtonGroup = ({ packages, key }) => {
    return (
      <div className="toggle-button-group">
        {packages?.map((item, index) => {
          return (
            <button
              key={key}
              className={`toggle-button ${
                selected === item.key ? "selected" : ""
              }`}
              onClick={() => handleButtonClick(item.key)}
            >
              {item.value}
            </button>
          );
        })}
      </div>
    );
  };

  const packages = [
    {
      key: "seaside ",
      value: "Seaside ",
    },
    {
      key: "hillside",
      value: "Hillside",
    },
    {
      key: "city ",
      value: "City ",
    },
  ];

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

  const whyChooseUSArra = [
    {
      title: "Personalized Itineraries",
      des: "At Heaven's Trail, we understand that every traveler is unique. Our team of experts works closely with you to craft tailor-made itineraries that cater to your interests, preferences, and travel style. Whether you seek adventure, relaxation, culture, or nature, we ensure a personalized experience that exceeds your expectations.",
    },
    {
      title: "Local Expertise & Trusted Partnerships",
      des: "As a locally owned and Sri Lanka Tourist Board Approved Destination Management Company, we have deep roots in the community and strong partnerships with trusted local providers. Our insider knowledge allows us to offer authentic experiences, from hidden gems to popular landmarks, with unparalleled attention to detail and quality.",
    },
    {
      title: "Commitment to Sustainability",
      des: "We believe in responsible tourism that supports local communities and protects the environment. Our tours are designed to minimize the ecological footprint while maximizing positive impact. By choosing Heaven's Trail, you are not just exploring Sri Lanka, but also contributing to its preservation for future generations.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#FEFDF5", overflowX: "hidden" }}>
      <NavBar />
      <div style={{ padding: 15 }}>
        <HeaderTwo
          title="Accommodation Options with Heaven’s Trail"
          backgroundImage={AboutUsPage.Header}
        />
      </div>

      {/*Whoe we are*/}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "16px",
          paddingRight: "16px",
          marginBottom: "40px",
          backgroundColor: "#FEFDF5",
          marginTop: 7,
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
            <Stack direction="row" spacing={1}>
              <MKButton circular variant="outlined" color="black">
                Heaven’s Trail Accommodation
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
              Categories of Accommodation
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ textAlign: "center", maxWidth: "90%" }}
            >
              We offer a wide range of accommodation options to suit every
              preference and budget, ensuring you experience comfort and
              hospitality at its finest.
            </MKTypography>
            <ToggleButtonGroup packages={packages} />
          </Grid>
        </Container>
        <Box
          style={{
            backgroundColor: "#FEFDF5",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Grid flexDirection={"column"} container lg={9} sx={{}}>
            <MKTypography
              variant="h1"
              color="black"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
                fontFamily: "Playfair Display, serif",
                fontSize: "50px",
                fontWeight: 400,
                textAlign: "left",
              })}
            >
              Seaside Accommodation Overview
            </MKTypography>
            <Divider
              variant="middle"
              sx={{ height: 3, width: "100%", backgroundColor: "#C9C5BA" }}
            />
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ maxWidth: "90%" }}
            >
              Experience the beauty of Sri Lanka's coastlines with our seaside
              accommodations. Relax by the beach, enjoy stunning ocean views,
              and unwind in comfort.
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              mt={2}
            >
              Seaside Cities:
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ maxWidth: "90%", flexDirection: "row", display: "flex" }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  marginRight: 3,
                  marginLeft: 10,
                }}
              >
                <li> Galle:</li>
              </span>
              A historic city with colonial architecture and beautiful beaches.
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ maxWidth: "90%", flexDirection: "row", display: "flex" }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  marginRight: 3,
                  marginLeft: 10,
                }}
              >
                <li>Bentota: </li>
              </span>
              Known for its golden sandy beaches and water sports.
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ maxWidth: "90%", flexDirection: "row", display: "flex" }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  marginRight: 3,
                  marginLeft: 10,
                }}
              >
                <li> Unawatuna:</li>
              </span>
              Famous for whale watching and vibrant nightlife.
            </MKTypography>
          </Grid>
        </Box>
      </Grid>

      {/* WHY choose US */}
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
              Why Choose Heaven's Trail?
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ textAlign: "center", maxWidth: "90%" }}
            >
              Choosing Heaven's Trail for your accommodation means opting for
              quality, comfort, and a seamless experience tailored to your
              needs.
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
            {whyChooseUSArra.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} lg={4}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "16px",
                    backgroundColor: "#EEECE2",
                    boxShadow: "none",
                    borderWidth: 1,
                    minHeight: "350px",
                  }}
                >
                  <MKTypography
                    color="#1A1814"
                    mb={2}
                    sx={{
                      fontSize: "24px",
                      fontFamily: "Playfair Display, serif",
                      fontWeight: 400,
                      width: "70%",
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

      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#FEFDF5",
          marginTop: 7,
        }}
      >
        <MKBox
          display="flex"
          alignItems="center"
          pt={4}
          pb={4}
          minHeight="100%"
          sx={{
            backgroundImage: ({
              palette: { gradients },
              functions: { linearGradient, rgba },
            }) =>
              `${linearGradient("#BFCF0F", "#818B0C")}, url(${
                AboutUsPage.Sub_Head
              })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",

            margin: 1,
            borderRadius: 5,
            width: "90%",
          }}
        >
          <Grid
            container
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            flexDirection="column"
            justifyContent="center"
          >
            <MKTypography
              variant="h1"
              color="white"
              mb={3}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
                fontSize: "60px",
                fontFamily: "Playfair Display, serif",
                width: "70%",
                textAlign: "center",
              })}
            >
              {`Where Will Your Journey Begin?`} <br />
              {`Create your trip today.`}
            </MKTypography>
            <MKTypography
              color="white"
              mb={3}
              sx={({ breakpoints, typography: {} }) => ({
                fontFamily: "Poppins, sans-serif",
                fontSize: "20px",
                fontWeight: 400,
                width: "70%",
                textAlign: "center",
              })}
            >
              Sri Lanka, often called the "Pearl of the Indian Ocean," is a
              tropical paradise with a unique blend of stunning beaches, lush
              tea estates, vibrant wildlife, and ancient cultural sites.
            </MKTypography>
            <Stack direction="row" spacing={1} mt={3}>
              <MKButton circular variant="outlined" color="white">
                Tour Packages
              </MKButton>
              <MKButton circular variant="contained" color="white">
                Plan Your Trip
              </MKButton>
            </Stack>
          </Grid>
        </MKBox>
      </Grid>

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
                Heaven’s Trail MICE Experiences
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
              Our Features
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ textAlign: "center", maxWidth: "90%" }}
            >
              Our range of featured services ensures that every aspect of your
              MICE tour is meticulously planned and executed to perfection.
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
              justifyContent: "center",
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
                    alignItems: "center",
                    textAlign: "center",
                    minHeight: "350px",
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
                      fontSize: "28px",
                      fontFamily: "Playfair Display, serif",
                      fontWeight: 400,
                      width: "70%",
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
              Planning your Sri Lankan adventure? We've got you covered! Explore
              our Frequently Asked Questions (FAQs) to find answers to common
              inquiries about visas, travel seasons, currency, culture, and
              more.
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
  );
}

export default Accomadation;
