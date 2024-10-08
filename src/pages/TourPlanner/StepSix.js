import React, { useState } from "react";
import { Grid } from "@mui/material";
import MKTypography from "components/MKTypography";
import { UilCarSideview, UilInfoCircle } from "@iconscout/react-unicons";
import Counter from "components/CustomCounter";
import MKInput from "components/MKInput";
import Checkbox from "@mui/material/Checkbox";
import { Box, Card, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import MKButton from "components/MKButton";

const miniVanSeatTypes = ["Basic", "Luxury"];
const busSeatTypes = [
  "33 Seater/35 Seater Bus(18 - 30 Approx.)",
  "37 Seater/41 Seater",
  "45 Seater",
  "49/51 Seater",
  "53/60 Seater(50/55 pax)",
];

const LuxuryCard = ({ isLuxury, item }) => {
  return (
    <Box
      sx={{
        position: "relative",
        minWidth: "250px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Card Container */}
      <Card
        sx={{
          width: "100%",
          borderRadius: "24px",
          border: "1px solid #C9C5BA",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#EEECE2",
          boxShadow: "none",
          zIndex: 10,
        }}
      >
        {/* Luxury Label with Info Icon */}
        <MKTypography
          variant="h6"
          sx={{
            fontFamily: "Poppins, sans-serif",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "18px",
            fontWeight: 400,
          }}
        >
          {item}
          {isLuxury ? <UilInfoCircle color="#AF4D06" size="16px" /> : null}
        </MKTypography>
      </Card>
      {isLuxury ? (
        <Box
          sx={{
            backgroundColor: "#A85D2A",
            borderRadius: " 0 0 16px 16px",
            position: "absolute",
            width: "100%",
            bottom: "-25px",
            padding: "10px -20px",
            height: "50px",
            boxShadow: "none",
            textAlign: "center",
          }}
        >
          <MKTypography
            variant="h6"
            color="white"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "15px",
              fontWeight: 400,
              height: "16px",
              marginTop: "25px",
            }}
          >
            Only for +50$
          </MKTypography>
        </Box>
      ) : null}
    </Box>
  );
};

const StepSix = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [seatType, setSeatType] = useState(null);
  const [seatTypeArray, setSeatTypeArray] = useState([]);

  const onClickVehicleType = (type) => {
    switch (type) {
      case "Minivan":
        setSeatType("Minivan Type");
        setSeatTypeArray(miniVanSeatTypes);
        return;
      case "Bus":
        setSeatType("Bus Seater Type");
        setSeatTypeArray(busSeatTypes);
        return;
      default:
        setSeatType(null);
        setSeatTypeArray([]);
        return;
    }
  };

  return (
    <div>
      <Grid
        sx={{
          display: "flex",
        }}
      >
        <Grid
          container
          flexDirection="column"
          spacing={2}
          sx={{
            width: "100%",
            paddingX: { xs: "16px" },
          }}
        >
          {/* Title */}
          <MKTypography
            variant="h1"
            color="black"
            sx={({ breakpoints, typography: { size } }) => ({
              fontFamily: "Playfair Display, serif",
              fontWeight: 400,
              fontSize: "40px",
              [breakpoints.down("md")]: {
                fontSize: size["3xl"], // Smaller font size on mobile
              },
              paddingX: "16px",
            })}
          >
            What’s your transportation choice?
          </MKTypography>

          {/* Subtitle */}
          <MKTypography
            variant="h6"
            fontWeight="regular"
            color="black"
            sx={{
              textAlign: "left",
              maxWidth: "90%",
              paddingX: { xs: "16px" },
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Tempor eleifend integer
            aenean neque parturient.
          </MKTypography>

          <Grid
            sx={{
              flexDirection: { xs: "column", md: "row" },
              display: "flex",
              width: "100%",
              gap: 2,
              marginTop: 5,
            }}
            item
          >
            {[
              {
                icon: <UilCarSideview size={"40px"} />,
                text: "Car",
                des: "(2 pax)",
              },
              {
                icon: <UilCarSideview size={"40px"} />,
                text: "Minivan",
                des: "(3 - 6 pax)",
              },
              {
                icon: <UilCarSideview size={"40px"} />,
                text: "Van",
                des: "(6 - 8 pax)",
              },
              {
                icon: <UilCarSideview size={"40px"} />,
                text: "Mini Bus",
                des: "(9 - 17 pax)",
              },
              {
                icon: <UilCarSideview size={"40px"} />,
                text: "Bus",
                des: "(select)",
              },
            ].map((item, index) => (
              <Grid
                key={index}
                onClick={() => onClickVehicleType(item?.text)}
                sx={{
                  border: "solid",
                  borderWidth: 1,
                  borderRadius: 4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "160px",
                  flexDirection: "column",
                  flex: 1,
                  marginBottom: { xs: 2, md: 0 },
                }}
              >
                {item?.icon}
                <MKTypography
                  variant="h6"
                  fontWeight="regular"
                  color="black"
                  sx={{
                    maxWidth: "90%",
                  }}
                >
                  {item?.text}
                </MKTypography>
                <MKTypography
                  variant="h6"
                  fontWeight="regular"
                  color="black"
                  sx={{
                    maxWidth: "90%",
                  }}
                >
                  {item?.des}
                </MKTypography>
              </Grid>
            ))}
          </Grid>
          <MKTypography
            variant="h6"
            fontWeight="regular"
            color="black"
            sx={{
              textAlign: "left",
              maxWidth: "60%",
              marginTop: 5,
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "18px",
              },
              paddingX: "16px",
            }}
          >
            {seatType}
          </MKTypography>
          <Grid
            container
            sx={{ width: "100%", marginY: 2, gap: 2, paddingX: "16px" }}
          >
            {seatTypeArray.map((item) => {
              return <LuxuryCard isLuxury={item === "Luxury"} item={item} />;
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default StepSix;
