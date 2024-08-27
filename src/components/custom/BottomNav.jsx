import { Home, Message, Work } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomDeviceTablet from "../utilities/CustomDeviceTablet";

const BottomNav = () => {
  const navigate = useNavigate();

  const [value, setValue] = React.useState(0);

  // return home or default card page
  const handleReturnHome = () => {
    navigate("/");
  };

  // return message  page
  const handleMessageContent = () => {
    navigate("/messages");
  };

  // return job page
  const handleJobContent = () => {
    navigate("/jobs");
  };


  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels={false}
        sx={{
          overflowX: "auto",
          // Hide scrollbar for Chrome, Safari and Opera
          "&::-webkit-scrollbar": {
            display: "none",
          },
          // Hide scrollbar for IE, Edge and Firefox
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<Home />}
          style={{marginLeft:CustomDeviceTablet() && '30%'}}
          onClick={handleReturnHome}
        />
        <BottomNavigationAction
          onClick={handleJobContent}
          label="Jobs"
          icon={<Work />}
        />
        <BottomNavigationAction
          onClick={handleMessageContent}
          label="Message"
          icon={<Message />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
