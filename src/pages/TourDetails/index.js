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
import FloatingOfferCard from "./FloatingOfferCard";
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
  UilCheck,
  UilTimes,
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

  const packages = [
    {
      amount: "USD 2,200",
      amountBefore: "USD 2,350",
      paxCount: "(2 Pax Travelling)",
      reviewValue: 5,
      reviewText: "4.9 (370)",
    },
    {
      amount: "USD 2,050",
      amountBefore: "USD 2,150",
      paxCount: "(4 Pax Travelling)",
      reviewValue: 5,
      reviewText: "4.9 (370)",
    },
    {
      amount: "USD 1,990",
      amountBefore: "USD 2,100",
      paxCount: "(6 Pax Travelling)",
      reviewValue: 5,
      reviewText: "4.9 (370)",
    },
  ];

  const inclusions = [
    "Accommodation at the hotels mentioned or similar in Standard Rooms",
    "Breakfast during tour as indicated on the program",
    "Lunch, Afternoon tea, dinner, Selected Spirits, cocktails, Tea Experience Tour at Ceylon Tea Trails Luxury Bungalows",
    "Transportation in a luxury air-conditioned Vehicle",
    "The services of an English-Speaking Chauffeur Guide",
    "Driver accommodation, meals, and driver expenses during stay",
    "Sightseeing to locations indicated EXCLUDING Entrance Fees",
    "Government Tax",
  ];

  const exclusions = [
    "Dinner and Lunch or any meal not mentioned above",
    "Cost of Entrance Fees at sightseeing locations",
    "Additional Transfers, sightseeing or entrance fees to locations not mentioned on the program",
    "Early check-in or late check-out charges",
    "Expenses of a personal nature",
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
            lg={7.5}
            flexDirection="column"
            alignItems="center"
            sx={{ width: "70%" }}
          >
            <Grid container display={"flex"} flexDirection="column">
              <FloatingOfferCard />
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
                  "&:before": { display: "none" },
                  backgroundColor: "#FEFDF5",
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
                <Grid
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row", lg: "row" },
                    backgroundColor: "#FEFDF5",
                    gap: 2,
                  }}
                >
                  {packages?.map((item) => {
                    return (
                      <Grid
                        sx={{
                          border: "solid",
                          borderRadius: 5,
                          borderColor: "#C9C5BA",
                          paddingX: 2,
                          paddingY: 2,
                          backgroundColor: "#FEFDF5",
                          width: "90%",
                        }}
                      >
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
                          {item.amount}{" "}
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
                          {item.amountBefore}
                        </MKTypography>
                        <MKTypography
                          sx={({ breakpoints, typography: {} }) => ({
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "14px",
                            fontWeight: 500,
                            width: "100%",
                            textAlign: "left",
                          })}
                        >
                          {item.paxCount}
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
                          }}
                        >
                          <Rating
                            name="read-only"
                            value={item?.reviewValue}
                            readOnly
                            max={1}
                          />
                          <MKTypography
                            sx={({ breakpoints, typography: {} }) => ({
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "14px",
                              fontWeight: 500,
                              width: "100%",
                              textAlign: "left",
                              color: "#8C8679",
                            })}
                          >
                            {item.reviewText}
                          </MKTypography>
                          <MKButton circular variant="contained" color="black">
                            Selected
                          </MKButton>
                        </Grid>
                      </Grid>
                    );
                  })}
                </Grid>
                <Grid
                  lg={12}
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
                          AboutUsPage.Sub_Head
                        })`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundBlendMode: "overlay",

                      margin: 1,
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
                      }}
                      flexDirection="column"
                      justifyContent="center"
                    >
                      <MKTypography
                        variant="h1"
                        color="black"
                        mb={3}
                        sx={({ breakpoints, typography: { size } }) => ({
                          [breakpoints.down("md")]: {
                            fontSize: size["3xl"],
                          },
                          fontSize: "50px",
                          fontFamily: "Poppins, sans-serif",
                          width: "90%",
                          textAlign: "center",
                          lineHeight: "90%",
                        })}
                      >
                        {`Get a 25% Off`}
                      </MKTypography>
                      <MKTypography
                        color="black"
                        sx={({ breakpoints, typography: {} }) => ({
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "15px",
                          fontWeight: 400,
                          width: "70%",
                          textAlign: "center",
                        })}
                      >
                        Book Before 20th July 2024
                      </MKTypography>
                      <MKTypography
                        color="black"
                        mb={3}
                        sx={({ breakpoints, typography: {} }) => ({
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "15px",
                          fontWeight: 400,
                          width: "70%",
                          textAlign: "center",
                        })}
                      >
                        (Stay Period valid from 15th September – 31st October
                        2024)
                      </MKTypography>
                    </Grid>
                  </MKBox>
                </Grid>
              </Accordion>
              <Accordion
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
                    What’s Included
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
                <MKBox
                  borderRadius="lg"
                  border="1px solid #e0e0e0"
                  padding="20px"
                  backgroundColor="#f9f9f9"
                >
                  <MKBox
                    display="flex"
                    justifyContent="space-between"
                    alignItems="stretch" // Ensures both sections and divider stretch to the same height
                    width="100%"
                  >
                    {/* Inclusions Section */}
                    <MKBox sx={{ width: "48%" }}>
                      <MKTypography variant="h5" fontWeight="bold" mb={2}>
                        Inclusions
                      </MKTypography>
                      {inclusions.map((item, index) => (
                        <MKBox key={index} mb={2} display="flex">
                          <UilCheck
                            color="#929E03"
                            style={{
                              marginRight: "8px",
                              width: "16px",
                              height: "16px",
                              flexShrink: 0,
                            }}
                          />
                          <MKTypography
                            sx={{
                              lineHeight: "100%",
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "16px",
                              fontWeight: 500,
                              width: "100%",
                            }}
                            variant="body1"
                          >
                            {item}
                          </MKTypography>
                        </MKBox>
                      ))}
                    </MKBox>

                    {/* Vertical Divider */}
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        mx: 3,
                        width: "2px",
                        backgroundColor: "#e0e0e0",
                        height: "auto",
                        minHeight: "100%",
                        opacity: 1,
                      }}
                    />

                    {/* Exclusions Section */}
                    <MKBox sx={{ width: "48%" }}>
                      <MKTypography variant="h5" fontWeight="bold" mb={2}>
                        Exclusions
                      </MKTypography>
                      {exclusions.map((item, index) => (
                        <MKBox key={index} mb={2} display="flex">
                          <UilTimes
                            color="#AF4D06"
                            style={{
                              marginRight: "8px",
                              width: "16px",
                              height: "16px",
                              flexShrink: 0,
                            }}
                          />
                          <MKTypography
                            sx={{
                              lineHeight: "100%",
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "16px",
                              fontWeight: 500,
                              width: "100%",
                            }}
                            variant="body1"
                          >
                            {item}
                          </MKTypography>
                        </MKBox>
                      ))}
                    </MKBox>
                  </MKBox>
                </MKBox>
              </Accordion>
              <Divider
                variant="middle"
                sx={{
                  height: 2,
                  width: "100%",
                  opacity: 1,
                  backgroundColor: "#C9C5BA",
                }}
              />
              <MKBox
                display="flex"
                alignItems="center"
                justifySelf="center"
                pt={4}
                pb={4}
                sx={{
                  margin: 1,
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
                  }}
                  flexDirection="column"
                  justifyContent="center"
                >
                  <MKTypography
                    color="black"
                    sx={({ breakpoints, typography: {} }) => ({
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "15px",
                      fontWeight: 400,
                      width: "70%",
                      textAlign: "center",
                    })}
                  >
                    Locally Serviced By
                  </MKTypography>
                  <MKTypography
                    variant="h1"
                    color="black"
                    sx={({ breakpoints, typography: { size } }) => ({
                      [breakpoints.down("md")]: {
                        fontSize: size["3xl"],
                      },
                      fontSize: "25px",
                      fontFamily: "Poppins, sans-serif",
                      width: "90%",
                      textAlign: "center",
                      lineHeight: "90%",
                    })}
                  >
                    Heaven’s Trial Pvt Ltd.
                  </MKTypography>

                  <MKTypography
                    color="black"
                    mb={3}
                    sx={({ breakpoints, typography: {} }) => ({
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "15px",
                      fontWeight: 400,
                      width: "70%",
                      textAlign: "center",
                    })}
                  >
                    Sri Lanka
                  </MKTypography>
                </Grid>
              </MKBox>
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </div>
    </div>
  );
}

export default TourDetails;
