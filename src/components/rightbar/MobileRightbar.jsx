import { Drawer, Stack } from "@mui/material";
import React from "react";
import RightbarAll from "./Righbar";
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
import TopDailyPosts from "./TopDailyPost";
import FriendRequest from "./TopDailyRequest";
import { Add, VideoCall } from "@mui/icons-material";
import { useSelector } from "react-redux";
import useScrolledDown from "../hooks/useScrolledDown";
import BasicSpeedDial from "../custom/SpeedDial";

const MobileRightbar = () => {
  const [openDrawer, setOpenDrawer] = React.useState(true);
  // backdrop state
  const [openBackdrop, setOpenBackdrop] = React.useState(false);
  const { isScrolledDown } = useSelector((state) => state.appUI);

  // run the listening component hook
  useScrolledDown();

  return (
    <Drawer
      anchor={"right"}
      open={openDrawer}
      onClose={(e) => setOpenDrawer(false)}
      sx
    >
      <Stack
        width={300}
        bgcolor={"background.default"}
        color={"text.primary"}
      >
        <Box display={"flex"} justifyContent={"center"}>
          <Typography className="fw-bold" variant="caption">
            Follow Suggestions
          </Typography>
        </Box>
        <Divider componendt={"div"} variant="fullWidth" className="mt-2 mb-2" />

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
        <Divider component={"div"} variant="fullWidth" className="mt-2 mb-2" />

        <Box display={"flex"} justifyContent={"center"}>
          <TopDailyPosts />
        </Box>
        <Divider component={"div"} variant="fullWidth" className="mt-2 mb-2" />

        <Box display={"flex"} justifyContent={"center"}>
          <Typography className="fw-bold" variant="caption">
            Explore Events
          </Typography>
        </Box>
        <Divider component={"div"} variant="fullWidth" className="mt-2 mb-2" />

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          className="pe-2"
        >
          <ListItemButton LinkComponent={"a"} href="#home" sx={{ pl: 8 }}>
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
          <ListItemButton LinkComponent={"a"} href="#home" sx={{ pl: 8 }}>
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
      </Stack>
    </Drawer>
  );
};

export default MobileRightbar;
