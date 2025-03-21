import React from "react";
import { Typography, Grid } from "@mui/material";
import { AccomadationPage } from "constants/images";
import CustomCard from "./customCard";
import { ReactComponent as NoSmoke } from "assets/icons/tabler_smoking-no.svg";
import {
  UilBedDouble,
  UilParkingSquare,
  UilUtensils,
  UilWifi,
  UilSnowFlake,
} from "@iconscout/react-unicons";
import { useState, useEffect } from "react";

export default function Details(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props?.subItineraries);
    console.log(props)
  }, [props?.subItineraries]);

  const cardsData = [
    {
      title: "2 - 3 Star Accommodations: starting from $200",
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
      description: "Water Garden Sigiriya",
      rating: "367 reviews",
      rateValue: 5,
      btnText: "View Hotel",
    },
  ];
  return (
    <div>
      {data?.map((item) => (
        <>
          <Typography
            sx={{
              fontWeight: "500",
              fontFamily: "Poppins, sans-serif",
              fontSize: "15px",
            }}
            variant="body2"
          >
            {item?.subTitle}
          </Typography>
          {item?.tour_itinery_image_urls?.length > 0 ? (
            <Grid container spacing={2}>
              {item?.tour_itinery_image_urls?.map((image) => (
                <Grid item xs={4}>
                  <img src={image.imgUrl} alt="Dambulla Cave" style={{ height: "163px", width: "auto", objectFit: "cover" }} />
              </Grid>
            ))}
            </Grid>
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <img src={AccomadationPage.Header} alt="Dambulla Cave" style={{height: "163px", width: "auto", objectFit: "cover" }} />
              </Grid>
            </Grid>
          )}
          <Typography
            sx={{
              fontWeight: "400",
              fontFamily: "Poppins, sans-serif",
              fontSize: "12px",
            }}
          >
                         <Typography
                    sx={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                    variant="body2"
                  >
                    {item?.description}
                  </Typography>
          </Typography>
        </>
      ))}
      <Typography
        sx={{
          fontWeight: "400",
          fontFamily: "Poppins, sans-serif",
          fontSize: "12px",
        }}
        variant="body2"
      >
        Check in to the hotel, to rest and relax
      </Typography>
      <Grid margin={0} sx={{ width: "100%" }}>
        <CustomCard item={cardsData[0]} />
      </Grid>
    </div>
  );
}
