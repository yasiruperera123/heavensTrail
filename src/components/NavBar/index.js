import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import React, { useState, useEffect } from "react";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
// Images
import { UilUsersAlt, UilMapPinAlt } from "@iconscout/react-unicons";
import bgImage from "assets/images/homePage/header_bg.jpeg";
import headerLogo from "assets/images/homePage/headerLogo.png";
import Logo from "assets/images/homePage/Logo.svg";
import CustomSelect from "components/CustomSelect";
import CustomDateRangePicker from "components/CustomeDateRangerPicker";

function NavBar() {
  const [value, setValue] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40 * 16) {
        // 40rem in pixels (assuming 1rem = 16px)
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    "Home",
    "Tour Packages",
    "Business Tours",
    "About Us",
    "Contact Us",
  ];

  return (
    <Grid container flexDirection="row" alignItems="center">
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
      <MKButton
        variant="outlined"
        color="white"
        sx={{ display: { xs: "block", lg: "none" }, ml: "auto" }}
      >
        <MKBox component="i" color="white" className="fas fa-bars" />
      </MKButton>
      <MKBox
        component="ul"
        display={{ xs: "none", lg: "flex" }}
        p={0}
        my={0}
        mx="auto"
        sx={{ listStyle: "none" }}
      >
        {[
          "Home",
          "Tour Packages",
          "Business Tours",
          "About Us",
          "Contact Us",
        ].map((text) => (
          <MKBox component="li" key={text}>
            <MKTypography
              component={Link}
              href="#"
              variant="button"
              color="white"
              fontWeight="regular"
              p={1}
              onClick={(e) => e.preventDefault()}
            >
              {text}
            </MKTypography>
          </MKBox>
        ))}
      </MKBox>
      {/* Mobile View */}
      {/* <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
      sx={{ display: { xs: "block", lg: "none" } }}
    >
      <MenuIcon />
    </IconButton> */}
      {/* <Drawer
      anchor="right"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      sx={{
        "& .MuiDrawer-paper": {
          width: 240,
        },
      }}
    >
      <IconButton
        color="inherit"
        aria-label="close drawer"
        edge="start"
        onClick={handleDrawerToggle}
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
    </Drawer> */}
      <MKBox
        component="ul"
        display={{ xs: "none", lg: "flex" }}
        p={0}
        m={0}
        sx={{ listStyle: "none" }}
      >
        <MKButton circular variant="contained" color="white">
          Plan a Trip
        </MKButton>
      </MKBox>
    </Grid>
  );
}

export default NavBar;
