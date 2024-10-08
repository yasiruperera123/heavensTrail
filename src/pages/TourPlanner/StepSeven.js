import React, { useState } from "react";
import { Grid } from "@mui/material";
import MKTypography from "components/MKTypography";
import { UilCarSideview, UilInfoCircle } from "@iconscout/react-unicons";
import Counter from "components/CustomCounter";
import MKInput from "components/MKInput";
import Checkbox from "@mui/material/Checkbox";
import { Box, Card, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import { TourPlannerPage } from "constants/images";

const miniVanSeatTypes = ["Basic", "Luxury"];
const busSeatTypes = [
  "33 Seater/35 Seater Bus(18 - 30 Approx.)",
  "37 Seater/41 Seater",
  "45 Seater",
  "49/51 Seater",
  "53/60 Seater(50/55 pax)",
];

const StepSeven = () => {
  return (
    <div>
      <Grid
        sx={{
          display: "flex",
        }}
      >
        <Grid
          container
          flexDirection="column"
          spacing={2}
          sx={{
            width: "100%",
            paddingX: { xs: "16px" },
          }}
        >
          {/* Title */}
          <MKTypography
            variant="h1"
            color="black"
            sx={({ breakpoints, typography: { size } }) => ({
              fontFamily: "Playfair Display, serif",
              fontWeight: 400,
              fontSize: "40px",
              [breakpoints.down("md")]: {
                fontSize: size["3xl"], // Smaller font size on mobile
              },
              paddingX: "16px",
            })}
          >
            What’s your transportation choice?
          </MKTypography>

          {/* Subtitle */}
          <MKTypography
            variant="h6"
            fontWeight="regular"
            color="black"
            sx={{
              textAlign: "left",
              maxWidth: "90%",
              paddingX: { xs: "16px" },
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Tempor eleifend integer
            aenean neque parturient.
          </MKTypography>
          <MKTypography
            variant="h6"
            fontWeight="regular"
            color="black"
            sx={{
              textAlign: "left",
              maxWidth: "60%",
              marginTop: 15,
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "18px",
              },
              paddingX: "16px",
            }}
          >
            Tour Guide type
          </MKTypography>
          <Grid
            sx={{
              flexDirection: { xs: "column", md: "row" },
              display: "flex",
              width: "100%",
              gap: 2,
            }}
            item
          >
            {[
              {
                icon: TourPlannerPage.Tour_Guide,
                text: "Tour Guide",
              },
              {
                icon: TourPlannerPage.Driver_Guide,
                text: "Driver-Guide",
              },
            ].map((item, index) => (
              <Grid
                key={index}
                sx={{
                  border: "solid",
                  borderWidth: 1,
                  borderRadius: 4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "160px",
                  flexDirection: "column",
                  flex: 1,
                  marginBottom: { xs: 2, md: 0 },
                }}
              >
                <MKBox
                  component="img"
                  style={{ width: 50, height: 50 }}
                  src={item?.icon}
                  mb={2}
                />
                <MKTypography
                  variant="h6"
                  fontWeight="regular"
                  color="black"
                  sx={{
                    maxWidth: "90%",
                    fontSize: "20px",
                  }}
                >
                  {item?.text}
                </MKTypography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default StepSeven;
