import React, { useState, useEffect, useRef } from "react";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import View from "layouts/sections/components/View";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";
import { ReactComponent as Walking } from "assets/icons/la_walking.svg";
import HeaderTwo from "layouts/sections/page-sections/page-headers/components/HeaderTwo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MKBox from "components/MKBox";
import footerBg from "assets/images/homePage/beach.jpeg";
import NavBar from "components/NavBar";
import { ReactComponent as LiBeach } from "../../assets/icons/li_beach.svg";
import {
  UilBedDouble,
  UilParkingSquare,
  UilUtensils,
  UilWifi,
  UilSnowFlake,
  UilArrowUpRight,
  UilMountainsSun,
  UilCamera,
  UilPlaneDeparture,
  UilTicket,
  UilAngleLeftB,
  UilAngleRightB,
  UilAngleUp,
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
  Rating,
} from "@mui/material";
import Footer from "components/Footer";
import galleImg from "assets/images/homePage/galle.jpeg";
import firBall from "assets/images/homePage/fireball.jpeg";
import { AccomadationPage } from "constants/images";
import { TourListingPage } from "constants/images";
import Itinerary from "components/Itinerary";
import NavBarTwo from "components/NavBarTwo";
import HeaderThree from "layouts/sections/page-sections/page-headers/components/HeaderThree";

function DestinationDetails() {
  const scrollContainerRef = useRef(null);
  const firstItemRef = useRef(null);
  const lastItemRef = useRef(null);
  const [isExpaned, setIsExpaned] = useState(true);
  const cardsData = [
    {
      title: "Little Adam’s Peak",
      image1: AccomadationPage.Hotel_Img_1,
      description:
        "An early morning hike to Ella Rock sounds is worthy to try out! The sunrise in the mountain gap is absolutely breath-taking. Just a heads up, though - the hike to Ella Rock typically takes closer to half an hour,  with comfortable walking shoes, a light jacket in case it's chilly, and plenty of water and snacks to keep you energized along the way. Don't forget your camera to capture the panoramic views of the valley below.",
      rating: "367 reviews",
      rateValue: 5,
      btnText: "View On Map",
    },
    {
      title: "Ravana Falls",
      image1: AccomadationPage.Hotel_Img_1,
      description:
        "An early morning hike to Ella Rock sounds is worthy to try out! The sunrise in the mountain gap is absolutely breath-taking. Just a heads up, though - the hike to Ella Rock typically takes closer to half an hour,  with comfortable walking shoes, a light jacket in case it's chilly, and plenty of water and snacks to keep you energized along the way. Don't forget your camera to capture the panoramic views of the valley below.",
      rating: "367 reviews",
      rateValue: 5,
      btnText: "View On Map",
    },
    {
      title: "Nine Arches Bridge",
      image1: AccomadationPage.Hotel_Img_1,
      description:
        "An early morning hike to Ella Rock sounds is worthy to try out! The sunrise in the mountain gap is absolutely breath-taking. Just a heads up, though - the hike to Ella Rock typically takes closer to half an hour,  with comfortable walking shoes, a light jacket in case it's chilly, and plenty of water and snacks to keep you energized along the way. Don't forget your camera to capture the panoramic views of the valley below.",
      rating: "367 reviews",
      rateValue: 5,
      btnText: "View On Map",
    },
  ];

  const cardsData2 = [
    {
      title: "Hiking and Trekking",
      image1: AccomadationPage.Hotel_Img_1,
      description:
        "An early morning hike to Ella Rock sounds is worthy to try out! The sunrise in the mountain gap is absolutely breath-taking.  Ella offers a variety of hiking and trekking opportunities, from the challenging climb to Ella Rock to the more leisurely walk up Little Adam's Peak.",

      activities: [
        {
          text: "Hiking",
          icon: <Walking />,
        },
        {
          text: "Scenery ",
          icon: <UilMountainsSun />,
        },
        {
          text: "photography",
          icon: <UilCamera />,
        },
      ],
    },
    {
      title: "Tea Plantation Tours",
      image1: AccomadationPage.Hotel_Img_1,
      description:
        "An early morning hike to Ella Rock sounds is worthy to try out! The sunrise in the mountain gap is absolutely breath-taking.  Ella offers a variety of hiking and trekking opportunities, from the challenging climb to Ella Rock to the more leisurely walk up Little Adam's Peak.",

      activities: [
        {
          text: "Hiking",
          icon: <Walking />,
        },
        {
          text: "Scenery ",
          icon: <UilMountainsSun />,
        },
        {
          text: "photography",
          icon: <UilCamera />,
        },
      ],
    },
    {
      title: "Zip Lining",
      image1: AccomadationPage.Hotel_Img_1,
      description:
        "An early morning hike to Ella Rock sounds is worthy to try out! The sunrise in the mountain gap is absolutely breath-taking.  Ella offers a variety of hiking and trekking opportunities, from the challenging climb to Ella Rock to the more leisurely walk up Little Adam's Peak.",

      activities: [
        {
          text: "Hiking",
          icon: <Walking />,
        },
        {
          text: "Scenery ",
          icon: <UilMountainsSun />,
        },
        {
          text: "photography",
          icon: <UilCamera />,
        },
      ],
    },
  ];

  const meetingPackageData = [
    {
      image: AccomadationPage.Hotel_Img_1,
      title: "The vibrant city of Colombo",
      duration: "3 Nights, 4 Days",
      facilities: [
        {
          icon: <UilPlaneDeparture />,
          text: "Return Airport Transfers",
        },
        {
          icon: <UilTicket />,
          text: "Luxury Hotel Stay",
        },
        {
          icon: <UilUtensils />,
          text: "Breakfast, Lunch & Dinner for 3 days",
        },
        {
          icon: <UilBedDouble />,
          text: "Meeting facility for 2 hours",
        },
        {
          icon: <LiBeach />,
          text: "A full day of meeting",
        },
      ],
      packages: [
        {
          key: "standard",
          value: "Standard",
        },
        {
          key: "deluxe",
          value: "Deluxe",
        },
        {
          key: "premium",
          value: "Premium",
        },
      ],
      packageObj: [
        {
          paxCount: "25 - 49",
          price: "USD 219.99",
          type: "Per Person Sharing a TWIN Room",
        },
        {
          paxCount: "50 - 99",
          price: "USD 329.99",
          type: "Per Person Sharing a TWIN Room",
        },
        {
          paxCount: "100 - 149",
          price: "USD 439.99",
          type: "Per Person Sharing a TWIN Room",
        },
      ],
    },
    {
      image: AccomadationPage.Hotel_Img_1,
      title: "The vibrant city of Colombo",
      duration: "3 Nights, 4 Days",
      facilities: [
        {
          icon: <UilPlaneDeparture />,
          text: "Return Airport Transfers",
        },
        {
          icon: <UilTicket />,
          text: "Luxury Hotel Stay",
        },
        {
          icon: <UilUtensils />,
          text: "Breakfast, Lunch & Dinner for 3 days",
        },
        {
          icon: <UilBedDouble />,
          text: "Meeting facility for 2 hours",
        },
        {
          icon: <LiBeach />,
          text: "A full day of meeting",
        },
      ],
      packages: [
        {
          key: "standard",
          value: "Standard",
        },
        {
          key: "deluxe",
          value: "Deluxe",
        },
        {
          key: "premium",
          value: "Premium",
        },
      ],
      packageObj: [
        {
          paxCount: "25 - 49",
          price: "USD 219.99",
          type: "Per Person Sharing a TWIN Room",
        },
        {
          paxCount: "50 - 99",
          price: "USD 329.99",
          type: "Per Person Sharing a TWIN Room",
        },
        {
          paxCount: "100 - 149",
          price: "USD 439.99",
          type: "Per Person Sharing a TWIN Room",
        },
      ],
    },
    {
      image: AccomadationPage.Hotel_Img_1,
      title: "The vibrant city of Colombo",
      duration: "3 Nights, 4 Days",
      facilities: [
        {
          icon: <UilPlaneDeparture />,
          text: "Return Airport Transfers",
        },
        {
          icon: <UilTicket />,
          text: "Luxury Hotel Stay",
        },
        {
          icon: <UilUtensils />,
          text: "Breakfast, Lunch & Dinner for 3 days",
        },
        {
          icon: <UilBedDouble />,
          text: "Meeting facility for 2 hours",
        },
        {
          icon: <LiBeach />,
          text: "A full day of meeting",
        },
      ],
      packages: [
        {
          key: "standard",
          value: "Standard",
        },
        {
          key: "deluxe",
          value: "Deluxe",
        },
        {
          key: "premium",
          value: "Premium",
        },
      ],
      packageObj: [
        {
          paxCount: "25 - 49",
          price: "USD 219.99",
          type: "Per Person Sharing a TWIN Room",
        },
        {
          paxCount: "50 - 99",
          price: "USD 329.99",
          type: "Per Person Sharing a TWIN Room",
        },
        {
          paxCount: "100 - 149",
          price: "USD 439.99",
          type: "Per Person Sharing a TWIN Room",
        },
      ],
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check the window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); // You can adjust the width as per your requirement
    };
    setIsExpaned(true);
    handleResize(); // Check the initial window size
    window.addEventListener("resize", handleResize); // Add resize event listener
    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToLeft = () => {
    // Scroll to the left by 300px, you can adjust this value as needed
    if (firstItemRef.current) {
      firstItemRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  };

  const scrollToRight = () => {
    if (lastItemRef.current) {
      lastItemRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  };

  const CustomCard = ({ item, index }) => {
    const isEven = index % 2 === 0;

    return (
      <Grid>
        <Grid
          sx={{
            padding: 2,
            backgroundColor: "#FEFDF5",
            borderRadius: 5,
            width: "100%",
          }}
        >
          <Grid
            sx={{
              border: "solid",
              borderWidth: 1,
              borderColor: "#C9C5BA",
              padding: 1,
              borderRadius: "15px",
            }}
          >
            <Card
              sx={({ breakpoints }) => ({
                display: "flex",
                flexDirection: "row",
                borderRadius: "15px",
                boxShadow: "none",
                backgroundColor: "#FEFDF5",
                flex: 1,
                [breakpoints.down("sm")]: {
                  flexDirection: "column",
                  alignItems: "center",
                },
              })}
            >
              <CardMedia
                component="img"
                alt="Image"
                image={item?.image1}
                title="title"
                sx={({ breakpoints }) => ({
                  borderRadius: "15px",
                  width: "270px",
                  height: "270px",
                  margin: 0,
                  [breakpoints.down("sm")]: {
                    width: "100%",
                    height: "auto",
                  },
                })}
              />

              <CardContent
                sx={({ breakpoints }) => ({
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignSelf: "center",
                  backgroundColor: "#FEFDF5",
                  flex: 1,
                  minHeight: "270px",
                  [breakpoints.down("sm")]: {
                    height: "auto",
                  },
                })}
              >
                <Grid
                  container
                  display="flex"
                  flexDirection="row"
                  lg={12}
                  sx={{
                    justifyContent: "space-between",
                  }}
                >
                  <MKTypography
                    variant="h1"
                    color="black"
                    sx={({ breakpoints, typography: { size } }) => ({
                      [breakpoints.down("md")]: {
                        fontSize: size["3xl"],
                      },
                      fontFamily: "Playfair Display, serif",
                      fontSize: "25px",
                      fontWeight: 400,
                    })}
                  >
                    {item?.title}
                  </MKTypography>
                  <Grid
                    display="flex"
                    flexDirection="row"
                    sx={{ alignItems: "center" }}
                  >
                    <MKTypography
                      color="black"
                      sx={{
                        fontSize: "16px",
                        fontFamily: "Poppins, sans-serif",
                        lineHeight: "30px",
                      }}
                    >
                      {item?.rating}
                    </MKTypography>
                    <Rating name="read-only" value={item?.rateValue} readOnly />
                  </Grid>
                </Grid>

                <Grid
                  container
                  mt={3}
                  display="flex"
                  flexDirection="row"
                  lg={12}
                >
                  <MKTypography
                    variant="h6"
                    fontWeight="regular"
                    color="black"
                    sx={{
                      textAlign: "left",
                      maxWidth: "100%",
                      lineHeight: "19.5px",
                    }}
                  >
                    {item?.description}
                  </MKTypography>
                  <Divider
                    variant="middle"
                    sx={{
                      height: 2,
                      width: "100%",
                      backgroundColor: "#C9C5BA",
                      margin: 1,
                    }}
                  />
                </Grid>

                <Grid
                  container
                  display="flex"
                  justifyContent={"flex-end"}
                  lg={12}
                >
                  <MKButton
                    circular
                    variant="contained"
                    color="black"
                    sx={{
                      paddingLeft: 5,
                      paddingRight: 5,
                    }}
                  >
                    {item?.btnText}
                    {<UilArrowUpRight />}
                  </MKButton>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const CustomCard2 = ({ item, index }) => {
    const isEven = index % 2 === 0;

    return (
      <Grid>
        <Grid
          sx={{
            padding: 2,
            backgroundColor: "#FEFDF5",
            borderRadius: 5,
            width: "100%",
          }}
        >
          <Grid
            sx={{
              border: "solid",
              borderWidth: 1,
              borderColor: "#C9C5BA",
              padding: 1,
              borderRadius: "15px",
            }}
          >
            <Card
              sx={({ breakpoints }) => ({
                display: "flex",
                flexDirection: "row",
                borderRadius: "15px",
                boxShadow: "none",
                backgroundColor: "#FEFDF5",
                flex: 1,
                [breakpoints.down("sm")]: {
                  flexDirection: "column",
                  alignItems: "center",
                },
              })}
            >
              <CardMedia
                component="img"
                alt="Image"
                image={item?.image1}
                title="title"
                sx={({ breakpoints }) => ({
                  borderRadius: "15px",
                  width: "180px",
                  height: "180px",
                  margin: 0,
                  [breakpoints.down("sm")]: {
                    width: "100%",
                    height: "auto",
                  },
                })}
              />

              <CardContent
                sx={({ breakpoints }) => ({
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignSelf: "center",
                  backgroundColor: "#FEFDF5",
                  flex: 1,
                  minHeight: "180px",
                  [breakpoints.down("sm")]: {
                    height: "auto",
                  },
                })}
              >
                <MKTypography
                  variant="h1"
                  color="black"
                  sx={({ breakpoints, typography: { size } }) => ({
                    [breakpoints.down("md")]: {
                      fontSize: size["3xl"],
                    },
                    fontFamily: "Playfair Display, serif",
                    fontSize: "25px",
                    fontWeight: 400,
                  })}
                >
                  {item?.title}
                </MKTypography>

                <MKTypography
                  variant="h6"
                  fontWeight="regular"
                  color="black"
                  mt={1}
                  sx={{
                    textAlign: "left",
                    maxWidth: "100%",
                    lineHeight: "19.5px",
                  }}
                >
                  {item?.description}
                </MKTypography>
                <Divider
                  variant="middle"
                  sx={{
                    height: 2,
                    width: "100%",
                    backgroundColor: "#C9C5BA",
                    margin: 1,
                  }}
                />

                <Grid container sx={{ margin: 0 }}>
                  {item?.activities.map((activity, index) => (
                    <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                      <Grid
                        sx={{
                          flexDirection: "row",
                          display: "flex",
                          alignItems: "center",
                          marginRight: 3,
                        }}
                      >
                        {activity?.icon}
                        <MKTypography
                          color="black"
                          sx={{
                            fontSize: "16px",
                            fontFamily: "Poppins, sans-serif",
                            lineHeight: "30px",
                            marginLeft: 2,
                          }}
                        >
                          {activity?.text}
                        </MKTypography>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const travelPcgs = [
    {
      title: "Luxury Escape to the Southern Coast",
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

  return (
    <div style={{ backgroundColor: "#FEFDF5" }}>
      <NavBarTwo />
      <div style={{ padding: 15 }}>
        <HeaderThree
          title="Accommodation Options with Heaven’s Trail"
          backgroundImage={AccomadationPage.Header}
          subHead={"Hill Country Destinations"}
        />
      </div>
      <div style={{ overflowX: "hidden" }}>
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
              <Accordion
                defaultExpanded={isExpaned}
                disableGutters // Removes padding and default spacing
                sx={{
                  boxShadow: "none",
                  "&:before": { display: "none" }, // Removes the default divider line
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id={`panel1-header-1`}
                  sx={{
                    boxShadow: "none",
                    backgroundColor: "#FEFDF5",
                    margin: 0,
                  }}
                >
                  <MKTypography
                    variant="h1"
                    color="black"
                    sx={({ breakpoints, typography: { size } }) => ({
                      [breakpoints.down("md")]: {
                        fontSize: size["3xl"],
                        textAlign: "center",
                      },
                      fontFamily: "Playfair Display, serif",
                      fontSize: "40px",
                      fontWeight: 400,
                      textAlign: "left",
                      marginBottom: 2,
                      marginTop: 4,
                    })}
                  >
                    Destination Overview
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#FEFDF5" }}>
                  <Divider
                    variant="middle"
                    sx={{
                      height: 2,
                      width: "100%",
                      opacity: 1,
                      backgroundColor: "#C9C5BA",
                    }}
                  />
                  <MKTypography
                    variant="h6"
                    fontWeight="regular"
                    color="black"
                    sx={{ textAlign: "left", maxWidth: "90%" }}
                  >
                    Ella is one of the most beautiful and picturesque
                    destinations in Sri Lanka, and it is renowned for its
                    natural beauty and stunning landscapes. It is located in the
                    central highlands of Sri Lanka and is surrounded by misty
                    hills covered with lush green tea plantations and cloud
                    forests.
                  </MKTypography>
                  <MKTypography
                    variant="h6"
                    fontWeight="regular"
                    color="black"
                    mt={2}
                    sx={{ textAlign: "left", maxWidth: "90%" }}
                  >
                    The town has a cooler climate compared to the surrounding
                    lowlands, and visitors can enjoy the fresh mountain air and
                    the scenic beauty of the area. One of the most popular
                    attractions in Ella is the Ella Gap, which offers
                    breathtaking views of the southern plains of Sri Lanka.
                  </MKTypography>
                  <MKTypography
                    variant="h6"
                    fontWeight="regular"
                    color="black"
                    mt={2}
                    sx={{ textAlign: "left", maxWidth: "90%" }}
                  >
                    Additionally, there are many other things to see and do in
                    Ella, including hiking to Little Adam's Peak, visiting the
                    Rawana Ella waterfall, and exploring the Nine Arch Bridge.
                    Ella is a must-visit destination for nature lovers,
                    adventure seekers, and anyone who wants to experience the
                    natural beauty and charm of Sri Lanka.
                  </MKTypography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                disableGutters // Removes padding and default spacing
                sx={{
                  boxShadow: "none",
                  "&:before": { display: "none" }, // Removes the default divider line
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id={`panel1-header-1`}
                  sx={{ boxShadow: "none", backgroundColor: "#FEFDF5" }}
                >
                  <MKTypography
                    variant="h1"
                    color="black"
                    sx={({ breakpoints, typography: { size } }) => ({
                      [breakpoints.down("md")]: {
                        fontSize: size["3xl"],
                        textAlign: "center",
                      },
                      fontFamily: "Playfair Display, serif",
                      fontSize: "40px",
                      fontWeight: 400,
                      textAlign: "left",
                      marginBottom: 2,
                      marginTop: 4,
                    })}
                  >
                    Sight Seeing at Ella
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#FEFDF5" }}>
                  <Divider
                    variant="middle"
                    sx={{
                      height: 2,
                      width: "100%",
                      opacity: 1,
                      backgroundColor: "#C9C5BA",
                    }}
                  />
                  {cardsData?.map((item, index) => {
                    return <CustomCard item={item} index={index} />;
                  })}
                </AccordionDetails>
              </Accordion>
              <Accordion
                disableGutters // Removes padding and default spacing
                sx={{
                  boxShadow: "none",
                  "&:before": { display: "none" }, // Removes the default divider line
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id={`panel1-header-1`}
                  sx={{ boxShadow: "none", backgroundColor: "#FEFDF5" }}
                >
                  <MKTypography
                    variant="h1"
                    color="black"
                    sx={({ breakpoints, typography: { size } }) => ({
                      [breakpoints.down("md")]: {
                        fontSize: size["3xl"],
                        textAlign: "center",
                      },
                      fontFamily: "Playfair Display, serif",
                      fontSize: "40px",
                      fontWeight: 400,
                      textAlign: "left",
                      marginBottom: 2,
                      marginTop: 4,
                    })}
                  >
                    Activities at Ella
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#FEFDF5" }}>
                  <Divider
                    variant="middle"
                    sx={{
                      height: 2,
                      width: "100%",
                      opacity: 1,
                      backgroundColor: "#C9C5BA",
                    }}
                  />
                  {cardsData2?.map((item, index) => {
                    return <CustomCard2 item={item} index={index} />;
                  })}
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
          {/* <Accordion
            disableGutters // Removes padding and default spacing
            sx={{
              boxShadow: "none",
              "&:before": { display: "none" },
              backgroundColor: "#FEFDF5",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id={`panel1-header-1`}
              sx={({ breakpoints, typography: { size } }) => ({
                boxShadow: "none",
                backgroundColor: "#FEFDF5",
                width: "82%",
                paddingLeft: "19%",
                [breakpoints.down("sm")]: {
                  width: "100%", // Full width on mobile
                  paddingLeft: "0%", // No padding on mobile
                  display: "flex",
                  justifyContent: "center", // Center the content
                },
              })}
            ></AccordionSummary>
            <AccordionDetails
              sx={({ breakpoints }) => ({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                backgroundColor: "#FEFDF5",
                overflowX: "scroll", // Enable horizontal scrolling on web
                padding: 2,
                "&::-webkit-scrollbar": {
                  display: "none", // Hide scrollbar in WebKit browsers
                },
                scrollbarWidth: "none", // Hide scrollbar in Firefox
                [breakpoints.down("sm")]: {
                  overflowX: "unset", // Disable horizontal scrolling in mobile
                  overflowY: "scroll", // Enable vertical scrolling for mobile
                },
              })}
            ></AccordionDetails>
          </Accordion> */}

          <Grid lg={8}>
            <Grid
              lg={12}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 2,
              }}
            >
              <MKTypography
                variant="h1"
                color="black"
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                    textAlign: "left",
                  },
                  [breakpoints.down("sm")]: {
                    fontSize: size["2xl"],
                    textAlign: "left",
                  },
                  fontFamily: "Playfair Display, serif",
                  fontSize: "40px",
                  fontWeight: 400,
                  textAlign: "left",

                  marginBottom: 2,
                  marginTop: 4,
                })}
              >
                Tours Including This Destination
              </MKTypography>
              <UilAngleUp />
            </Grid>
            <Divider
              variant="middle"
              sx={{
                backgroundColor: "#C9C5BA",
                height: "2px",
                fontWeight: "bold",
                margin: 1,
                marginBottom: 4,
              }}
            />
          </Grid>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Grid
              ref={scrollContainerRef}
              container
              spacing={2}
              sx={({ breakpoints }) => ({
                overflowX: "scroll", // Horizontal scrolling on larger screens
                paddingX: 20,
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                scrollbarWidth: "none",
                flexWrap: "nowrap",
                width: "100%",
                gap: 2,
                [breakpoints.down("sm")]: {
                  flexDirection: "column", // Stack cards vertically on mobile
                  overflowX: "unset",
                  overflowY: "scroll",
                  paddingX: 1,
                },
              })}
            >
              {travelPcgs.map((item, index) => (
                <Grid
                  ref={
                    index === 0
                      ? firstItemRef
                      : index === travelPcgs.length - 1
                      ? lastItemRef
                      : null
                  }
                  item
                  key={index}
                  sx={({ breakpoints }) => ({
                    flexShrink: 0,
                    width: "calc(100% / 2)",
                    backgroundColor: "#FEFDF5",
                    [breakpoints.down("sm")]: {
                      width: "100%", // Full width per card on mobile
                      marginBottom: 2,
                    },
                  })}
                >
                  <Card
                    sx={({ breakpoints }) => ({
                      display: "flex",
                      flexDirection: "row",
                      borderRadius: "15px",
                      boxShadow: "none",
                      backgroundColor: "#FEFDF5",
                      border: "solid",
                      borderWidth: 1,
                      borderColor: "#C9C5BA",
                      [breakpoints.down("sm")]: {
                        flexDirection: "column", // Stack content on mobile
                        alignItems: "center",
                      },
                    })}
                  >
                    <CardActionArea
                      sx={({ breakpoints }) => ({
                        display: "flex",
                        flexDirection: "row",
                        [breakpoints.down("sm")]: {
                          flexDirection: "column", // Stack image and content on mobile
                        },
                      })}
                    >
                      <CardMedia
                        component="img"
                        height="290px"
                        image={item?.img}
                        sx={({ breakpoints }) => ({
                          objectFit: "cover",
                          width: "35%",
                          margin: 0,
                          padding: 0,
                          borderTopRightRadius: 0,
                          borderBottomRightRadius: 0,
                          [breakpoints.down("sm")]: {
                            width: "100%", // Full width for image on mobile
                          },
                        })}
                        alt="Image"
                      />
                      <CardContent
                        sx={({ breakpoints }) => ({
                          flex: 1,
                          marginX: 2,
                          padding: 0,
                          [breakpoints.down("sm")]: {
                            marginX: 1,
                          },
                        })}
                      >
                        <MKButton
                          className="hover-button"
                          style={{ marginTop: "5px", marginBottom: "5px" }}
                          size="small"
                          circular
                          variant="outlined"
                          color="black"
                        >
                          {item?.duration}
                        </MKButton>

                        <Grid container alignItems="center">
                          <Typography
                            sx={({ breakpoints }) => ({
                              fontFamily: "Playfair Display, serif",
                              fontSize: "28px",
                              fontWeight: 400,
                              lineHeight: "100%",
                              [breakpoints.down("sm")]: {
                                fontSize: "22px", // Smaller text on mobile
                              },
                            })}
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
                          {item?.path &&
                            item?.path.length > 0 &&
                            item?.path.map((elemant, index) => {
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
                                  {index < item.path.length - 1 && (
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
                        {item?.iconSet && item?.iconSet.map((icon) => icon)}
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
                            AUD 1600.00
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

            <Grid
              mt={2}
              sx={{
                flex: 1,
                flexDirection: "row",
                display: "flex",
              }}
            >
              <Grid sx={{ marginRight: 4 }}>
                <UilAngleLeftB onClick={() => scrollToLeft()} />
              </Grid>
              <Grid>
                <UilAngleRightB onClick={() => scrollToRight()} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Footer />
      </div>
    </div>
  );
}

export default DestinationDetails;
