import React from "react";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";
import { ArrowRight } from "@mui/icons-material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";
import { ReactComponent as LordBuddha } from "assets/images/homePage/Rectangle4.svg";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { ReactComponent as LiBeach } from "../../assets/icons/li_beach.svg";
import HeaderOne from "layouts/sections/page-sections/page-headers/components/HeaderOne";
import HeaderTwo from "layouts/sections/page-sections/page-headers/components/HeaderTwo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DefaultFooter from "../../examples/Footers/DefaultFooter";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
import {
  UilMountains,
  UilBookOpen,
  UilTrees,
  UilBuilding,
} from "@iconscout/react-unicons";
import sigiriyaImg from "assets/images/homePage/sigiriya.jpeg";
import soulmateImg from "assets/images/homePage/soulmate.jpeg";
import yalaImg from "assets/images/homePage/yala.jpeg";
import tigerImg from "assets/images/homePage/tiger.jpeg";
import foodImg from "assets/images/homePage/food.jpeg";
import archImg from "assets/images/homePage/9arch.jpeg";
import buddhaImg from "assets/images/homePage/buddha.jpeg";
import footerBg from "assets/images/homePage/beach.jpeg";
import footerLogo from "assets/images/homePage/footerlogo.png";
import buddha2Img from "assets/images/homePage/buddha2.jpeg";
import hinduImg from "assets/images/homePage/hindu.jpeg";
import galleImg from "assets/images/homePage/galle.jpeg";
import firBall from "assets/images/homePage/fireball.jpeg";
import buddhaSVG from "assets/images/homePage/Rectangle4.svg";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Divider,
  Box,
  Typography,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import icon from "assets/theme/components/icon";

function Destination() {
  const seaSideDes = [
    {
      title: "Mirissa",
      description:
        "Known for whale watching and its tranquil beach atmosphere.",
      img: galleImg,
    },
    {
      title: "Unawatuna",
      description:
        "Famous for its beautiful crescent-shaped beach and lively nightlife.",
      img: galleImg,
    },
    {
      title: "Bentota",
      description: "Ideal for water sports and luxurious beach resorts.",
      img: galleImg,
    },
  ];

  const hillSide = [
    {
      title: "Kandy",
      description:
        "Home to the sacred Temple of the Tooth and stunning botanical gardens.",
      img: archImg,
    },
    {
      title: "Nuwara Eliya",
      description:
        "Known as “Little England” for its colonial charm and lush tea estates.",
      img: archImg,
    },
    {
      title: "Ella",
      description:
        "Famous for its scenic train rides, hiking trails, and the iconic Nine Arches Bridge.",
      img: archImg,
    },
  ];

  const culturalSide = [
    {
      title: "Sigiriya",
      description:
        "Renowned for the ancient rock fortress and its breathtaking frescoes.",
      img: sigiriyaImg,
    },
    {
      title: "Anuradhapura",
      description:
        "A historic city known for its well-preserved ruins and sacred Bodhi tree.",
      img: sigiriyaImg,
    },
    {
      title: "Polonnaruwa",
      description:
        "Home to impressive ancient ruins and the iconic Gal Vihara sculptures.",
      img: sigiriyaImg,
    },
  ];

  const faq = [
    {
      title: "What is the best time to visit Sri Lanka?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Ut in sed feugiat viverra commodo sed malesuada pharetra tempor. Tempor mauris morbi leo erat. Pellentesque ut convallis interdum condimentum id ultrices pretium. Faucibus lorem accumsan quis mauris ac pellentesque lectus.",
    },
    {
      title: "How can Heaven's Trail help me plan my Sri Lankan tour?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Ut in sed feugiat viverra commodo sed malesuada pharetra tempor. Tempor mauris morbi leo erat. Pellentesque ut convallis interdum condimentum id ultrices pretium. Faucibus lorem accumsan quis mauris ac pellentesque lectus.",
    },
    {
      title: "What should I pack for my trip to Sri Lanka?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Ut in sed feugiat viverra commodo sed malesuada pharetra tempor. Tempor mauris morbi leo erat. Pellentesque ut convallis interdum condimentum id ultrices pretium. Faucibus lorem accumsan quis mauris ac pellentesque lectus.",
    },
    {
      title: "How can I get around Sri Lanka?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Ut in sed feugiat viverra commodo sed malesuada pharetra tempor. Tempor mauris morbi leo erat. Pellentesque ut convallis interdum condimentum id ultrices pretium. Faucibus lorem accumsan quis mauris ac pellentesque lectus.",
    },
  ];
  const socials = [
    {
      icon: <Instagram />,
      link: "",
    },
    {
      icon: <LinkedIn />,
      link: "",
    },
    {
      icon: <TwitterIcon />,
      link: "",
    },
    {
      icon: <FacebookIcon />,
      link: "",
    },
  ];

  const btnArray = [
    {
      title: "Seaside",
      icon: <LiBeach fill="white" />,
    },
    { title: "Hill Country", icon: <UilMountains /> },
    { title: "Cultural and Historical", icon: <UilBookOpen /> },
    { title: "Wildlife and Nature", icon: <UilTrees /> },
    { title: "Urban and Coastal", icon: <UilBuilding /> },
  ];

  return (
    <div style={{ backgroundColor: "#FEFDF5" }}>
      <View height="40rem">
        <HeaderTwo
          buttonArray={btnArray}
          title="Famous Destinations
in Sri Lanka"
        />
      </View>

      {/* SEASIDE DESTINATIONS */}
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
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            item
            xs={12}
            lg={8}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{ textAlign: "center", marginBottom: "20px" }}
          >
            <MKTypography
              variant="h1"
              color="black"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
                fontFamily: "Playfair Display, serif",
                fontSize: "60px",
                fontWeight: 400,
              })}
            >
              Seaside Destinations
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ textAlign: "center", maxWidth: "90%" }}
            >
              Whether you're looking to relax on golden sands, engage in
              thrilling water sports, or explore vibrant marine life, our
              seaside destinations have something for everyone.
            </MKTypography>
          </Grid>
        </Container>
        <Grid container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "90%",
              margin: "0 auto",
              padding: 2,
            }}
          >
            <Grid container spacing={2} justifyContent="center">
              {seaSideDes.map((item, index) => (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4} // Adjusted for a 3-column layout
                  sx={{ flexShrink: 0 }}
                >
                  <Card
                    sx={{
                      height: "100%",
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
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyItems: "left",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height={"500px"}
                        image={item?.img}
                        sx={{
                          objectFit: "cover",
                          width: "100%",
                          margin: 0,
                          padding: 0,
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                        }}
                        alt="Image"
                      />
                      <Grid
                        sx={{
                          width: "100%",
                          paddingLeft: 2,
                          marginBottom: 5,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Playfair Display, serif",
                            fontSize: "25px",
                            fontWeight: 400,
                            marginBottom: 2,
                          }}
                          variant="h5"
                        >
                          {item?.title}
                        </Typography>
                        <MKTypography
                          variant="subtitle2"
                          sx={{
                            display: "-webkit-box",
                            overflow: "hidden",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 3,
                            textOverflow: "ellipsis",
                          }}
                        >
                          {item?.description}
                        </MKTypography>
                        <MKTypography
                          sx={{
                            fontWeight: "500",
                            textDecoration: "underline",
                          }}
                          variant="subtitle2"
                        >
                          Read More
                        </MKTypography>
                      </Grid>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {/* HILL COUNTRY DESTINATIONS */}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "16px",
          paddingRight: "16px",
          marginBottom: "40px",
          backgroundColor: "#EEECE2",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            item
            xs={12}
            lg={8}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{ textAlign: "center", marginBottom: "20px" }}
          >
            <MKTypography
              variant="h1"
              color="black"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
                fontFamily: "Playfair Display, serif",
                fontSize: "60px",
                fontWeight: 400,
              })}
            >
              Hill Country Destinations
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ textAlign: "center", maxWidth: "90%" }}
            >
              Enjoy breath taking landscapes, tea plantations, and picturesque
              waterfalls, making it a perfect retreat for nature lovers and
              adventure enthusiasts.
            </MKTypography>
          </Grid>
        </Container>
        <Grid container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "90%",
              margin: "0 auto",
              padding: 2,
            }}
          >
            <Grid container spacing={2} justifyContent="center">
              {hillSide.map((item, index) => (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4} // Adjusted for a 3-column layout
                  sx={{ flexShrink: 0 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      boxShadow: "none",
                      backgroundColor: "#EEECE2",
                      borderWidth: 1,
                      borderColor: "#C9C5BA",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="500px"
                        image={item?.img}
                        sx={{
                          objectFit: "cover",
                          width: "100%",
                          margin: 0,
                          padding: 0,
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                        }}
                        alt="Image"
                      />
                      <Grid
                        sx={{
                          width: "100%",
                          padding: 2,
                          paddingTop: 0, // Remove padding from the top to prevent shifting
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Playfair Display, serif",
                            fontSize: "25px",
                            fontWeight: 400,
                            marginBottom: 2,
                          }}
                          variant="h5"
                        >
                          {item?.title}
                        </Typography>
                        <MKTypography
                          variant="subtitle2"
                          sx={{
                            display: "-webkit-box",
                            overflow: "hidden",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 3,
                            textOverflow: "ellipsis",
                          }}
                        >
                          {item?.description}
                        </MKTypography>
                        <MKTypography
                          sx={{
                            fontWeight: "500",
                            textDecoration: "underline",
                          }}
                          variant="subtitle2"
                        >
                          Read More
                        </MKTypography>
                      </Grid>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {/* Culture  DESTINATIONS */}
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
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
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
            sx={{ textAlign: "center", marginBottom: "20px" }}
          >
            <MKTypography
              variant="h1"
              color="black"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
                fontFamily: "Playfair Display, serif",
                fontSize: "60px",
                fontWeight: 400,
              })}
            >
              Cultural and Historical Destinations
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ textAlign: "center", maxWidth: "90%" }}
            >
              Explore ancient cities, majestic temples, and UNESCO World
              Heritage Sites that tell the stories of a civilization spanning
              over two millennia.
            </MKTypography>
          </Grid>
        </Container>
        <Grid container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "90%",
              margin: "0 auto",
              padding: 2,
            }}
          >
            <Grid container spacing={2} justifyContent="center">
              {culturalSide.map((item, index) => (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4} // Adjusted for a 3-column layout
                  sx={{ flexShrink: 0 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      boxShadow: "none",
                      backgroundColor: "#FEFDF5",
                      borderWidth: 1,
                      borderColor: "#C9C5BA",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="500px"
                        image={item?.img}
                        sx={{
                          objectFit: "cover",
                          width: "100%",
                          margin: 0,
                          padding: 0,
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                        }}
                        alt="Image"
                      />
                      <Grid
                        sx={{
                          width: "100%",
                          padding: 2,
                          paddingTop: 0, // Remove padding from the top to prevent shifting
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Playfair Display, serif",
                            fontSize: "25px",
                            fontWeight: 400,
                            marginBottom: 2,
                          }}
                          variant="h5"
                        >
                          {item?.title}
                        </Typography>
                        <MKTypography
                          variant="subtitle2"
                          sx={{
                            display: "-webkit-box",
                            overflow: "hidden",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 3,
                            textOverflow: "ellipsis",
                          }}
                        >
                          {item?.description}
                        </MKTypography>
                        <MKTypography
                          sx={{
                            fontWeight: "500",
                            textDecoration: "underline",
                          }}
                          variant="subtitle2"
                        >
                          Read More
                        </MKTypography>
                      </Grid>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {/* Your Questions Answered SECTION */}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "16px",
          paddingRight: "16px",
          marginBottom: "40px",
          backgroundColor: "#FEFDF5",
          margin: 0,
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            item
            xs={12}
            lg={8}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{ textAlign: "center", marginBottom: "20px" }}
          >
            <Stack direction="row" spacing={1} mt={3}>
              <MKButton circular variant="outlined" color="black">
                FAQs
              </MKButton>
            </Stack>
            <MKTypography
              variant="h1"
              color="black"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Your Questions Answered
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ textAlign: "center", maxWidth: "90%" }}
            >
              Planning your Sri Lankan adventure? We've got you covered! Explore
              our Frequently Asked Questions (FAQs) to find answers to common
              inquiries about visas, travel seasons, currency, culture, and
              more.
            </MKTypography>
          </Grid>
        </Container>

        {/* Accordion List with Button */}
        <Grid
          container
          item
          xs={12}
          lg={8}
          flexDirection="column"
          alignItems="center"
          sx={{ width: "70%" }}
        >
          <Grid container display={"flex"} flexDirection="column">
            {faq.map((item, index) => (
              <Accordion key={index} sx={{ boxShadow: "none" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id={`panel1-header-${index}`}
                  sx={{ boxShadow: "none", backgroundColor: "#FEFDF5" }}
                >
                  {item?.title}
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#FEFDF5" }}>
                  {item?.answer}
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>

          {/* Load More FAQs Button */}
          <MKButton
            circular
            variant="contained"
            color="black"
            sx={{
              paddingLeft: 5,
              paddingRight: 5,
              marginTop: 5,
              marginBottom: 10,
            }}
          >
            Load More FAQs
          </MKButton>
        </Grid>
      </Grid>
      <MKBox
        display="flex"
        alignItems="center"
        height="35rem"
        minHeight="100%"
        sx={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          margin: 1,
          borderRadius: 5,
        }}
      >
        <Grid
          container
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          flexDirection="column"
          justifyContent="center"
        >
          <MKTypography
            variant="h1"
            color="white"
            mb={3}
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
              fontSize: "80px",
              fontFamily: "Playfair Display, serif",
              width: "90%",
              textAlign: "center",
            })}
          >
            {`Where Will Your Journey Begin?`} <br />
            {`Create your trip today.`}
          </MKTypography>
          <Stack direction="row" spacing={1} mt={3}>
            <MKButton circular variant="contained" color="white">
              Plan Your Trip
            </MKButton>
          </Stack>
        </Grid>
      </MKBox>

      <Grid container sx={{ minHeight: "10rem" }}>
        <Grid
          item
          xs={12}
          sm="auto"
          alignItems="center"
          display={"flex"}
          sx={{ marginLeft: 2 }}
        >
          <MKBox
            component="img"
            style={{ width: 120, height: 100 }}
            src={footerLogo}
            alt={"bgImage"}
            mb={2}
          />
        </Grid>

        <Grid item xs={12} sm={9} alignContent="center">
          <Grid
            sx={{ minHeight: "2rem" }}
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent={"space-evenly"}
          >
            {[
              "Home",
              "Tours Packages",
              "Business Tours",
              "About Us",
              "Contact Us",
            ].map((text, index) => (
              <React.Fragment key={text}>
                <MKTypography
                  variant="h6"
                  fontWeight="regular"
                  color="black"
                  sx={{
                    textAlign: "center",
                    fontFamily: "Playfair Display, serif",
                    mx: 1,
                    my: { xs: 1, sm: 0 },
                  }}
                >
                  {text}
                </MKTypography>
                {index < 4 && (
                  <Divider
                    sx={{
                      borderColor: "black",
                      borderWidth: "2px",
                      height: "2rem", // Adjust the height
                      mx: { xs: 0, sm: 1 },
                    }}
                    orientation="vertical"
                    variant="middle"
                    flexItem
                  />
                )}
              </React.Fragment>
            ))}
          </Grid>

          <Grid
            sx={{ minHeight: "2rem", mt: 2 }}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            flexWrap="wrap"
          >
            <Grid item xs={12} sm={2} textAlign="center" mb={{ xs: 2, sm: 0 }}>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ fontFamily: "Playfair Display, serif" }}
              >
                hello@heavenstrails.com
              </MKTypography>
            </Grid>
            <Grid item xs={12} sm={3} textAlign="center" mb={{ xs: 2, sm: 0 }}>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ fontFamily: "Playfair Display, serif" }}
              >
                +94 77 77 0 4000
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ fontFamily: "Playfair Display, serif" }}
              >
                +94 37 22 8 1908
              </MKTypography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ fontFamily: "Playfair Display, serif" }}
              >
                Kandanegedara Road, Weralugama,
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ fontFamily: "Playfair Display, serif" }}
              >
                Kuliyapitiya, Sri Lanka
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm="auto" display="flex" justifyContent="center">
          <MKBox display="flex" alignItems="center">
            {socials.map(({ icon, link }, key) => (
              <MKTypography
                key={link}
                component="a"
                href={link}
                target="_blank"
                rel="noreferrer"
                variant="h5"
                color="black"
                opacity={0.8}
                mr={key === socials.length - 1 ? 0 : 2.5}
              >
                {icon}
              </MKTypography>
            ))}
          </MKBox>
        </Grid>
      </Grid>
    </div>
  );
}

export default Destination;