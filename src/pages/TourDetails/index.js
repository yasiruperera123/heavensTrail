import React, { useState, useEffect, useRef, useId } from "react";
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
  ThemeProvider as OrbitThemeProvider,
  defaultTheme,
} from "@kiwicom/orbit-components";
import Itinerary, {
  ItinerarySegment,
  ItineraryStatus,
  ItineraryBadgeList,
  ItinerarySegmentStop,
  ItinerarySegmentDetail,
} from "@kiwicom/orbit-components/lib/Itinerary";
import { useUID } from "react-uid";
import Badge from "@kiwicom/orbit-components/lib/Badge";
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
} from "@iconscout/react-unicons";
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
// import Itinerary from "components/Itinerary";
import Stepper from "components/Test";
import NavBarTwo from "components/NavBarTwo";
import HeaderThree from "layouts/sections/page-sections/page-headers/components/HeaderThree";
import CustomStepper from "components/CustomeStepper";

function TourDetails() {
  useEffect(() => {}, []);
  const id = useUID();

  return (
    <div style={{ backgroundColor: "#FEFDF5" }} id={id}>
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
                    Trip Overview
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
              {/* <Itinerary /> */}
              <Stepper />

              {/* <Itinerary>
                <ItinerarySegment spaceAfter="medium">
                  <ItinerarySegmentStop
                    city="Moscow"
                    station="Sheremetyevo International Airport (SVO)"
                    date="Fri, 19.10"
                    time="14:05"
                  />
                  <ItinerarySegmentDetail
                    icon={<UilWifi size="small" />}
                    duration="2h 30m"
                    summary={
                      <Badge
                        carriers={[
                          {
                            code: "FR",
                            name: "Ryanair",
                          },
                        ]}
                      >
                        Ryanair
                      </Badge>
                    }
                    content={[
                      {
                        title: "Connection Info",
                        items: [
                          {
                            icon: <UilWifi size="small" />,
                            name: "Carrier",
                            value: "Ryanair",
                          },
                          {
                            icon: <UilWifi size="small" />,
                            name: "Connection number",
                            value: "RA 8345",
                          },
                        ],
                      },
                      {
                        title: "Seating Info",
                        items: [
                          {
                            icon: <UilWifi size="small" />,
                            name: "Seat pitch",
                            value: "76cm",
                          },
                          {
                            icon: <UilWifi size="small" />,
                            name: "Seat width",
                            value: "43cm",
                          },
                          {
                            icon: <UilWifi size="small" />,
                            name: "Seat recline",
                            value: "7cm",
                          },
                          {
                            icon: <UilWifi size="small" />,
                            name: "Audio & video on demand",
                            value: "No",
                          },
                          {
                            icon: <UilWifi size="small" />,
                            name: "In-seat power",
                            value: "No",
                          },
                          {
                            icon: <UilWifi size="small" />,
                            name: "Wi-Fi on board",
                            value: "No",
                          },
                        ],
                      },
                    ]}
                  />
                  <ItinerarySegmentStop
                    city="Prague"
                    station="Václav Havel Airport Prague (PRG)"
                    date="Fri, 19.10"
                    time="16:35"
                  />
                </ItinerarySegment>
              </Itinerary> */}
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </div>
    </div>
  );
}

export default TourDetails;
