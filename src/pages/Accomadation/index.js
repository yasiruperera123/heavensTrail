import React, { useState, useEffect } from "react";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import View from "layouts/sections/components/View";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { ReactComponent as NoSmoke } from "assets/icons/tabler_smoking-no.svg";
import HeaderTwo from "layouts/sections/page-sections/page-headers/components/HeaderTwo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MKBox from "components/MKBox";
import footerBg from "assets/images/homePage/beach.jpeg";
import NavBar from "components/NavBar";
import {
  UilBedDouble,
  UilParkingSquare,
  UilUtensils,
  UilWifi,
  UilSnowFlake,
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
import { AboutUsPage } from "constants/images";
import { AccomadationPage } from "constants/images";

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
      title: "2 - 3 Star Accommodations: starting from $200",
      image1: AccomadationPage.Hotel_Img_1,
      image2: AccomadationPage.Hotel_Img_2,
      image3: AccomadationPage.Hotel_Img_3,
      image4: AccomadationPage.Hotel_Img_4,
      facilities: [
        <UilParkingSquare />,
        <UilBedDouble />,
        <UilUtensils />,
        <UilWifi />,
        <UilSnowFlake />,
        <NoSmoke />,
      ],
      description: "Water Garden Sigiriya",
      rating: "367 reviews",
      rateValue: 5,
      btnText: "View Hotel",
    },
    {
      title: "4 Star Accommodations: starting from $250",
      image1: AccomadationPage.Hotel_Img_1,
      image2: AccomadationPage.Hotel_Img_2,
      image3: AccomadationPage.Hotel_Img_3,
      image4: AccomadationPage.Hotel_Img_4,
      facilities: [
        <UilParkingSquare />,
        <UilBedDouble />,
        <UilUtensils />,
        <UilWifi />,
        <UilSnowFlake />,
        <NoSmoke />,
      ],
      description: "Water Garden Sigiriya",
      rating: "367 reviews",
      rateValue: 5,
      btnText: "View Hotel",
    },
    {
      title: "5 Star Accommodations: starting from $250",
      image1: AccomadationPage.Hotel_Img_1,
      image2: AccomadationPage.Hotel_Img_2,
      image3: AccomadationPage.Hotel_Img_3,
      image4: AccomadationPage.Hotel_Img_4,
      facilities: [
        <UilParkingSquare />,
        <UilBedDouble />,
        <UilUtensils />,
        <UilWifi />,
        <UilSnowFlake />,
        <NoSmoke />,
      ],
      description: "Water Garden Sigiriya",
      rating: "367 reviews",
      rateValue: 5,
      btnText: "View Hotel",
    },
    {
      title: "Luxury Accommodations: starting from $250",
      image1: AccomadationPage.Hotel_Img_1,
      image2: AccomadationPage.Hotel_Img_2,
      image3: AccomadationPage.Hotel_Img_3,
      image4: AccomadationPage.Hotel_Img_4,
      facilities: [
        <UilParkingSquare />,
        <UilBedDouble />,
        <UilUtensils />,
        <UilWifi />,
        <UilSnowFlake />,
        <NoSmoke />,
      ],
      description: "Water Garden Sigiriya",
      rating: "367 reviews",
      rateValue: 5,
      btnText: "View Hotel",
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

  const CustomCard = ({ item, index }) => {
    const isEven = index % 2 === 0;

    return (
      <Grid>
        <Divider
          variant="middle"
          sx={{ height: 3, width: "100%", backgroundColor: "#C9C5BA" }}
        />
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
          {item?.title}
        </MKTypography>
        <Grid
          sx={{
            padding: 2,
            backgroundColor: "#EEECE2",
            borderRadius: 5,
            width: "100%",
          }}
        >
          <MKTypography
            variant="h6"
            fontWeight="regular"
            color="black"
            mt={1}
            sx={({ breakpoints }) => ({
              [breakpoints.down("sm")]: {
                textAlign: "center",
              },
            })}
          >
            Example Hotel:
          </MKTypography>

          <Grid
            sx={{
              border: "solid",
              borderWidth: 2,
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
                backgroundColor: "#EEECE2",
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
                  width: "150px",
                  height: "150px",
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
                  backgroundColor: "#EEECE2",
                  flex: 1,
                  height: "150px",
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
                    color="black"
                    sx={{
                      fontSize: "18px",
                      fontFamily: "Poppins, sans-serif",
                      lineHeight: "30px",
                      fontWeight: 500,
                    }}
                  >
                    {item?.description}
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

                <Grid container display="flex" flexDirection="row" lg={12}>
                  {item?.facilities.map((icon) => {
                    return icon;
                  })}
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
                  </MKButton>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid mt={2}>
            <Card
              sx={({ breakpoints }) => ({
                display: "flex",
                flexDirection: "row",
                boxShadow: "none",
                flex: 1,
                backgroundColor: "#EEECE2",
                [breakpoints.down("sm")]: {
                  flexDirection: "column",
                  alignItems: "center",
                },
              })}
            >
              <CardMedia
                component="img"
                alt="Image"
                image={item?.image2}
                title="title"
                sx={({ breakpoints }) => ({
                  borderRadius: "15px",
                  width: "42%",
                  height: "240px",
                  margin: 0,
                  marginRight: "1%",
                  [breakpoints.down("sm")]: {
                    width: "100%",
                    height: "auto",
                    marginRight: 0,
                    marginBottom: 1,
                  },
                })}
              />

              <CardMedia
                component="img"
                alt="Image"
                image={item?.image3}
                title="title"
                sx={({ breakpoints }) => ({
                  borderRadius: "15px",
                  width: "31%",
                  height: "240px",
                  margin: 0,
                  marginRight: "1%",
                  [breakpoints.down("sm")]: {
                    width: "100%",
                    height: "auto",
                    marginRight: 0,
                    marginBottom: 1,
                  },
                })}
              />

              <CardMedia
                component="img"
                alt="Image"
                image={item?.image4}
                title="title"
                sx={({ breakpoints }) => ({
                  borderRadius: "15px",
                  width: "25%",
                  height: "240px",
                  margin: 0,
                  [breakpoints.down("sm")]: {
                    width: "100%",
                    height: "auto",
                  },
                })}
              />
            </Card>
          </Grid>
        </Grid>
      </Grid>
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

  const whyChooseUSArra = [
    {
      title: "Wide Range of Options",
      des: "From star-rated hotels to unique boutique stays, we offer a variety of accommodations to match your needs.",
    },
    {
      title: "Comfort and Quality",
      des: "Every accommodation is carefully selected to ensure high standards of comfort and service.",
    },
    {
      title: "Cultural Immersion",
      des: "With options like home stays, you can immerse yourself in the local culture and traditions.",
    },
    {
      title: "Flexible Pricing",
      des: "Our diverse range of accommodations ensures that there is something for every budget.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#FEFDF5", overflowX: "hidden" }}>
      <NavBar />
      <div style={{ padding: 15 }}>
        <HeaderTwo
          title="Accommodation Options with Heaven’s Trail"
          backgroundImage={AccomadationPage.Header}
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
          <Grid flexDirection={"column"} container lg={10} sx={{}}>
            <MKTypography
              variant="h1"
              color="black"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                  textAlign: "center", // Center text on smaller screens
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
              sx={({ breakpoints }) => ({
                height: 3,
                width: "100%",
                backgroundColor: "#C9C5BA",
                [breakpoints.down("sm")]: {
                  width: "80%", // Adjust width on smaller screens
                },
              })}
            />

            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={({ breakpoints }) => ({
                maxWidth: "90%",
                textAlign: "justify",
                [breakpoints.down("md")]: {
                  maxWidth: "100%", // Adjust text width on smaller screens
                  textAlign: "center",
                },
              })}
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
              sx={({ breakpoints }) => ({
                [breakpoints.down("md")]: {
                  textAlign: "center",
                },
              })}
            >
              Seaside Cities:
            </MKTypography>

            {["Galle", "Bentota", "Unawatuna"].map((city, index) => (
              <MKTypography
                key={index}
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={({ breakpoints }) => ({
                  maxWidth: "90%",
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "center",
                  [breakpoints.down("md")]: {
                    maxWidth: "100%",
                    textAlign: "center",
                    display: "block",
                  },
                })}
              >
                <span
                  style={{
                    fontWeight: "bold",
                    marginRight: 3,
                    marginLeft: 10,
                  }}
                >
                  <li>{city}:</li>
                </span>
                {city === "Galle"
                  ? "A historic city with colonial architecture and beautiful beaches."
                  : city === "Bentota"
                  ? "Known for its golden sandy beaches and water sports."
                  : "Famous for whale watching and vibrant nightlife."}
              </MKTypography>
            ))}

            <MKTypography
              variant="h1"
              color="black"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                  textAlign: "center",
                },
                fontFamily: "Playfair Display, serif",
                fontSize: "50px",
                fontWeight: 400,
                textAlign: "left",
              })}
            >
              Accommodation Options and Pricing
            </MKTypography>

            {cardsData?.map((item, index) => {
              return <CustomCard item={item} index={index} />;
            })}
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
            <Stack direction="row" spacing={1} mt={4}>
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
              Why Choose Heaven's Trail for Your Stay?
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
              <Grid item key={index} xs={12} sm={6} lg={3}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "16px",
                    backgroundColor: "#EEECE2",
                    boxShadow: "none",
                    borderWidth: 1,
                    minHeight: "210px",
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
