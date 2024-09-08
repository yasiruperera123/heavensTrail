import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function FormSimple() {
  const [checked, setChecked] = useState(true);

  const handleChecked = () => setChecked(!checked);

  return (
    <MKBox component="section">
      <Container>
        <Grid container item xs={12} lg={12}>
          <MKBox width="100%" component="form" method="post" autoComplete="off">
            <MKBox p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MKInput
                    backgroundColor="#FEFDF5"
                    sx={{
                      backgroundColor: "#FEFDF5",
                      borderRadius: 30,
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderRadius: 30,
                        },
                      },
                    }}
                    variant="outlined"
                    label="First Name"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput
                    variant="outlined"
                    label="Last Name"
                    fullWidth
                    sx={{
                      backgroundColor: "#FEFDF5",
                      borderRadius: 30,
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderRadius: 30,
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    variant="outlined"
                    type="email"
                    label="Email"
                    fullWidth
                    sx={{
                      backgroundColor: "#FEFDF5",
                      borderRadius: 30,
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderRadius: 30,
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    variant="outlined"
                    label="Phone"
                    fullWidth
                    sx={{
                      backgroundColor: "#FEFDF5",
                      borderRadius: 30,
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderRadius: 30,
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    variant="outlined"
                    label="Your Message"
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
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container item justifyContent="flex-end" xs={12} my={2}>
                <MKButton
                  sx={{ borderRadius: 30 }}
                  type="submit"
                  variant="gradient"
                  color="dark"
                >
                  Send Message
                </MKButton>
              </Grid>
            </MKBox>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FormSimple;
