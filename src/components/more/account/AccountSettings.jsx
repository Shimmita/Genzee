import React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { resetAll } from "../../../redux/AppUI";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 20,
    width: "100%",
    backgroundColor: "transparent",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.caption,
    fontSize: theme.typography.pxToRem(13),
    padding: theme.typography.pxToRem(0),

    color: "gray",
    "&.Mui-selected": {
      color: "inherit",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

export default function AccountSettingsTabs() {
  const [value, setValue] = React.useState(0);

  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleReturnHome = (event) => {
    // reset everything and default values
    dispatch(resetAll());
  };

  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <>
        <div className="d-flex justify-align-content-between w-100 align-items-center">
          {/* title */}
          <Typography
            variant={"caption"}
            className="w-100 fw-light text-center"
          >
            Account Settings
          </Typography>
          {/* close the window */}
          <IconButton onClick={handleReturnHome}>
            <Close color="primary" sx={{ width: 15, height: 15 }} />
          </IconButton>
        </div>
        {/* tabs */}
        <Box className="border-bottom p-0 d-flex justify-content-center align-items-center">
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs"
            className="fw-light"
          >
            <StyledTab
              label={<Typography variant="body2">Profile</Typography>}
            />
            <StyledTab
              label={<Typography variant="body2">Streaming</Typography>}
            />
            <StyledTab
              label={<Typography variant="body2">Notification</Typography>}
            />
          </StyledTabs>
        </Box>
      </>

      {/* content of each tab goes here */}
      <Box height={"70vh"}>
        {value === 0 && <p>Profile</p>}
        {value === 1 && <p>Data Saver</p>}
        {value === 2 && <p>Sound Effect</p>}
      </Box>
    </Box>
  );
}
