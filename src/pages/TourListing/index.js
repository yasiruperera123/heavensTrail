import React from "react";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";
import { ArrowRight } from "@mui/icons-material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";
import { ReactComponent as LordBuddha } from "assets/images/homePage/Rectangle4.svg";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { ReactComponent as LiBeach } from "../../assets/icons/li_beach.svg";
import HeaderOne from "layouts/sections/page-sections/page-headers/components/HeaderOne";
import HeaderTwo from "layouts/sections/page-sections/page-headers/components/HeaderTwo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DefaultFooter from "../../examples/Footers/DefaultFooter";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
import {
  UilPlaneDeparture,
  UilTicket,
  UilUtensils,
  UilBedDouble,
} from "@iconscout/react-unicons";
import bgImage from "assets/images/bg-coworking.jpeg";
import avatar from "assets/images/avatar/avatar.jpeg";
import meetingImg from "assets/images/homePage/meetings.jpeg";
import exhibitionImg from "assets/images/homePage/exhibitions.jpeg";
import weddingImg from "assets/images/homePage/wedding.jpeg";
import tourImg from "assets/images/homePage/tours.jpeg";
import adventureIcon1 from "assets/images/homePage/adventureIcon1.png";
import adventureIcon2 from "assets/images/homePage/adventureIcon2.png";
import adventureIcon3 from "assets/images/homePage/adventureIcon3.png";
import adventureIcon4 from "assets/images/homePage/adventureIcon4.png";
import coconutHllImg from "assets/images/homePage/coconut_hill.jpeg";
import sigiriyaImg from "assets/images/homePage/sigiriya.jpeg";
import soulmateImg from "assets/images/homePage/soulmate.jpeg";
import yalaImg from "assets/images/homePage/yala.jpeg";
import tigerImg from "assets/images/homePage/tiger.jpeg";
import foodImg from "assets/images/homePage/food.jpeg";
import archImg from "assets/images/homePage/9arch.jpeg";
import buddhaImg from "assets/images/homePage/buddha.jpeg";
import footerBg from "assets/images/homePage/beach.jpeg";
import footerLogo from "assets/images/homePage/footerlogo.png";
import buddha2Img from "assets/images/homePage/buddha2.jpeg";
import hinduImg from "assets/images/homePage/hindu.jpeg";
import galleImg from "assets/images/homePage/galle.jpeg";
import firBall from "assets/images/homePage/fireball.jpeg";
import buddhaSVG from "assets/images/homePage/Rectangle4.svg";

import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Divider,
  Box,
  Typography,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

function TourListing() {
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
        <UilPlaneDeparture />,
        <UilTicket />,
        <UilUtensils />,
        <UilBedDouble />,
        <LiBeach />,
      ],
      img: coconutHllImg,
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
        <UilPlaneDeparture />,
        <UilTicket />,
        <UilUtensils />,
        <UilBedDouble />,
        <LiBeach />,
      ],
      img: sigiriyaImg,
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
        <UilPlaneDeparture />,
        <UilTicket />,
        <UilUtensils />,
        <UilBedDouble />,
        <LiBeach />,
      ],
      img: soulmateImg,
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
        <UilPlaneDeparture />,
        <UilTicket />,
        <UilUtensils />,
        <UilBedDouble />,
      ],
      img: archImg,
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
        <UilPlaneDeparture />,
        <UilTicket />,
        <UilUtensils />,
        <UilBedDouble />,
      ],
      img: "../../assets/images/homePage/Rectangle4.svg",
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
        <UilPlaneDeparture />,
        <UilTicket />,
        <UilUtensils />,
        <UilBedDouble />,
      ],
      img: hinduImg,
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
        <UilPlaneDeparture />,
        <UilTicket />,
        <UilUtensils />,
        <UilBedDouble />,
        <LiBeach />,
      ],
      img: galleImg,
    },
    {
      title: "Visit Kandy for Temple of tooth & Vibrant Perahera",
      duration: "4 Nights, 6 Days",
      path: ["Airport", "Sigiriya", "Dambulla", "Hatton"],
      iconSet: [
        <UilPlaneDeparture />,
        <UilTicket />,
        <UilUtensils />,
        <UilBedDouble />,
        <LiBeach />,
      ],
      img: firBall,
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
        <UilPlaneDeparture />,
        <UilTicket />,
        <UilUtensils />,
        <UilBedDouble />,
        <LiBeach />,
      ],
      img: soulmateImg,
    },
  ];

  const reviews = [
    {
      title:
        "Sri Lanka is a dream destination come true! The beaches were paradise, the food was amazing, and the people were so friendly. Our tour was perfectly planned, with something for everyone in our group.",
    },
    {
      title:
        "This trip to Sri Lanka was an adventure I'll never forget. We hiked through stunning mountains, learned about the fascinating culture, and even went on a thrilling safari! ",
    },
    {
      title:
        "We had the most relaxing and rejuvenating time in Sri Lanka. Our tour focused on wellness and mindfulness, and we had the opportunity to practice yoga, meditation, and Ayurveda treatments. ",
    },
  ];

  const blogs = [
    {
      title: "Trek Sri Lanka's Thrilling Wildlife Adventures",
      des: "Encounter Sri Lanka's diverse wildlife in its natural habitat. Learn about the island's national parks, fascinating creatures you might spot, and responsible wildlife viewing practices.",
      img: tigerImg,
    },
    {
      title: "Unveiling Culinary Delights: A Foodie's Guide",
      des: "Embark on a delicious journey through Sri Lanka's vibrant culinary scene. Explore regional specialties, mouthwatering street food, and authentic cooking experiences.",
      img: foodImg,
    },
    {
      title: "Learn about Sri Lanka's Most Breathtaking Trails",
      des: "Lace up your boots and explore Sri Lanka's stunning landscapes on foot. Discover scenic trails for all levels, from gentle hikes to challenging treks, offering breathtaking views and unforgettable experiences.",
      img: archImg,
    },
    {
      title: "Sri Lanka's Ancient Cities: A Journey Through History",
      des: "Travel back in time and explore Sri Lanka's captivating ancient cities. Discover UNESCO World Heritage Sites, delve into rich cultural heritage, and uncover the island's fascinating past.",
      img: buddhaImg,
    },
  ];

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
  const socials = [
    {
      icon: <Instagram />,
      link: "",
    },
    {
      icon: <LinkedIn />,
      link: "",
    },
    {
      icon: <TwitterIcon />,
      link: "",
    },
    {
      icon: <FacebookIcon />,
      link: "",
    },
  ];

  return (
    <div style={{ backgroundColor: "#FEFDF5" }}>
      <View height="40rem">
        <HeaderTwo />
      </View>
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
                Round Tours
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
              Heaven’s Trail Round Tours
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ textAlign: "center", maxWidth: "90%" }}
            >
              Crafting modern travel adventures that blend comfort with
              excitement. Explore vibrant cultures and stunning landscapes,
              creating lifelong memories!
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
              {travelPcgs.map((item, index) => (
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
                      maxWidth: 345,
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
                        height="140px"
                        image={item?.img}
                        sx={{
                          objectFit: "cover",
                          width: "100%",
                          margin: 0,
                          padding: 0,
                        }}
                        alt="SVG Image"
                      />
                      <CardContent sx={{ flex: 1, padding: 1 }}>
                        <MKButton
                          style={{ marginTop: "10px", marginBottom: "20px" }}
                          size="small"
                          circular
                          variant="outlined"
                          color="black"
                        >
                          {item?.duration}
                        </MKButton>

                        <Grid container alignItems="center">
                          <Typography
                            sx={{
                              fontFamily: "Playfair Display, serif",
                              fontSize: "28px",
                              fontWeight: 400,
                            }}
                            variant="h5"
                          >
                            {item?.title}
                          </Typography>
                        </Grid>
                        <Divider variant="middle" component="li" />
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
                        <Divider variant="middle" component="li" />
                        {item?.iconSet &&
                          item?.iconSet.map((icon) => {
                            return icon;
                          })}
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
                Day Tours
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
              You may also like
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ textAlign: "center", maxWidth: "90%" }}
            >
              Crafting modern travel adventures that blend comfort with
              excitement. Explore vibrant cultures and stunning landscapes,
              creating lifelong memories!
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
                      maxWidth: 345,
                      height: "100%",
                      boxShadow: "none",
                      backgroundColor: "#EEECE2",
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
                      <img
                        src={buddhaSVG}
                        alt="SVG Image"
                        style={{
                          width: "100%",
                          height: "140px",
                          objectFit: "cover",
                          objectPosition: "top",
                          margin: 0,
                          padding: 0,
                        }}
                      />
                      <CardContent sx={{ flex: 1, padding: 1 }}>
                        <MKButton
                          style={{ marginTop: "10px", marginBottom: "20px" }}
                          size="small"
                          circular
                          variant="outlined"
                          color="black"
                        >
                          {item?.duration}
                        </MKButton>

                        <Grid container alignItems="center">
                          <Typography
                            sx={{
                              fontFamily: "Playfair Display, serif",
                              fontSize: "28px",
                              fontWeight: 400,
                            }}
                            variant="h5"
                          >
                            {item?.title}
                          </Typography>
                        </Grid>
                        <Divider variant="middle" component="li" />
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
                        <Divider variant="middle" component="li" />
                        {item?.iconSet &&
                          item?.iconSet.map((icon) => {
                            return icon;
                          })}
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
          </Box>
        </Grid>
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
          See All Packages
        </MKButton>
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
      <MKBox
        display="flex"
        alignItems="center"
        height="30rem"
        minHeight="100%"
        sx={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          margin: 1,
          borderRadius: 5,
        }}
      >
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <Grid
            container
            item
            xs={12}
            sx={{ display: "flex", alignItems: "center" }}
            lg={8}
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
              })}
            >
              Where Will Your Journey Begin? Create your trip today.
            </MKTypography>
            <Stack direction="row" spacing={1} mt={3}>
              <MKButton circular variant="contained" color="white">
                Plan Your Trip
              </MKButton>
            </Stack>
          </Grid>
        </Container>
      </MKBox>

      <Grid container sx={{ minHeight: "10rem" }}>
        <Grid
          item
          xs={12}
          sm="auto"
          alignItems="center"
          display={"flex"}
          sx={{ marginLeft: 2 }}
        >
          <MKBox
            component="img"
            style={{ width: 120, height: 100 }}
            src={footerLogo}
            alt={"bgImage"}
            mb={2}
          />
        </Grid>

        <Grid item xs={12} sm={9} alignContent="center">
          <Grid
            sx={{ minHeight: "2rem" }}
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent={"space-evenly"}
          >
            {[
              "Home",
              "Tours Packages",
              "Business Tours",
              "About Us",
              "Contact Us",
            ].map((text, index) => (
              <React.Fragment key={text}>
                <MKTypography
                  variant="h6"
                  fontWeight="regular"
                  color="black"
                  sx={{
                    textAlign: "center",
                    fontFamily: "Playfair Display, serif",
                    mx: 1,
                    my: { xs: 1, sm: 0 },
                  }}
                >
                  {text}
                </MKTypography>
                {index < 4 && (
                  <Divider
                    sx={{
                      borderColor: "black",
                      borderWidth: "2px",
                      height: "2rem", // Adjust the height
                      mx: { xs: 0, sm: 1 },
                    }}
                    orientation="vertical"
                    variant="middle"
                    flexItem
                  />
                )}
              </React.Fragment>
            ))}
          </Grid>

          <Grid
            sx={{ minHeight: "2rem", mt: 2 }}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            flexWrap="wrap"
          >
            <Grid item xs={12} sm={2} textAlign="center" mb={{ xs: 2, sm: 0 }}>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ fontFamily: "Playfair Display, serif" }}
              >
                hello@heavenstrails.com
              </MKTypography>
            </Grid>
            <Grid item xs={12} sm={3} textAlign="center" mb={{ xs: 2, sm: 0 }}>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ fontFamily: "Playfair Display, serif" }}
              >
                +94 77 77 0 4000
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ fontFamily: "Playfair Display, serif" }}
              >
                +94 37 22 8 1908
              </MKTypography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ fontFamily: "Playfair Display, serif" }}
              >
                Kandanegedara Road, Weralugama,
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ fontFamily: "Playfair Display, serif" }}
              >
                Kuliyapitiya, Sri Lanka
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm="auto" display="flex" justifyContent="center">
          <MKBox display="flex" alignItems="center">
            {socials.map(({ icon, link }, key) => (
              <MKTypography
                key={link}
                component="a"
                href={link}
                target="_blank"
                rel="noreferrer"
                variant="h5"
                color="black"
                opacity={0.8}
                mr={key === socials.length - 1 ? 0 : 2.5}
              >
                {icon}
              </MKTypography>
            ))}
          </MKBox>
        </Grid>
      </Grid>
    </div>
  );
}

export default TourListing;
