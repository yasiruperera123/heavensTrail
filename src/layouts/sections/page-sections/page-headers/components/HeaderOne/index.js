import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
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

function HeaderOne() {
  const [value, setValue] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

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

  const backgroundImages = [bgImage, footerBg, bgImage];

  return (
    <MKBox position="relative">
      <Slider {...sliderSettings} style={{ height: "100%", width: "100%" }}>
        {backgroundImages.map((item, index) => (
          <MKBox key={index} position="relative" height="100%">
            <Grid
              container
              flexDirection="row"
              alignItems="center"
              sx={{
                padding: 2,
                position: "absolute",
                width: "100%",
                display: { xs: "none", lg: "flex" },
              }}
            >
              {/* First MKBox with 20% width */}
              <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
                <MKBox
                  component="img"
                  src={headerLogo}
                  alt="Background"
                  sx={{
                    width: "100px",
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: "8px",
                    boxShadow: "lg",
                  }}
                />
              </Grid>

              {/* Second MKBox with 60% width, centered */}
              <Grid
                item
                xs={8}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MKBox
                  component="ul"
                  p={0}
                  m={0}
                  sx={{
                    listStyle: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {navItems.map((text) => (
                    <MKBox component="li" key={text} sx={{ padding: 1 }}>
                      <MKTypography
                        component={Link}
                        href="#"
                        variant="button"
                        color="white"
                        fontWeight="regular"
                        onClick={(e) => e.preventDefault()}
                      >
                        {text}
                      </MKTypography>
                    </MKBox>
                  ))}
                </MKBox>
              </Grid>

              {/* Third MKBox with 20% width */}
              <Grid
                item
                xs={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <MKBox component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                  <MKButton circular variant="contained" color="white">
                    Plan a Trip
                  </MKButton>
                </MKBox>
              </Grid>
            </Grid>

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
                  Sri Lanka: Your Summer Escape in Paradise Awaits
                </MKTypography>
                <Grid justifyContent="center">
                  <MKButton circular variant="outlined" color="white">
                    Destinations
                  </MKButton>
                  <MKButton
                    sx={{ margin: 2 }}
                    circular
                    variant="outlined"
                    color="white"
                  >
                    Tour Packages
                  </MKButton>
                  <MKButton circular variant="outlined" color="white">
                    Business Tours
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
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    width: "100%",
                    maxWidth: "28rem",
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
                        width: "250%", // Length of the lines
                        height: "2px", // Thickness of the lines
                        backgroundColor: "#FFFFFF", // Color of the lines
                      },
                      "&::before": {
                        left: "-180px", // Position before the text
                        top: "50%",
                        transform: "translateY(-50%)",
                      },
                      "&::after": {
                        right: "-180px", // Position after the text
                        top: "50%",
                        transform: "translateY(-50%)",
                      },
                      fontFamily: "Playfair Display, serif",
                      fontSize: "20px",
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
                      fontSize: "30px",
                      fontFamily: "Playfair Display, serif",
                      paddingLeft: 2,
                      textAlign: "center",
                    })}
                  >
                    “Sri Lanka is one of the Must-Visit Travel Destinations For
                    Summer 2024”
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
                        width: "28%", // Length of the lines
                        height: "2px", // Thickness of the lines
                        backgroundColor: "#FFFFFF", // Color of the lines
                      },
                      "&::before": {
                        left: "-32%", // Position before the text
                        top: "50%",
                        transform: "translateY(-50%)",
                      },
                      "&::after": {
                        right: "-32%", // Position after the text
                        top: "50%",
                        transform: "translateY(-50%)",
                      },
                      fontFamily: "Playfair Display, serif",
                      fontSize: "20px",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Kathleen Peddicord, Forbes
                  </MKTypography>
                </Grid>
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "30rem",
                    borderRadius: 5,
                    borderWidth: "1px",
                    padding: 2,
                    border: "solid",
                    borderColor: "#FFFFFF",
                  }}
                >
                  <MKTypography
                    sx={{
                      display: "inline-flex",
                      color: "#FFFFFF",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "20px",
                    }}
                  >
                    Cover Image: Sigiriya, Visit this place in
                  </MKTypography>
                  <MKTypography
                    variant="h1"
                    color="white"
                    mb={3}
                    sx={({ breakpoints, typography: { size } }) => ({
                      [breakpoints.down("md")]: {
                        fontSize: size["3xl"],
                      },
                      fontSize: "25px",
                      fontFamily: "Playfair Display, serif",
                    })}
                  >
                    Peaceful Sri Lanka Trip -Sigiriya Special
                  </MKTypography>
                  <Divider
                    sx={{ opacity: 1, backgroundColor: "#FFFFFF" }}
                    variant="middle"
                  />
                  <MKButton
                    sx={{ width: "40%", backgroundColor: "none" }}
                    circular
                    variant="outlined"
                    color="white"
                  >
                    View Package
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
              <ListItemText primary={text} />
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
