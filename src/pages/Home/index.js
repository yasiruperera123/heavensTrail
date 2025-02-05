import React, { useRef, useState, useEffect } from "react";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LiBeach } from "../../assets/icons/li_beach.svg";
import HeaderOne from "layouts/sections/page-sections/page-headers/components/HeaderOne";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { UilAngleDown } from "@iconscout/react-unicons";
import { HomePage } from "constants/images";
import {
  UilPlaneDeparture,
  UilTicket,
  UilUtensils,
  UilBedDouble,
} from "@iconscout/react-unicons";
import Footer from "components/Footer";
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

import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Divider,
  Box,
  Typography,
  Avatar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import NavBar from "components/NavBar";

import {
  fetchPropertyData,
  fetchPropertyPageTexts,
  fetchPropertyPageImages,
} from "services/PropertyService";
import { fetchTourPackages } from "services/TourServices";
import { fetchBlogCategories } from "services/BlogsService";
import FAQs from "components/FAQs";
import "./styles.css";

function Home() {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, scrollLeft: 0 });
  const [propertyData, setPropertyData] = useState(null);
  const [pageTexts, setPageTexts] = useState();
  const [pageImages, setPageImages] = useState();
  const [headerData, setHeaderData] = useState({});
  const [tourPackages, setTourPackages] = useState([]);
  const [blogCategories, setBlogCategories] = useState([]);
  const [selected, setSelected] = useState("web");
  const [type, setType] = React.useState("");
  const [location, setLocation] = React.useState("");

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  useEffect(() => {
    getTourPackages();
    getPropertyDetails();
    getPropertyText();
    getPropertyImages();
    getBlogCategories();
    setSelected(packages[0].key);
  }, []);

  const packages = [
    {
      key: "all ",
      value: "All ",
    },
    {
      key: "shorttrips",
      value: "Short trips",
    },
    {
      key: "halfday",
      value: "Half-day ",
    },
    {
      key: "fullday",
      value: "Full-day ",
    },
    {
      key: "multiday",
      value: "Multi-day",
    },
  ];

  const travelSolutions = [
    {
      title: pageTexts?.section1Item1Title || "",
      btn1: "See Details",
      btn2: "View Packages",
      img: pageImages?.section1Item1Background || "",
    },
    {
      title: pageTexts?.section1Item2Title || "",
      btn1: "See Details",
      btn2: "View Packages",
      img: pageImages?.section1Item2Background || "",
    },
    {
      title: pageTexts?.section1Item3Title || "",
      btn1: "See Details",
      btn2: "View Packages",
      img: pageImages?.section1Item3Background || "",
    },
    {
      title: pageTexts?.section1Item4Title || "",
      btn1: "See Details",
      btn2: "View Packages",
      img: pageImages?.section1Item4Background || "",
    },
  ];

  const experienceData = [
    {
      title: "Tuk Tuk Safari in Colombo" || "",
      description:
        "Hop on a tuk-tuk for a fun-filled tour through the vibrant streets of Colombo.",
      btn: ["Short Trip", "Urban Adventure", "Colombo"],
      img: HomePage?.Exp_1 || "",
    },
    {
      title: "Ceylon Tea Tour in Nuwara Eliya" || "",
      description:
        "Hop on a tuk-tuk for a fun-filled tour through the vibrant streets of Colombo.",
      btn: ["Full Day", "Local", "Nuwara Eliya"],
      img: HomePage?.Exp_2 || "",
    },
    {
      title: "Hot Air Balloon Ride Over Dambulla" || "",
      description:
        "Hop on a tuk-tuk for a fun-filled tour through the vibrant streets of Colombo.",
      btn: ["Half Day", "Adventure", "Dambulla"],
      img: HomePage?.Exp_3 || "",
    },
    {
      title: "Snorkelling in Pigeon Island" || "",
      description:
        "Hop on a tuk-tuk for a fun-filled tour through the vibrant streets of Colombo.",
      btn: ["Short Trip", "Adventure", "Colombo"],
      img: HomePage?.Exp_4 || "",
    },
  ];

  const adventures = [
    {
      title: pageTexts?.section2Item1Title || "",
      des: pageTexts?.section2Item1Description || "",
      img: adventureIcon1,
    },
    {
      title: pageTexts?.section2Item2Title || "",
      des: pageTexts?.section2Item2Description || "",
      img: adventureIcon2,
    },
    {
      title: pageTexts?.section2Item3Title || "",
      des: pageTexts?.section2Item3Description || "",
      img: adventureIcon3,
    },
    {
      title: pageTexts?.section2Item4Title || "",
      des: pageTexts?.section2Item4Description || "",
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

  const getPropertyDetails = async () => {
    // Usage
    fetchPropertyData()
      .then((data) => {
        console.log("Fetched data: ", data);
        setPropertyData(data.data);
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
        const filteredItems = reponse?.data
          .filter((item) => item.seq === 0)
          .slice(0, 4);
        setTourPackages(filteredItems);
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
      });
  };

  const getBlogCategories = async () => {
    // Usage
    fetchBlogCategories()
      .then((reponse) => {
        console.log("Fetched data: BLOG ", reponse);
        const filteredItems = reponse?.data.slice(0, 4);
        setBlogCategories(filteredItems);
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
      });
  };

  const getPropertyText = async () => {
    // Usage
    fetchPropertyPageTexts(1)
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
    fetchPropertyPageImages(1, 1)
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

  const handleMouseDown = (e) => {
    const scrollLeft = scrollContainerRef.current.scrollLeft;
    setStartPosition({
      x: e.pageX,
      scrollLeft,
    });
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const x = e.pageX;
    const walk = (x - startPosition.x) * 2; // Scroll faster with a multiplier (adjust if necessary)
    scrollContainerRef.current.scrollLeft = startPosition.scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClick = () => {
    navigate("/pages/tour-list");
  };

  const handleOurPackageClick = () => {
    navigate("/pages/destinations");
  };

  const handleChoosePackageClick = (item) => {
    //TODO Handle button action seperatly
    switch (item) {
      case "Meetings & Conferences":
        navigate("/pages/meetings");
        return;
      case "Exhibitions":
        navigate("/pages/accomadation");
        return;
      case "Weddings":
        navigate("/pages/weddings");
        return;
      case "Incentive Tours":
        navigate("/pages/mice-tours");
        return;
      default:
        return;
    }
  };

  const handleViewAllClick = () => {
    navigate("/pages/blogs");
  };

  const handleButtonClick = (value) => {
    setSelected(value);
  };

  const ToggleButtonGroup = ({ packages, key }) => {
    return (
      <div className="toggle-button-group-home">
        {packages?.map((item, index) => {
          return (
            <button
              key={key}
              className={`toggle-button ${
                selected === item.value ? "selected" : ""
              }`}
              onClick={() => handleButtonClick(item.value)}
            >
              {item.value}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <NavBar />
      <div style={{ padding: 15 }}>
        <HeaderOne data={headerData} />
      </div>
      <div style={{ overflowX: "hidden" }}>
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
                  {pageTexts?.section1Button || ""}
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
                {pageTexts?.section1Title || ""}
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ textAlign: "center", maxWidth: "90%" }}
              >
                {pageTexts?.section1Description || ""}
              </MKTypography>
            </Grid>
          </Container>
          <Grid container spacing={2}>
            {travelSolutions.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    height: "440px",
                    backgroundImage: `url(${item?.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    padding: "16px",
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
                      onClick={() => handleChoosePackageClick(item?.title)}
                      sx={{
                        width: "45%",
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
                        width: "45%",
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
                sx={{ textAlign: "center", maxWidth: "90%" }}
              >
                {pageTexts?.section2Description || ""}
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
                      borderColor: "#C9C5BA",
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
                {pageTexts?.section2Button2 || ""}
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
                <MKButton
                  circular
                  variant="outlined"
                  color="black"
                  onClick={handleOurPackageClick}
                >
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
                {pageTexts?.section3Title || ""}
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ textAlign: "center", maxWidth: "90%" }}
              >
                {pageTexts?.section3Description || ""}
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
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
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
              {tourPackages && tourPackages.length > 0
                ? tourPackages.map((item, index) => (
                    <Grid
                      item
                      key={index}
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3.5}
                      sx={{
                        flexShrink: 0,
                        width: "calc(100% / 3.5)",
                        backgroundColor: "#FEFDF5",
                      }}
                    >
                      <Card
                        sx={{
                          height: "90%",
                          boxShadow: "none",
                          backgroundColor: "#FEFDF5",
                          borderWidth: 1,
                          borderColor: "#C9C5BA",
                          display: "flex",
                          flexDirection: "column",
                          transition:
                            "background-color 0.3s ease, color 0.3s ease",
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
                            image={item?.tour_pkg_image_urls[0]?.imgUrl}
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
                                marginTop: "5px",
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
                                  lineHeight: "100%",
                                }}
                                variant="h5"
                              >
                                {item?.pageTitle}
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
                              <MKTypography variant="subtitle2">
                                Airport
                              </MKTypography>
                              <Icon sx={{ fontWeight: "bold" }}>
                                arrow_forward
                              </Icon>
                              <MKTypography variant="subtitle2">
                                Yala (2N)
                              </MKTypography>
                              <Icon sx={{ fontWeight: "bold" }}>
                                arrow_forward
                              </Icon>
                              <MKTypography variant="subtitle2">
                                Weligama (1N)
                              </MKTypography>
                              <Icon sx={{ fontWeight: "bold" }}>
                                arrow_forward
                              </Icon>
                              <MKTypography variant="subtitle2">
                                Ahungalle (1N)
                              </MKTypography>
                              <Icon sx={{ fontWeight: "bold" }}>
                                arrow_forward
                              </Icon>
                              <MKTypography variant="subtitle2">
                                Airport
                              </MKTypography>
                            </Grid>
                            <Divider
                              variant="middle"
                              sx={{
                                backgroundColor: "##C9C5BA",
                                height: "2px",
                                margin: 1,
                              }}
                            />
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
                  ))
                : null}
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
              {pageTexts?.section3Button2 || ""}
            </MKButton>
          </Box>
        </Grid>

        {/* Experiecnce Section */}
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "16px",
            paddingRight: "16px",
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
                <MKButton
                  circular
                  variant="outlined"
                  color="black"
                  onClick={handleOurPackageClick}
                >
                  {pageTexts?.section4Button || "Experiences"}
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
                {pageTexts?.section4Title ||
                  "Unforgettable Experiences in Sri Lanka"}
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ textAlign: "center", maxWidth: "90%" }}
              >
                {pageTexts?.section4Description || ""}
              </MKTypography>
            </Grid>
          </Container>
          <Grid
            sx={{
              marginTop: 2,
              marginBottom: 4,
              flexDirection: "row",
              alignItems: "center",
              display: "flex",
              gap: 2,
            }}
            lg={10}
          >
            <Grid>
              <ToggleButtonGroup packages={packages} />
            </Grid>
            <FormControl fullWidth sx={{ borderRadius: 20 }} size="large">
              <InputLabel>All Type</InputLabel>
              <Select
                sx={{
                  height: "50px",
                  borderRadius: 50,
                  backgroundColor: "#FEFDF5",
                }}
                input={
                  <OutlinedInput
                    label={"All Type"}
                    endAdornment={
                      <InputAdornment position="end">
                        {<UilAngleDown />}
                      </InputAdornment>
                    }
                  />
                }
                value={type}
                label="All Type"
                onChange={handleTypeChange}
              >
                <MenuItem value={10}>Tenn</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ borderRadius: 20 }} size="large">
              <InputLabel> All Locations</InputLabel>
              <Select
                sx={{
                  height: "50px",
                  borderRadius: 50,
                  backgroundColor: "#FEFDF5",
                }}
                input={
                  <OutlinedInput
                    label={" All Locations"}
                    endAdornment={
                      <InputAdornment position="end">
                        {<UilAngleDown />}
                      </InputAdornment>
                    }
                  />
                }
                value={location}
                label=" All Locations"
                onChange={handleLocationChange}
              >
                <MenuItem value={10}>Tenn</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
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
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              sx={{
                overflowX: "auto",
                paddingX: 2,
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                scrollbarWidth: "none",
                flexWrap: "nowrap",
                width: "100%",
              }}
            >
              {experienceData && experienceData.length > 0
                ? experienceData.map((item, index) => (
                    <Grid
                      item
                      key={index}
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3.5}
                      sx={{
                        flexShrink: 0,
                        width: "calc(100% / 3.5)",
                        backgroundColor: "#EEECE2",
                        height: "100%",
                      }}
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
                          margin: 0,
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={item?.img}
                          sx={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                            margin: 0,
                            padding: 0,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                          }}
                          alt="Image"
                        />
                        <CardContent sx={{ flex: 1 }}>
                          <Grid
                            sx={{
                              gap: 1,
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            {item?.btn.map((btn, index) => {
                              return (
                                <MKButton
                                  className="hover-button"
                                  style={{
                                    marginTop: "5px",
                                  }}
                                  size="small"
                                  circular
                                  variant="outlined"
                                  color="black"
                                >
                                  {btn}
                                </MKButton>
                              );
                            })}
                          </Grid>

                          <Grid container alignItems="center">
                            <Typography
                              sx={{
                                fontFamily: "Playfair Display, serif",
                                fontSize: "28px",
                                fontWeight: 400,
                                lineHeight: "100%",
                                marginY: 2,
                              }}
                              variant="h5"
                            >
                              {item?.title}
                            </Typography>
                          </Grid>
                          <MKTypography variant="subtitle2">
                            {item?.description}
                          </MKTypography>
                          <Grid container display={"flex"} alignItems="center">
                            <MKTypography
                              variant="subtitle2"
                              color="text.secondary"
                              sx={{ textDecoration: "underline" }}
                              mt={0.9}
                            >
                              Learn More
                            </MKTypography>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))
                : null}
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
              {pageTexts?.section4Button2 || ""}
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
              lg={9}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              sx={{ textAlign: "center", marginBottom: "20px" }}
            >
              <Stack direction="row" spacing={1} mt={3}>
                <MKButton circular variant="outlined" color="black">
                  {pageTexts?.section5Button || ""}
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
                {pageTexts?.section5Title || ""}
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ textAlign: "center", maxWidth: "90%" }}
              >
                {pageTexts?.section5Description || ""}
              </MKTypography>
            </Grid>
          </Container>
          <Grid container>
            <Box
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
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
                  lg={4.4}
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
            {pageTexts?.section5Button2 || ""}
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
                  {pageTexts?.section6Button || ""}
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
                {pageTexts?.section6Title || ""}
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
                {pageTexts?.section6Description || ""}
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
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
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
                {blogCategories && blogCategories.length > 0
                  ? blogCategories.map((item, index) => (
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
                              image={item?.Blog_posts?.featured_image_url}
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
                                  color: "#000000",
                                }}
                                variant="h5"
                              >
                                {item?.Blog_posts?.title}
                              </Typography>
                              <MKTypography
                                variant="subtitle2"
                                sx={{
                                  display: "-webkit-box",
                                  WebkitBoxOrient: "vertical",
                                  WebkitLineClamp: 3,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  color: "#1A1814",
                                }}
                              >
                                {item?.Blog_posts?.description}
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
                    ))
                  : null}
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
                onClick={handleViewAllClick}
              >
                {pageTexts?.section6Button2 || ""}
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
                  {pageTexts?.section7Button || ""}
                </MKButton>
              </Stack>
              <MKTypography
                variant="h1"
                color="black"
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                  fontFamily: "Playfair Display",
                })}
              >
                {pageTexts?.section7Title || ""}
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ textAlign: "center", maxWidth: "90%" }}
              >
                {pageTexts?.section7Description || ""}
              </MKTypography>
            </Grid>
          </Container>

          <FAQs title="Home FAQ" />
          <Footer />
        </Grid>
      </div>
    </div>
  );
}

export default Home;
