import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import { Add, People, Videocam } from "@mui/icons-material";
import PostModal from "../modal/PostModal";
const actions = [
  { icon: <People sx={{ width: 20, height: 20 }} />, name: "Connect" },
  { icon: <Videocam sx={{ width: 20, height: 20 }} />, name: "GoLive" },
  { icon: <Add sx={{ width: 20, height: 20 }} />, name: "Post" },
];

export default function BasicSpeedDial({ setOpenBackdrop }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    setOpenBackdrop(true);
  };
  const handleClose = () => {
    setOpen(false);
    setOpenBackdrop(false);
  };

  // control showing opening of the post modal
  const [openPostModal, setOpenPostModal] = React.useState(false);

  return (
    <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            onClick={(e) => {
              // show modal
              if (action.name.toLowerCase() === "post") {
                setOpenPostModal(true);
              }
            }}
            tooltipTitle={
              <small style={{ fontSize: "small" }}>{action.name}</small>
            }
            tooltipOpen
          />
        ))}
      </SpeedDial>
      <PostModal
        openPostModal={openPostModal}
        setOpenPostModal={setOpenPostModal}
      />
    </Box>
  );
}
