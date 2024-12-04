import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import React, { useState, useEffect } from "react";
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
import {
  fetchPropertyData,
  fetchPropertyPageTexts,
  fetchPropertyPageImages,
} from "services/PropertyService";

function HeaderTwo({
  title,
  buttonArray,
  description,
  backgroundImage,
  pageId,
}) {
  const [value, setValue] = useState();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState();

  const getPropertyText = async () => {
    // Usage
    fetchPropertyPageTexts()
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
    fetchPropertyPageImages(pageId, 1)
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
    // getPropertyText();
    getPropertyImages();
  }, []);

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
        position="relative"
        sx={{
          top: 0,
          marginTop: {
            xs: 0,
            sm: -10,
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
                rgba(gradients.dark.main, 0.5),
                rgba(gradients.dark.state, 0.5)
              )}, url(${backgroundImage})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
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
            {description && <div className="text-with-lines">MICE Tours</div>}
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
            {description && <hr style={{ width: "100%" }} />}
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

export default HeaderTwo;
