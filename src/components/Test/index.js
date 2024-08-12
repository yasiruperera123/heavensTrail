import React from "react";
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  InputAdornment,
  Box,
} from "@mui/material";
import { People, LocationOn, CalendarToday } from "@mui/icons-material";
import { DateRangePicker } from "@mui/x-date-pickers-pro";

const TripPlanner = () => {
  const [people, setPeople] = React.useState("");
  const [city, setCity] = React.useState("");
  const [dateRange, setDateRange] = React.useState([null, null]);

  const handlePeopleChange = (event) => {
    setPeople(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <Box
      sx={{
        border: "2px solid #007FFF", // Border color matching the outline in the image
        borderRadius: "8px",
        padding: "8px",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <TextField
            select
            value={people}
            onChange={handlePeopleChange}
            variant="outlined"
            placeholder="How many people?"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <People />
                </InputAdornment>
              ),
            }}
            sx={{ minWidth: 200 }}
          >
            <MenuItem value={1}>1 Person</MenuItem>
            <MenuItem value={2}>2 People</MenuItem>
            <MenuItem value={3}>3 People</MenuItem>
            <MenuItem value={4}>4 People</MenuItem>
          </TextField>
        </Grid>

        <Grid item>
          <TextField
            select
            value={city}
            onChange={handleCityChange}
            variant="outlined"
            placeholder="Which city do you want to start?"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOn />
                </InputAdornment>
              ),
            }}
            sx={{ minWidth: 250 }}
          >
            <MenuItem value="new-york">New York</MenuItem>
            <MenuItem value="san-francisco">San Francisco</MenuItem>
            <MenuItem value="los-angeles">Los Angeles</MenuItem>
          </TextField>
        </Grid>

        <Grid item>
          <DateRangePicker
            startText="Start Date"
            endText="End Date"
            value={dateRange}
            onChange={(newValue) => setDateRange(newValue)}
            renderInput={(startProps, endProps) => (
              <>
                <TextField
                  {...startProps}
                  variant="outlined"
                  sx={{
                    "& .MuiInputBase-root": {
                      paddingLeft: "8px",
                    },
                    minWidth: 230,
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarToday />
                      </InputAdornment>
                    ),
                  }}
                />
                <Box sx={{ mx: 2 }}> → </Box>
                <TextField
                  {...endProps}
                  variant="outlined"
                  sx={{
                    "& .MuiInputBase-root": {
                      paddingLeft: "8px",
                    },
                    minWidth: 230,
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarToday />
                      </InputAdornment>
                    ),
                  }}
                />
              </>
            )}
          />
        </Grid>
      </Grid>

      <Button
        variant="contained"
        color="primary"
        sx={{
          borderRadius: "24px", // Rounded button
          padding: "12px 24px", // Custom padding for button
        }}
      >
        Plan Your Trip
      </Button>
    </Box>
  );
};

export default TripPlanner;
