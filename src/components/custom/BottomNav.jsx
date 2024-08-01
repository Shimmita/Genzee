import { Archive, Home, Waves, Work } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";

const BottomNav = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      className="pt-2"
      elevation={0}
    >
      <BottomNavigation
        showLabels
        sx={{
          overflowX: "auto",
          // Hide scrollbar for Chrome, Safari and Opera
          "&::-webkit-scrollbar": {
            display: "none",
          },
          // Hide scrollbar for IE, Edge and Firefox
          msOverflowStyle:'none',
          scrollbarWidth:'none'
        }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<Home />} />
        <BottomNavigationAction label="Viral" icon={<Waves />} />
        <BottomNavigationAction label="Jobs" icon={<Work />} />
        <BottomNavigationAction label="Archive" icon={<Archive />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
