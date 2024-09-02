import {
  Home,
  SchoolRounded,
  Work
} from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Tooltip,
} from "@mui/material";
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

  // return job page
  const handleJobContent = () => {
    navigate("/jobs");
  };

  // return learning page
  const handleLearningContent = () => {
    return;
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
        <Tooltip title="home" arrow>
          <BottomNavigationAction
            label="Home"
            icon={<Home sx={{ width: 32, height: 32 }} />}
            style={{ marginLeft: CustomDeviceTablet() && "30%" }}
            onClick={handleReturnHome}
          />
        </Tooltip>

        <Tooltip title="jobs" arrow>
          <BottomNavigationAction
            onClick={handleJobContent}
            label="Jobs"
            icon={<Work sx={{ width: 28, height: 28 }}/>}
          />
        </Tooltip>

        <Tooltip title="learn" arrow>
          <BottomNavigationAction
            onClick={handleLearningContent}
            label="Learn"
            icon={<SchoolRounded sx={{ width: 32, height: 32 }} />}
          />
        </Tooltip>
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
