import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Card,
  CardMedia,
  CardContent,
  Button,
  Grid,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlaceIcon from "@mui/icons-material/Place";
import HotelIcon from "@mui/icons-material/Hotel";
import WifiIcon from "@mui/icons-material/Wifi";
import PoolIcon from "@mui/icons-material/Pool";
import StarIcon from "@mui/icons-material/Star";

const Itinerary = () => {
  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Itinerary
      </Typography>
      <Stepper orientation="vertical">
        {/* Day 01 */}
        <Step active>
          <StepLabel>
            Day 01: Bandaranaike International Airport → Sigiriya
          </StepLabel>
          <StepContent>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">
                  Bandaranaike International Airport → Sigiriya
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" gutterBottom>
                  Meet and greet by the local representative at Airport.
                  Commence the journey to Sigiriya. Lorem ipsum dolor sit amet
                  consectetur...
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Visit Dambulla Cave Temple – A UNESCO WORLD HERITAGE SITE
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="100"
                        image="image1.jpg"
                        alt="Dambulla Cave Temple"
                      />
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="100"
                        image="image2.jpg"
                        alt="Dambulla Cave Temple"
                      />
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="100"
                        image="image3.jpg"
                        alt="Dambulla Cave Temple"
                      />
                    </Card>
                  </Grid>
                </Grid>
                <Typography variant="h6" gutterBottom>
                  Proceed to Minneriya National Park and do a Jeep Safari
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="100"
                        image="jeep_safari.jpg"
                        alt="Jeep Safari"
                      />
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="100"
                        image="minneriya_park.jpg"
                        alt="Minneriya National Park"
                      />
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="100"
                        image="deer.jpg"
                        alt="Deer in Minneriya"
                      />
                    </Card>
                  </Grid>
                </Grid>
                <Typography variant="h6" gutterBottom>
                  Overnight stay at Sigiriya
                </Typography>
                <Typography variant="body2">
                  Check in to the hotel, to rest and relax
                </Typography>
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "1rem",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="water_garden.jpg"
                    alt="Water Garden Sigiriya"
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <CardContent>
                      <Typography variant="h6">
                        Water Garden Sigiriya
                      </Typography>
                      <Typography variant="body2">
                        <PlaceIcon fontSize="small" /> Deluxe Double Room <br />
                        <HotelIcon fontSize="small" /> Standard Triple Room{" "}
                        <br />
                        <WifiIcon fontSize="small" /> Free Wi-Fi <br />
                        <PoolIcon fontSize="small" /> Swimming Pool <br />
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box>
                    <Button variant="contained" endIcon={<StarIcon />}>
                      View Hotel
                    </Button>
                  </Box>
                </Card>
              </AccordionDetails>
            </Accordion>
          </StepContent>
        </Step>

        {/* Day 02 */}
        <Step active>
          <StepLabel>Day 02: Dambulla → Kandy</StepLabel>
          <StepContent>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Dambulla → Kandy</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" gutterBottom>
                  With a packed breakfast, chance to proceed on an early morning
                  sunrise climb up to the Lion Rock Fortress – A UNESCO World
                  Heritage Site.
                </Typography>
                {/* Add content here similar to Day 01 */}
              </AccordionDetails>
            </Accordion>
          </StepContent>
        </Step>

        {/* Day 03 */}
        <Step active>
          <StepLabel>Day 03: Kandy → Hatton</StepLabel>
          <StepContent>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Kandy → Hatton</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" gutterBottom>
                  Early breakfast at the hotel, check out and proceed to Hatton.
                </Typography>
                {/* Add content here similar to Day 01 */}
              </AccordionDetails>
            </Accordion>
          </StepContent>
        </Step>
      </Stepper>
    </Box>
  );
};

export default Itinerary;
