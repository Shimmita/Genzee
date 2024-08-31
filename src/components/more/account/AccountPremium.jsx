import React, { lazy, Suspense, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Divider, IconButton, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { handleScrolledDown } from "../../../redux/AppUI";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const PremiumFree = lazy(() => import("./premium/PremiumFree"));
const PremiumSilver = lazy(() => import("./premium/PremiumSilver"));
const PremiumGold = lazy(() => import("./premium/PremiumGold"));

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
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

export default function AccountPremiumTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // redux to stop showing of the speed dial
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleScrolledDown(true));
  });

  // go back exact place on the home page
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  return (
    <Box height={"92vh"} bgcolor={"background.default"} color={"text.primary"}>
      <Box className="shadow rounded mt-3">
        <IconButton onClick={handleHome}>
          <ArrowBack />
        </IconButton>
        <div className="d-flex justify-align-content-between w-100 align-items-center">
          {/* title */}
          <Typography variant={"body1"} gutterBottom className="w-100 text-center ">
            Premium Plan
          </Typography>
        </div>
        {/* divider */}
        <Divider component={"div"} />
        {/* tabs */}
        <Box className="d-flex justify-content-center align-items-center">
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs"
            className="fw-light"
          >
            <StyledTab label={<Typography variant="body2">Free</Typography>} />
            <StyledTab
              label={<Typography variant="body2">Silver</Typography>}
            />
            <StyledTab label={<Typography variant="body2">Gold</Typography>} />
          </StyledTabs>
        </Box>

        {/* content of each tab goes here */}
        <Box
          height={"70vh"}
          p={2}
          sx={{
            overflowX: "auto",
            // Hide scrollbar for Chrome, Safari and Opera
            "&::-webkit-scrollbar": {
              display: "none",
            },
            // Hide scrollbar for IE, Edge and Firefox
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          }}
          mt={2}
          className="w-100"
        >
          <Suspense fallback={<p className="text-text-center">loading...</p>}>
            {value === 0 && <PremiumFree />}
            {value === 1 && <PremiumSilver />}
            {value === 2 && <PremiumGold />}
          </Suspense>
        </Box>
      </Box>
    </Box>
  );
}
