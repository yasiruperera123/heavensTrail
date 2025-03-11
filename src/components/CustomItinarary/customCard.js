import {
  Card,
  CardMedia,
  CardContent,
  Divider,
  Rating,
  Grid
} from "@mui/material";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";


export default function CustomCard ({ item, index }) {
    const isEven = index % 2 === 0;

    return (
      <Grid>
        <Grid
          sx={{
            backgroundColor: "#FEFDF5",
          }}
        >
          <Grid
            sx={{
              border: "solid",
              borderWidth: 2,
              borderColor: "#C9C5BA",
              padding: 1,
              borderRadius: "15px",
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
                  <Grid
                    display="flex"
                    flexDirection="row"
                    sx={{ alignItems: "center" }}
                  >
                    <MKTypography
                      color="black"
                      sx={{
                        fontSize: "16px",
                        fontFamily: "Poppins, sans-serif",
                        lineHeight: "30px",
                      }}
                    >
                      {item?.rating}
                    </MKTypography>
                    <Rating name="read-only" value={item?.rateValue} readOnly />
                  </Grid>
                  <Divider
                    variant="middle"
                    sx={{
                      height: 2,
                      width: "100%",
                      backgroundColor: "#C9C5BA",
                      margin: 1,
                    }}
                  />
                </Grid>

                <Grid container display="flex" flexDirection="row" lg={12}>
                  {item?.facilities.map((icon) => {
                    return icon;
                  })}
                  <Divider
                    variant="middle"
                    sx={{
                      height: 2,
                      width: "100%",
                      backgroundColor: "#C9C5BA",
                      margin: 1,
                    }}
                  />
                </Grid>

                <Grid
                  container
                  display="flex"
                  justifyContent={"flex-end"}
                  lg={12}
                >
                  <MKButton
                    circular
                    variant="contained"
                    color="black"
                    sx={{
                      paddingLeft: 5,
                      paddingRight: 5,
                    }}
                  >
                    {item?.btnText}
                  </MKButton>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
  };

