import {
  Backdrop,
  Box,
  Divider,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import TopDailyPosts from "./TopDailyPost";
import FriendRequest from "./TopDailyRequest";
import { Add, Bookmark, VideoCall } from "@mui/icons-material";
import { useSelector } from "react-redux";
import useScrolledDown from "../hooks/useScrolledDown";
import BasicSpeedDial from "../custom/SpeedDial";

const RightbarAll = () => {
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
        <Box display={"flex"} justifyContent={"center"}>
          <Typography className="fw-bold" variant="caption">
            Follow Requests
          </Typography>
        </Box>
        <Divider component={"div"} variant="fullWidth" className="mt-2 mb-2" />

        <Box display={"flex"} justifyContent={"space-between"} p={1}>
          <FriendRequest />
          <IconButton>
            <Add color="primary" />
          </IconButton>
        </Box>

        <Divider component={"div"} variant="fullWidth" className="mt-2 mb-2" />
        <Box display={"flex"} justifyContent={"center"}>
          <Typography className="fw-bold" variant="caption">
            Posts of the Day
          </Typography>
        </Box>

        <Box display={"flex"} justifyContent={"center"}>
          <TopDailyPosts />
        </Box>

        <Divider component={"div"} variant="fullWidth" className="mb-2" />
        <Box display={"flex"} justifyContent={"center"}>
          <Typography className="fw-bold mb-2" variant="caption">
            Explore Events
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          className="pe-2"
        >
          <ListItemButton LinkComponent={"a"} href="#home" >
            <ListItemIcon>
              <VideoCall color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2">Ongoing Live Events</Typography>
              }
            />
          </ListItemButton>
          <Typography className="fw-bold" variant="body2">
            20
          </Typography>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          className="pe-2"
        >
          <ListItemButton LinkComponent={"a"} href="#home" >
            <ListItemIcon>
              <VideoCall color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2">Upcoming Live Events</Typography>
              }
            />
          </ListItemButton>
          <Typography className="fw-normal" variant="body2">
            35
          </Typography>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          className="pe-2"
        >
          <ListItemButton LinkComponent={"a"} href="#home" >
            <ListItemIcon>
              <Bookmark color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="body2">My Event Viewer Status </Typography>}
            />
          </ListItemButton>
          <Typography className="fw-normal" variant="body2">
            3
          </Typography>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          className="pe-2"
        >
          <ListItemButton LinkComponent={"a"} href="#home" >
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
