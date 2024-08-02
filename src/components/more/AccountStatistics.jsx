import React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { showAccountStatistics } from "../../redux/AppUI";

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

export default function AccountStatisticsTabs() {
  const [value, setValue] = React.useState(0);

  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleReturnHome = (event) => {
    // invoke the dispatcher to default back to the home state
    dispatch(showAccountStatistics());
  };

  return (
    <Box>
      <>
        <div className="d-flex justify-content-end w-100">
          {/* close the window */}
          <IconButton onClick={handleReturnHome}>
            <Close color="primary" sx={{ width: 18, height: 18 }} />
          </IconButton>
          {/* styled tabs */}
        </div>
        {/* tabs */}
        <Box className="border-bottom p-0 d-flex justify-content-center align-items-center">
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs"
          >
            <StyledTab label="Post Statistics" />
            <StyledTab label="Friends Statistics" />
          </StyledTabs>
        </Box>
      </>

      {/* content of each tab goes here */}
      <Box height={"70vh"}>
        {value === 0 && <p>Post Statistics</p>}
        {value === 1 && <p>Friends Statistics</p>}
      </Box>

    </Box>
  );
}
