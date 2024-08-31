import { Box } from "@mui/material";
import React, { lazy, Suspense } from "react";
import BasicSpeedDial from "../custom/SpeedDial";
import useScrolledDown from "../hooks/useScrolledDown";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CustomDeviceTablet from "../utilities/CustomDeviceTablet";
const UserProfile = lazy(() => import("../profile/UserProfile"));
const PostDetailsContainer = lazy(() => import("../post/PostDetailsContiner"));

const AccountPremium = lazy(() => import("../more/account/AccountPremium"));
const AccountFriends = lazy(() => import("../more/account/AccountFriends"));
const AccountPosts = lazy(() => import("../more/account/AccountPosts"));
const AccountSettingsTabs = lazy(() =>
  import("../more/account/AccountSettings")
);

const HelpFrequentQuiz = lazy(() => import("../more/help/HelpFrequentQuiz"));
const HelpReportUserTab = lazy(() => import("../more/help/HelpReportUser"));
const HelpAssistanceEmail = lazy(() => import("../more/help/HelpAssistEmail"));
const AboutPage = lazy(() => import("../more/about/About"));
const BottomMessage = lazy(() => import("../more/bottom/BottomMessage"));
const BottomJobs = lazy(() => import("../more/bottom/BottomJobs"));
const FeedDefaultContent = lazy(() => import("./FeedDefaultContent"));
const EventsLive = lazy(() => import("../events/EventsLive"));
const EventsUpcoming = lazy(() => import("../events/EventsUpcoming"));
const EventsBookMarks = lazy(() => import("../events/EventsBookMarks"));
const EventsAdd = lazy(() => import("../events/EventsAdd"));

const Feed = () => {
  // backdrop state
  const { isScrolledDown } = useSelector((state) => state.appUI);

  // run the listening component hook
  useScrolledDown();

  return (
    <Box
      flex={3}
      p={CustomDeviceTablet() ? 2 : 1}
      bgcolor={"background.default"}
      color={"text.primary"}
      marginRight={window.screen.availWidth > 1200 && "6%"}
    >
      <Suspense
        fallback={
          <Box
            bgcolor={"background.default"}
            color={"text.primary"}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "90vh",
            }}
          >
            Getting...
          </Box>
        }
      >
        <Routes>
          <Route path="/" element={<FeedDefaultContent />} />
          <Route path="/account/settings" element={<AccountSettingsTabs />} />
          <Route path="/account/posts" element={<AccountPosts />} />
          <Route path="/account/people" element={<AccountFriends />} />
          <Route path="/account/premium" element={<AccountPremium />} />
          <Route path="/help/quiz" element={<HelpFrequentQuiz />} />
          <Route path="/help/report" element={<HelpReportUserTab />} />
          <Route path="/help/email" element={<HelpAssistanceEmail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/messages" element={<BottomMessage />} />
          <Route path="/jobs" element={<BottomJobs />} />
          <Route path="/events/live" element={<EventsLive />} />
          <Route path="/events/add" element={<EventsAdd />} />
          <Route path="/events/bookmarks" element={<EventsBookMarks />} />
          <Route path="/events/upcoming" element={<EventsUpcoming />} />
          <Route path="/posts/details" element={<PostDetailsContainer />} />
          <Route path="/users/profile" element={<UserProfile />} />
        </Routes>

        {/* display speed dial in feed section only for mobile and no landscape */}
        {window.screen.availWidth <= 900 && (
          <Box>
            {/* show speed dial if not scrolling down */}
            {!isScrolledDown && (
              <>
                <Box
                  position={"fixed"}
                  sx={{
                    left: 0,
                    right: window.screen.availWidth < 600 ? "38%" : "28%",
                    bottom: 50,
                  }}
                >
                  <BasicSpeedDial />
                </Box>
              </>
            )}
          </Box>
        )}
      </Suspense>
    </Box>
  );
};

export default Feed;
