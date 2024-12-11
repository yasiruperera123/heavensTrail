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
import Footer from "components/Footer";
import { PageIDs } from "constants/pageId";
import {
  UilMountains,
  UilBookOpen,
  UilTrees,
  UilBuilding,
} from "@iconscout/react-unicons";
import sigiriyaImg from "assets/images/homePage/sigiriya.jpeg";
import archImg from "assets/images/homePage/9arch.jpeg";
import galleImg from "assets/images/homePage/galle.jpeg";
import {
  Card,
  CardMedia,
  CardActionArea,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { DestinationPage } from "constants/images";
import NavBar from "components/NavBar";
import { useNavigate } from "react-router-dom";
import { fetchDestinationData } from "services/DestinationService";
import {
  fetchPropertyData,
  fetchPropertyPageTexts,
  fetchPropertyPageImages,
} from "services/PropertyService";
function Destination() {
  const navigate = useNavigate();
  const [pageTexts, setPageTexts] = useState();
  const [pageImages, setPageImages] = useState();
  const [hillDestinations, setHillDestinations] = useState();
  const [seaDestinations, setSeaDestinations] = useState();
  const [cultureDestinations, setCultureDestinations] = useState();

  useEffect(() => {
    getPropertyImages();
    getPropertyText();
    getSeaDestinationDetails();
    getHillDestinationDetails();
    getCultureDestinationDetails();
  }, []);

  const getPropertyText = async () => {
    // Usage
    fetchPropertyPageTexts(PageIDs.Destinations)
      .then((response) => {
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
    fetchPropertyPageImages(PageIDs.Destinations, 1)
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

  const getSeaDestinationDetails = () => {
    fetchDestinationData(PageIDs.Destinations, 44)
      .then((response) => {
        setSeaDestinations(response?.destinationList);
        console.log("response", response);
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
      });
  };

  const getHillDestinationDetails = () => {
    fetchDestinationData(PageIDs.Destinations, 134)
      .then((response) => {
        setHillDestinations(response?.destinationList);
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
      });
  };

  const getCultureDestinationDetails = () => {
    fetchDestinationData(PageIDs.Destinations, 49)
      .then((response) => {
        setCultureDestinations(response?.destinationList);
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
      });
  };
  const seaSideDes = [
    {
      title: "Mirissa",
      description:
        "Known for whale watching and its tranquil beach atmosphere.",
      img: DestinationPage.Destination_1,
    },
    {
      title: "Unawatuna",
      description:
        "Famous for its beautiful crescent-shaped beach and lively nightlife.",
      img: DestinationPage.Destination_2,
    },
    {
      title: "Bentota",
      description: "Ideal for water sports and luxurious beach resorts.",
      img: DestinationPage.Destination_3,
    },
  ];

  const hillSide = [
    {
      title: "Kandy",
      description:
        "Home to the sacred Temple of the Tooth and stunning botanical gardens.",
      img: DestinationPage.Destination_4,
    },
    {
      title: "Nuwara Eliya",
      description:
        "Known as “Little England” for its colonial charm and lush tea estates.",
      img: DestinationPage.Destination_5,
    },
    {
      title: "Ella",
      description:
        "Famous for its scenic train rides, hiking trails, and the iconic Nine Arches Bridge.",
      img: DestinationPage.Destination_6,
    },
  ];

  const culturalSide = [
    {
      title: "Sigiriya",
      description:
        "Renowned for the ancient rock fortress and its breathtaking frescoes.",
      img: DestinationPage.Destination_7,
    },
    {
      title: "Anuradhapura",
      description:
        "A historic city known for its well-preserved ruins and sacred Bodhi tree.",
      img: DestinationPage.Destination_8,
    },
    {
      title: "Polonnaruwa",
      description:
        "Home to impressive ancient ruins and the iconic Gal Vihara sculptures.",
      img: DestinationPage.Destination_9,
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

  const btnArray = [
    {
      title: pageTexts?.headerButton1,
      icon: <LiBeach fill="white" />,
    },
    { title: pageTexts?.headerButton2, icon: <UilMountains /> },
    { title: pageTexts?.headerButton3, icon: <UilBookOpen /> },
    { title: pageTexts?.headerButton4, icon: <UilTrees /> },
    { title: pageTexts?.headerButton5, icon: <UilBuilding /> },
  ];

  const handleOnClick = () => {
    navigate("/pages/destination-details");
  };

  return (
    <div style={{ backgroundColor: "#FEFDF5" }}>
      <NavBar />
      <div style={{ padding: 15 }}>
        <HeaderTwo
          buttonArray={btnArray}
          title={pageTexts?.headerTitle}
          backgroundImage={DestinationPage.Header}
          pageId={PageIDs.Destinations}
        />
      </div>

      {/* SEASIDE DESTINATIONS */}
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
              {seaDestinations && seaDestinations[0]
                ? seaDestinations.map((item, index) => (
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
                        }}
                      >
                        <CardActionArea onClick={() => handleOnClick()}>
                          <CardMedia
                            component="img"
                            height="350px"
                            image={item?.destination_image_urls[0]?.imgUrl}
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
                          <Grid
                            sx={{
                              width: "100%",
                              padding: 2,
                              paddingTop: 0, // Remove padding from the top to prevent shifting
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Playfair Display, serif",
                                fontSize: "25px",
                                fontWeight: 400,
                                marginBottom: 2,
                              }}
                              variant="h5"
                            >
                              {item?.destTitle}
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
                              {item?.shortDesc}
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
                          </Grid>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))
                : null}
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {/* HILL COUNTRY DESTINATIONS */}
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
              {hillDestinations && hillDestinations[0]
                ? hillDestinations.map((item, index) => (
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
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="350px"
                            image={item?.destination_image_urls[0]?.imgUrl}
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
                          <Grid
                            sx={{
                              width: "100%",
                              padding: 2,
                              paddingTop: 0, // Remove padding from the top to prevent shifting
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Playfair Display, serif",
                                fontSize: "25px",
                                fontWeight: 400,
                                marginBottom: 2,
                              }}
                              variant="h5"
                            >
                              {item?.destTitle}
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
                              {item?.shortDesc}
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
                          </Grid>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))
                : null}
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {/* Culture  DESTINATIONS */}
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
            lg={10}
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
              {cultureDestinations && cultureDestinations[0]
                ? cultureDestinations.map((item, index) => (
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
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="350px"
                            image={item?.destination_image_urls[0]?.imgUrl}
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
                          <Grid
                            sx={{
                              width: "100%",
                              padding: 2,
                              paddingTop: 0, // Remove padding from the top to prevent shifting
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Playfair Display, serif",
                                fontSize: "25px",
                                fontWeight: 400,
                                marginBottom: 2,
                              }}
                              variant="h5"
                            >
                              {item?.destTitle}
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
                              {item?.shortDesc}
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
                          </Grid>
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
                {pageTexts?.section4Button}
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
              {pageTexts?.section4Title}
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
            {pageTexts?.section4Button2}
          </MKButton>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Destination;
