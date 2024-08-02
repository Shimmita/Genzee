import { Box } from "@mui/material";
import React, { useState } from "react";
import BasicSpeedDial from "../custom/SpeedDial";
import { Backdrop } from "@mui/material";
import { useSelector } from "react-redux";
import FeedDefaultContent from "./FeedDefaultContent";
import AccountViewAllTabs from "../more/AccountViewAll";
import AccountStatisticsTabs from "../more/AccountStatistics";
// import AccountViewAllTabs from "../more/AccountViewAll";

const Feed = () => {
  // backdrop state
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const { isAccountViewAll, isAccountStatistics } = useSelector(
    (state) => state.appUI
  );

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
      {/* show default card and contents */}
      {!isAccountStatistics && (
        <div>
          <FeedDefaultContent />
        </div>
      )}

      {/* show the view all accounts of the drawer and sidebar */}
      {isAccountViewAll && (
        <Box>
          <AccountViewAllTabs />
        </Box>
      )}

      {/* show the statistics of the drawer and sidebar */}

      {isAccountStatistics && (
        <Box>
          <AccountStatisticsTabs />
        </Box>
      )}

      {/* backdrop + speed dial  */}
      <Backdrop open={openBackdrop} />
      <Box position={"fixed"} sx={{ left: 0, right: 1, bottom: 55 }}>
        <BasicSpeedDial setOpenBackdrop={setOpenBackdrop} />
      </Box>
    </Box>
  );
};

export default Feed;
