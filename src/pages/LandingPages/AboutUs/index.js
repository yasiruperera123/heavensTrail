import React, { useState, useEffect } from "react";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import View from "layouts/sections/components/View";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { ReactComponent as LiBeach } from "assets/icons/li_beach.svg";
import HeaderTwo from "layouts/sections/page-sections/page-headers/components/HeaderTwo";
import FAQs from "components/FAQs";
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
import { PageIDs } from "constants/pageId";
import {
  fetchPropertyPageTexts,
  fetchPropertyPageImages,
} from "services/PropertyService";

function AboutUs() {
  const [pageTexts, setPageTexts] = useState();
  const [pageImages, setPageImages] = useState();

  useEffect(() => {
    getPropertyImages();
    getPropertyText();
  }, []);

  const getPropertyText = async () => {
    // Usage
    fetchPropertyPageTexts(PageIDs.AboutUs)
      .then((response) => {
        console.log("asasasasas");

        const headerTexts = response?.data.reduce((acc, item) => {
          acc[item.tag] = item.text;
          return acc;
        }, {});
        console.log("TEXTS", headerTexts);

        setPageTexts(headerTexts);
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
      });
  };

  const getPropertyImages = () => {
    fetchPropertyPageImages(PageIDs.AboutUs, 1)
      .then((response) => {
        const headerImages = response?.data.reduce((acc, item) => {
          acc[item.tag] = item.imgeUrl;
          return acc;
        }, {});
        setPageImages(headerImages);
        console.log("headerImages", headerImages);
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
      });
  };

  const cardsData = [
    {
      image: pageImages?.section1Item1Image,
      title: "pageTexts?.section1Item1Title",
      description: pageTexts?.section1Item1Description1,
      description2: pageTexts?.section1Item1Description2,
      btnText: pageTexts?.section1Item1Button1,
    },
  ];

  const adventures = [
    {
      title: pageTexts?.section4Item1Title,
      des: pageTexts?.section4Item1Description,
      img: AboutUsPage.About_Us_Feature_1,
    },
    {
      title: pageTexts?.section4Item2Title,
      des: pageTexts?.section4Item2Description,
      img: AboutUsPage.About_Us_Feature_2,
    },
    {
      title: pageTexts?.section4Item3Title,
      des: pageTexts?.section4Item3Description,
      img: AboutUsPage.About_Us_Feature_3,
    },
    {
      title: pageTexts?.section4Item4Title,
      des: pageTexts?.section4Item4Description,
      img: AboutUsPage.About_Us_Feature_4,
    },
    {
      title: pageTexts?.section4Item5Title,
      des: pageTexts?.section4Item5Description,
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

  const btnArray = [
    {
      title: pageTexts?.headerButton1,
    },
    {
      title: pageTexts?.headerButton2,
    },
    {
      title: pageTexts?.headerButton3,
    },
  ];

  const whyChooseUSArra = [
    {
      title: pageTexts?.section2Item1Title || "",
      des: pageTexts?.section2Item1Description || "",
    },
    {
      title: pageTexts?.section2Item2Title || "",
      des: pageTexts?.section2Item2Description || "",
    },
    {
      title: pageTexts?.section2Item3Title || "",
      des: pageTexts?.section2Item3Description || "",
    },
  ];

  return (
    <div style={{ backgroundColor: "#FEFDF5" }}>
      <NavBar />
      <div style={{ padding: 15 }}>
        <HeaderTwo
          title={pageTexts?.headerTitle}
          buttonArray={btnArray}
          backgroundImage={AboutUsPage.Header}
          pageId={PageIDs.AboutUs}
        />
      </div>
      <div style={{ overflowX: "hidden" }}>
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
                {pageTexts?.section1Title || ""}
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ textAlign: "center", maxWidth: "90%" }}
              >
                {pageTexts?.section1Description || ""}
              </MKTypography>
            </Grid>
          </Container>
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
                  {console.log("CARDDDD", card)}
                  <CustomCard
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    description2={card.description2}
                    index={index}
                    btnText={card?.btnText}
                  />
                </Grid>
              ))}
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
                {pageTexts?.section2Title || ""}
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ textAlign: "center", maxWidth: "90%" }}
              >
                {pageTexts?.section2Description || ""}
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
          lg={11}
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
            justifySelf="center"
            pt={4}
            pb={4}
            sx={{
              backgroundImage: ({
                palette: { gradients },
                functions: { linearGradient, rgba },
              }) =>
                `${linearGradient("#BFCF0F", "#818B0C")}, url(${
                  pageImages?.section3Image || ""
                })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",

              margin: 1,
              borderRadius: 5,
              width: "85%",
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
                  fontSize: "50px",
                  fontFamily: "Playfair Display, serif",
                  width: "70%",
                  textAlign: "center",
                  lineHeight: "90%",
                })}
              >
                {pageTexts?.section3Title || ""}
              </MKTypography>
              <MKTypography
                color="white"
                mb={3}
                sx={({ breakpoints, typography: {} }) => ({
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "15px",
                  fontWeight: 400,
                  width: "70%",
                  textAlign: "center",
                })}
              >
                {pageTexts?.section3Description || ""}
              </MKTypography>
              <Stack direction="row" spacing={1} mt={3}>
                <MKButton circular variant="outlined" color="white">
                  {pageTexts?.section3Button1 || ""}
                </MKButton>
                <MKButton circular variant="contained" color="white">
                  {pageTexts?.section3Button2 || ""}
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
                  {pageTexts?.section4Button || ""}
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
                {pageTexts?.section4Title || ""}
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ textAlign: "center", maxWidth: "90%" }}
              >
                {pageTexts?.section4Description || ""}
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
                Planning your Sri Lankan adventure? We've got you covered!
                Explore our Frequently Asked Questions (FAQs) to find answers to
                common inquiries about visas, travel seasons, currency, culture,
                and more.
              </MKTypography>
            </Grid>
          </Container>
          <FAQs title="AboutUs" />
        </Grid>

        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
