import { Box } from "@mui/material";
import React, { useState } from "react";
import CardFeed from "../custom/CardFeed";
import BasicSpeedDial from "../custom/SpeedDial";
import { Backdrop } from "@mui/material";

const Feed = () => {
  const [openBackdrop, setOpenBackdrop] = useState(false);

  return (
    <Box
      flex={3}
      p={1}
      sx={{
        overflowX: "auto",
        // Hide scrollbar for Chrome, Safari and Opera
        "&::-webkit-scrollbar": {
          display: "none",
        },
        // Hide scrollbar for IE, Edge and Firefox
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      {/* content of the feed */}
      <CardFeed />
      <CardFeed />
      <CardFeed />
      <CardFeed />
      <CardFeed />
      <CardFeed />
      <CardFeed />

      {/* fab button positioned botom-right */}
      {/* show backdrop when fab|speed dial clicked */}
      <Backdrop open={openBackdrop} />
      <Box position={"fixed"} sx={{ left: 0, right: 1, bottom: 55 }}>
        <BasicSpeedDial setOpenBackdrop={setOpenBackdrop} />
      </Box>
    </Box>
  );
};

export default Feed;
