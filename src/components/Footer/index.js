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
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
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
import footerLogo from "assets/images/homePage/footerlogo.png";
import { UilUsersAlt, UilMapPinAlt } from "@iconscout/react-unicons";
import bgImage from "assets/images/homePage/header_bg.jpeg";
import headerLogo from "assets/images/homePage/headerLogo.png";
import footerBg from "assets/images/homePage/beach.jpeg";
import Logo from "assets/images/homePage/Logo.svg";
import CustomSelect from "components/CustomSelect";
import CustomDateRangePicker from "components/CustomeDateRangerPicker";
import NavBar from "components/NavBar";

function Footer() {
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
    <MKBox>
      <MKBox
        display="flex"
        alignItems="center"
        height="35rem"
        minHeight="100%"
        sx={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          margin: 1,
          borderRadius: 5,
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
            color="white"
            mb={3}
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
              fontSize: "80px",
              fontFamily: "Playfair Display, serif",
              width: "90%",
              textAlign: "center",
            })}
          >
            {`Where Will Your Journey Begin?`} <br />
            {`Create your trip today.`}
          </MKTypography>
          <Stack direction="row" spacing={1} mt={3}>
            <MKButton circular variant="contained" color="white">
              Plan Your Trip
            </MKButton>
          </Stack>
        </Grid>
      </MKBox>

      <Grid
        container
        sx={{
          minHeight: "10rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid
          item
          xs={12}
          sm="auto"
          alignItems="center"
          display={"flex"}
          justifyContent={"flex-start"}
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

        <Grid item xs={12} sm={9} lg={7} alignContent="center">
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
          <MKBox display="flex" alignItems="center" paddingRight="16px">
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
    </MKBox>
  );
}

export default Footer;
