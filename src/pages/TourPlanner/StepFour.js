import React from "react";
import { Grid } from "@mui/material";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import CustomSearchBar from "components/CustomSearchBar";
import soulmateImg from "assets/images/homePage/soulmate.jpeg";

const StepFour = () => {
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
                justifyContent: { xs: "flex-start", sm: "center" },
                marginTop: 3,
                flexWrap: "wrap",
              }}
            >
              {buttonArray.map((item, index) => (
                <MKButton
                  key={index}
                  sx={{
                    marginLeft: { xs: 0, sm: 2 },
                    marginBottom: { xs: 2, sm: 0 },
                    width: { xs: "100%", sm: "auto" },
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
              flexDirection: { xs: "column", md: "row" },
              display: "flex",
              width: "100%",
              gap: 2,
              marginTop: 2,
            }}
            item
          >
            {["Colombo", "Negombo", "Kandy", "Galle", "Jaffna"].map(
              (time, index) => (
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
                    flex: 1,
                    marginBottom: { xs: 2, md: 0 },
                    backgroundImage: `url(${soulmateImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <MKTypography
                    variant="h6"
                    fontWeight="regular"
                    color="white"
                    sx={{
                      maxWidth: "90%",
                    }}
                  >
                    {time}
                  </MKTypography>
                </Grid>
              )
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default StepFour;
