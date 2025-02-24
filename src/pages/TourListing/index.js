import React, { useState, useEffect } from "react";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import View from "layouts/sections/components/View";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";
import { ReactComponent as LiBeach } from "../../assets/icons/li_beach.svg";
import HeaderTwo from "layouts/sections/page-sections/page-headers/components/HeaderTwo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";
import { fetchTourPackages } from "services/TourServices";
import {
  UilPlaneDeparture,
  UilTicket,
  UilUtensils,
  UilBedDouble,
} from "@iconscout/react-unicons";
import coconutHllImg from "assets/images/homePage/coconut_hill.jpeg";
import sigiriyaImg from "assets/images/homePage/sigiriya.jpeg";
import soulmateImg from "assets/images/homePage/soulmate.jpeg";
import archImg from "assets/images/homePage/9arch.jpeg";
import buddha2Img from "assets/images/homePage/buddha2.jpeg";
import hinduImg from "assets/images/homePage/hindu.jpeg";
import galleImg from "assets/images/homePage/galle.jpeg";
import firBall from "assets/images/homePage/fireball.jpeg";
import NavBar from "components/NavBar";
import { TourListingPage } from "constants/images";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Divider,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { PageIDs } from "constants/pageId";
import {
  fetchPropertyPageTexts,
  fetchPropertyPageImages,
} from "services/PropertyService";
import FAQs from "components/FAQs";

function TourListing() {
  const navigate = useNavigate();
  const [pageTexts, setPageTexts] = useState();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [roundTours, setRoundTours] = useState([]);
  const [dayTours, setDayTours] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState();

  const getPropertyText = async () => {
    // Usage
    fetchPropertyPageTexts(PageIDs.TourListing)
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
    fetchPropertyPageImages(PageIDs.TourListing, 1)
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

  const getTourPackages = async () => {
    // Usage
    fetchTourPackages()
      .then((reponse) => {
        console.log("Fetched data: TOUR ", reponse);
        const roundTours = reponse?.data
          .filter((item) => item.tType === "Round Tour")
          .slice(0, 6);
        setRoundTours(roundTours);
        const dayTours = reponse?.data
          .filter((item) => item.tType === "Day Tour")
          .slice(0, 3);
        setDayTours(dayTours);
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
      });
  };

  useEffect(() => {
    getPropertyText();
    getPropertyImages();
    getTourPackages();
  }, []);

  const path = [
    "Airport",
    "Yala (2N)",
    "Weligama (1N)",
    "Ahungalle (1N)",
    "Airport",
  ];

  const iconSet = [
    <UilPlaneDeparture className="hover-icon" />,
    <UilTicket className="hover-icon" />,
    <UilUtensils className="hover-icon" />,
    <UilBedDouble className="hover-icon" />,
    <LiBeach
      className="hover-svg"
      sx={{
        transition: "stroke 0.3s ease",
      }}
    />,
  ];

  const travelPcgs = [
    {
      title: "Luxury Escape to the Southern Coast",
      duration: "4 Nights, 6 Days",

      img: TourListingPage.Round_Tour_1,
    },
    {
      title: "Luxury Escape to the Misty Tea Country",
      duration: "4 Nights, 6 Days",
      path: [
        "Airport",
        "Sigiriya",
        "Dambulla (2N)",
        "Kandy",
        "Hatton (2N)",
        "Kithulgala",
        "Colombo",
        "Airport",
      ],
      iconSet: [
        <UilPlaneDeparture className="hover-icon" />,
        <UilTicket className="hover-icon" />,
        <UilUtensils className="hover-icon" />,
        <UilBedDouble className="hover-icon" />,
        <LiBeach
          className="hover-svg"
          sx={{
            transition: "stroke 0.3s ease",
          }}
        />,
      ],
      img: TourListingPage.Round_Tour_2,
    },
    {
      title: "Scenic Sri Lanka Trip -Soulmate Special",
      duration: "6 Nights, 7 Days",
      path: [
        "Airport ",
        "Yala (2N)",
        "Weligama (1N)",
        "Ahungalle (1N)",
        "Airport",
      ],
      iconSet: [
        <UilPlaneDeparture className="hover-icon" />,
        <UilTicket className="hover-icon" />,
        <UilUtensils className="hover-icon" />,
        <UilBedDouble className="hover-icon" />,
        <LiBeach
          className="hover-svg"
          sx={{
            transition: "stroke 0.3s ease",
          }}
        />,
      ],
      img: TourListingPage.Round_Tour_3,
    },
    {
      title: "Hillside Trails in Nuwara Eliya, Ella, & Kandy",
      duration: "6 Nights, 7 Days",
      path: [
        "Airport",
        "Yala (2N)",
        "Weligama (1N)",
        "Ahungalle (1N)",
        "Airport",
      ],
      iconSet: [
        <UilPlaneDeparture className="hover-icon" />,
        <UilTicket className="hover-icon" />,
        <UilUtensils className="hover-icon" />,
        <UilBedDouble className="hover-icon" />,
      ],
      img: TourListingPage.Round_Tour_4,
    },
    {
      title: "The Archaeological Marvels Package",
      duration: "6 Nights, 7 Days",
      path: [
        "Airport",
        "Yala (2N)",
        "Weligama (1N)",
        "Ahungalle (1N)",
        "Airport",
      ],
      iconSet: [
        <UilPlaneDeparture className="hover-icon" />,
        <UilTicket className="hover-icon" />,
        <UilUtensils className="hover-icon" />,
        <UilBedDouble className="hover-icon" />,
      ],
      img: TourListingPage.Round_Tour_5,
    },
    {
      title: "Divine Sri Lanka Getaway - Ramayana Edition",
      duration: "6 Nights, 7 Days",
      path: [
        "Airport",
        "Yala (2N)",
        "Weligama (1N)",
        "Ahungalle (1N)",
        "Airport",
      ],
      iconSet: [
        <UilPlaneDeparture className="hover-icon" />,
        <UilTicket className="hover-icon" />,
        <UilUtensils className="hover-icon" />,
        <UilBedDouble className="hover-icon" />,
      ],
      img: TourListingPage.Round_Tour_6,
    },
  ];

  const otherTravelPcgs = [
    {
      title: "Galle Day Tour with Heaven's Trail",
      duration: "4 Nights, 6 Days",
      path: [
        "Airport",
        "Yala (2N)",
        "Weligama (1N)",
        "Ahungalle (1N)",
        "Airport",
      ],
      iconSet: [
        <UilPlaneDeparture className="hover-icon" />,
        <UilTicket className="hover-icon" />,
        <UilUtensils className="hover-icon" />,
        <UilBedDouble className="hover-icon" />,
        <LiBeach
          className="hover-svg"
          sx={{
            transition: "stroke 0.3s ease",
          }}
        />,
      ],
      img: TourListingPage.Day_Tour_1,
    },
    {
      title: "Visit Kandy for Temple of tooth & Vibrant Perahera",
      duration: "4 Nights, 6 Days",
      path: ["Airport", "Sigiriya", "Dambulla", "Hatton"],
      iconSet: [
        <UilPlaneDeparture className="hover-icon" />,
        <UilTicket className="hover-icon" />,
        <UilUtensils className="hover-icon" />,
        <UilBedDouble className="hover-icon" />,
        <LiBeach
          className="hover-svg"
          sx={{
            transition: "stroke 0.3s ease",
          }}
        />,
      ],
      img: TourListingPage.Day_Tour_2,
    },
    {
      title: "Experience the thrill of Colombo's casino scene",
      duration: "6 Nights, 7 Days",
      path: [
        "Airport",
        "Yala (2N)",
        "Weligama (1N)",
        "Ahungalle (1N)",
        "Airport",
      ],
      iconSet: [
        <UilPlaneDeparture className="hover-icon" />,
        <UilTicket className="hover-icon" />,
        <UilUtensils className="hover-icon" />,
        <UilBedDouble className="hover-icon" />,
        <LiBeach
          className="hover-svg"
          sx={{
            transition: "stroke 0.3s ease",
          }}
        />,
      ],
      img: TourListingPage.Day_Tour_3,
    },
  ];

  const btnArray = [
    {
      title: pageTexts?.headerButton1,
    },
  ];

  return (
    <div style={{ backgroundColor: "#FEFDF5" }}>
      <NavBar />
      <div style={{ padding: 15 }}>
        <HeaderTwo
          buttonArray={btnArray}
          title={pageTexts?.headerTitle}
          backgroundImage={TourListingPage.Header}
          pageId={PageIDs.TourListing}
        />
      </div>
      {/* Explore our travel Packages */}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "16px",
          paddingRight: "16px",
          marginBottom: "40px",
          backgroundColor: "#FEFDF5",
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
                {pageTexts?.section1Button}
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
              {pageTexts?.section1Title}
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ textAlign: "center", maxWidth: "90%" }}
            >
              {pageTexts?.section1Description}
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
              {roundTours.map((item, index) => (
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
                      maxHeight: "745px",
                      boxShadow: "none",
                      backgroundColor: "#FEFDF5",
                      borderWidth: 1,
                      borderColor: "#C9C5BA",
                      display: "flex",
                      flexDirection: "column",
                      "&:hover": {
                        backgroundColor: "#EEECE2",
                        "& .hover-button": {
                          backgroundColor: "#AF4D06",
                          color: "#FEFDF5",
                        },
                        "& .hover-icon": {
                          color: "#929E03",
                        },
                        "& .hover-svg path, & .hover-svg line, & .hover-svg rect, & .hover-svg circle":
                          {
                            stroke: "#929E03",
                          },
                      },
                    }}
                  >
                    <CardActionArea
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height={"250px"}
                        image={item?.tour_pkg_image_urls[0]?.imgUrl}
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
                        <MKButton
                          className="hover-button"
                          style={{ marginTop: "5px", marginBottom: "5px" }}
                          size="small"
                          circular
                          variant="outlined"
                          color="black"
                        >
                          {item?.duration} {item?.durationUnit}
                        </MKButton>

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
                          sx={{
                            backgroundColor: "##C9C5BA",
                            height: "2px",
                            margin: 1,
                          }}
                        />
                        <Grid container alignItems="center">
                          {path &&
                            path?.length > 0 &&
                            path.map((elemant, index) => {
                              return (
                                <Grid
                                  display={"flex"}
                                  alignItems={"center"}
                                  flexDirection={"row"}
                                  key={index}
                                >
                                  <MKTypography variant="subtitle2">
                                    {elemant}
                                  </MKTypography>
                                  {index < path.length - 1 && (
                                    <Icon sx={{ fontWeight: "bold" }}>
                                      arrow_forward
                                    </Icon>
                                  )}
                                </Grid>
                              );
                            })}
                        </Grid>
                        <Divider
                          variant="middle"
                          sx={{
                            backgroundColor: "##C9C5BA",
                            height: "2px",
                            margin: 1,
                          }}
                        />
                        {iconSet &&
                          iconSet.map((icon) => {
                            return icon;
                          })}
                        <Divider
                          variant="middle"
                          sx={{
                            backgroundColor: "##C9C5BA",
                            height: "2px",
                            margin: 1,
                          }}
                        />
                        <MKTypography variant="subtitle2">
                          Pricing starts at
                        </MKTypography>
                        <Grid container display={"flex"} alignItems="center">
                          <MKTypography
                            sx={{
                              fontWeight: "700",
                              marginRight: 1,
                              fontFamily: "Playfair Display, serif",
                              fontSize: "20px",
                            }}
                            variant="body2"
                            color="text.secondary"
                          >
                            {item?.Currency?.code} {item?.price}
                          </MKTypography>
                          <MKTypography
                            variant="subtitle2"
                            color="text.secondary"
                            mt={0.9}
                          >
                            + taxes and charges
                          </MKTypography>
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

      {/* Discover Sri Lanka Through Our Travelers' Eyes SECTION */}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "16px",
          paddingRight: "16px",
          marginBottom: "40px",
          backgroundColor: "#EEECE2",
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
              {dayTours && dayTours.length > 0
                ? dayTours.map((item, index) => (
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
                          backgroundColor: "#EEECE2",
                          borderWidth: 1,
                          borderColor: "#C9C5BA",
                          display: "flex",
                          flexDirection: "column",
                          "&:hover": {
                            backgroundColor: "#FEFDF5",
                            "& .hover-icon": {
                              color: "#929E03",
                            },
                            "& .hover-svg path, & .hover-svg line, & .hover-svg rect, & .hover-svg circle":
                              {
                                stroke: "#929E03",
                              },
                          },
                        }}
                      >
                        <CardActionArea
                          sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                          onClick={() => navigate("/pages/tour-details")}
                        >
                          <CardMedia
                            component="img"
                            height={"300px"}
                            image={item?.tour_pkg_image_urls[0]?.imgUrl}
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
                            <MKButton
                              style={{ marginTop: "5px", marginBottom: "5px" }}
                              size="small"
                              circular
                              variant="outlined"
                              color="black"
                            >
                              {item?.duration} {item?.durationUnit}
                            </MKButton>

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
                              sx={{
                                backgroundColor: "##C9C5BA",
                                height: "2px",
                                margin: 1,
                              }}
                            />
                            <Grid container alignItems="center">
                              {path &&
                                path.length > 0 &&
                                path.map((elemant, index) => {
                                  return (
                                    <Grid
                                      display={"flex"}
                                      alignItems={"center"}
                                      flexDirection={"row"}
                                      key={index}
                                    >
                                      <MKTypography variant="subtitle2">
                                        {elemant}
                                      </MKTypography>
                                      {index < path.length - 1 && (
                                        <Icon sx={{ fontWeight: "bold" }}>
                                          arrow_forward
                                        </Icon>
                                      )}
                                    </Grid>
                                  );
                                })}
                            </Grid>
                            <Divider
                              variant="middle"
                              sx={{
                                backgroundColor: "##C9C5BA",
                                height: "2px",
                                margin: 1,
                              }}
                            />
                            {iconSet &&
                              iconSet.map((icon) => {
                                return icon;
                              })}
                            <Divider
                              variant="middle"
                              sx={{
                                backgroundColor: "##C9C5BA",
                                height: "2px",
                                margin: 1,
                              }}
                            />
                            <MKTypography variant="subtitle2">
                              Pricing starts at
                            </MKTypography>
                            <Grid
                              container
                              display={"flex"}
                              alignItems="center"
                            >
                              <MKTypography
                                sx={{
                                  fontWeight: "700",
                                  marginRight: 1,
                                  fontFamily: "Playfair Display, serif",
                                  fontSize: "20px",
                                }}
                                variant="body2"
                                color="text.secondary"
                              >
                                {item?.Currency?.code} {item?.price}
                              </MKTypography>
                              <MKTypography
                                variant="subtitle2"
                                color="text.secondary"
                                mt={0.9}
                              >
                                + taxes and charges
                              </MKTypography>
                            </Grid>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))
                : null}
            </Grid>
          </Box>
        </Grid>
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

        <FAQs title="TourListing" />
      </Grid>
      <Footer />
    </div>
  );
}

export default TourListing;
