import React, { useState, useRef, useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MKTypography from "components/MKTypography";
import { AccomadationPage } from "constants/images";
import MKButton from "components/MKButton";
import { ReactComponent as NoSmoke } from "assets/icons/tabler_smoking-no.svg";
import {
  UilBedDouble,
  UilParkingSquare,
  UilUtensils,
  UilWifi,
  UilSnowFlake,
} from "@iconscout/react-unicons";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Divider,
  Rating,
} from "@mui/material";
import "./Itinerary.css";

const Itinerary = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [heights, setHeights] = useState({}); // Store heights for each accordion
  const detailsRefs = useRef([]);
  const summaryRefs = useRef([]);

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    if (
      expandedIndex !== null &&
      detailsRefs.current[expandedIndex] &&
      summaryRefs.current[expandedIndex]
    ) {
      const detailsHeight = detailsRefs.current[expandedIndex].scrollHeight;
      const summaryHeight = summaryRefs.current[expandedIndex].scrollHeight;

      const totalHeight = detailsHeight + summaryHeight; // Combine both heights
      setHeights((prevHeights) => ({
        ...prevHeights,
        [expandedIndex]: totalHeight,
      }));
    }
  }, [expandedIndex]);

  const cardsData = [
    {
      title: "2 - 3 Star Accommodations: starting from $200",
      image1: AccomadationPage.Hotel_Img_1,
      image2: AccomadationPage.Hotel_Img_2,
      image3: AccomadationPage.Hotel_Img_3,
      image4: AccomadationPage.Hotel_Img_4,
      facilities: [
        <UilParkingSquare />,
        <UilBedDouble />,
        <UilUtensils />,
        <UilWifi />,
        <UilSnowFlake />,
        <NoSmoke />,
      ],
      description: "Water Garden Sigiriya",
      rating: "367 reviews",
      rateValue: 5,
      btnText: "View Hotel",
    },
  ];

  const CustomCard = ({ item, index }) => {
    const isEven = index % 2 === 0;

    return (
      <Grid>
        <Grid
          sx={{
            backgroundColor: "#FEFDF5",
          }}
        >
          <Grid
            sx={{
              border: "solid",
              borderWidth: 2,
              borderColor: "#C9C5BA",
              padding: 1,
              borderRadius: "15px",
            }}
          >
            <Card
              sx={({ breakpoints }) => ({
                display: "flex",
                flexDirection: "row",
                borderRadius: "15px",
                boxShadow: "none",
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
                image={item?.image1}
                title="title"
                sx={({ breakpoints }) => ({
                  borderRadius: "15px",
                  width: "150px",
                  height: "150px",
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
                  height: "150px",
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
                    color="black"
                    sx={{
                      fontSize: "18px",
                      fontFamily: "Poppins, sans-serif",
                      lineHeight: "30px",
                      fontWeight: 500,
                    }}
                  >
                    {item?.description}
                  </MKTypography>
                  <Grid
                    display="flex"
                    flexDirection="row"
                    sx={{ alignItems: "center" }}
                  >
                    <MKTypography
                      color="black"
                      sx={{
                        fontSize: "16px",
                        fontFamily: "Poppins, sans-serif",
                        lineHeight: "30px",
                      }}
                    >
                      {item?.rating}
                    </MKTypography>
                    <Rating name="read-only" value={item?.rateValue} readOnly />
                  </Grid>
                  <Divider
                    variant="middle"
                    sx={{
                      height: 2,
                      width: "100%",
                      backgroundColor: "#C9C5BA",
                      margin: 1,
                    }}
                  />
                </Grid>

                <Grid container display="flex" flexDirection="row" lg={12}>
                  {item?.facilities.map((icon) => {
                    return icon;
                  })}
                  <Divider
                    variant="middle"
                    sx={{
                      height: 2,
                      width: "100%",
                      backgroundColor: "#C9C5BA",
                      margin: 1,
                    }}
                  />
                </Grid>

                <Grid
                  container
                  display="flex"
                  justifyContent={"flex-end"}
                  lg={12}
                >
                  <MKButton
                    circular
                    variant="contained"
                    color="black"
                    sx={{
                      paddingLeft: 5,
                      paddingRight: 5,
                    }}
                  >
                    {item?.btnText}
                  </MKButton>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const itineraryData = [
    {
      day: "Day 01",
      title: "Bandaranaike International Airport → Sigiriya",
      description:
        "Meet and greet by the local representative at Airport Commence the journey to Sigiriya. Lorem ipsum dolor sit amet consectetur. Orci fringilla orci mollis vestibulum eget elementum purus. Nunc viverra hendrerit purus vitae odio. Semper amet nibh eget gravida faucibus tortor semper elit lectus. Ac vitae pellentesque ut quisque dictum placerat interdum aliquam molestie.",
      details: (
        <div>
          <Typography
            sx={{
              fontWeight: "500",
              fontFamily: "Poppins, sans-serif",
              fontSize: "15px",
            }}
            variant="body2"
          >
            Visit Dambulla Cave Temple – A UNESCO WORLD HERITAGE SITE
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <img
                src={AccomadationPage.Header}
                alt="Dambulla Cave"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={4}>
              <img
                src={AccomadationPage.Header}
                alt="Dambulla Cave"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={4}>
              <img
                src={AccomadationPage.Header}
                alt="Dambulla Cave"
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
          <Grid sx={{ flexDirection: "row", display: "flex" }}>
            <Typography
              sx={{
                fontWeight: "400",
                fontFamily: "Poppins, sans-serif",
                fontSize: "12px",
              }}
            >
              Proceed to{" "}
              <span
                style={{
                  fontWeight: "500",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "15px",
                }}
              >
                Minneriya National
              </span>{" "}
              Park and do a{" "}
              <span
                style={{
                  fontWeight: "500",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "15px",
                }}
              >
                Jeep Safari
              </span>
            </Typography>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <img
                src={AccomadationPage.Header}
                alt="Dambulla Cave"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={4}>
              <img
                src={AccomadationPage.Header}
                alt="Dambulla Cave"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={4}>
              <img
                src={AccomadationPage.Header}
                alt="Dambulla Cave"
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
          <Typography
            sx={{
              fontWeight: "500",
              fontFamily: "Poppins, sans-serif",
              fontSize: "15px",
            }}
            variant="body2"
          >
            Overnight stay at Sigiriya
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontFamily: "Poppins, sans-serif",
              fontSize: "12px",
            }}
            variant="body2"
          >
            Check in to the hotel, to rest and relax
          </Typography>
          <Grid margin={0} sx={{ width: "100%" }}>
            <CustomCard item={cardsData[0]} />
          </Grid>
        </div>
      ),
    },
    {
      day: "Day 02",
      title: "Dambulla → Kandy",
      description: "With a packed breakfast, chance to proceed...",
      details: <div>Kandy day details...</div>,
    },
  ];

  return (
    <Box className="itinerary-container">
      {itineraryData.map((item, index) => (
        <div className="itinerary-day" key={index}>
          <div className="timeline-container">
            <div className="day-text">{item.day}</div>
            <div className={index === 0 ? "dot" : "dot2"}></div>
            {index !== itineraryData.length - 1 && (
              <div
                className="dot-line"
                style={{
                  height:
                    expandedIndex === index
                      ? `${heights[index] || 70}px`
                      : "70px",
                }} /* Adjust heights here */
              ></div>
            )}
          </div>
          <Accordion
            sx={{ boxShadow: "none", "&:before": { display: "none" } }}
            expanded={expandedIndex === index}
            onChange={() => handleExpand(index)}
            disableGutters
          >
            <AccordionSummary
              ref={(el) => (summaryRefs.current[index] = el)}
              sx={{ boxShadow: "none", backgroundColor: "#FEFDF5" }}
              expandIcon={<ExpandMoreIcon />}
            >
              <Grid>
                <Typography>{item.title}</Typography>
                <Typography
                  sx={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: expandedIndex === index ? 4 : 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  variant="body2"
                >
                  {item.description}
                </Typography>
              </Grid>
            </AccordionSummary>
            <AccordionDetails
              ref={(el) => (detailsRefs.current[index] = el)}
              sx={{ backgroundColor: "#FEFDF5", boxShadow: 0 }}
            >
              {item.details}
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </Box>
  );
};

export default Itinerary;
