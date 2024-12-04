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
import "./styles.css";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
  Divider,
} from "@mui/material";
// Images
import { UilUsersAlt, UilMapPinAlt } from "@iconscout/react-unicons";
import bgImage from "assets/images/homePage/header2_bg.jpeg";
import headerLogo from "assets/images/homePage/Logo.svg";
import CustomSelect from "components/CustomSelect";
import CustomDateRangePicker from "components/CustomeDateRangerPicker";
import NavBar from "components/NavBar";
import { rgb } from "chroma-js";

function HeaderThree({
  title,
  buttonArray,
  description,
  backgroundImage,
  subHead,
  headerFontSize,
}) {
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
    <div>
      <MKBox
        sx={{
          top: 0,
          marginTop: {
            xs: 0,
          },
          height: "30rem",
        }}
      >
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
                rgba(gradients.dark.main, 0),
                rgba(gradients.dark.state, 0)
              )}, url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 1,
            borderRadius: 4,
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
            {subHead && (
              <div className="text-with-lines">
                {subHead ? subHead : "MICE Tours"}
              </div>
            )}
            <MKTypography
              variant="h1"
              color="white"
              mb={3}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
                fontFamily: "Playfair Display, serif",
                fontSize: headerFontSize || "90px",
                fontWeight: 400,
              })}
            >
              {title}
            </MKTypography>
            <MKTypography
              color="white"
              mb={3}
              sx={({ breakpoints, typography: {} }) => ({
                fontFamily: "Poppins, sans-serif",
                fontSize: "20px",
                fontWeight: 400,
              })}
            >
              {description}
            </MKTypography>
            {subHead && <hr style={{ width: "100%" }} />}
            <Grid justifyContent="center">
              {buttonArray &&
                buttonArray.length > 0 &&
                buttonArray?.map((item) => {
                  return (
                    <MKButton
                      sx={{ marginLeft: 2 }}
                      circular
                      variant="outlined"
                      color="white"
                    >
                      {item?.icon}
                      {item.title}
                    </MKButton>
                  );
                })}
            </Grid>
          </Grid>
        </Grid>
      </MKBox>
    </div>
  );
}

export default HeaderThree;
