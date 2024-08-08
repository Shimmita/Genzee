import { Box } from "@mui/material";
import React, { useState } from "react";
import BasicSpeedDial from "../custom/SpeedDial";
import { Backdrop } from "@mui/material";
import { useSelector } from "react-redux";
import FeedDefaultContent from "./FeedDefaultContent";
import AccountStatusTabs from "../more/account/AccountStatus";
import AccountStatisticsTabs from "../more/account/AccountStatistics";
import AccountSettingsTabs from "../more/account/AccountSettings";
import HelpFrequentQuiz from "../more/help/HelpFrequentQuiz";
import HelpReportUserTab from "../more/help/HelpReportUser";
import HelpAssistanceEmail from "../more/help/HelpAssistEmail";
import AboutPage from "../more/about/About";
import useScrolledDown from "../hooks/useScrolledDown";
import DownloadPageTabs from "../more/download/Download";
import BottomViral from "../more/bottom/BottomViral";
import BottomJobs from "../more/bottom/BottomJobs";
import BottomArchive from "../more/bottom/BottomArchive";
import RefreshBox from "../refresh/RefreshBox";

const Feed = () => {
  // backdrop state
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const {
    isAccountViewAll,
    isAccountStatistics,
    isAccountSettings,
    isHelpQuiz,
    isReportUser,
    isAssistEmail,
    isAbout,
    defaultState,
    isScrolledDown,
    isDownloadPage,
    isViralPage,
    isJobsPage,
    isArchivePage,
    isRefreshBox,
  } = useSelector((state) => state.appUI);

  // run the listening component hook
  useScrolledDown();

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
      {/* show refresh box */}
      {isRefreshBox && (
        <Box
          sx={{
            position: "fixed",
            top: '40%',
            right:
              window.screen.availWidth <= 500
                ? "-8%"
                : window.screen.availWidth > 1000
                ? "28%"
                : "-3%",
          }}
        >
          <RefreshBox />
        </Box>
      )}
      {/* show default card and contents */}
      {defaultState && <FeedDefaultContent />}
      {/* show the view all accounts of the drawer or sidebar */}
      {isAccountViewAll && <AccountStatusTabs />}
      {/* show the statistics of the drawer or sidebar */}
      {isAccountStatistics && <AccountStatisticsTabs />}
      {/* show setting of the drawer or sidebar */}
      {isAccountSettings && <AccountSettingsTabs />}
      {/* show helpQuiz */}
      {isHelpQuiz && <HelpFrequentQuiz />}
      {/* show report user */}
      {isReportUser && <HelpReportUserTab />}
      {/* show assistance email window */}
      {isAssistEmail && <HelpAssistanceEmail />}
      {/* show about page */}
      {isAbout && <AboutPage />}
      {/* app download page */}
      {isDownloadPage && <DownloadPageTabs />}
      {/* show viral page of the bottom nav */}
      {isViralPage && <BottomViral />}
      {/* show jobs page of the bottom nav */}
      {isJobsPage && <BottomJobs />}
      {/* show Archives of the bottom nav */}
      {isArchivePage && <BottomArchive />}

      {/* display speed dial in feed section only for mobile and no landscape */}
      {window.screen.availWidth <= 900 && (
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
  );
};

export default Feed;
