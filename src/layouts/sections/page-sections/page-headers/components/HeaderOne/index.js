import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "react-slick";
import CustomPagination from "components/CustomPagination";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";
// Images
import { UilUsersAlt, UilMapPinAlt } from "@iconscout/react-unicons";
import bgImage from "assets/images/homePage/header_bg.jpeg";
import headerLogo from "assets/images/homePage/headerLogo.png";
import footerBg from "assets/images/homePage/beach.jpeg";
import Logo from "assets/images/homePage/Logo.svg";
import CustomSelect from "components/CustomSelect";
import CustomDateRangePicker from "components/CustomeDateRangerPicker";
import NavBar from "components/NavBar";
import {
  fetchPropertyData,
  fetchPropertyPageTexts,
  fetchPropertyPageImages,
} from "services/PropertyService";

function HeaderOne() {
  const [value, setValue] = useState();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getPropertyText = async () => {
    // Usage
    fetchPropertyPageTexts(1)
      .then((response) => {
        const headerTexts = response?.data.reduce((acc, item) => {
          acc[item.tag] = item.text;
          return acc;
        }, {});

        setValue(headerTexts);
        console.log("headerTextssss", headerTexts);
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
        setImages(headerImages);
        console.log("headerImages", headerImages);
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
      });
  };

  useEffect(() => {
    getPropertyText();
    getPropertyImages();
  }, []);

  const navItems = [
    "Home",
    "Tour Packages",
    "Business Tours",
    "About Us",
    "Contact Us",
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    customPaging: () => <MKBox />,
    afterChange: (current) => setCurrentSlide(current),
  };

  const backgroundImages = [
    images?.headerImage1,
    images?.headerImage2,
    images?.headerImage3,
  ];

  return (
    <MKBox
      position="relative"
      sx={{
        top: 0,
        marginTop: {
          xs: 0,
          sm: -10,
        },
      }}
    >
      <Slider {...sliderSettings} style={{ height: "100%", width: "100%" }}>
        {backgroundImages.map((item, index) => (
          <MKBox key={index} position="relative" height="100%">
            <Grid
              container
              display="flex"
              alignItems="center"
              justifyContent="center"
              minHeight="100%"
              sx={{
                backgroundImage: ({
                  palette: { gradients },
                  functions: { linearGradient, rgba },
                }) =>
                  `${linearGradient(
                    rgba(gradients.dark.main, 0.5),
                    rgba(gradients.dark.state, 0.5)
                  )}, url(${item})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 5,
                padding: { xs: 2, md: 4 },
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
                mt={8}
              >
                <MKTypography
                  variant="h1"
                  color="white"
                  mb={3}
                  sx={({ breakpoints, typography: { size } }) => ({
                    [breakpoints.down("md")]: {
                      fontSize: size["3xl"],
                    },
                    fontFamily: "Playfair Display, serif",
                    fontSize: "90px",
                    fontWeight: 400,
                  })}
                >
                  {value?.headerTitle || ""}
                </MKTypography>
                <Grid justifyContent="center">
                  <MKButton
                    circular
                    variant="outlined"
                    color="white"
                    paddingX={"20px"}
                  >
                    {value?.headerButton1}
                  </MKButton>
                  <MKButton
                    sx={{ margin: 2 }}
                    circular
                    variant="outlined"
                    color="white"
                    paddingX={"20px"}
                  >
                    {value?.headerButton2}
                  </MKButton>
                  <MKButton
                    circular
                    variant="outlined"
                    color="white"
                    paddingX={"20px"}
                  >
                    {value?.headerButton3}
                  </MKButton>
                </Grid>
              </Grid>
              <Grid
                container
                item
                xs={12}
                lg={12}
                alignItems="center"
                justifyContent="space-between"
                flexDirection={{ xs: "column", md: "row" }}
                sx={{
                  mt: 3,
                  py: 3,
                  px: { xs: 2, md: 4 },
                  borderRadius: 6,
                }}
              >
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={3}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    width: "100%",
                    maxWidth: { xs: "100%", md: "28rem" },
                    textAlign: { xs: "center", md: "left" },
                    mb: { xs: 3, md: 0 }, // Add margin for spacing between columns in mobile view
                  }}
                >
                  <MKTypography
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      color: "#FFFFFF",
                      position: "relative",
                      "&::before, &::after": {
                        content: '""',
                        position: "absolute",
                        width: { xs: "160%", md: "250%" }, // Adjust line length for mobile
                        height: "2px",
                        backgroundColor: "#FFFFFF",
                      },
                      "&::before": {
                        left: { xs: "-180%", md: "-150px" }, // Adjust position for mobile
                        top: "50%",
                        transform: "translateY(-50%)",
                      },
                      "&::after": {
                        right: { xs: "-180%", md: "-150px" }, // Adjust position for mobile
                        top: "50%",
                        transform: "translateY(-50%)",
                      },
                      fontFamily: "Playfair Display, serif",
                      fontSize: "17px",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Forbes
                  </MKTypography>
                  <MKTypography
                    variant="h1"
                    color="white"
                    mb={3}
                    sx={({ breakpoints, typography: { size } }) => ({
                      [breakpoints.down("md")]: {
                        fontSize: size["3xl"],
                      },
                      fontSize: "20px",
                      fontFamily: "Playfair Display, serif",
                      paddingLeft: 2,
                      textAlign: "center",
                    })}
                  >
                    {value?.headerSubSection1Text}
                  </MKTypography>
                  <MKTypography
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      color: "#FFFFFF",
                      position: "relative",
                      "&::before, &::after": {
                        content: '""',
                        position: "absolute",
                        width: { xs: "7%", md: "28%" }, // Adjust line length for mobile
                        height: "2px",
                        backgroundColor: "#FFFFFF",
                      },
                      "&::before": {
                        left: { xs: "-10%", md: "-32%" }, // Adjust position for mobile
                        top: "50%",
                        transform: "translateY(-50%)",
                      },
                      "&::after": {
                        right: { xs: "-10%", md: "-32%" }, // Adjust position for mobile
                        top: "50%",
                        transform: "translateY(-50%)",
                      },
                      fontFamily: "Playfair Display, serif",
                      fontSize: "17px",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Kathleen Peddicord, Forbes
                  </MKTypography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={3}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    maxWidth: { xs: "100%", md: "30rem" },
                    borderRadius: 5,
                    borderWidth: "1px",
                    padding: 2,
                    border: "solid",
                    borderColor: "#FFFFFF",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  <MKTypography
                    sx={{
                      display: "inline-flex",
                      color: "#FFFFFF",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "15px",
                    }}
                  >
                    {value?.headerSubSection2Text1}
                  </MKTypography>
                  <MKTypography
                    variant="h1"
                    color="white"
                    mb={3}
                    sx={({ breakpoints, typography: { size } }) => ({
                      [breakpoints.down("md")]: {
                        fontSize: size["3xl"],
                      },
                      fontSize: "20px",
                      fontFamily: "Playfair Display, serif",
                    })}
                  >
                    {value?.headerSubSection2Text2}
                  </MKTypography>
                  <Divider
                    sx={{ opacity: 1, backgroundColor: "#FFFFFF" }}
                    variant="middle"
                  />
                  <MKButton
                    sx={{
                      width: {
                        xs: "60%",
                        md: "40%",
                        lg: "40%",
                        padding: 0,
                        margin: 0,
                      },
                    }}
                    circular
                    variant="outlined"
                    color="white"
                  >
                    {value?.headerSubSection2Button}
                  </MKButton>
                </Grid>
              </Grid>
            </Grid>
          </MKBox>
        ))}
      </Slider>
      <CustomPagination
        currentSlide={currentSlide} // You will need to update this with actual slide index from Slider
        slideCount={3} // Update this with the total number of slides
      />
      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            width: "240px",
            boxSizing: "border-box",
          },
        }}
      >
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ margin: 2, justifyContent: "flex-end" }}
        >
          <CloseIcon />
        </IconButton>
        <List>
          {navItems.map((text) => (
            <ListItem button key={text}>
              <ListItemText sx={{ marginY: 1, marginLeft: 1 }} primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Mobile Menu Button */}
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          display: { xs: "block", lg: "none" },
          position: "absolute",
          top: "16px",
          right: "16px",
        }}
      >
        <MenuIcon />
      </IconButton>
    </MKBox>
  );
}

export default HeaderOne;
