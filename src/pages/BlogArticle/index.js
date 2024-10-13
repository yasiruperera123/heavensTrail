import React from "react";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import View from "layouts/sections/components/View";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";
import { ReactComponent as LiBeach } from "../../assets/icons/li_beach.svg";
import HeaderTwo from "layouts/sections/page-sections/page-headers/components/HeaderTwo";
import HeaderThree from "layouts/sections/page-sections/page-headers/components/HeaderThree";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "components/Footer";
import MKBox from "components/MKBox";
import {
  UilPlaneDeparture,
  UilTicket,
  UilUtensils,
  UilBedDouble,
  UilSearch,
  UilArrowLeft,
  UilArrowRight,
} from "@iconscout/react-unicons";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import coconutHllImg from "assets/images/homePage/coconut_hill.jpeg";
import sigiriyaImg from "assets/images/homePage/sigiriya.jpeg";
import soulmateImg from "assets/images/homePage/soulmate.jpeg";
import archImg from "assets/images/homePage/9arch.jpeg";
import buddha2Img from "assets/images/homePage/buddha2.jpeg";
import hinduImg from "assets/images/homePage/hindu.jpeg";
import galleImg from "assets/images/homePage/galle.jpeg";
import firBall from "assets/images/homePage/fireball.jpeg";
import NavBar from "components/NavBar";
import NavBarTwo from "components/NavBarTwo";
import { BlogsPage } from "constants/images";
import { BlogArticlePage } from "constants/images";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Divider,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

function BlogArticle() {
  return (
    <div style={{ backgroundColor: "#FEFDF5" }}>
      <NavBarTwo />
      <div style={{ padding: 15 }}>
        <HeaderThree
          title="The Ultimate Guide to Sri Lanka: 10 Must-Visit Destinations for First-Time Travelers"
          backgroundImage={BlogArticlePage.Header}
          subHead="Travel Tips"
          headerFontSize={55}
        />
      </div>
      {/* Explore our travel Packages */}
      <Grid
        container
        justifyContent="center" // Center the main grid
        sx={{
          marginBottom: "40px",
          width: "100%", // Ensure full width of the container
        }}
      >
        <Grid
          sx={{
            display: "flex",
            marginBottom: "40px",
            backgroundColor: "#FEFDF5",
            width: "80%",
            marginTop: 7,
          }}
        >
          <Grid container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "90%",
                margin: "0 auto",
                padding: 2,
                flexDirection: "column",
              }}
            >
              <MKTypography
                color="black"
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins, sans-serif",
                  lineHeight: "30px",
                }}
              >
                There’s something magical about sunsets in Sri Lanka. The sky
                transforms into a vivid canvas of orange, pink, and purple hues,
                while the golden light bathes the island's diverse landscapes,
                from lush jungles to serene beaches. Each sunset tells a
                different story, leaving an indelible mark on those who
                experience it.
              </MKTypography>
              <MKTypography
                color="black"
                mt={5}
                mb={4}
                sx={{
                  fontSize: "30px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Tranquil Evening at Mirissa Beach
              </MKTypography>
              <MKBox display="flex" justifyContent="center" alignItems="center">
                <MKBox
                  component="img"
                  style={{
                    width: "600px",
                    height: "400px",
                    borderRadius: "4px",
                  }}
                  src={BlogArticlePage.Blog_Article_3}
                  alt={"bgImage"}
                />
              </MKBox>
              <MKTypography
                color="black"
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins, sans-serif",
                  lineHeight: "30px",
                  fontStyle: "italic",
                  textAlign: "center",
                }}
              >
                Figure 01: Mirissa Beach
              </MKTypography>
              <MKTypography
                color="black"
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins, sans-serif",
                  lineHeight: "30px",
                }}
                mt={4}
              >
                As I arrived at Mirissa Beach, the sun was already low in the
                sky, casting long shadows on the soft, golden sand. The waves
                lapped gently against the shore, creating a soothing rhythm that
                matched the calmness of the evening. Families, couples, and solo
                travelers gathered along the coastline, their faces illuminated
                by the warm, amber glow.
              </MKTypography>
              <MKTypography
                color="black"
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins, sans-serif",
                  lineHeight: "30px",
                }}
                mt={4}
              >
                The famous Parrot Rock stood prominently against the backdrop of
                the fading sun. I climbed to its top and felt the ocean breeze
                on my face, carrying with it the scent of salt and freedom. From
                this vantage point, the sun seemed almost close enough to touch,
                painting the sky with a dazzling array of colors that reflected
                off the water like liquid gold.
              </MKTypography>
              <MKTypography
                color="black"
                mt={5}
                mb={4}
                sx={{
                  fontSize: "30px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                A Serendipitous Encounter in Ella
              </MKTypography>
              <MKBox display="flex" justifyContent="center" alignItems="center">
                <MKBox
                  component="img"
                  style={{
                    width: "600px",
                    height: "400px",
                    borderRadius: "4px",
                  }}
                  src={BlogArticlePage.Blog_Article_2}
                  alt={"bgImage"}
                />
              </MKBox>
              <MKTypography
                color="black"
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins, sans-serif",
                  lineHeight: "30px",
                  fontStyle: "italic",
                  textAlign: "center",
                }}
              >
                Figure 01: Mirissa Beach
              </MKTypography>
              <MKTypography
                color="black"
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins, sans-serif",
                  lineHeight: "30px",
                }}
                mt={4}
              >
                As I arrived at Mirissa Beach, the sun was already low in the
                sky, casting long shadows on the soft, golden sand. The waves
                lapped gently against the shore, creating a soothing rhythm that
                matched the calmness of the evening. Families, couples, and solo
                travelers gathered along the coastline, their faces illuminated
                by the warm, amber glow.
              </MKTypography>
              <MKTypography
                color="black"
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins, sans-serif",
                  lineHeight: "30px",
                }}
                mt={4}
              >
                The famous Parrot Rock stood prominently against the backdrop of
                the fading sun. I climbed to its top and felt the ocean breeze
                on my face, carrying with it the scent of salt and freedom. From
                this vantage point, the sun seemed almost close enough to touch,
                painting the sky with a dazzling array of colors that reflected
                off the water like liquid gold.
              </MKTypography>
              <MKTypography
                color="black"
                mt={5}
                mb={4}
                sx={{
                  fontSize: "30px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                A Golden Hour in Galle Fort
              </MKTypography>
              <MKBox display="flex" justifyContent="center" alignItems="center">
                <MKBox
                  component="img"
                  style={{
                    width: "600px",
                    height: "400px",
                    borderRadius: "4px",
                  }}
                  src={BlogArticlePage.Blog_Article_1}
                  alt={"bgImage"}
                />
              </MKBox>
              <MKTypography
                color="black"
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins, sans-serif",
                  lineHeight: "30px",
                  fontStyle: "italic",
                  textAlign: "center",
                }}
              >
                Figure 01: Mirissa Beach
              </MKTypography>
              <MKTypography
                color="black"
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins, sans-serif",
                  lineHeight: "30px",
                }}
                mt={4}
              >
                As I arrived at Mirissa Beach, the sun was already low in the
                sky, casting long shadows on the soft, golden sand. The waves
                lapped gently against the shore, creating a soothing rhythm that
                matched the calmness of the evening. Families, couples, and solo
                travelers gathered along the coastline, their faces illuminated
                by the warm, amber glow.
              </MKTypography>
              <MKTypography
                color="black"
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins, sans-serif",
                  lineHeight: "30px",
                }}
                mt={4}
              >
                The famous Parrot Rock stood prominently against the backdrop of
                the fading sun. I climbed to its top and felt the ocean breeze
                on my face, carrying with it the scent of salt and freedom. From
                this vantage point, the sun seemed almost close enough to touch,
                painting the sky with a dazzling array of colors that reflected
                off the water like liquid gold.
              </MKTypography>
              <MKBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt={4}
              >
                <MKButton
                  style={{
                    marginTop: "5px",
                    marginBottom: "5px",
                    marginRight: "20px",
                  }}
                  size="small"
                  circular
                  variant="outlined"
                  color="black"
                >
                  <UilArrowLeft style={{ marginRight: 5 }} />
                  Back to Blogs
                </MKButton>
                <MKButton
                  style={{ marginTop: "5px", marginBottom: "5px" }}
                  size="small"
                  circular
                  variant="contained"
                  color="black"
                >
                  Next Article
                  <UilArrowRight style={{ marginLeft: 5 }} />
                </MKButton>
              </MKBox>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default BlogArticle;
