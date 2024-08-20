import {
  AccountBox,
  DarkMode,
  Download,
  Email,
  ExpandLess,
  ExpandMore,
  Home,
  Lightbulb,
  QuestionMark,
  Settings,
  Smartphone,
  Support,
  Report,
  People,
  PostAdd,
  MonetizationOn,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { resetDarkMode } from "../../redux/AppUI";

import React, { useState } from "react";
import devImage from "../../images/dev.jpeg";
import AccountLevelStep from "../level/AccountLevel";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomDeviceTablet from "../utilities/CustomDeviceTablet";
import EventsTablet from "../events/EventsIsTablet";

const Sidebar = ({ setMode, mode }) => {
  const [openAccountMore, setOpenAccountMore] = useState(false);
  const [openMobileApp, setOpenMobileApp] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);
  const navigate = useNavigate();

  // redux states
  const { isDarkMode } = useSelector((state) => state.appUI);
  const dispatch = useDispatch();

  const BoxAvatarContent = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
  });

  // return home
  const handleReturnHome = () => {
    navigate("/");
  };

  // show posts
  const handleShowMyPost = () => {
    navigate("/account/posts");
  };

  // show people
  const handleShowMyPeople = () => {
    navigate("/account/people");
  };

  // show settings
  const handleShowSettings = () => {
    navigate("/account/settings");
  };

  // show premium
  const handleShowPremium = () => {
    navigate("/account/premium");
  };
  // UI theme dark light teaking effect
  const handleShowDarkMode = () => {
    // alter the light/ dark mode
    dispatch(resetDarkMode());
  };

  // show frequent questions
  const handleShowQuestions = () => {
    navigate("/help/quiz");
  };

  // handle show report user
  const handleShowReportUser = () => {
    navigate("/help/report");
  };

  // handle show assistance email
  const handleShowEmailAssist = () => {
    navigate("/help/email");
  };

  // handle show about page
  const handleShowAboutPage = () => {
    navigate("/about");
  };

  return (
    <Box
      flex={CustomDeviceTablet() ? 1 : 2}
      p={CustomDeviceTablet() ? 1 : 2}
      sx={{
        display: {
          xs: "none",
          sm: CustomDeviceTablet() ? "block" : "none",
          md: "block",
          marginRight: CustomDeviceTablet() && "5rem",
        },
      }}
    >
      <Box position={"fixed"}>
        <BoxAvatarContent>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            gap={2}
          >
            <Avatar
              alt={"user image"}
              src={devImage}
              className="mt-3"
              sx={{ width: 60, height: 60 }}
            />

            <Typography
              fontWeight={"bold"}
              style={{ color: mode === "light" ? "steelblue" : "white" }}
            >
              SHIMITA DOUGLAS
            </Typography>
          </Box>

          <Typography variant="body2">shimitadouglas@gmail.com</Typography>
        </BoxAvatarContent>

        <Table aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="body2">Following</Typography>{" "}
              </TableCell>
              <TableCell align="right">
                <Typography variant="body2">Followers</Typography>{" "}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography variant="body2">100K</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body2">10K</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <List>
          <ListItemButton onClick={handleReturnHome}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="body2">Homepage</Typography>}
            />
          </ListItemButton>

          <ListItemButton onClick={(e) => setOpenAccountMore(!openAccountMore)}>
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="body2">Account</Typography>}
            />
            {openAccountMore ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse
            className=" border-top"
            in={openAccountMore}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 8 }} onClick={handleShowMyPost}>
                <ListItemIcon>
                  <PostAdd />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="body2">Posts</Typography>}
                />
              </ListItemButton>

              <ListItemButton sx={{ pl: 8 }} onClick={handleShowMyPeople}>
                <ListItemIcon>
                  <People />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="body2">People</Typography>}
                />
              </ListItemButton>

              <ListItemButton sx={{ pl: 8 }} onClick={handleShowSettings}>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="body2">Settings</Typography>}
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: 8 }} onClick={handleShowPremium}>
                <ListItemIcon>
                  <MonetizationOn />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="body2">Premium</Typography>}
                />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={(e) => setOpenHelp(!openHelp)}>
            <ListItemIcon>
              <Support />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="body2">Help Center</Typography>}
            />
            {openHelp ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse
            className=" border-top"
            in={openHelp}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 8 }} onClick={handleShowAboutPage}>
                <ListItemIcon>
                  <Lightbulb />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="body2">About Us</Typography>}
                />
              </ListItemButton>

              <ListItemButton sx={{ pl: 8 }} onClick={handleShowReportUser}>
                <ListItemIcon>
                  <Report />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body2">Report User </Typography>
                  }
                />
              </ListItemButton>

              <ListItemButton sx={{ pl: 8 }} onClick={handleShowQuestions}>
                <ListItemIcon>
                  <QuestionMark />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body2">Frequent Quizes</Typography>
                  }
                />
              </ListItemButton>

              <ListItemButton sx={{ pl: 8 }} onClick={handleShowEmailAssist}>
                <ListItemIcon>
                  <Email />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body2">Assistance Email</Typography>
                  }
                />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={(e) => setOpenMobileApp(!openMobileApp)}>
            <ListItemIcon>
              <Smartphone />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="body2">Install App</Typography>}
            />
            {openMobileApp ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse
            className=" border-top"
            in={openMobileApp}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 8 }}>
                <ListItemIcon>
                  <Download />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="body2">Download</Typography>}
                />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton
            LinkComponent={"a"}
            href="#home"
            onClick={handleShowDarkMode}
          >
            <ListItemIcon>
              <DarkMode />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="body2">Dark Mode</Typography>}
            />
            <Switch
              checked={isDarkMode}
              onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
            />
          </ListItemButton>

          {/* show account level status */}
          <AccountLevelStep />
        </List>
        {/* box for Events displayed for tablets only */}
        {CustomDeviceTablet() && (
          <>
            <hr />
            <Box className="mt-5">
              <Typography
                fontWeight={"bold"}
                className="text-center"
                style={{ color: mode === "light" ? "steelblue" : "white" }}
              >
                EVENTS
              </Typography>
              <EventsTablet />
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Sidebar;
