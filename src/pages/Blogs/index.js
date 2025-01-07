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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";
import {
  UilPlaneDeparture,
  UilTicket,
  UilUtensils,
  UilBedDouble,
  UilSearch,
} from "@iconscout/react-unicons";
import { TextField, InputAdornment } from "@mui/material";
import NavBar from "components/NavBar";
import { BlogsPage } from "constants/images";
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

function Blogs() {
  const navigate = useNavigate();
  const travelPcgs = [
    {
      title: "Top 5 Cultural Experiences in Sri Lanka You Can’t Miss",
      date: "Aug 02, 2024",
      img: BlogsPage.Blogs_Card_1,
    },
    {
      title: "A Food Lover’s Guide to Sri Lankan Cuisine",
      date: "Aug 02, 2024",
      img: BlogsPage.Blogs_Card_2,
    },
    {
      title: "How to Plan the Perfect Wildlife Safari in Sri Lanka",
      date: "Aug 02, 2024",
      img: BlogsPage.Blogs_Card_3,
    },
    {
      title: "A Food Lover’s Guide to Sri Lankan Cuisine",
      date: "Aug 02, 2024",
      img: BlogsPage.Blogs_Card_4,
    },
    {
      title: "How to Plan the Perfect Wildlife Safari in Sri Lanka",
      date: "Aug 02, 2024",
      img: BlogsPage.Blogs_Card_5,
    },
    {
      title: "Top 5 Cultural Experiences in Sri Lanka You Can’t Miss",
      date: "Aug 02, 2024",
      img: BlogsPage.Blogs_Card_6,
    },
  ];

  const btnArray = [
    {
      title: "Adventure & Nature",
    },
    {
      title: "Travel Tips",
    },
    {
      title: "Culture & Heritage",
    },
    {
      title: "Guides ",
    },
  ];

  const CustomCard = ({ item, index }) => {
    return (
      <Card
        sx={({ breakpoints }) => ({
          display: "flex",
          flexDirection: "row",
          borderRadius: "15px",
          boxShadow: "none",
          border: "solid",
          borderColor: "#C9C5BA",
          backgroundColor: "#FEFDF5",
          flex: 1,
          [breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
          },
        })}
      >
        <CardMedia
          component="img"
          alt="Image"
          image={BlogsPage.Blogs_Top_Card}
          title="title"
          sx={({ breakpoints }) => ({
            borderRadius: "15px",
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            width: "560px",
            height: "340px",
            margin: 0,
            [breakpoints.down("sm")]: {
              width: "100%",
              height: "auto",
            },
          })}
        />

        <CardContent
          sx={({ breakpoints }) => ({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignSelf: "center",
            backgroundColor: "#FEFDF5",
            flex: 1,
            minHeight: "270px",
            [breakpoints.down("sm")]: {
              height: "auto",
            },
          })}
        >
          <Grid
            container
            display="flex"
            flexDirection="row"
            lg={12}
            sx={{
              justifyContent: "space-between",
            }}
          >
            <MKTypography
              variant="h6"
              fontWeight="regular"
              sx={{
                maxWidth: "100%",
                lineHeight: "30px",
                color: "#AF4D06",
              }}
            >
              Travel Tips
            </MKTypography>
            <Grid>
              <MKTypography
                color="black"
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins, sans-serif",
                  lineHeight: "30px",
                }}
              >
                Aug 02, 2024
              </MKTypography>
            </Grid>
          </Grid>

          <Grid container display="flex" flexDirection="row" lg={12}>
            <Divider
              variant="middle"
              sx={{
                height: 2,
                width: "100%",
                backgroundColor: "#C9C5BA",
                marginY: 1,
              }}
            />
            <MKTypography
              variant="h1"
              color="black"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
                fontFamily: "Playfair Display, serif",
                fontSize: "25px",
                fontWeight: 400,
              })}
            >
              5 Scenic Train Journeys in Sri Lanka for the Perfect Travel
              Adventure
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={({ breakpoints }) => ({
                textAlign: "left",
                maxWidth: "100%",
                lineHeight: "19.5px",
                [breakpoints.down("sm")]: {
                  marginTop: 2,
                },
              })}
            >
              Explore the most beautiful train journeys in Sri Lanka, offering
              stunning views of tea plantations, waterfalls, and mountains. A
              complete guide to planning an unforgettable wildlife safari in Sri
              Lanka, from choosing the right park to spotting elephants,
              leopards, and more. Find peace and rejuvenation at Sri Lanka’s top
              wellness retreats, offering yoga, meditation, Ayurvedic
              treatments, and more.
            </MKTypography>
            <MKTypography
              sx={{
                fontWeight: "500",
                textDecoration: "underline",
              }}
              mt={2}
              variant="subtitle2"
            >
              Read More
            </MKTypography>
          </Grid>
        </CardContent>
      </Card>
    );
  };

  return (
    <div style={{ backgroundColor: "#FEFDF5" }}>
      <NavBar />
      <div style={{ padding: 15 }}>
        <HeaderTwo
          buttonArray={btnArray}
          title="Blogs & Stories"
          backgroundImage={BlogsPage.Header}
        />
      </div>
      {/* Explore our travel Packages */}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "16px",
          paddingRight: "16px",
          marginBottom: "40px",
          backgroundColor: "#FEFDF5",
        }}
      >
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
          lg={5}
          mt={8}
          mb={1}
        >
          <TextField
            variant="outlined"
            placeholder="Search"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <UilSearch />
                </InputAdornment>
              ),
              sx: {
                borderRadius: "20px",
              },
            }}
          />
        </Grid>
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
          lg={10}
          sm={12} // Make sure it occupies full width on smaller screens
          xs={12} // For extra small screens
        >
          <Stack
            direction={{ xs: "column", sm: "row" }} // Vertical on mobile, horizontal on larger screens
            spacing={{ xs: 2, sm: 3 }} // Smaller spacing on mobile
            mt={3}
            justifyContent="center"
            alignItems="center"
          >
            <MKButton
              circular
              variant="contained"
              color="#AF4D06"
              sx={{
                backgroundColor: "#AF4D06",
                color: "white",
                width: { xs: "100%", sm: "auto" }, // Full width on mobile, auto on larger screens
                fontSize: { xs: "14px", sm: "16px" }, // Adjust font size for mobile
              }}
            >
              All Articles
            </MKButton>
            <MKButton
              circular
              variant="outlined"
              color="black"
              sx={{
                width: { xs: "100%", sm: "auto" },
                fontSize: { xs: "14px", sm: "16px" },
              }}
            >
              Travel Tips
            </MKButton>
            <MKButton
              circular
              variant="outlined"
              color="black"
              sx={{
                width: { xs: "100%", sm: "auto" },
                fontSize: { xs: "14px", sm: "16px" },
              }}
            >
              Culture & Heritage
            </MKButton>
            <MKButton
              circular
              variant="outlined"
              color="black"
              sx={{
                width: { xs: "100%", sm: "auto" },
                fontSize: { xs: "14px", sm: "16px" },
              }}
            >
              Adventure & Nature
            </MKButton>
            <MKButton
              circular
              variant="outlined"
              color="black"
              sx={{
                width: { xs: "100%", sm: "auto" },
                fontSize: { xs: "14px", sm: "16px" },
              }}
            >
              Guides
            </MKButton>
          </Stack>
        </Grid>

        <Box
          style={{
            backgroundColor: "#FEFDF5",
          }}
        >
          <Grid
            container
            spacing={4}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} sm={5} lg={10.5} sx={{ alignItems: "center" }}>
              <Divider
                variant="middle"
                sx={{
                  backgroundColor: "#C9C5BA",
                  height: "2px",
                  opacity: 1,
                  marginY: 4,
                }}
              />
              <CustomCard />
            </Grid>
          </Grid>
        </Box>

        <Grid container>
          <Box
            sx={({ breakpoints }) => ({
              display: "flex",
              justifyContent: "center",
              width: "90%",
              margin: "0 auto",
              padding: 0,
              [breakpoints.down("sm")]: {
                width: "100%",
                margin: "0",
                paddingTop: 2,
              },
            })}
          >
            <Grid container spacing={3} justifyContent="center">
              {travelPcgs.map((item, index) => (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  sx={{ flexShrink: 0 }}
                >
                  <Card
                    sx={{
                      height: "416px",
                      boxShadow: "none",
                      backgroundColor: "#FEFDF5",
                      borderWidth: 1,
                      borderColor: "#C9C5BA",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardActionArea
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height={"250px"}
                        image={item?.img}
                        sx={{
                          objectFit: "cover",
                          width: "100%",
                          margin: 0,
                          padding: 0,
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                        }}
                        alt="SVG Image"
                      />
                      <CardContent sx={{ flex: 1, padding: 1 }}>
                        <Grid
                          container
                          display="flex"
                          flexDirection="row"
                          lg={12}
                          sx={{
                            justifyContent: "space-between",
                          }}
                        >
                          <MKTypography
                            variant="h6"
                            fontWeight="regular"
                            sx={{
                              maxWidth: "100%",
                              lineHeight: "30px",
                              color: "#AF4D06",
                            }}
                          >
                            Travel Tips
                          </MKTypography>
                          <Grid>
                            <MKTypography
                              color="black"
                              sx={{
                                fontSize: "16px",
                                fontFamily: "Poppins, sans-serif",
                                lineHeight: "30px",
                              }}
                            >
                              Aug 02, 2024
                            </MKTypography>
                          </Grid>
                        </Grid>
                        <Divider
                          variant="middle"
                          sx={{
                            backgroundColor: "##C9C5BA",
                            height: "2px",
                            marginY: 1,
                          }}
                        />

                        <Grid container alignItems="center">
                          <Typography
                            sx={{
                              fontFamily: "Playfair Display, serif",
                              fontSize: "28px",
                              fontWeight: 400,
                              lineHeight: "100%",
                            }}
                            variant="h5"
                          >
                            {item?.title}
                          </Typography>
                        </Grid>
                        <MKTypography
                          sx={{
                            fontWeight: "500",
                            textDecoration: "underline",
                          }}
                          onClick={() => navigate("/pages/blog-article")}
                          mt={2}
                          variant="subtitle2"
                        >
                          Read More
                        </MKTypography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Blogs;
