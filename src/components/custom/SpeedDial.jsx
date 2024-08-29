import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import React from "react";

import { PostAddRounded, Videocam, Work } from "@mui/icons-material";
import PostModal from "../modal/PostModal";
import { Typography } from "@mui/material";
const actions = [
  {
    icon: <Work color="primary" sx={{ width: 20, height: 20 }} />,
    name: "Job",
  },
  {
    icon: <Videocam color="primary" sx={{ width: 20, height: 20 }} />,
    name: "Live",
  },
  {
    icon: <PostAddRounded color="primary" sx={{ width: 20, height: 20 }} />,
    name: "Post",
  },
];

export default function BasicSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // control showing opening of the post modal
  const [openPostModal, setOpenPostModal] = React.useState(false);

  return (
    <Box  sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: "absolute", bottom: 10, right: 10 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            className="shadow border"
            onClick={(e) => {
              // show modal
              if (action.name.toLowerCase() === "post") {
                setOpenPostModal(true);
              }
            }}
            tooltipTitle={
              <Typography p={2} className="shadow border rounded"  fontWeight={'bold'} variant="body2">{action.name}</Typography>
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
