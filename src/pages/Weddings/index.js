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
import Icon from "@mui/material/Icon";
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
import NavBarTwo from "components/NavBarTwo";
import HeaderThree from "layouts/sections/page-sections/page-headers/components/HeaderThree";
import { DestinationWeddingPage } from "constants/images";
import breakpoints from "assets/theme/base/breakpoints";
import { PageIDs } from "constants/pageId";
import {
  fetchPropertyPageTexts,
  fetchPropertyPageImages,
} from "services/PropertyService";
import FAQs from "components/FAQs";
import { useLocation } from "react-router-dom";

function Weddings() {
  const [pageTexts, setPageTexts] = useState();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState();

  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center"});
        }
      }
    }, 100); // Small delay to allow DOM updates
  }, [location]); 

  const getPropertyText = async () => {
    // Usage
    fetchPropertyPageTexts(PageIDs.MICEDestinationWeddings)
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
    fetchPropertyPageImages(PageIDs.MICEDestinationWeddings, 1)
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

  const IconMargin = "10px";

  const otherTravelPcgs = [
    {
      title: "“Say I do” by the beach",
      description:
        "This package includes a beachside ceremony, floral arrangements, a wedding coordinator, and a beachfront reception.",
      iconSet: [
        <UilPlaneDeparture
          style={{ marginRight: IconMargin }}
          className="hover-icon"
        />,
        <UilBuilding
          style={{ marginRight: IconMargin }}
          className="hover-icon"
        />,
        <UilCalender
          style={{ marginRight: IconMargin }}
          className="hover-icon"
        />,
        <UilGlassMartini
          style={{ marginRight: IconMargin }}
          className="hover-icon"
        />,
        <UilUtensils
          style={{ marginRight: IconMargin }}
          className="hover-icon"
        />,
      ],
      img: DestinationWeddingPage.Wedding_Pck_1,
    },
    {
      title: "Country Wedding",
      description:
        "This package includes a beachside ceremony, floral arrangements, a wedding coordinator, and a beachfront reception.",
      iconSet: [
        <UilPlaneDeparture
          style={{ marginRight: IconMargin }}
          className="hover-icon"
        />,
        <UilBuilding
          style={{ marginRight: IconMargin }}
          className="hover-icon"
        />,
        <UilCalender
          style={{ marginRight: IconMargin }}
          className="hover-icon"
        />,
        <UilGlassMartini
          style={{ marginRight: IconMargin }}
          className="hover-icon"
        />,
        <UilUtensils
          style={{ marginRight: IconMargin }}
          className="hover-icon"
        />,
      ],
      img: DestinationWeddingPage.Wedding_Pck_2,
    },
    {
      title: "Wed among the mist",
      description:
        "This package includes a beachside ceremony, floral arrangements, a wedding coordinator, and a beachfront reception.",
      iconSet: [
        <UilPlaneDeparture
          style={{ marginRight: IconMargin }}
          className="hover-icon"
        />,
        <UilBuilding
          style={{ marginRight: IconMargin }}
          className="hover-icon"
        />,
        <UilCalender
          style={{ marginRight: IconMargin }}
          className="hover-icon"
        />,
        <UilGlassMartini
          style={{ marginRight: IconMargin }}
          className="hover-icon"
        />,
        <UilUtensils
          style={{ marginRight: IconMargin }}
          className="hover-icon"
        />,
      ],
      img: DestinationWeddingPage.Wedding_Pck_3,
    },
  ];

  const cardsData = [
    {
      image: images?.section1Item1Image,
      title: pageTexts?.section1Item1Title,
      description: pageTexts?.section1Item1Description1,
      description2: pageTexts?.section1Item1Description2,
    },
  ];

  const adventures = [
    {
      title: pageTexts?.section3Item1Title,
      des: pageTexts?.section3Item1Description,
      img: DestinationWeddingPage.Featurs_1,
    },
    {
      title: pageTexts?.section3Item2Title,
      des: pageTexts?.section3Item2Description,
      img: DestinationWeddingPage.Featurs_2,
    },
    {
      title: pageTexts?.section3Item3Title,
      des: pageTexts?.section3Item3Description,
      img: DestinationWeddingPage.Featurs_3,
    },
    {
      title: pageTexts?.section3Item4Title,
      des: pageTexts?.section3Item4Description,
      img: DestinationWeddingPage.Featurs_4,
    },
    {
      title: pageTexts?.section3Item5Title,
      des: pageTexts?.section3Item5Description,
      img: DestinationWeddingPage.Featurs_5,
    },
    {
      title: pageTexts?.section3Item6Title,
      des: pageTexts?.section3Item6Description,
      img: DestinationWeddingPage.Featurs_6,
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

  const CustomCard = ({ image, title, description, description2, index }) => {
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
            width: isMobile ? "93%" : "40%",
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
            sx={({ breakpoints }) => ({
              fontSize: "16px",
              fontFamily: "Poppins, sans-serif",
              lineHeight: "30px",
              marginTop: isMobile ? "10px" : "20px",
              [breakpoints.down("sm")]: {
                textAlign: "center",
              },
            })}
          >
            {description}
          </MKTypography>
          <MKTypography
            color="black"
            sx={({ breakpoints }) => ({
              fontSize: "16px",
              fontFamily: "Poppins, sans-serif",
              lineHeight: "30px",
              marginTop: isMobile ? "10px" : "20px",
              [breakpoints.down("sm")]: {
                textAlign: "center",
              },
            })}
          >
            {description2}
          </MKTypography>
        </CardContent>
      </Card>
    );
  };

  return (
    <div style={{ backgroundColor: "#FEFDF5" }}>
      <NavBarTwo />
      <div style={{ padding: 15 }}>
        <HeaderThree
          title={pageTexts?.headerTitle}
          description={pageTexts?.headerDescription2}
          subHead={pageTexts?.headerDescription1}
          pageId={PageIDs.MICEDestinationWeddings}
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
                  description2={card.description2}
                  index={index}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/*Wedding packages*/}
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
            id = "package"
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
                  {pageTexts?.section2Button || ""}
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
                {pageTexts?.section2Title || ""}
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={({ breakpoints }) => ({
                  [breakpoints.down("sm")]: {
                    alignSelf: "center",
                  },
                  textAlign: "center",
                  maxWidth: "90%",
                })}
              >
                {pageTexts?.section2Description || ""}
              </MKTypography>
            </Grid>
          </Container>
          <Grid container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "90%",
                margin: "0 auto",
                padding: 2,
              }}
            >
              <Grid container spacing={2} justifyContent="center">
                {otherTravelPcgs.map((item, index) => (
                  <Grid
                    item
                    key={index}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={4} // Adjusted for a 3-column layout
                    sx={{ flexShrink: 0 }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        boxShadow: "none",
                        backgroundColor: "#FEFDF5",
                        borderWidth: 1,
                        borderColor: "#C9C5BA",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardActionArea
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <CardMedia
                          component="img"
                          height={"270px"}
                          image={item?.img}
                          sx={{
                            objectFit: "cover",
                            width: "100%",
                            margin: 0,
                            padding: 0,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                          }}
                          alt="SVG Image"
                        />
                        <CardContent sx={{ flex: 1, padding: 1 }}>
                          <Grid container alignItems="center">
                            <Typography
                              sx={{
                                fontFamily: "Playfair Display, serif",
                                fontSize: "28px",
                                fontWeight: 400,
                                lineHeight: "100%",
                              }}
                              variant="h5"
                            >
                              {item?.title}
                            </Typography>
                          </Grid>
                          <Divider
                            variant="middle"
                            sx={{ height: 2, marginTop: 1, marginBottom: 1 }}
                          />
                          <MKTypography variant="subtitle2">
                            {item?.description}
                          </MKTypography>
                          <Divider
                            variant="middle"
                            sx={{ height: 2, marginTop: 1, marginBottom: 1 }}
                          />
                          {item?.iconSet &&
                            item?.iconSet.map((icon) => {
                              return icon;
                            })}
                          <Divider
                            variant="middle"
                            sx={{ height: 2, marginTop: 1, marginBottom: 1 }}
                          />
                          <Grid
                            container
                            display={"flex"}
                            alignItems="center"
                            justifyContent={"flex-end"}
                          >
                            <MKButton
                              circular
                              variant="contained"
                              color="black"
                              sx={{
                                marginTop: 1,
                                width: isMobile ? "100%" : "35%",
                              }}
                            >
                              {"Inquire Us"}
                            </MKButton>
                          </Grid>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
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
                  {pageTexts?.section3Button || ""}
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
                      alignItems: "center",
                      textAlign: "center",
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
                {pageTexts?.section4Description}
              </MKTypography>
            </Grid>
          </Container>

          <FAQs title="Weddings" />
        </Grid>
        <Footer />
      </div>
    </div>
  );
}

export default Weddings;
