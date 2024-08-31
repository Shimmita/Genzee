import { Add, Bookmark, VideoCall } from "@mui/icons-material";
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
      p={2}
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
    >
      <Box
        position={"fixed"}
        bgcolor={"background.default"}
        color={"text.primary"}
      >
        <Box className="shadow rounded p-1 me-3">
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

        <Box className="shadow mt-3 rounded me-3">
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
                primary={
                  <Typography variant="body2">Ongoing Live Events</Typography>
                }
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
                <VideoCall color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2">Upcoming Live Events</Typography>
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
                  <Typography variant="body2">
                    My Event Viewer Status{" "}
                  </Typography>
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
                primary={
                  <Typography variant="body2">Add an Upcoming Event</Typography>
                }
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
