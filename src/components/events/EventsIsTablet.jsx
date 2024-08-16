import React from "react";
import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Add, Bookmark, UpcomingRounded, VideoCall } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function EventsTablet() {
  const navigate = useNavigate();

  const handleEventsLive = () => {
    navigate("events/live");
  };

  const handleEventsAdd = () => {
    navigate("events/add");
  };

  const handleEventsUpcoming = () => {
    navigate("events/upcoming");
  };
  const handleEventsBookMarks = () => {
    navigate("events/bookmarks");
  };
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        className="pe-2"
      >
        <ListItemButton onClick={handleEventsLive}>
          <ListItemIcon>
            <VideoCall />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="body2">Live</Typography>}
          />
        </ListItemButton>
        <Typography variant="body2">20</Typography>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        className="pe-2 "
      >
        <ListItemButton onClick={handleEventsUpcoming}>
          <ListItemIcon>
            <UpcomingRounded />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="body2">Upcoming</Typography>}
          />
        </ListItemButton>
        <Typography className="fw-normal " variant="body2">
          35
        </Typography>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        className="pe-2"
      >
        <ListItemButton onClick={handleEventsBookMarks}>
          <ListItemIcon>
            <Bookmark />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="body2">Bookmarks </Typography>}
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
        <ListItemButton onClick={handleEventsAdd}>
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="body2">Add</Typography>}
          />
        </ListItemButton>
      </Box>
    </>
  );
}
