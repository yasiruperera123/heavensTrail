import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { Divider } from "@mui/material";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

const SpecialOfferCard = () => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
      <div
        style={{
          position: "fixed",
          top: 100,
          right: 20,
          background: "linear-gradient(180deg, #FB8A38 0%, #E83801 100%)",
          borderRadius: 15,
          padding: "10px 20px",
          display: "flex",
          flexDirection: "column",
          zIndex: 1000,
          width: "18%",
        }}
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
          Offer
        </MKTypography>

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
            fontSize: "30px",
            fontWeight: 400,
            textAlign: "left",
            marginBottom: 2,
            marginTop: 1,
          })}
        >
          Book Now to get a special offer
        </MKTypography>
        <Divider
          variant="middle"
          sx={{
            backgroundColor: "#0000001A",
            height: "2px",
            fontWeight: "bold",
            marginY: 1,
            marginBottom: 1,
            opacity: 1,
          }}
        />
        <Grid
          sx={{
            backgroundColor: "#C65A27",
            color: "red",
            fontWeight: "bold",
            borderRadius: "8px",
            padding: "12px 0",
            fontSize: "18px",
            width: "100%",
            "&:hover": {
              backgroundColor: "#C65A27",
              color: "#FFF",
            },
          }}
        >
          {" "}
          <MKTypography
            color="white"
            sx={{
              fontSize: { xs: "14px", sm: "22px" }, // Adjust font size based on screen size
              fontFamily: "Poppins, sans-serif",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Get 25% Off
          </MKTypography>
        </Grid>
        <Divider
          variant="middle"
          sx={{
            backgroundColor: "#0000001A",
            height: "2px",
            fontWeight: "bold",
            marginY: 1,
            marginBottom: 1,
            opacity: 1,
          }}
        />
        <Divider
          variant="middle"
          sx={{
            backgroundColor: "#0000001A",
            height: "2px",
            fontWeight: "bold",
            marginY: 1,
            marginBottom: 1,
            opacity: 1,
          }}
        />
        <MKButton
          sx={{ marginTop: 2 }}
          variant="contained"
          circular
          size="medium"
          color="white"
        >
          Book Now
        </MKButton>
      </div>
    </div>
  );
};

export default SpecialOfferCard;
