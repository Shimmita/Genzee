import React from "react";
import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Add, Bookmark, VideoCall } from "@mui/icons-material";
import { GetScreenWidth } from "../utilities/GetScreenWidth";

export default function Events() {
  return (
    <Box
      sx={{
        width: GetScreenWidth(),
        display: "flex",
        overflowX: "auto",
        gap: 1,
        padding: 1,
        "&::-webkit-scrollbar": { display: "none" },
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        className="pe-2 border  rounded"
      >
        <ListItemButton LinkComponent={"a"} href="#home">
          <ListItemIcon>
            <VideoCall color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="body2">Live</Typography>}
          />
        </ListItemButton>
        <Typography  variant="body2">
          20
        </Typography>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        className="pe-2 border  rounded"
      >
        <ListItemButton LinkComponent={"a"} href="#home">
          <ListItemIcon>
            <VideoCall color="primary" />
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
        className="pe-2 border  rounded"
      >
        <ListItemButton LinkComponent={"a"} href="#home">
          <ListItemIcon>
            <Bookmark color="primary" />
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
        className="pe-2 border  rounded"
      >
        <ListItemButton LinkComponent={"a"} href="#home">
          <ListItemIcon>
            <Add color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="body2">Add</Typography>}
          />
        </ListItemButton>
      </Box>
    </Box>
  );
}
