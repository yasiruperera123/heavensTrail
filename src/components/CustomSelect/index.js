import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import OutlinedInput from "@mui/material/OutlinedInput";
import { UilUsersAlt } from "@iconscout/react-unicons";

const CustomSelect = ({ title, menuList, frontIcon }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    console.log("menuList", menuList);
  }, [menuList]);

  return (
    <FormControl fullWidth variant="outlined" size="large">
      <InputLabel id="custom-select-label">{title}</InputLabel>
      <Select
        labelId="custom-select-label"
        id="demo-select-large"
        value={value}
        onChange={handleChange}
        style={{ height: "2.8rem", width: "100%" }}
        input={
          <OutlinedInput
            label={title}
            startAdornment={
              <InputAdornment position="start">{frontIcon}</InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <ArrowDropDownIcon />
              </InputAdornment>
            }
          />
        }
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {menuList &&
          menuList.length > 0 &&
          menuList.map((item) => {
            return (
              <MenuItem key={item?.value} value={item?.value}>
                {item?.label}
              </MenuItem>
            );
          })}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
