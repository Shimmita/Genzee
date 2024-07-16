import { Archive, Favorite, Restore } from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import React from "react";

const BottomNav = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Paper
    sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
    elevation={3}
  >
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Recents" icon={<Restore />} />
      <BottomNavigationAction label="Favorites" icon={<Favorite />} />
      <BottomNavigationAction label="Archive" icon={<Archive />} />
    </BottomNavigation>
  </Paper>
  );
};

export default BottomNav;
