import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import OutlinedInput from "@mui/material/OutlinedInput";
import { UilAngleDown } from "@iconscout/react-unicons";

const CustomSelect = ({
  title,
  menuList,
  frontIcon,
  isScrolled,
  fullWidth,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    setValue(menuList[0]?.value);
  }, [menuList]);

  return (
    <FormControl fullWidth size="medium">
      <InputLabel
        sx={{
          color: "white",
        }}
        id="custom-select-label"
      >
        {title}
      </InputLabel>
      <Select
        labelId="custom-select-label"
        id="demo-select-large"
        value={value}
        onChange={handleChange}
        input={
          <OutlinedInput
            label={title}
            startAdornment={
              <InputAdornment position="start">{frontIcon}</InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                {fullWidth ? <UilAngleDown /> : <ArrowDropDownIcon />}
              </InputAdornment>
            }
          />
        }
        sx={{
          height: "2.8rem",
          width: "100%",
          color: "white",
          backgroundColor: fullWidth ? "#FEFDF5" : "",
          borderRadius: "30px",
          "& .MuiOutlinedInput-notchedOutline": {
            border: fullWidth ? "solid" : "none",
            borderRadius: "30px",
            borderWidth: "1px",
            borderColor: "#C9C5BA",
          },
          "& .MuiSvgIcon-root": {
            color: !isScrolled ? "white !important" : "black !important",
          },
          "& .MuiSelect-select": {
            color: !isScrolled ? "white !important" : "black !important",
            backgroundColor: fullWidth ? "#FEFDF5" : "",
          },
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {menuList &&
          menuList.length > 0 &&
          menuList.map((item) => (
            <MenuItem
              sx={{ marginBottom: "2px" }}
              key={item.value}
              value={item.value}
            >
              {item.label}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
