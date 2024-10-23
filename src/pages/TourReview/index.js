import React from "react";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import View from "layouts/sections/components/View";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKInput from "components/MKInput";
import CustomPlanner from "components/CustomPlanner";
import CustomDateRangePicker from "components/CustomeDateRangerPicker";
import CustomSelect from "components/CustomSelect";
import Counter from "components/CustomCounter";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import {
  UilPlaneArrival,
  UilClockTen,
  UilMapPinAlt,
} from "@iconscout/react-unicons";
import { Divider } from "@mui/material";
import Footer from "components/Footer";
import NavBarTwo from "components/NavBarTwo";
import SpecialOfferCard from "components/CustomOffer";

function TourReview() {
  const countryList = [
    { label: "AUS", value: "aus" },
    { label: "AUS", value: "aus" },
    { label: "AUS", value: "aus" },
  ];

  return (
    <div style={{ backgroundColor: "#FEFDF5" }}>
      <NavBarTwo />
      <div style={{ overflowX: "hidden" }}>
        {/* Your Questions Answered SECTION */}
        <SpecialOfferCard />
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px",
            backgroundColor: "#EEECE2",
            margin: 0,
          }}
        >
          <Grid item xs={12} lg={7}>
            <Grid
              container
              item
              xs={12}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" }, // Flex-direction change for mobile
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 2,
              }}
            >
              <MKTypography
                variant="h1"
                color="black"
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                    textAlign: "left",
                  },
                  [breakpoints.down("sm")]: {
                    fontSize: size["2xl"],
                    textAlign: "left",
                  },
                  fontFamily: "Playfair Display, serif",
                  fontSize: "40px",
                  fontWeight: 400,
                  textAlign: "left",
                  marginBottom: 2,
                  marginTop: 4,
                })}
              >
                Review your journey
              </MKTypography>
            </Grid>
            <Divider
              variant="middle"
              sx={{
                backgroundColor: "#C9C5BA",
                height: "2px",
                fontWeight: "bold",
                margin: 1,
                marginBottom: 4,
              }}
            />
            <MKTypography
              color="black"
              sx={{
                fontSize: "16px",
                fontFamily: "Poppins, sans-serif",
                lineHeight: "30px",
              }}
            >
              Travelling From
            </MKTypography>
            <CustomSelect
              frontIcon={<UilPlaneArrival />}
              menuList={countryList}
              fullWidth={true}
              isScrolled={true}
            />
            <MKTypography
              color="black"
              sx={{
                fontSize: "16px",
                fontFamily: "Poppins, sans-serif",
                lineHeight: "30px",
                marginTop: 4,
              }}
            >
              Arrival Time
            </MKTypography>
            <CustomSelect
              frontIcon={<UilClockTen />}
              menuList={countryList}
              fullWidth={true}
              isScrolled={true}
            />
            <Divider
              variant="middle"
              sx={{
                backgroundColor: "#C9C5BA",
                height: "2px",
                fontWeight: "bold",
                margin: 1,
                marginBottom: 4,
                marginTop: 5,
              }}
            />
            <MKTypography
              color="black"
              sx={{
                fontSize: "16px",
                fontFamily: "Poppins, sans-serif",
                lineHeight: "30px",
                marginTop: 4,
              }}
            >
              Tour Timeline
            </MKTypography>
            <Grid sx={{ marginLeft: "-16px" }}>
              <CustomDateRangePicker backgroundColor={"#FEFDF5"} />
            </Grid>
            <Divider
              variant="middle"
              sx={{
                backgroundColor: "#C9C5BA",
                height: "2px",
                fontWeight: "bold",
                margin: 1,
                marginBottom: 4,
                marginTop: 5,
              }}
            />
            <MKTypography
              color="black"
              sx={{
                fontSize: "16px",
                fontFamily: "Poppins, sans-serif",
                lineHeight: "30px",
                marginTop: 4,
              }}
            >
              Traveling with: <span style={{ fontWeight: "bold" }}>Family</span>
            </MKTypography>
            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, // Change to column for mobile
                gap: 5,
              }}
            >
              <Counter direction="row" label="Adults" />
              <Counter direction="row" label="Childern" />
            </Grid>
            <Divider
              variant="middle"
              sx={{
                backgroundColor: "#C9C5BA",
                height: "2px",
                fontWeight: "bold",
                margin: 1,
                marginBottom: 4,
                marginTop: 5,
              }}
            />
            <Counter
              direction="row"
              label="Number of guests requiring special assistance"
            />
            <MKInput
              variant="outlined"
              label="Lorem ipsum dolor sit amet consectetur. Blandit semper nibh consectetur in ac nibh faucibus commodo commodo. Non in vel ac proin. Tincidunt lectus sit quam sed fermentum sem vivamus."
              multiline
              fullWidth
              rows={6}
              sx={{
                backgroundColor: "#FEFDF5",
                borderRadius: 5,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: 5,
                  },
                },
                marginTop: 3,
              }}
            />
            <Divider
              variant="middle"
              sx={{
                backgroundColor: "#C9C5BA",
                height: "2px",
                fontWeight: "bold",
                margin: 1,
                marginBottom: 4,
                marginTop: 5,
              }}
            />
            <MKTypography
              color="black"
              sx={{
                fontSize: "16px",
                fontFamily: "Poppins, sans-serif",
                lineHeight: "30px",
              }}
            >
              Journey Starting City
            </MKTypography>
            <CustomSelect
              frontIcon={<UilMapPinAlt />}
              menuList={countryList}
              fullWidth={true}
              isScrolled={true}
            />
            <Divider
              variant="middle"
              sx={{
                backgroundColor: "#C9C5BA",
                height: "2px",
                fontWeight: "bold",
                margin: 1,
                marginBottom: 4,
                marginTop: 5,
              }}
            />
            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, // Adjust for mobile responsiveness
                justifyContent: "space-between",
                gap: 2, // Add some gap for better spacing
              }}
            >
              <Grid item xs={12} sm={6}>
                <MKTypography
                  color="black"
                  sx={{
                    fontSize: "16px",
                    fontFamily: "Poppins, sans-serif",
                    lineHeight: "30px",
                  }}
                >
                  Transportation Type
                </MKTypography>
                <CustomSelect
                  frontIcon={<UilMapPinAlt />}
                  menuList={countryList}
                  fullWidth={true}
                  isScrolled={true}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <MKTypography
                  color="black"
                  sx={{
                    fontSize: "16px",
                    fontFamily: "Poppins, sans-serif",
                    lineHeight: "30px",
                  }}
                >
                  Transportation Options
                </MKTypography>
                <CustomSelect
                  frontIcon={<UilMapPinAlt />}
                  menuList={countryList}
                  fullWidth={true}
                  isScrolled={true}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            lg={7}
            flexDirection="column"
            alignItems="center"
            sx={{
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Grid
              container
              sx={{ justifyContent: "center" }}
              display={"flex"}
              flexDirection="column"
            >
              <CustomPlanner />
            </Grid>
          </Grid>
        </Grid>
        {/* Floating Bottom Section */}
      </div>
      <Footer />
    </div>
  );
}

export default TourReview;
