import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import OutlinedInput from "@mui/material/OutlinedInput";

const CustomSelect = ({ title }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 220, height: "2rem" }} size="small">
      <InputLabel>{title}</InputLabel>
      <Select
        id="demo-select-small"
        value={value}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
