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
import { useNavigate } from "react-router-dom";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { ReactComponent as LiBeach } from "../../assets/icons/li_beach.svg";
import HeaderOne from "layouts/sections/page-sections/page-headers/components/HeaderOne";
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
import NavBar from "components/NavBar";

function Home() {
  const navigate = useNavigate();
  const travelSolutions = [
    {
      title: "Meetings & Conferences",
      btn1: "Choose a Package",
      btn2: "Plan Your Own Trip",
      img: meetingImg,
    },
    {
      title: "Exhibitions",
      btn1: "Choose a Package",
      btn2: "Plan Your Own Trip",
      img: exhibitionImg,
    },
    {
      title: "Weddings",
      btn1: "Choose a Package",
      btn2: "Plan Your Own Trip",
      img: weddingImg,
    },
    {
      title: "Incentive Tours",
      btn1: "Choose a Package",
      btn2: "Plan Your Own Trip",
      img: tourImg,
    },
  ];

  const adventures = [
    {
      title: "Personalize Your Adventure",
      des: "Shape your journey by freely adding, editing, or deleting activities from your itinerary.",
      img: adventureIcon1,
    },
    {
      title: "Optimal Route Planning",
      des: "Add your preferences to craft the most efficient route, saving you time and effort.",
      img: adventureIcon2,
    },
    {
      title: "Find Hotels & Restaurants",
      des: "Shape your journey by freely adding, editing, or deleting activities from your itinerary.",
      img: adventureIcon3,
    },
    {
      title: "Book Vehicle and Tour Guide",
      des: "Shape your journey by freely adding, editing, or deleting activities from your itinerary.",
      img: adventureIcon4,
    },
  ];

  const travelPcgs = [
    {
      title: "Luxury Escape to the Southern Coast",
      img: coconutHllImg,
    },
    {
      title: "Luxury Escape to the Misty Tea Country",
      img: sigiriyaImg,
    },
    {
      title: "Scenic Sri Lanka Trip -Soulmate Special",
      img: soulmateImg,
    },
    {
      title: "Thrilling Sri Lanka Vacay- Yala National Park Special",
      img: yalaImg,
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

  const handleClick = () => {
    navigate("/pages/tour-list"); // Change '/packages' to your desired route
  };

  return (
    <div style={{ backgroundColor: "#FEFDF5" }}>
      <div style={{ padding: 15 }}>
        <HeaderOne />
      </div>
      {/* Explore our travel solutions */}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
        mt={8}
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
                MICE Experiences
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
              Explore our travel solutions
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ textAlign: "center", maxWidth: "90%" }}
            >
              We create seamless MICE (Meetings, Incentives, Conferences,
              Exhibitions) and wedding experiences in Sri Lanka. Unforgettable
              events, flawlessly planned.
            </MKTypography>
          </Grid>
        </Container>
        <Grid container spacing={2}>
          {travelSolutions.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: "350px",
                  backgroundImage: `url(${item?.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  padding: "16px",
                  justifyContent: "space-between",
                }}
              >
                <MKTypography
                  color="white"
                  sx={{
                    fontSize: "34px",
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  {item?.title}
                </MKTypography>
                <Stack spacing={1} mt={1}>
                  <MKButton
                    size="small"
                    circular
                    variant="outlined"
                    color="white"
                    sx={{
                      width: "100%",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    {item?.btn1}
                  </MKButton>
                  <MKButton
                    size="small"
                    circular
                    color="white"
                    sx={{
                      width: "100%",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    {item?.btn2}
                  </MKButton>
                </Stack>
              </Card>
            </Grid>
          ))}
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
                Customizable Tour Planner
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
              Create your own adventure
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ textAlign: "center", maxWidth: "90%" }}
            >
              We create seamless MICE (Meetings, Incentives, Conferences,
              Exhibitions) and wedding experiences in Sri Lanka. Unforgettable
              events, flawlessly planned.
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
            }}
            container
            spacing={2}
          >
            {adventures.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
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
          <Grid>
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
              Create Your Customized Tour
            </MKButton>
          </Grid>
        </Container>
      </Grid>
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
                Our Packages
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
              Explore our travel Packages
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ textAlign: "center", maxWidth: "90%" }}
            >
              We create seamless MICE (Meetings, Incentives, Conferences,
              Exhibitions) and wedding experiences in Sri Lanka. Unforgettable
              events, flawlessly planned.
            </MKTypography>
          </Grid>
        </Container>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              overflowX: "auto",
              paddingX: 2,
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none",
              flexWrap: "nowrap",
              width: "100%",
              gap: 2, // Adds spacing between cards horizontally
            }}
          >
            {travelPcgs.map((item, index) => (
              <Grid
                item
                key={index}
                xs={12} // Full width on mobile
                sm={6} // Half width on small screens
                md={4} // One-third width on medium screens
                lg={3.5} // Adjust to fit 3.5 items per row
                sx={{
                  flexShrink: 0,
                  width: "calc(100% / 3.5)", // Ensure 3.5 items per row
                  backgroundColor: "#FEFDF5",
                }}
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
                    transition: "background-color 0.3s ease, color 0.3s ease",
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
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="40%"
                      image={item?.img}
                      sx={{
                        objectFit: "cover",
                        width: "100%",
                        margin: 0,
                        padding: 0,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                      }}
                      alt="Image"
                    />
                    <CardContent sx={{ flex: 1, padding: 1 }}>
                      <MKButton
                        className="hover-button"
                        style={{
                          marginTop: "10px",
                          marginBottom: "20px",
                        }}
                        size="small"
                        circular
                        variant="outlined"
                        color="black"
                      >
                        6 Nights, 7 Days
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
                        <MKTypography variant="subtitle2">Airport</MKTypography>
                        <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                        <MKTypography variant="subtitle2">
                          Yala (2N)
                        </MKTypography>
                        <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                        <MKTypography variant="subtitle2">
                          Weligama (1N)
                        </MKTypography>
                        <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                        <MKTypography variant="subtitle2">
                          Ahungalle (1N)
                        </MKTypography>
                        <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                        <MKTypography variant="subtitle2">Airport</MKTypography>
                      </Grid>
                      <Divider variant="middle" component="li" />
                      <UilPlaneDeparture className="hover-icon" />
                      <UilTicket className="hover-icon" />
                      <UilUtensils className="hover-icon" />
                      <UilBedDouble className="hover-icon" />
                      <LiBeach
                        className="hover-svg"
                        sx={{
                          transition: "stroke 0.3s ease",
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
            onClick={handleClick}
          >
            See All Packages
          </MKButton>
        </Box>
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
                Reviews & Testimonials
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
              Discover Sri Lanka Through Our Travelers' Eyes
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ textAlign: "center", maxWidth: "90%" }}
            >
              Unforgettable experiences await in Sri Lanka, but don't just take
              our word for it! See what our past travelers have to say about
              their incredible Sri Lankan adventures. Dive into their reviews
              and discover the magic that awaits you.
            </MKTypography>
          </Grid>
        </Container>
        <Grid container>
          <Box
            sx={{
              display: "flex",
              overflowX: "auto",
              padding: 2,
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none",
            }}
          >
            {reviews.map((item, index) => (
              <Grid
                item
                key={index}
                xs={12}
                sm={6}
                md={4}
                lg={5}
                sx={{ margin: 1, flexShrink: 0 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    boxShadow: "none",
                    backgroundColor: "#FEFDF5",
                    borderWidth: 1,
                    borderColor: "#C9C5BA",
                  }}
                >
                  <CardContent>
                    <MKTypography
                      sx={{
                        fontFamily: "Playfair Display, serif",
                        fontSize: "18px",
                        fontWeight: 500,
                      }}
                      color="#1A1814"
                      variant="subtitle2"
                    >
                      {item?.title}
                    </MKTypography>
                    <Grid
                      item
                      sx={{
                        flexDirection: "row",
                        display: "flex",
                        alignItems: "center",
                        marginTop: 4,
                      }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={avatar}
                        sx={{ width: "30px", height: "30px", marginRight: 2 }}
                      />
                      <MKTypography color="#1A1814" variant="subtitle2">
                        Sarah W.
                      </MKTypography>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
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
      {/* Explore our Insights, Tips and More Packages */}
      <Box
        sx={{
          backgroundColor: "#FEFDF5",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 0,
            width: "100%",
          }}
        >
          <Grid
            container
            item
            xs={12}
            lg={10}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            sx={{ marginBottom: { xs: 3, md: 5 } }}
          >
            <Stack direction="row" spacing={1} mt={3}>
              <MKButton circular variant="outlined" color="black">
                Our Blog
              </MKButton>
            </Stack>
            <MKTypography
              variant="h1"
              color="black"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
                [breakpoints.down("sm")]: {
                  fontSize: size["xl"],
                },
                fontFamily: "Playfair Display, serif",
                fontSize: "60px",
                fontWeight: 400,
                textAlign: "center",
              })}
            >
              Explore our Insights, Tips and More
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{
                textAlign: "center",
                maxWidth: "90%",
                margin: "0 auto",
              }}
            >
              Dive deeper into the magic of Sri Lanka with our insightful blog!
              Discover hidden gems, cultural treasures, and adventure
              inspiration to fuel your travel dreams.
            </MKTypography>
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
              container
              spacing={2}
              sx={{
                overflowX: "auto",
                paddingX: 2,
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                scrollbarWidth: "none",
                flexWrap: "nowrap",
                width: "100%",
                gap: 2,
              }}
            >
              {blogs.map((item, index) => (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3.5}
                  sx={{
                    flexShrink: 0,
                  }}
                >
                  <Card
                    sx={{
                      boxShadow: "none",
                      backgroundColor: "#FEFDF5",
                      borderWidth: 1,
                      borderColor: "#C9C5BA",
                      display: "flex",
                      flexDirection: "column",
                      borderWidth: 0,
                      height: "100%",
                    }}
                  >
                    <CardActionArea
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="270px"
                        image={item?.img}
                        sx={{
                          objectFit: "cover",
                          width: "100%",
                          margin: 0,
                          padding: 0,
                        }}
                        alt="Image"
                      />
                      <CardContent sx={{ flex: 1, padding: 2 }}>
                        <Typography
                          sx={{
                            fontFamily: "Playfair Display, serif",
                            fontSize: "25px",
                            fontWeight: 400,
                            marginBottom: 2,
                          }}
                          variant="h5"
                        >
                          {item?.title}
                        </Typography>
                        <MKTypography
                          variant="subtitle2"
                          sx={{
                            display: "-webkit-box",
                            overflow: "hidden",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 3,
                            textOverflow: "ellipsis",
                          }}
                        >
                          {item?.des}
                        </MKTypography>
                        <MKTypography
                          sx={{
                            fontWeight: "500",
                            textDecoration: "underline",
                          }}
                          variant="subtitle2"
                        >
                          Read More
                        </MKTypography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <MKButton
              circular
              variant="contained"
              color="black"
              sx={{
                paddingX: 5,
                marginTop: 5,
                marginBottom: 10,
              }}
              onClick={handleClick}
            >
              View All Blogs
            </MKButton>
          </Box>
        </Grid>
      </Box>
      {/* Your Questions Answered SECTION */}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "16px",
          paddingRight: "16px",
          marginBottom: "40px",
          backgroundColor: "#EEECE2",
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
                  sx={{ boxShadow: "none", backgroundColor: "#EEECE2" }}
                >
                  {item?.title}
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#EEECE2" }}>
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

export default Home;
