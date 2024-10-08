import React from "react";
import { Grid } from "@mui/material";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import CustomSearchBar from "components/CustomSearchBar";

const StepThree = () => {
  const buttonArray = [
    { title: "United States" },
    { title: "United Kingdom" },
    { title: "Australia" },
    { title: "United Arab Emirates" },
  ];

  return (
    <div>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          flexDirection="column"
          spacing={2}
          sx={{
            width: "100%",
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
            Where are you travelling from?
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

          {/* Search Bar and Buttons */}
          <Grid sx={{ marginTop: 4 }}>
            <CustomSearchBar />
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "flex-start", sm: "center" }, // Adjust alignment for mobile
                marginTop: 3,
                flexWrap: "wrap", // Wrap buttons on smaller screens
              }}
            >
              {buttonArray.map((item, index) => (
                <MKButton
                  key={index}
                  sx={{
                    marginLeft: { xs: 0, sm: 2 }, // Remove left margin on mobile
                    marginBottom: { xs: 2, sm: 0 }, // Add bottom margin for mobile
                    width: { xs: "100%", sm: "auto" }, // Full width buttons on mobile
                  }}
                  circular
                  variant="outlined"
                  color="black"
                >
                  {item.title}
                </MKButton>
              ))}
            </Grid>
          </Grid>

          {/* Time Selection */}
          <MKTypography
            variant="h6"
            fontWeight="regular"
            color="black"
            sx={{
              textAlign: "left",
              maxWidth: "90%",
              paddingX: "16px",
              marginTop: "20px",
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
            }}
          >
            Do you know what time you’re arriving?
          </MKTypography>

          <Grid
            sx={{
              flexDirection: { xs: "column", md: "row" }, // Stack items vertically on mobile
              display: "flex",
              width: "100%",
              gap: 2,
              marginTop: 2,
            }}
            item
          >
            {["Before noon", "Afternoon", "Evening"].map((time, index) => (
              <Grid
                key={index}
                sx={{
                  border: "solid",
                  borderWidth: 1,
                  borderRadius: 4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "70px",
                  flex: 1,
                  marginBottom: { xs: 2, md: 0 }, // Add bottom margin on mobile
                }}
              >
                <MKTypography
                  variant="h6"
                  fontWeight="regular"
                  color="black"
                  sx={{
                    maxWidth: "90%",
                  }}
                >
                  {time}
                </MKTypography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default StepThree;
