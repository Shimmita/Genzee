import { Archive, Home, Waves, Work } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import {
  resetAll,
  showViralPage,
  showJobsPage,
  showArchivesPage,
} from "../../redux/AppUI";

const BottomNav = () => {
  const [value, setValue] = React.useState(0);

  const dispatch = useDispatch();

  // return home or default card page
  const handleReturnHome = () => {
    dispatch(resetAll());
  };

  // return viral  page
  const handleViralContent = () => {
    dispatch(resetAll());

    dispatch(showViralPage());
  };

  // return job page
  const handleJobContent = () => {
    dispatch(resetAll());

    dispatch(showJobsPage());
  };

  // return archive  page
  const handleArchiveContent = () => {
    dispatch(resetAll());

    dispatch(showArchivesPage());
  };
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      className="pt-2"
      elevation={0}
    >
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

          // check the value and update the UI accordingly
          if (newValue === 0) {
            // home UI
            handleReturnHome();
          }

          if (newValue === 1) {
            // viral UI

            handleViralContent();
          }

          if (newValue === 2) {
            // Jobs UI

            handleJobContent();
          }

          if (newValue === 3) {
            // Archive UI

            handleArchiveContent();
          }
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<Home />}
          onClick={handleReturnHome}
        />
        <BottomNavigationAction label="Viral" icon={<Waves />} />
        <BottomNavigationAction label="Jobs" icon={<Work />} />
        <BottomNavigationAction label="Archive" icon={<Archive />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
