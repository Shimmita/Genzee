import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import React from "react";

import { Add, Videocam, Work } from "@mui/icons-material";
import { Typography } from "@mui/material";
import PostModal from "../modal/PostModal";
const actions = [
  {
    icon: <Work color="primary" sx={{ width: 23, height: 23 }} />,
    name: "Job",
  },
  {
    icon: <Videocam color="primary" sx={{ width: 23, height: 23 }} />,
    name: "GoLive",
  },
  {
    icon: <Add color="primary" sx={{ width: 24, height: 24 }} />,
    name: "Post",
  },
];

export default function BasicSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (prev) => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // control showing opening of the post modal
  const [openPostModal, setOpenPostModal] = React.useState(false);

  return (
    <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
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
              
              if (action.name.toLowerCase() === "post") {
                // open posting model
                setOpenPostModal(true);
              }
            }}
            tooltipTitle={
              <Typography
                p={1}
                className="shadow rounded"
                fontWeight={"bold"}
                variant="body2"
              >
                {action.name}
              </Typography>
            }
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
