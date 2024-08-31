import React, { useState, useEffect } from "react";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import View from "layouts/sections/components/View";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { ReactComponent as LiBeach } from "../../assets/icons/li_beach.svg";
import HeaderTwo from "layouts/sections/page-sections/page-headers/components/HeaderTwo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UilHeart, UilMicrophone, UilStore } from "@iconscout/react-unicons";
import soulmateImg from "assets/images/homePage/soulmate.jpeg";
import adventureIcon1 from "assets/images/homePage/adventureIcon1.png";
import adventureIcon2 from "assets/images/homePage/adventureIcon2.png";
import adventureIcon3 from "assets/images/homePage/adventureIcon3.png";
import adventureIcon4 from "assets/images/homePage/adventureIcon4.png";
import {
  Card,
  CardMedia,
  CardContent,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Footer from "components/Footer";

function MiceTours() {
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

  const btnArray = [
    {
      title: "Weddings",
      icon: <UilHeart />,
    },
    { title: "Meetings & Conferences ", icon: <UilMicrophone /> },
    { title: "Incentives", icon: <LiBeach fill="white" /> },
    { title: "Exhibitions", icon: <UilStore /> },
  ];

  const cardsData = [
    {
      image: soulmateImg,
      title: "Meetings & Conferences",
      description:
        "From budget-friendly options to luxurious 5-star establishments, our Star Class Hotels cater to a variety of preferences and needs. Enjoy high-quality amenities, exceptional service, and prime locations across Sri Lanka.",
      buttonText: "Explore More",
    },
    {
      image: soulmateImg,
      title: "Incentive Tours",
      description:
        "From budget-friendly options to luxurious 5-star establishments, our Star Class Hotels cater to a variety of preferences and needs. Enjoy high-quality amenities, exceptional service, and prime locations across Sri Lanka.",
      buttonText: "Explore More",
    },
    {
      image: soulmateImg,
      title: "Destination Weddings",
      description:
        "From budget-friendly options to luxurious 5-star establishments, our Star Class Hotels cater to a variety of preferences and needs. Enjoy high-quality amenities, exceptional service, and prime locations across Sri Lanka.",
      buttonText: "View Packages",
    },
    {
      image: soulmateImg,
      title: "Exhibitions",
      description:
        "From budget-friendly options to luxurious 5-star establishments, our Star Class Hotels cater to a variety of preferences and needs. Enjoy high-quality amenities, exceptional service, and prime locations across Sri Lanka.",
      buttonText: "View Packages",
    },
  ];

  const adventures = [
    {
      title: "Hospitality",
      des: "Luxurious accommodations and premium services for your comfort.",
      img: adventureIcon1,
    },
    {
      title: "Transportation",
      des: "Convenient and comfortable travel arrangements throughout your stay.",
      img: adventureIcon2,
    },
    {
      title: "Event Management",
      des: "Professional event planning and execution to ensure a smooth experience.",
      img: adventureIcon3,
    },
    {
      title: "Cultural Experiences",
      des: "Unique cultural excursions and experiences tailored to your interests.",
      img: adventureIcon4,
    },
    {
      title: "Gourmet Dining",
      des: "Exquisite dining options featuring local and international cuisines.",
      img: adventureIcon4,
    },
    {
      title: "Team Building Activities",
      des: "Engaging activities designed to foster teamwork and collaboration.",
      img: adventureIcon4,
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check the window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); // You can adjust the width as per your requirement
    };

    handleResize(); // Check the initial window size
    window.addEventListener("resize", handleResize); // Add resize event listener

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const CustomCard = ({ image, title, description, buttonText, index }) => {
    const isEven = index % 2 === 0;

    return (
      <Card
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : isEven ? "row" : "row-reverse",
          marginBottom: "20px",
          borderRadius: "15px",
          backgroundColor: "#FEFDF5",
          boxShadow: "none",
        }}
      >
        <CardMedia
          component="img"
          alt={title}
          image={image}
          title={title}
          style={{
            width: isMobile ? "93%" : "40%",
            borderRadius: "15px",
          }}
        />
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignSelf: "center",
            padding: isMobile ? "10px" : "20px",
          }}
        >
          <MKTypography
            color="black"
            sx={{
              fontSize: "34px",
              fontFamily: "Playfair Display, serif",
            }}
          >
            {title}
          </MKTypography>
          <MKTypography
            color="black"
            sx={{
              fontSize: "16px",
              fontFamily: "Poppins, sans-serif",
              lineHeight: "30px",
              marginTop: isMobile ? "10px" : "20px",
            }}
          >
            {description}
          </MKTypography>
          <MKButton
            circular
            variant="contained"
            color="black"
            sx={{
              marginTop: 2,
              width: isMobile ? "100%" : "35%",
            }}
          >
            {buttonText}
          </MKButton>
        </CardContent>
      </Card>
    );
  };

  return (
    <div style={{ backgroundColor: "#FEFDF5", overflowX: "hidden" }}>
      <View height="40rem">
        <HeaderTwo
          buttonArray={btnArray}
          title="Explore our exclusive MICE Tours"
        />
      </View>

      <Box
        style={{
          backgroundColor: "#FEFDF5",
        }}
      >
        <Grid
          container
          spacing={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {cardsData.map((card, index) => (
            <Grid item xs={12} sm={6} lg={10} key={index}>
              <CustomCard
                image={card.image}
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                index={index}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Create your own adventure SECTION */}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "16px",
          paddingRight: "16px",
          backgroundColor: "#EEECE2",
          marginTop: 7,
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px",
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
                Heaven’s Trail MICE Experiences
              </MKButton>
            </Stack>
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
              Exceptional Services for an Unmatched Experience
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ textAlign: "center", maxWidth: "90%" }}
            >
              Our range of featured services ensures that every aspect of your
              MICE tour is meticulously planned and executed to perfection.
            </MKTypography>
          </Grid>
        </Container>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            sx={{
              alignSelf: "center",
              marginBottom: 6,
            }}
            container
            spacing={2}
          >
            {adventures.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} lg={4}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "16px",
                    backgroundColor: "#EEECE2",
                    boxShadow: "none",
                    borderWidth: 1,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="80px"
                    image={item?.img}
                    alt="Image"
                    sx={{ objectFit: "contain", width: "70px" }}
                  />
                  <MKTypography
                    color="#1A1814"
                    mb={2}
                    sx={{
                      fontSize: "24px",
                      fontFamily: "Playfair Display, serif",
                      fontSize: "28px",
                      fontWeight: 400,
                    }}
                  >
                    {item?.title}
                  </MKTypography>
                  <MKTypography variant="subtitle2">{item?.des}</MKTypography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
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
      <Footer />
    </div>
  );
}

export default MiceTours;