import { ArrowBack, Search } from "@mui/icons-material";
import {
  IconButton,
  styled,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleScrolledDown } from "../../../redux/AppUI";
import FriendsContainer from "./friends/FriendsContainer";

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
    padding: theme.typography.pxToRem(2),

    color: "gray",
    "&.Mui-selected": {
      color: "primary",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

export default function AccountPeople() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // redux to stop showing of the speed dial
  const dispatch = useDispatch();

  // use effect hook
  useEffect(() => {
    // track scrolled down
    dispatch(handleScrolledDown(true));
  });

  // go back exact place on the home page
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  
  return (
    <Box height={"92vh"} bgcolor={"background.default"} color={"text.primary"}>
      <IconButton onClick={handleHome}>
        <ArrowBack />
      </IconButton>
      <Box className="d-flex justify-content-center m-2">
        {/* form for searching poople */}
        <form className="d-flex ps-4 w-100">
          <input
            type="text"
            className="form-control w-100"
            placeholder={"search friends..."}
          />

          <Tooltip title={"search"}>
            <IconButton type="submit">
              <Search />
            </IconButton>
          </Tooltip>
        </form>
      </Box>

      <Box className="mt-2 d-flex justify-content-center align-items-center">
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs"
        >
          <StyledTab
            className="pe-4"
            label={
              <Typography>
                Following <span className="ps-1 fw-bold">50k</span>
              </Typography>
            }
          />
          <StyledTab
            className="ps-5"
            label={
              <Typography>
                Followers <span className="ps-1 fw-bold">20k</span>
              </Typography>
            }
          />
        </StyledTabs>
      </Box>

      <Box
        height={"75vh"}
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
      >
        {/* content of each tab goes here */}
        <Box>
          <Suspense fallback={<div>loading...</div>}>
            {value === 0 && <FriendsContainer />}
            {value === 1 && <FriendsContainer />}
          </Suspense>
        </Box>
      </Box>

      
    </Box>

  );
}
