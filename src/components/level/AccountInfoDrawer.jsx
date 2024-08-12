import React from "react";
import Box from "@mui/material/Box";
import AccountLevelInfo from "./AccountLevelInfo";
import { Drawer } from "@mui/material";

export default function DrawerAccountInfo({ showLevelInfo, setShowLevelInfo }) {
  return (
    <Drawer
      anchor={"bottom"}
      open={showLevelInfo}
      onOpen={true}
      // onOpen={toggleDrawer(anchor, true)}
    >
      <Box
        sx={{ width: "auto", height: "100%" }}
        role="presentation"
        bgcolor={"background.default"}
        color={"text.primary"}
      >
        {/* render   */}
        <AccountLevelInfo setShowLevelInfo={setShowLevelInfo} />
      </Box>
    </Drawer>
  );
}
