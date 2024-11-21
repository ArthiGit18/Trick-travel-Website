import React from 'react'
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const HeroSearch = () => {
  return (
    <>
           <TextField
              id="outlined-helperText"
              label="Location"
              helperText="Add Location"
              sx={{
                label: { fontWeight: "bold" }, // Makes the label bold
                "& .MuiFormHelperText-root": { fontWeight: "bold" }, // Makes the helper text bold
              }}
            />
            <TextField
              id="outlined-helperText"
              label="Activity"
              helperText="Add Activity"
              sx={{
                label: { fontWeight: "bold" }, // Makes the label bold
                "& .MuiFormHelperText-root": { fontWeight: "bold" }, // Makes the helper text bold
              }}
            />
            <TextField
              id="outlined-helperText"
              label="Dates"
              helperText="Add Date"
              sx={{
                label: { fontWeight: "bold" }, // Makes the label bold
                "& .MuiFormHelperText-root": { fontWeight: "bold" }, // Makes the helper text bold
              }}
            />
            <TextField
              id="outlined-helperText"
              label="Guest"
              helperText="Add guests"
              sx={{
                label: { fontWeight: "bold" }, // Makes the label bold
                "& .MuiFormHelperText-root": { fontWeight: "bold" }, // Makes the helper text bold
              }}
            />
            <div className='search_wrapper'>
              <SearchIcon
                className="search_icon"
                sx={{
                  padding: "8px",
                  fontSize: "32px", // Adjust the icon size
                  boxSizing: "content-box",
                }}
              />
              <span style={{ fontSize: "16px", fontWeight: "bold", color: "black" }}>Search</span>
            </div>
    </>
  )
}

export default HeroSearch