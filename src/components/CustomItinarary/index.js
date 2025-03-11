import React, { useState, useRef, useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  UilArrowRight,
} from "@iconscout/react-unicons";
import "./Itinerary.css";
import Details from "./details";

const Itinerary = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props?.itinerary?.tour_itineries.filter((item) => item.iTitle.toLowerCase().includes("day")).map(
      (item) => {
        return {
          iTitle: item.iTitle,
          description: item.description,
          details: <Details subItineraries={item.tour_sub_itineraries} />
        }
      })
    )
  }, [props?.itinerary?.tour_itineries]);

  // console.log(data?.itinerary?.filter((item) => item.iTitle.toLowerCase().includes("day")))
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [heights, setHeights] = useState({}); // Store heights for each accordion
  const detailsRefs = useRef([]);
  const summaryRefs = useRef([]);
  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    if (
      expandedIndex !== null &&
      detailsRefs.current[expandedIndex] &&
      summaryRefs.current[expandedIndex]
    ) {
      const detailsHeight = detailsRefs.current[expandedIndex].scrollHeight;
      const summaryHeight = summaryRefs.current[expandedIndex].scrollHeight;

      const totalHeight = detailsHeight + summaryHeight; // Combine both heights
      setHeights((prevHeights) => ({
        ...prevHeights,
        [expandedIndex]: totalHeight,
      }));
    }
  }, [expandedIndex]);

  return (
    <Box className="itinerary-container">
      {data?.map((item, index) => (
          <div className="itinerary-day" key={index}>
            <div className="timeline-container">
              <div className="day-text">{item.iTitle}</div>
              <div className={index === 0 ? "dot" : "dot2"}></div>
              {index !== data.length - 1 && (
                <div
                  className="dot-line"
                  style={{
                    height:
                      expandedIndex === index
                        ? `${heights[index] || 70}px`
                        : "70px",
                  }} /* Adjust heights here */
                ></div>
              )}
            </div>
            <Accordion
              sx={{ boxShadow: "none", "&:before": { display: "none" }}}
              expanded={expandedIndex === index}
              onChange={() => handleExpand(index)}
              disableGutters
            >
              <AccordionSummary
                ref={(el) => (summaryRefs.current[index] = el)}
                sx={{ boxShadow: "none", backgroundColor: "#FEFDF5" }}
                expandIcon={<ExpandMoreIcon />}
              >
                <Grid>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px", // Adds spacing between text and arrow
                    }}
                  >
                    {item.description.split(/[-–]/).map((part, index) => (
                      <span
                        key={index}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        {part}{" "} {console.log(index)}
                        {index < item.description.split(/[-–]/).length - 1 && (
                          <UilArrowRight />
                        )}
                      </span>
                    ))}
                  </Typography>
                  <Typography
                    sx={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: expandedIndex === index ? 4 : 1,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                    variant="body2"
                  >
                    Sprinkled along a 1340km (833-mile) coastline, its
                    countless, topographically varied beaches, coves and bays
                    attract sun seekers, fun lovers and surfers throughout the
                    year. Wildlife plays its part too: beaches are vital nesting
                    grounds for endangered marine turtles, while majestic blue
                    whales gather a few miles offshore. While Sri Lanka is a
                    year-round destination, it’s on the receiving end of two
                    opposing monsoons that affect the weather, ocean currents
                    and when and where you should visit. Generally speaking, the
                    southwest coast is best between November and April, the east
                    from May to September. As you start crafting your own
                    itinerary, consider a stop at one (or a few) of these, the
                    best beaches in Sri Lanka.
                  </Typography>
                </Grid>
              </AccordionSummary>
              <AccordionDetails
                ref={(el) => (detailsRefs.current[index] = el)}
                sx={{ backgroundColor: "#FEFDF5", boxShadow: 0 }}
              >
                {item.details}
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
    </Box>
  );
};

export default Itinerary;
