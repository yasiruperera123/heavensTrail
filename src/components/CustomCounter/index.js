import React, { useState } from "react";
import { Grid } from "@mui/material";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

const Counter = ({ label, direction }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Grid
      alignItems="center"
      spacing={2}
      sx={{
        flexDirection: direction === "row" ? "row" : "column",
        display: direction === "row" ? "flex" : "",
      }}
    >
      <Grid item>
        <MKTypography variant="h6" fontWeight="regular" color="black">
          {label}
        </MKTypography>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          backgroundColor: "#FEFDF5",
          borderRadius: 15,
          borderWidth: 0.5,
          border: "solid",
          alignItems: "center",
          borderColor: "#C9C5BA",
          marginTop: direction === "row" ? 1 : 0,
          marginLeft: direction === "row" ? 2 : 0,
          maxWidth: "160px",
        }}
      >
        <Grid>
          <MKButton variant="text" color="secondary" onClick={handleDecrement}>
            <MKTypography variant="h1" sx={{ fontSize: "25px" }}>
              -
            </MKTypography>
          </MKButton>
        </Grid>
        <Grid>
          <MKTypography
            variant="h6"
            sx={{ minWidth: "30px", textAlign: "center" }}
          >
            {count}
          </MKTypography>
        </Grid>
        <Grid>
          <MKButton variant="text" color="secondary" onClick={handleIncrement}>
            <MKTypography variant="h1" sx={{ fontSize: "25px" }}>
              +
            </MKTypography>
          </MKButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Counter;
