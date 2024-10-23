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
import Checkbox from "@mui/material/Checkbox";
import {
  UilUsdCircle,
  UilParkingSquare,
  UilCameraSlash,
} from "@iconscout/react-unicons";
import { ReactComponent as NoSmoke } from "assets/icons/tabler_smoking-no.svg";

function AddActivityModal({ isOpen, handleCloseButton }) {
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState("Kandy");
  const [nights, setNights] = useState(2);
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const countryList = [
    { label: "Temple of Tooth", value: "Temple of Tooth" },
    { label: "Botanical Garden", value: "Botanical Garden" },
    { label: "Cultural Dance", value: "Cultural Dance" },
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
              Temple of Tooth
            </Typography>

            <Divider
              variant="middle"
              sx={{
                backgroundColor: "#C9C5BA",
                height: "2px",
                fontWeight: "bold",
                marginBottom: 1,
                marginTop: 1,
                opacity: 1,
              }}
            />
            <Grid display={"flex"} flexDirection={"row"} alignItems={"center"}>
              <Checkbox
                value={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                sx={{
                  "& .MuiSvgIcon-root": {
                    borderRadius: "4px",
                    border: "1px solid #C9C5BA",
                  },
                  "&.Mui-checked": {
                    color: "#000",
                  },
                  "&:hover .MuiSvgIcon-root": {
                    border: "2px solid black",
                  },
                  padding: 0,
                }}
              />
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{
                  textAlign: "left",
                  fontSize: { xs: "14px", sm: "16px", md: "16px" },
                  fontWeight: 500,
                  marginLeft: "10px",
                }}
              >
                Dawn Pooja:{" "}
                <span style={{ fontWeight: 400 }}>
                  5:30 AM to 7 AM. (Recommend)
                </span>
              </MKTypography>
            </Grid>
            <Grid
              mt={2}
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
            >
              <Checkbox
                value={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                sx={{
                  "& .MuiSvgIcon-root": {
                    borderRadius: "4px",
                    border: "1px solid #C9C5BA",
                  },
                  "&.Mui-checked": {
                    color: "#000",
                  },
                  "&:hover .MuiSvgIcon-root": {
                    border: "2px solid black",
                  },
                  padding: 0,
                }}
              />
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{
                  textAlign: "left",
                  fontSize: { xs: "14px", sm: "16px", md: "16px" },
                  fontWeight: 500,
                  marginLeft: "10px",
                }}
              >
                Morning Pooja:{" "}
                <span style={{ fontWeight: 400 }}>9:30 AM to 11 AM</span>
              </MKTypography>
            </Grid>
            <Grid
              mt={2}
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
            >
              <Checkbox
                value={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                sx={{
                  "& .MuiSvgIcon-root": {
                    borderRadius: "4px",
                    border: "1px solid #C9C5BA",
                  },
                  "&.Mui-checked": {
                    color: "#000",
                  },
                  "&:hover .MuiSvgIcon-root": {
                    border: "2px solid black",
                  },
                  padding: 0,
                }}
              />
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{
                  textAlign: "left",
                  fontSize: { xs: "14px", sm: "16px", md: "16px" },
                  fontWeight: 500,
                  marginLeft: "10px",
                }}
              >
                Evening Pooja:{" "}
                <span style={{ fontWeight: 400 }}>6:30 PM to 7:30 PM</span>
              </MKTypography>
            </Grid>
            <Divider
              variant="middle"
              sx={{
                backgroundColor: "#C9C5BA",
                height: "2px",
                fontWeight: "bold",
                marginBottom: 1,
                marginTop: 1,
                opacity: 1,
              }}
            />
            <Grid container sx={{ gap: 2 }}>
              <UilUsdCircle color="black" />
              <UilParkingSquare color="black" />
              <UilCameraSlash color="black" />
              <NoSmoke />
            </Grid>
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

export default AddActivityModal;
