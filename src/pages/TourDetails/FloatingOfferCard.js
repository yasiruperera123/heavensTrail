import React, { useEffect, useState } from "react";
import { Box, Divider, Grid } from "@mui/material";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

const FloatingOfferCard = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Scroll handler to toggle sticky state
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const stickyStartPosition = 400; // Adjust based on when you want it to start sticking

      setIsSticky(scrollTop > stickyStartPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
      <div
        style={{
          position: isSticky ? "fixed" : "absolute",
          top: isSticky ? "100px" : "700px",
          right: "20px",
          background: "linear-gradient(180deg, #FB8A38 0%, #E83801 100%)",
          borderRadius: "15px",
          padding: "10px 20px",
          display: "flex",
          flexDirection: "column",
          zIndex: 1000,
          width: "17%",
          transition: "top 0.3s ease", // Smooth transition
        }}
      >
        <MKTypography
          color="white"
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
            fontFamily: "Poppins, sans-serif",
            lineHeight: "30px",
          }}
        >
          from
        </MKTypography>

        <MKTypography
          variant="h1"
          color="white"
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
          })}
        >
          AUD 1,990.00
        </MKTypography>
        <MKTypography
          color="white"
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
            fontFamily: "Poppins, sans-serif",
            lineHeight: "30px",
          }}
        >
          + taxes and charges
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
          <MKTypography
            color="white"
            sx={{
              fontSize: { xs: "14px", sm: "22px" },
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
        <Grid>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <MKTypography
              color="white"
              sx={{
                fontSize: { xs: "14px", sm: "13px" },
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
                fontWeight: 400,
              }}
            >
              2 Pax Travelling
            </MKTypography>
            <MKTypography
              color="white"
              sx={{
                fontSize: { xs: "14px", sm: "13px" },
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
                fontWeight: 400,
              }}
            >
              AUD 2,200
            </MKTypography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <MKTypography
              color="white"
              sx={{
                fontSize: { xs: "14px", sm: "13px" },
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
                fontWeight: 400,
              }}
            >
              4 Pax Travelling
            </MKTypography>
            <MKTypography
              color="white"
              sx={{
                fontSize: { xs: "14px", sm: "13px" },
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
                fontWeight: 400,
              }}
            >
              AUD 2,050
            </MKTypography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <MKTypography
              color="white"
              sx={{
                fontSize: { xs: "14px", sm: "13px" },
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
                fontWeight: 400,
              }}
            >
              2 Pax Travelling
            </MKTypography>
            <MKTypography
              color="white"
              sx={{
                fontSize: { xs: "14px", sm: "13px" },
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
                fontWeight: 400,
              }}
            >
              AUD 2,200
            </MKTypography>
          </Grid>
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
        <MKButton
          sx={{ marginTop: 2 }}
          variant="contained"
          circular
          size="medium"
          color="white"
        >
          Request a Quote
        </MKButton>
      </div>
    </div>
  );
};

export default FloatingOfferCard;
