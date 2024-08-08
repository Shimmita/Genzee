import { Drawer } from "@mui/material";
import React from "react";
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
import { Add, Bookmark, Close, VideoCall } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import useScrolledDown from "../hooks/useScrolledDown";
import BasicSpeedDial from "../custom/SpeedDial";
import { showMobileRighBar } from "../../redux/AppUI";
const MobileRightbar = () => {
  // backdrop state
  const { isScrolledDown, isMobileRighBar } = useSelector(
    (state) => state.appUI
  );
  // dispatch for handle callbacks
  const dispatch = useDispatch();

  const [openBackdrop, setOpenBackdrop] = React.useState(false);

  // run the listening component hook for scrolling
  useScrolledDown();

  const handleCloseDrawer = () => {
    dispatch(showMobileRighBar());
  };

  return (
    <Drawer
      anchor={"bottom"}
      open={isMobileRighBar}
      onClose={handleCloseDrawer}
    >
      <Box
        // width={window.screen.availWidth <= 500 ? 280 : 450}
        // p={window.screen.availWidth >= 700 ? 2 : 0}
        className="m-1 border-top border-start rounded"
        bgcolor={"background.default"}
        color={"text.primary"}
        sx={{
          height: "100%",
        }}
      >
        <Box display={"flex"} justifyContent={"end"}>
          <IconButton onClick={handleCloseDrawer}>
            <Close sx={{ width: 25, height: 25 }} color="primary" />
          </IconButton>
        </Box>
        <Divider component={"div"} variant="fullWidth" className="mt-2 mb-2" />

        <Box display={"flex"} justifyContent={"center"}>
          <Typography className="fw-bold mb-2 mt-1" variant="caption">
            Follow Suggestions
          </Typography>
        </Box>

        <Box display={"flex"} justifyContent={"space-between"} className="ms-2">
          <FriendRequest />
          <IconButton>
            <Add color="primary" />
          </IconButton>
        </Box>

        <Divider component={"div"} variant="fullWidth" className="mt-3 mb-2" />
        <Box display={"flex"} justifyContent={"center"}>
          <Typography className="fw-bold" variant="caption">
            Posts of the Day
          </Typography>
        </Box>

        <Box>
          <TopDailyPosts />
        </Box>

        <Divider component={"div"} variant="fullWidth" className="mt-3 mb-2" />

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
          <ListItemButton LinkComponent={"a"} href="#home">
            <ListItemIcon>
              <VideoCall color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="body2">Upcoming Events</Typography>}
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
          <ListItemButton LinkComponent={"a"} href="#home">
            <ListItemIcon>
              <Bookmark color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="body2">My Event Viewer</Typography>}
            />
          </ListItemButton>
          <Typography className="fw-normal" variant="body2">
            2
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
              <Add color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2">Add an Upcoming Event</Typography>
              }
            />
          </ListItemButton>
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
    </Drawer>
  );
};

export default MobileRightbar;
