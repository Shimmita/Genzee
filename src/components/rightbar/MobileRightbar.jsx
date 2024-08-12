import { Button, Drawer } from "@mui/material";
import React from "react";
import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import TopDailyPosts from "./TopDailyPost";
import { Add, Bookmark, VideoCall } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { showMobileRighBar } from "../../redux/AppUI";
const MobileRightbar = () => {
  const { isMobileRighBar } = useSelector((state) => state.appUI);
  // dispatch for handle callbacks
  const dispatch = useDispatch();

  const handleCloseDrawer = () => {
    dispatch(showMobileRighBar());
  };

  return (
    <Drawer anchor={"right"} open={isMobileRighBar} onClose={handleCloseDrawer}>
      <Box
        className="m-2 border-start border-top border-end rounded"
        bgcolor={"background.default"}
        color={"text.primary"}
        sx={{
          height: "100%",
        }}
      >
        <Box display={"flex"} justifyContent={"center"} className="mt-2">
          <Typography className="fw-bold mb-2" variant="caption">
            Posts of the Day
          </Typography>
        </Box>

        <Box>
          <TopDailyPosts />
        </Box>

        {/* <Divider component={"div"} variant="fullWidth" className="mb-2" /> */}

        <Box display={"flex"} justifyContent={"center"} className="mt-2">
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

        <Box p={2} display={"flex"} justifyContent={"flex-end"}>
          <Button size="small" variant="contained" onClick={handleCloseDrawer}>
            <small>close</small>
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MobileRightbar;
