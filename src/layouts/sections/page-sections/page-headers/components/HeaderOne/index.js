import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import CustomDateRangePicker from "components/DatePicker";
import CustomSelect from "components/CustomSelect";
// Images
import bgImage from "assets/images/homePage/header_bg.jpeg";
import headerLogo from "assets/images/homePage/headerLogo.png";

function HeaderOne() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <MKBox position="relative" height="100%">
      <MKBox component="nav" position="absolute" top="0.5rem" width="100%">
        <Container>
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
        </Container>
      </MKBox>
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
            Sri Lanka: Your Summer Escape in Paradise Awaits
          </MKTypography>
          <Stack direction="row" spacing={1} mt={3} justifyContent="center">
            <MKButton circular variant="outlined" color="white">
              Destinations
            </MKButton>
            <MKButton circular variant="outlined" color="white">
              Tour Packages
            </MKButton>
            <MKButton circular variant="outlined" color="white">
              Business Tours
            </MKButton>
          </Stack>
        </Grid>
        {/* <Grid
          container
          item
          xs={12}
          lg={12}
          alignItems="center"
          justifyContent="center"
          flexDirection={{ xs: "column", md: "row" }}
          sx={{
            backgroundColor: "red",
            mt: 3,
            py: 3,
            px: { xs: 2, md: 4 },
          }}
        >
          <Grid item xs={12} md={4} lg={3} mb={{ xs: 2, md: 0 }} px={1}>
            <CustomSelect title={"How many people?"} />
          </Grid>
          <Grid item xs={12} md={4} lg={3} mb={{ xs: 2, md: 0 }} px={1}>
            <CustomSelect title={"Which city do you want to start?"} />
          </Grid>
          <Grid item xs={12} md={8} lg={6} px={1}>
            <CustomDateRangePicker />
          </Grid>
        </Grid> */}
      </Grid>
    </MKBox>
  );
}

export default HeaderOne;
