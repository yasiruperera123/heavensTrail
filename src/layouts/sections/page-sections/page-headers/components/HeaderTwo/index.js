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
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";
// Images
import { UilUsersAlt, UilMapPinAlt } from "@iconscout/react-unicons";
import bgImage from "assets/images/homePage/header2_bg.jpeg";
import headerLogo from "assets/images/homePage/Logo.svg";
import CustomSelect from "components/CustomSelect";
import CustomDateRangePicker from "components/CustomeDateRangerPicker";

function HeaderTwo() {
  const [value, setValue] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

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

  return (
    <MKBox position="relative" height="100%">
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
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
            Explore our round tours created just for you.
          </MKTypography>
          <Grid justifyContent="center">
            <MKButton circular variant="outlined" color="white">
              Tour Packages
            </MKButton>
          </Grid>
        </Grid>
      </Grid>
    </MKBox>
  );
}

export default HeaderTwo;
