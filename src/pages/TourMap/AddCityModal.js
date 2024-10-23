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
} from "@mui/material";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import CustomSelect from "components/CustomSelect";
import { Divider } from "@mui/material";

function AddCityModal({ isOpen, handleCloseButton }) {
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState("Dambulla");
  const [nights, setNights] = useState(2);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const countryList = [
    { label: "Dambulla", value: "Dambulla" },
    { label: "Nuwara Eliya", value: "Nuwara Eliya" },
    { label: "Kurunagala", value: "Kurunagala" },
  ];

  const nightsList = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
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
            Add New City
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
            Select nearby cities
          </MKTypography>
          <CustomSelect
            menuList={countryList}
            fullWidth={true}
            isScrolled={true}
          />

          <MKTypography
            color="black"
            sx={{
              fontSize: "16px",
              fontFamily: "Poppins, sans-serif",
              lineHeight: "30px",
            }}
          >
            Number of Nights Staying
          </MKTypography>
          <CustomSelect
            menuList={nightsList}
            fullWidth={true}
            isScrolled={true}
          />

          <Grid
            sx={{
              backgroundColor: "#EEECE2",
              marginTop: 2,
              paddingY: 2,
              paddingX: 3,
              borderRadius: 6,
            }}
          >
            <Typography
              variant="h6"
              sx={{ marginBottom: 2, fontFamily: "Poppins, sans-serif" }}
            >
              Recommended activities/destinations at {city}
            </Typography>

            <Divider
              variant="middle"
              sx={{
                backgroundColor: "#C9C5BA",
                height: "2px",
                fontWeight: "bold",
                marginBottom: 1,
                marginTop: 1,
              }}
            />

            {activities.map((activity, index) => (
              <Grid
                key={activity.name}
                container
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  marginBottom: 1,
                  padding: "8px 0",
                }}
              >
                <Grid item xs={8}>
                  <MKTypography
                    color="black"
                    sx={{
                      fontSize: "16px",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {activity.name}{" "}
                    <span
                      style={{
                        backgroundColor:
                          activity.type === "Destination"
                            ? "#AF4D06"
                            : "#929E03",
                        color: "white",
                        borderRadius: "12px",
                        padding: "5px 10px",
                        marginLeft: "8px",
                        fontSize: "12px",
                      }}
                    >
                      {activity.type}
                    </span>
                  </MKTypography>
                </Grid>

                <Grid item>
                  <MKTypography
                    color="white"
                    sx={{
                      fontSize: "16px",
                      fontFamily: "Poppins, sans-serif",
                      backgroundColor: "#1A1814",
                      borderRadius: "20px",
                      padding: "5px 15px",
                    }}
                  >
                    {activity.status}
                  </MKTypography>
                </Grid>
              </Grid>
            ))}
          </Grid>
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

export default AddCityModal;
