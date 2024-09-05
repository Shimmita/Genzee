import {
  Add,
  Bookmark,
  CalendarMonthRounded,
  VideoCall,
} from "@mui/icons-material";
import {
  Backdrop,
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import BasicSpeedDial from "../custom/SpeedDial";
import useScrolledDown from "../hooks/useScrolledDown";
import TopDailyPosts from "./TopDailyPost";

const RightbarAll = ({ mode }) => {
  // backdrop state
  const [openBackdrop, setOpenBackdrop] = React.useState(false);
  const { isScrolledDown } = useSelector((state) => state.appUI);

  // run the listening component hook
  useScrolledDown();
  return (
    <Box
      flex={2}
      marginRight={window.screen.availWidth > 1200 ? "5%" : "0"}
      p={2}
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
    >
      <Box position={"fixed"} color={"text.primary"} className="me-3 p-1">
        <Box bgcolor={"background.default"} className="shadow rounded ">
          <Box display={"flex"} justifyContent={"center"}>
            <Typography
              fontWeight={"bold"}
              style={{ color: mode === "light" ? "steelblue" : "white" }}
              className="mt-2"
            >
              TRENDING
            </Typography>
          </Box>

          <Box display={"flex"} justifyContent={"center"}>
            <TopDailyPosts />
          </Box>
        </Box>

        <Box bgcolor={"background.default"} className="shadow mt-3 rounded">
          <Box display={"flex"} justifyContent={"center"}>
            <Typography
              style={{ color: mode === "light" ? "steelblue" : "white" }}
              gutterBottom
              fontWeight={"bold"}
              className="mb-2 mt-2"
            >
              EVENTS
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            className="pe-2"
          >
            <ListItemButton LinkComponent={"a"} href="#home">
              <ListItemIcon>
                <VideoCall color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="body2">Live Events</Typography>}
              />
            </ListItemButton>
            <Typography variant="body2">20</Typography>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            className="pe-2"
          >
            <ListItemButton LinkComponent={"a"} href="#home">
              <ListItemIcon>
                <CalendarMonthRounded
                  sx={{ window: 22, height: 22 }}
                  color="primary"
                />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2">Upcoming Events</Typography>
                }
              />
            </ListItemButton>
            <Typography variant="body2">35</Typography>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            className="pe-2"
          >
            <ListItemButton LinkComponent={"a"} href="#home">
              <ListItemIcon>
                <Bookmark color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2">Event Bookmark </Typography>
                }
              />
            </ListItemButton>
            <Typography variant="body2">3</Typography>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            className="pe-2"
          >
            <ListItemButton LinkComponent={"a"} href="#home">
              <ListItemIcon>
                <Add color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="body2">Create Event</Typography>}
              />
            </ListItemButton>
          </Box>
        </Box>
      </Box>

      {/* display speed dial in feed section only for mobile and no landscape */}
      {window.screen.availWidth > 900 && (
        <Box>
          {/* show speed dial if not scrolling down */}
          {!isScrolledDown && (
            <>
              <Backdrop open={openBackdrop} />
              <Box position={"fixed"} sx={{ left: 0, right: 1, bottom: 55 }}>
                <BasicSpeedDial setOpenBackdrop={setOpenBackdrop} />
              </Box>
            </>
          )}
        </Box>
      )}


    </Box>
  );
};

export default RightbarAll;
