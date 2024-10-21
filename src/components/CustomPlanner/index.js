import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Grid,
  CardMedia,
  Divider,
  Rating,
} from "@mui/material";
import MKTypography from "components/MKTypography";
import { AccomadationPage } from "constants/images";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import AttractionsIcon from "@mui/icons-material/Attractions";
import MKButton from "components/MKButton";
import { ReactComponent as NoSmoke } from "assets/icons/tabler_smoking-no.svg";
import { DestinationPage } from "constants/images";
import {
  UilBedDouble,
  UilParkingSquare,
  UilUtensils,
  UilWifi,
  UilSnowFlake,
} from "@iconscout/react-unicons";
import {
  Star,
  LocalParking,
  Restaurant,
  Wifi,
  Pool,
} from "@mui/icons-material";

const ConnectedLayout = ({
  children,
  accommodationRef,
  activityRef,
  cityRef,
}) => {
  const [lineHeight, setLineHeight] = useState(0);
  const [lineTop, setLineTop] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (
        accommodationRef?.current &&
        activityRef?.current &&
        cityRef?.current
      ) {
        const cardBottom =
          accommodationRef.current.getBoundingClientRect().bottom;
        const containerTop =
          accommodationRef.current.parentElement.getBoundingClientRect().top;
        const cityContainer = cityRef.current.getBoundingClientRect().height;

        const activityContainerHeight =
          activityRef.current.getBoundingClientRect().height;
        const halfAccContainerHeight =
          accommodationRef.current.getBoundingClientRect().height / 2;
        setLineTop(cityContainer);

        setLineHeight(activityContainerHeight + halfAccContainerHeight + 71);
      }
    };

    handleResize();

    const resizeObserver = new ResizeObserver(handleResize);
    if (accommodationRef?.current) {
      resizeObserver.observe(accommodationRef.current);
    }

    return () => {
      if (accommodationRef?.current) {
        resizeObserver.unobserve(accommodationRef.current);
      }
    };
  }, [accommodationRef]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        ml: { xs: 2, sm: 4 },
        "&::before": {
          content: '""',
          position: "absolute",
          left: "24px",
          top: `${lineTop}px`,
          height: `${lineHeight}px`,
          width: "2px",
          backgroundColor: "#bfbfbf",
          zIndex: 1000,
        },
      }}
    >
      {children}
    </Box>
  );
};

const upgradeOptions = [
  {
    title: "4 Star Hotel",
    price: "USD 199.99",
  },
  {
    title: "5 Star Hotel",
    price: "USD 199.99",
  },
  {
    title: "Luxury Hotel",
    price: "USD 199.99",
  },
];

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
          backgroundColor: "#EEECE2",
        }}
      >
        <Grid
          sx={{
            border: "solid",
            borderWidth: 2,
            borderColor: "#C9C5BA",
            padding: 1,
            borderRadius: "15px",
            marginRight: { xs: 1 },
          }}
        >
          <Card
            sx={({ breakpoints }) => ({
              display: "flex",
              flexDirection: "row",
              borderRadius: "15px",
              boxShadow: "none",
              backgroundColor: "#EEECE2",
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
                backgroundColor: "#EEECE2",
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
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Grid>
                  <Rating name="read-only" value={3} readOnly />
                  <MKTypography
                    color="black"
                    sx={{
                      fontSize: "16px",
                      fontFamily: "Poppins, sans-serif",
                      lineHeight: "30px",
                    }}
                  >
                    3 Star Accommodation
                  </MKTypography>
                </Grid>
                <Grid>
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
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

// City Section
const CitySection = ({ cityRef }) => (
  <Box sx={{ position: "relative" }} ref={cityRef}>
    <Card
      sx={{
        display: "flex",
        boxShadow: "none",
        border: "solid",
        borderColor: "#C9C5BA",
        height: "170px",
        margin: 0,
        padding: 1,
        backgroundColor: "#EEECE2",
        marginRight: { xs: 1 },
      }}
    >
      <Box
        sx={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          backgroundColor: "#000",
          color: "#fff",
          position: "absolute",
          left: "-20px",
          top: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
        }}
      >
        1
      </Box>

      <CardContent
        sx={{
          flexDirection: "row",
          display: "flex",
          boxShadow: "none",
          margin: 0,
          padding: 0,
          justifySelf: "center",
          height: "156px",
        }}
      >
        <img
          src={DestinationPage.Destination_1}
          alt="Kandy"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "8px",
            margin: 0,
          }}
        />
        <Grid sx={{ marginLeft: 3, width: "100%", marginTop: 2 }}>
          <Grid
            sx={{
              flexDirection: "row",
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">Kandy (Starting Location)</Typography>
            <MKButton
              variant="contained"
              circular
              size="small"
              sx={{ backgroundColor: "#b68b3f", color: "#fff" }}
            >
              City
            </MKButton>
          </Grid>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur. Tempor eleifend integer.
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  </Box>
);

// Activity Section
const ActivitySection = ({ activityRef }) => (
  <Box sx={{ position: "relative", ml: 6 }} ref={activityRef}>
    <Box
      sx={{
        position: "absolute",
        left: "-22px",
        top: "50%",
        width: "24px",
        height: "2px",
        backgroundColor: "#bfbfbf",
      }}
    />
    <Card
      sx={{
        display: "flex",
        boxShadow: "none",
        border: "solid",
        borderColor: "#C9C5BA",
        height: { xs: "auto", md: "170px", lg: "170px" },
        margin: 0,
        padding: 1,
        backgroundColor: "#EEECE2",
        marginRight: { xs: 1 },
      }}
    >
      <CardContent
        sx={{
          flexDirection: "row",
          display: "flex",
          boxShadow: "none",
          margin: 0,
          padding: 0,
          justifySelf: "center",
          height: { xs: "auto", md: "156px", lg: "156px" },
          backgroundColor: "#EEECE2",
        }}
      >
        <img
          src={DestinationPage.Destination_1}
          alt="Kandy"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "8px",
            margin: 0,
          }}
        />
        <Grid sx={{ marginLeft: 3, width: "100%", marginTop: 2 }}>
          <Grid
            sx={{
              flexDirection: "row",
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">Kandy (Starting Location)</Typography>
            <MKButton
              variant="contained"
              circular
              size="small"
              sx={{ backgroundColor: "#b68b3f", color: "#fff" }}
            >
              City
            </MKButton>
          </Grid>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur. Tempor eleifend integer.
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  </Box>
);

// Accommodation Section
const AccommodationSection = React.forwardRef((props, ref) => (
  <Box sx={{ position: "relative", ml: 6 }} ref={ref}>
    <Box
      sx={{
        position: "absolute",
        left: "-22px",
        top: "50%",
        width: "24px",
        height: "2px",
        backgroundColor: "#bfbfbf",
      }}
    />
    <CustomCard item={cardsData[0]} />
  </Box>
));

// Final CustomPlanner Component with Connected Design
const CustomPlanner = () => {
  const accommodationRef = useRef(null);
  const activityRef = useRef(null);
  const cityRef = useRef(null);

  return (
    <Box sx={{ mt: 4, width: "100%" }}>
      <ConnectedLayout
        accommodationRef={accommodationRef}
        activityRef={activityRef}
        cityRef={cityRef}
      >
        <CitySection cityRef={cityRef} />
        <Typography variant="h6" sx={{ ml: 6, mt: "10px", lineHeight: "25px" }}>
          Activities
        </Typography>
        <ActivitySection activityRef={activityRef} />
        <Typography variant="h6" sx={{ ml: 6, mt: "10px", lineHeight: "25px" }}>
          Accommodation Option (3 star hotel selected)
        </Typography>
        <AccommodationSection ref={accommodationRef} />
        <Typography variant="h6" sx={{ ml: 6, mt: 2, mb: 3 }}>
          Upgrade Options
        </Typography>
        <Grid
          sx={{
            width: "95%",
            position: "relative",
            ml: 6,
            display: "flex",
            flexDirection: { xs: "column", md: "row", lg: "row" },
            gap: 3,
          }}
        >
          {upgradeOptions.map((item) => {
            return (
              <Grid
                sx={{
                  border: "solid",
                  borderWidth: "1px",
                  borderRadius: "10px",
                  borderColor: "#C9C5BA",
                  paddingY: 2,
                  paddingX: 1,
                  width: "90%",
                }}
              >
                <MKTypography
                  color="black"
                  sx={({ breakpoints, typography: {} }) => ({
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    width: "100%",
                    textAlign: "left",
                  })}
                >
                  {item.title}
                </MKTypography>

                <MKTypography
                  color="black"
                  sx={({ breakpoints, typography: {} }) => ({
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "13px",
                    fontWeight: 400,
                    width: "100%",
                    textAlign: "left",
                  })}
                >
                  Starting from
                  <span
                    style={{ fontSize: 15, fontWeight: "bold", marginLeft: 5 }}
                  >
                    {item.price}
                  </span>
                </MKTypography>
                <Divider
                  variant="middle"
                  sx={{
                    height: 2,
                    width: "100%",
                    opacity: 1,
                    backgroundColor: "#C9C5BA",
                  }}
                />
                <Grid
                  sx={{
                    flexDirection: "row",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                  }}
                >
                  <MKButton circular variant="contained" color="black">
                    Upgrade
                  </MKButton>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </ConnectedLayout>
    </Box>
  );
};

export default CustomPlanner;
