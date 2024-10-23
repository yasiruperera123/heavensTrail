import React, { useState } from "react";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import MKInput from "components/MKInput";
import CustomPlannerActivity from "components/CustomPlannerActivity";
import CustomMap from "components/CustomMap";
import { Divider } from "@mui/material";
import Footer from "components/Footer";
import NavBarTwo from "components/NavBarTwo";
import CustomModal from "components/CustomModal";
import AddCityModal from "./AddCityModal";
import AddActivityModal from "./AddActivityModal";
import AccomadationModal from "./AccomadationModal";
import "./styles.css";

function TourMap() {
  const navigate = useNavigate();
  const [isCityModalOpen, setCityModalOpen] = useState(false);
  const [isActivityModalOpen, setActivityModalOpen] = useState(false);
  const [isAccomadationModalOpen, setAccomadationModalOpen] = useState(false);

  const onClickReviewTrip = () => {
    navigate("/pages/tour-review");
  };
  return (
    <div style={{ backgroundColor: "#FEFDF5" }}>
      <NavBarTwo />

      <div style={{ overflowX: "hidden" }}>
        {/* Tour Map Section */}
        <AddCityModal
          isOpen={isCityModalOpen}
          handleCloseButton={() => setCityModalOpen(!isCityModalOpen)}
        />
        <AddActivityModal
          isOpen={isActivityModalOpen}
          handleCloseButton={() => setActivityModalOpen(!isActivityModalOpen)}
        />
        <AccomadationModal
          isOpen={isAccomadationModalOpen}
          handleCloseButton={() =>
            setAccomadationModalOpen(!isAccomadationModalOpen)
          }
        />
        <Grid
          container
          justifyContent="center"
          sx={{
            marginBottom: "40px",
          }}
        >
          <Grid
            item
            xs={12}
            lg={12}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" }, // Column for mobile, row for larger screens
              marginX: 2,
              backgroundColor: "#EEECE2",
              borderRadius: 5,
              padding: 2,
              minHeight: "43rem",
            }}
          >
            {/* Left Section (Plan Your Journey & Activity) */}
            <Grid
              item
              xs={12}
              lg={7}
              sx={{
                display: "flex",
                flexDirection: "column",
                marginBottom: { xs: 4, lg: 0 }, // Add space between sections on mobile
              }}
            >
              <Grid
                container
                item
                sx={{
                  flexDirection: "column",
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
                  })}
                >
                  Plan your journey
                </MKTypography>
                <MKTypography
                  color="black"
                  sx={{
                    fontSize: "16px",
                    fontFamily: "Poppins, sans-serif",
                    lineHeight: "30px",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Tempor eleifend
                  integer.
                </MKTypography>
              </Grid>
              <Divider
                variant="middle"
                sx={{
                  backgroundColor: "#C9C5BA",
                  height: "2px",
                  fontWeight: "bold",
                  marginY: 2,
                }}
              />
              <CustomPlannerActivity
                handleCityModalClick={() => {
                  setCityModalOpen(!isCityModalOpen);
                }}
                handleActivityModalClick={() => {
                  console.log("asasasas");
                  setActivityModalOpen(!isActivityModalOpen);
                }}
                handleAccomadationModalClick={() => {
                  setAccomadationModalOpen(!isAccomadationModalOpen);
                }}
              />
            </Grid>

            {/* Right Section (Map) */}
            <Grid
              item
              xs={12}
              lg={5}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", lg: "flex-start" },
                alignItems: { xs: "center", lg: "flex-start" },
              }}
            >
              <CustomMap />
            </Grid>
          </Grid>
        </Grid>
      </div>

      {/* Floating Bottom Section */}
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div
          style={{
            position: "fixed",
            bottom: 60,
            backgroundColor: "#C9C5BA80",
            borderRadius: 40,
            padding: "10px 20px",
            display: "flex",
            justifyContent: "space-between",
            justifySelf: "center",
            alignItems: "center",
            zIndex: 1000,
            // Mobile responsiveness
            flexDirection: "row",
          }}
          // Adjust style for smaller screens
          className="responsive-container"
        >
          {/* Left Section - Cities & Activities */}
          <MKTypography
            color="black"
            sx={{
              fontSize: { xs: "14px", sm: "16px" }, // Adjust font size based on screen size
              fontFamily: "Poppins, sans-serif",
              lineHeight: "30px",
            }}
          >
            2 Cities & 4 Activities
          </MKTypography>

          {/* Middle Section - Date Range */}
          <MKTypography
            color="black"
            sx={{
              fontSize: { xs: "14px", sm: "16px" }, // Adjust font size based on screen size
              fontFamily: "Poppins, sans-serif",
              lineHeight: "30px",
            }}
          >
            June 28th 2024 ➜ July 5th 2024
          </MKTypography>

          {/* Right Section - Buttons */}
          <Grid sx={{ gap: 2 }}>
            <MKButton
              sx={{
                marginRight: { xs: 1, sm: 2 }, // Adjust margin for mobile
                fontSize: { xs: "12px", sm: "14px" }, // Adjust button size for mobile
              }}
              variant="outlined"
              circular
              size="medium"
              color="black"
            >
              Back
            </MKButton>
            <MKButton
              sx={{
                fontSize: { xs: "12px", sm: "14px" }, // Adjust button size for mobile
              }}
              onClick={() => onClickReviewTrip()}
              variant="contained"
              circular
              size="medium"
              color="black"
            >
              Review Plan
            </MKButton>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default TourMap;
