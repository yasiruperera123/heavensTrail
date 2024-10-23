import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import MKButton from "components/MKButton";
import { DestinationPage } from "constants/images";
import { UilEdit } from "@iconscout/react-unicons";

// Wrapper for connected design with dynamic vertical line adjustment using activityRef
const ConnectedLayout = ({ children, activityRef, cityRef }) => {
  const [lineHeight, setLineHeight] = useState(0);
  const [lineTop, setLineTop] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (activityRef?.current && cityRef?.current) {
        const containerHalfHeight =
          activityRef.current.getBoundingClientRect().height / 2;
        const cityContainer = cityRef.current.getBoundingClientRect().height;
        console.log("cityContainer", cityRef.current.getBoundingClientRect());
        console.log(
          "containerHalfHeight",
          activityRef.current.getBoundingClientRect()
        );
        setLineHeight(containerHalfHeight + 15);
        setLineTop(cityContainer); // Calculate the line height dynamically
      }
    };

    // Listen for window resizing and initial load
    handleResize(); // Calculate on load

    const resizeObserver = new ResizeObserver(handleResize);
    if (activityRef?.current) {
      resizeObserver.observe(activityRef.current);
    }

    // Clean up the observer
    return () => {
      if (activityRef?.current) {
        resizeObserver.unobserve(activityRef.current);
      }
    };
  }, [activityRef]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        ml: { xs: 2, sm: 4 }, // Adjust margin for smaller screens
        "&::before": {
          content: '""',
          position: "absolute",
          left: "24px", // Adjust left position for mobile
          top: `${lineTop}px`, // Adjust top position for mobile
          height: `${lineHeight}px`,
          width: "2px",
          backgroundColor: "#bfbfbf",
        },
      }}
    >
      {children}
    </Box>
  );
};

// City Section (First card before the activity section)
const CitySection = ({
  cityRef,
  clickAddNewActivity,
  clickAddNewAccomadation,
}) => {
  const clickAddActivity = () => {
    clickAddNewActivity();
  };

  const clickAddAccomadation = () => {
    clickAddNewAccomadation();
  };
  return (
    <Box sx={{ position: "relative" }} ref={cityRef}>
      <Card
        sx={{
          display: "flex",
          boxShadow: "none",
          border: "solid",
          borderColor: "#C9C5BA",
          height: { xs: "100%", md: "160px", lg: "170px" },
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
            flexDirection: { xs: "column", md: "row", lg: "row" },
            display: "flex",
            boxShadow: "none",
            margin: 0,
            padding: 0,
            justifySelf: "center",
            height: { xs: "100%", md: "160px", lg: "160px" },
          }}
        >
          <img
            src={DestinationPage.Destination_1}
            alt="Kandy"
            style={{
              width: { xs: "100%", md: "150px", lg: "150px" },
              height: "150px",
              borderRadius: "8px",
              margin: 0,
            }}
          />
          <Grid
            sx={{
              marginLeft: { xs: 0, md: 3, lg: 3 },
              width: "100%",
              marginTop: 2,
            }}
          >
            <Grid
              sx={{
                flexDirection: "row",
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" sx={{ fontSize: "18px" }}>
                Kandy (Starting Location)
              </Typography>
              <MKButton
                variant="contained"
                circular
                size="small"
                sx={{
                  backgroundColor: "#b68b3f",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#b68b3f",
                    color: "#fff",
                  },
                }}
              >
                City
              </MKButton>
            </Grid>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur. Tempor eleifend integer.
            </Typography>
            <Grid
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" }, // Stack buttons on mobile
                justifyContent: "flex-end",
                gap: 1,
                mt: 1,
              }}
            >
              <MKButton
                variant="outlined"
                circular
                size="medium"
                color="black"
                onClick={() => clickAddAccomadation()}
              >
                Add Accommodation
              </MKButton>
              <MKButton
                variant="outlined"
                circular
                size="medium"
                color="black"
                onClick={() => clickAddActivity()}
              >
                Add Activity (1/3)
              </MKButton>
              <MKButton
                variant="contained"
                circular
                size="medium"
                color="black"
              >
                <UilEdit />
                Edit
              </MKButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

// Activity Section (Use activityRef here)
const ActivitySection = ({ activityRef, onClickAdd }) => {
  return (
    <Box
      sx={{ position: "relative", ml: 6, marginTop: "15px" }}
      ref={activityRef}
    >
      <Box
        sx={{
          position: "absolute",
          left: "-22px",
          top: "50%",
          width: "34px",
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
            flexDirection: { xs: "column", md: "row", lg: "row" },
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
          <Grid
            sx={{
              marginLeft: { xs: 0, md: 3, lg: 3 },
              width: "100%",
              marginTop: 2,
            }}
          >
            <Grid
              sx={{
                flexDirection: "row",
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" sx={{ fontSize: "18px" }}>
                Temple of Tooth
              </Typography>
              <MKButton
                variant="contained"
                circular
                size="small"
                sx={{
                  backgroundColor: "#A2AF06",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#A2AF06",
                    color: "#fff",
                  },
                }}
              >
                Activity
              </MKButton>
            </Grid>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: "bold", fontSize: "15px" }}
            >
              Dawn Pooja:{" "}
              <span style={{ fontWeight: 400 }}>
                5:30 AM to 7 AM. (Recommend)
              </span>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: "bold", fontSize: "15px" }}
            >
              Estimated time spent:{" "}
              <span style={{ fontWeight: 400 }}>2 hrs and 30 minutes</span>
            </Typography>
            <Grid
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" }, // Stack buttons on mobile
                justifyContent: "flex-end",
                gap: 1,
                mt: 1,
              }}
            >
              <MKButton variant="outlined" circular size="medium" color="black">
                Remove Activity
              </MKButton>
              <MKButton
                variant="contained"
                circular
                size="medium"
                color="black"
              >
                <UilEdit />
                Edit
              </MKButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

// Main Planner Activity Component
const CustomPlannerActivity = ({
  handleCityModalClick,
  handleActivityModalClick,
  handleAccomadationModalClick,
}) => {
  const activityRef = useRef(null);
  const cityRef = useRef(null);

  const onClickAddNewCity = () => {
    console.log("In CustomPlannerActivity");
    handleCityModalClick();
  };

  const onClickAddNewActivity = () => {
    console.log("In CustomPlannerActivity");
    handleActivityModalClick();
  };

  const onClickAddNewAccomadation = () => {
    handleAccomadationModalClick();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 2,
        backgroundColor: "#EEECE2",
        borderRadius: 1,
      }}
    >
      <ConnectedLayout activityRef={activityRef} cityRef={cityRef}>
        <CitySection
          cityRef={cityRef}
          clickAddNewActivity={() => onClickAddNewActivity()}
          clickAddNewAccomadation={() => onClickAddNewAccomadation()}
        />
        <ActivitySection activityRef={activityRef} />
      </ConnectedLayout>
      <MKButton
        sx={{
          width: { xs: "50%", md: "20%", lg: "20%" },
          marginLeft: { xs: 0, md: "16px", lg: "16px" },
          marginTop: 3,
        }}
        variant="contained"
        circular
        size="medium"
        color="black"
        onClick={() => onClickAddNewCity()}
      >
        Add Next City
      </MKButton>
    </Box>
  );
};

export default CustomPlannerActivity;
