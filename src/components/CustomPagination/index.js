import React from "react";
import Slider from "react-slick";
import MKBox from "components/MKBox";

// Custom Pagination Component
const CustomPagination = ({ currentSlide, slideCount }) => {
  return (
    <MKBox
      sx={{
        position: "absolute",
        bottom: 1,
        display: "flex",
        gap: 1,
        width: "100%",
        paddingLeft: 5,
      }}
    >
      {Array.from({ length: slideCount }).map((_, index) => (
        <MKBox
          key={index}
          sx={{
            width: "32%",
            height: "3px",
            backgroundColor: index === currentSlide ? "#FFFFFF" : "#888888",
            transition: "background-color 0.3s ease",
          }}
        />
      ))}
    </MKBox>
  );
};

export default CustomPagination;
