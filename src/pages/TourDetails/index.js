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
import { AboutUsPage } from "constants/images";
import CustomItinarary from "components/CustomItinarary";
import { useUID } from "react-uid";
import Badge from "@kiwicom/orbit-components/lib/Badge";
import {
  UilBedDouble,
  UilParkingSquare,
  UilUtensils,
  UilBuilding,
  UilWifi,
  UilSnowFlake,
  UilArrowUpRight,
  UilMountainsSun,
  UilCalender,
  UilGlassMartini,
  UilShoppingCart,
  UilDiceFive,
  UilCamera,
  UilPlaneDeparture,
  UilPresentation,
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
// import {
//   UilPlaneDeparture,
//   UilTicket,
//   UilUtensils,
//   UilBedDouble,
//   UilBuilding,
//   UilCalender,
//   UilGlassMartini,
//   UilPresentation,
//   UilShoppingCart,
//   UilDiceFive,
//   UilFavorite,
// } from "@iconscout/react-unicons";

function TourDetails() {
  useEffect(() => {}, []);
  const id = useUID();

  const facilities = [
    {
      icon: <UilPlaneDeparture color="#AF4D06" />,
      text: "Return Airport Transfers",
    },
    {
      icon: <UilBuilding color="#AF4D06" />,
      text: "Luxury Hotel Stay",
    },
    {
      icon: <UilUtensils color="#AF4D06" />,
      text: "Breakfast, Lunch & Dinner for 3 days",
    },
    {
      icon: <UilPresentation color="#AF4D06" />,
      text: "Meeting facility for 2 hours",
    },
    {
      icon: <UilCalender color="#AF4D06" />,
      text: "A full day of meeting",
    },
    {
      icon: <UilGlassMartini color="#AF4D06" />,
      text: "Evening cocktail & gala dinner",
    },
    {
      icon: <UilShoppingCart color="#AF4D06" />,
      text: "Half day shopping tour of Colombo",
    },
    {
      icon: <UilDiceFive color="#AF4D06" />,
      text: "Explore casino at Night",
    },
  ];

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
                    Tea Country Escape offers a serene journey through Sri
                    Lanka's lush tea plantations and historical landmarks. Begin
                    with an exploration of the ancient Sigiriya rock fortress
                    and the tranquil Dambulla Cave Temple. Continue to the
                    cultural heart of Kandy, home to the revered Temple of the
                    Tooth Relic, before immersing yourself in the luxury of
                    Hatton's tea bungalows. Conclude your journey with the
                    adventure of white water rafting in Kitulgala and the
                    vibrant sights of Colombo, blending relaxation, adventure,
                    and rich cultural experiences into one unforgettable tour.
                  </MKTypography>
                  <MKTypography
                    variant="h6"
                    fontWeight="regular"
                    color="black"
                    sx={{
                      textAlign: "left",
                      maxWidth: "90%",
                      fontWeight: "bold",
                      marginTop: 3,
                    }}
                  >
                    <li>
                      Tour Name:{" "}
                      <span style={{ fontWeight: 400 }}>
                        A Luxury Escape to the Misty Tea Country
                      </span>
                    </li>
                  </MKTypography>
                  <MKTypography
                    variant="h6"
                    fontWeight="regular"
                    color="black"
                    sx={{
                      textAlign: "left",
                      maxWidth: "90%",
                      fontWeight: "bold",
                    }}
                  >
                    <li>
                      Duration:{" "}
                      <span style={{ fontWeight: 400 }}>6 Days (4 Nights)</span>
                    </li>
                  </MKTypography>
                  <MKTypography
                    variant="h6"
                    fontWeight="regular"
                    color="black"
                    sx={{
                      textAlign: "left",
                      maxWidth: "90%",
                      fontWeight: "bold",
                    }}
                  >
                    <li>
                      Locations:{" "}
                      <span style={{ fontWeight: 400 }}>
                        Sigiriya, Dambulla, Kandy, Hatton, Kithulgala, Colombo
                      </span>
                    </li>
                  </MKTypography>
                  <Divider
                    variant="middle"
                    sx={{
                      height: 2,
                      width: "100%",
                      opacity: 1,
                      backgroundColor: "#C9C5BA",
                    }}
                  />
                  <Grid container>
                    {facilities.map((facility, index) => (
                      <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                        <Grid
                          sx={{
                            flexDirection: "row",
                            display: "flex",
                            alignItems: "center",
                            marginRight: 3,
                          }}
                        >
                          {facility?.icon}
                          <MKTypography
                            color="black"
                            sx={{
                              fontSize: "16px",
                              fontFamily: "Poppins, sans-serif",
                              lineHeight: "30px",
                              marginLeft: 2,
                            }}
                          >
                            {facility?.text}
                          </MKTypography>
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#FEFDF5",
                  marginTop: 2,
                }}
              >
                <MKBox
                  display="flex"
                  alignItems="center"
                  pt={4}
                  pb={4}
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
                    borderRadius: 5,
                    width: "100%",
                  }}
                >
                  <Grid
                    container
                    xs={12}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      paddingX: "15px",
                    }}
                    flexDirection="row"
                    justifyContent="space-between"
                  >
                    <Grid>
                      <MKTypography
                        variant="h1"
                        color="black"
                        sx={({ breakpoints, typography: { size } }) => ({
                          [breakpoints.down("md")]: {
                            fontSize: size["3xl"],
                          },
                          fontSize: "40px",
                          fontFamily: "Poppins, sans-serif",
                          width: "100%",
                          fontWeight: 600,
                          textAlign: "left",
                        })}
                      >
                        {`Limited Time Offer`}
                      </MKTypography>
                      <MKTypography
                        color="black"
                        sx={({ breakpoints, typography: {} }) => ({
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "15px",
                          fontWeight: 400,
                          width: "100%",
                          textAlign: "left",
                        })}
                      >
                        Lorem ipsum dolor sit amet consectetur. Sed integer sed
                        euismod.
                      </MKTypography>
                    </Grid>
                    <Stack direction="row" spacing={1}>
                      <MKButton circular variant="contained" color="black">
                        Find out more
                      </MKButton>
                    </Stack>
                  </Grid>
                </MKBox>
              </Grid>
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
                    Itinerary
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#FEFDF5" }}>
                  <CustomItinarary />
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
                    Packages
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
                </AccordionDetails>
                <Grid sx={{ width: "100%" }}>
                  <Grid>
                    <MKTypography
                      color="black"
                      sx={({ breakpoints, typography: {} }) => ({
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "15px",
                        fontWeight: 600,
                        width: "100%",
                        textAlign: "left",
                      })}
                    >
                      USD 2,200{" "}
                      <span style={{ fontSize: 12, fontWeight: 400 }}>
                        per person sharing DBL
                      </span>
                    </MKTypography>
                    <MKTypography
                      sx={({ breakpoints, typography: {} }) => ({
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "12px",
                        fontWeight: 400,
                        width: "100%",
                        textAlign: "left",
                        textDecoration: "line-through",
                        color: "#8C8679",
                      })}
                    >
                      USD 2,350
                    </MKTypography>
                    <MKTypography
                      sx={({ breakpoints, typography: {} }) => ({
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "12px",
                        fontWeight: 400,
                        width: "100%",
                        textAlign: "left",
                        textDecoration: "line-through",
                        color: "#8C8679",
                      })}
                    >
                      (2 Pax Travelling)
                    </MKTypography>
                    <Divider
                      variant="middle"
                      sx={{
                        height: 2,
                        width: "100%",
                        opacity: 1,
                        backgroundColor: "#EEECE2",
                      }}
                    />
                    <Grid
                      sx={{
                        flexDirection: "row",
                        display: "flex",
                        alignItems: "flex-end",
                        backgroundColor: "red",
                      }}
                    >
                      <MKTypography
                        sx={({ breakpoints, typography: {} }) => ({
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "12px",
                          fontWeight: 400,
                          width: "100%",
                          textAlign: "left",
                          textDecoration: "line-through",
                          color: "#8C8679",
                        })}
                      >
                        (2 Pax Travelling)
                      </MKTypography>
                      <MKButton circular variant="contained" color="black">
                        Selected
                      </MKButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </div>
    </div>
  );
}

export default TourDetails;
