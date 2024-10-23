import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  MenuItem,
  TextField,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Rating,
} from "@mui/material";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import CustomSelect from "components/CustomSelect";
import { Divider } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { ReactComponent as NoSmoke } from "assets/icons/tabler_smoking-no.svg";
import { AccomadationPage } from "constants/images";
import {
  UilBedDouble,
  UilParkingSquare,
  UilUtensils,
  UilWifi,
  UilSnowFlake,
} from "@iconscout/react-unicons";

const cardsData = [
  {
    title: "Example (You will get similar hotel)",
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
    description: "Heaven Seven Kandy",
    rating: "367 reviews",
    rateValue: 5,
    price: "USD 199.99",
  },
  {
    title: "Recommended",
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
    description: "Luxury Kandy",
    rating: "367 reviews",
    rateValue: 5,
    price: "USD 399.99",
  },
];

function AccomadationModal({ isOpen, handleCloseButton }) {
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState("Kandy");
  const [nights, setNights] = useState(2);
  const [isChecked, setIsChecked] = useState(true);

  const CustomCard = ({ item, index }) => {
    const isEven = index % 2 === 0;

    return (
      <Grid>
        <Grid
          sx={{
            backgroundColor: "#FEFDF5",
            marginTop: 3,
          }}
        >
          <MKTypography
            color="black"
            sx={{
              fontSize: "18px",
              fontFamily: "Poppins, sans-serif",
              lineHeight: "30px",
              fontWeight: 400,
            }}
          >
            {item?.title}
          </MKTypography>
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
                  <Divider
                    variant="middle"
                    sx={{
                      height: 2,
                      width: "100%",
                      backgroundColor: "#C9C5BA",
                      margin: 0,
                    }}
                  />
                </Grid>

                <Grid
                  container
                  gap={1}
                  display="flex"
                  flexDirection="row"
                  lg={12}
                  mt={1}
                >
                  {item?.facilities.map((icon) => {
                    return icon;
                  })}
                  <Divider
                    variant="middle"
                    sx={{
                      height: 2,
                      width: "100%",
                      backgroundColor: "#C9C5BA",
                      margin: 0,
                    }}
                  />
                </Grid>
                <Grid
                  display="flex"
                  flexDirection="row"
                  sx={{ alignItems: "center", marginTop: 1 }}
                >
                  <MKTypography
                    color="black"
                    sx={{
                      fontSize: "13px",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {item?.rating}
                  </MKTypography>
                  <Rating name="read-only" value={item?.rateValue} readOnly />
                </Grid>
                <MKTypography
                  color="black"
                  sx={{
                    fontSize: "13px",
                    fontFamily: "Poppins, sans-serif",
                    lineHeight: "30px",
                  }}
                >
                  Starting from{" "}
                  <span style={{ fontSize: "16px", fontWeight: 500 }}>
                    {item?.price}
                  </span>
                </MKTypography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const countryList = [
    { label: "2 - 3 Star Hotel", value: "2 - 3 Star Hotel" },
    { label: "2 - 3 Star Hotel", value: "2 - 3 Star Hotel" },
    { label: "2 - 3 Star Hotel", value: "2 - 3 Star Hotel" },
  ];

  const [activities, setActivities] = useState([
    { name: "Sigiriya", type: "Destination", status: "Added" },
    { name: "Pidurangala Rock", type: "Destination", status: "Add" },
    { name: "Minneriya National Park Safari", type: "Activity", status: "Add" },
  ]);

  const handleClose = () => {
    handleCloseButton();
    setOpen(false);
  };

  const handleActivityClick = (index) => {
    const updatedActivities = activities.map((activity, i) =>
      i === index
        ? { ...activity, status: activity.status === "Add" ? "Added" : "Add" }
        : activity
    );
    setActivities(updatedActivities);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ backgroundColor: "#FEFDF5" }}>
          <Typography
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
              fontSize: "35px",
              fontWeight: 400,
              textAlign: "left",
            })}
          >
            Add new activity in {city}
          </Typography>
        </DialogTitle>

        <DialogContent sx={{ backgroundColor: "#FEFDF5" }}>
          <MKTypography
            color="black"
            sx={{
              fontSize: "16px",
              fontFamily: "Poppins, sans-serif",
              lineHeight: "30px",
            }}
          >
            Activity
          </MKTypography>
          <CustomSelect
            menuList={countryList}
            fullWidth={true}
            isScrolled={true}
          />
          {cardsData &&
            cardsData.map((item) => {
              return <CustomCard item={item} />;
            })}
        </DialogContent>

        <DialogActions sx={{ backgroundColor: "#FEFDF5" }}>
          <MKButton
            onClick={handleClose}
            sx={{
              marginRight: { xs: 1, sm: 1 },
              fontSize: { xs: "12px", sm: "14px" },
            }}
            variant="outlined"
            circular
            size="medium"
            color="black"
          >
            Cancel
          </MKButton>
          <MKButton
            onClick={handleClose}
            sx={{
              fontSize: { xs: "12px", sm: "14px" },
            }}
            variant="contained"
            circular
            size="medium"
            color="black"
          >
            Add
          </MKButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AccomadationModal;
