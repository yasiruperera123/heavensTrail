import React, { useState } from "react";
import { Grid } from "@mui/material";
import MKTypography from "components/MKTypography";
import { UilUser, UilHeart, UilUsersAlt } from "@iconscout/react-unicons";
import Counter from "components/CustomCounter";
import MKInput from "components/MKInput";
import Checkbox from "@mui/material/Checkbox";

const StepFive = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <Grid
        sx={{
          display: "flex",
        }}
      >
        {!isChecked ? (
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
              Who will be joining the trip?
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
                { icon: <UilUser size={"40px"} />, text: "Solo" },
                { icon: <UilHeart size={"40px"} />, text: "Partner" },
                { icon: <UilUsersAlt size={"40px"} />, text: "Family" },
                { icon: <UilUsersAlt size={"40px"} />, text: "Friends" },
              ].map((item, index) => (
                <Grid
                  key={index}
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
                </Grid>
              ))}
            </Grid>
            <Grid
              container
              sx={{ width: "100%", marginY: 2, gap: 5, paddingX: "16px" }}
            >
              <Grid item>
                <Counter label="Adults" />
              </Grid>
              <Grid item>
                <Counter label="Children" />
              </Grid>
              <Grid item>
                <Counter label="Infants" />
              </Grid>
            </Grid>

            {/* Time Selection */}
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{
                textAlign: "left",
                maxWidth: "60%",
                fontSize: {
                  xs: "14px",
                  sm: "16px",
                  md: "18px",
                },
                paddingX: "16px",
              }}
            >
              Only children aged 12 years and under should be categorized as
              kids. If a child's age is above 12 years, please add them as an
              adult.
            </MKTypography>
            <Grid
              mt={4}
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              paddingX="16px"
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
                }}
              />
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{
                  textAlign: "left",
                  fontSize: { xs: "14px", sm: "16px", md: "18px" },
                }}
              >
                Does any member of your group require special assistance?
              </MKTypography>
            </Grid>
          </Grid>
        ) : (
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
              Guests with Special Needs
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

            <Grid container sx={{ marginY: 2, paddingX: "16px" }}>
              <Counter label="Number of guests requiring special assistance" />
            </Grid>

            {/* Time Selection */}
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{
                textAlign: "left",
                maxWidth: "60%",
                fontSize: {
                  xs: "14px",
                  sm: "16px",
                  md: "18px",
                },
                paddingX: "16px",
              }}
            >
              Please specify any specific needs or requirements
            </MKTypography>
            <MKInput
              variant="outlined"
              label="Please specify any specific assistance required, such as wheelchair accessibility, dietary restrictions, or medical needs."
              multiline
              fullWidth
              rows={6}
              sx={{
                backgroundColor: "#FEFDF5",
                borderRadius: 5,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: 5,
                  },
                },
                marginX: "16px",
              }}
            />
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default StepFive;
