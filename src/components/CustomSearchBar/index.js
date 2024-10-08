import React, { useState } from "react";
import "./styles.css";
import {
  UilCalendarAlt,
  UilAngleLeft,
  UilAngleRight,
  UilStar,
} from "@iconscout/react-unicons";

const CustomSearchBar = () => {
  const [value, setValue] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const today = new Date(); // Get today's date without time

  const toggleCalendar = () => setCalendarOpen(!isCalendarOpen);

  // Handle date click
  const handleDateClick = (date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null); // Reset end date if both dates are selected
    } else if (date >= startDate) {
      setEndDate(date);
    } else {
      setStartDate(date);
    }
  };

  // Generate days for a month grid
  const generateCalendar = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];

    // Add blank days for the first week before 1st of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`blank-${i}`} className="calendar-blank" />);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected =
        (startDate && date.getTime() === startDate.getTime()) ||
        (endDate && date.getTime() === endDate.getTime());
      const inRange =
        startDate &&
        endDate &&
        date.getTime() > startDate.getTime() &&
        date.getTime() < endDate.getTime();

      // Disable dates before today
      const isDisabled = date < today.setHours(0, 0, 0, 0);

      days.push(
        <div
          key={day}
          className={`calendar-day ${isSelected ? "selected" : ""} ${
            inRange ? "in-range" : ""
          } ${isDisabled ? "disabled" : ""}`}
          onClick={() => !isDisabled && handleDateClick(date)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prevYear) => prevYear - 1);
    } else {
      setCurrentMonth((prevMonth) => prevMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prevYear) => prevYear + 1);
    } else {
      setCurrentMonth((prevMonth) => prevMonth + 1);
    }
  };

  // Get the second month to show alongside the first month
  const secondMonth = currentMonth === 11 ? 0 : currentMonth + 1;
  const secondMonthYear = currentMonth === 11 ? currentYear + 1 : currentYear;

  return (
    <div style={{ paddingLeft: "16px" }}>
      <div className="input-wrapper" onClick={toggleCalendar}>
        <UilStar />
        <input
          type="text"
          value={value}
          placeholder="Search by city name"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "16px",
            fontWeight: "400",
            width: "100%",
            color: "#333",
          }}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CustomSearchBar;
