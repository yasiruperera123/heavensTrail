import React, { useState } from "react";
import "./styles.css";
import {
  UilCalendarAlt,
  UilAngleLeft,
  UilAngleRight,
} from "@iconscout/react-unicons";

const DateRangePicker = ({ backgroundColor }) => {
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
    <div className="date-range-picker" style={{ paddingLeft: "16px" }}>
      <div
        className="input-wrapper"
        style={{ backgroundColor: backgroundColor ? backgroundColor : "" }}
        onClick={toggleCalendar}
      >
        <UilCalendarAlt />
        <input
          type="text"
          value={
            startDate && endDate
              ? `${startDate.toDateString()} - ${endDate.toDateString()}`
              : "Start Date → End Date"
          }
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "16px",
            fontWeight: "400",
            width: "100%",
            color: "#333",
          }}
          readOnly
        />
      </div>

      {isCalendarOpen && (
        <div className="calendar-container">
          <div className="month-view">
            <div className="calendar-nav">
              <UilAngleLeft onClick={handlePrevMonth} />
              <h4>
                {new Date(currentYear, currentMonth).toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </h4>
            </div>
            <div className="calendar-grid">
              {generateCalendar(currentMonth, currentYear)}
            </div>
          </div>

          <div className="month-view">
            <div className="calendar-nav">
              <h4>
                {new Date(secondMonthYear, secondMonth).toLocaleString(
                  "default",
                  {
                    month: "long",
                    year: "numeric",
                  }
                )}
              </h4>
              <UilAngleRight onClick={handleNextMonth} />
            </div>
            <div className="calendar-grid">
              {generateCalendar(secondMonth, secondMonthYear)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
