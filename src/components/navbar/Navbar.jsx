import {
  AccountBox,
  Close,
  DarkMode,
  Download,
  Email,
  ExpandLess,
  ExpandMore,
  Home,
  Lightbulb,
  Mail,
  MenuRounded,
  MonetizationOn,
  People,
  PostAdd,
  QuestionMark,
  Report,
  SearchRounded,
  Settings,
  Smartphone,
  Support
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Collapse,
  Drawer,
  IconButton,
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
  Toolbar,
  Typography
} from "@mui/material";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import devImage from "../../images/dev.jpeg";
import { resetDarkMode } from "../../redux/AppUI";
import AccountLevelStep from "../level/AccountLevel";

const Navbar = ({ setMode, mode }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const [openAccountMore, setOpenAccountMore] = useState(false);
  const [openMobileApp, setOpenMobileApp] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const navigate = useNavigate();

  const handleShowMobileSearch = () => {
    setShowMobileSearch((prev) => !prev);
  };

  // redux states
  const { isDarkMode } = useSelector((state) => state.appUI);
  const dispatch = useDispatch();

  const GenzeeToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const SearchBar = styled("div")(({ theme }) => ({
    paddingBottom: "2px",
    paddingTop: "2px",
    paddingLeft: "8px",
  }));

  const IconsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      gap: "30px",
    },
  }));

  const LogoContent = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
  });

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
    <AppBar position="sticky">
      <GenzeeToolBar>
        {/* lg screen toolbar */}
        <LogoContent
          sx={{
            display: {
              xs: "none",
              md: "block",
              fontWeight: "bold",
            },
          }}
        >
          <IconButton style={{ color: "white" }}>
            <Typography variant="body1" className="fw-bold">
              GENZEE
            </Typography>
          </IconButton>
        </LogoContent>

        {/* show logo content on the small devices searchIcon  not clicked */}
        {!showMobileSearch && (
          <LogoContent
            display={"flex"}
            sx={{
              display: { xs: "block", sm: "block", md: "none", lg: "none" },
            }}
          >
            <IconButton onClick={(e) => setOpenDrawer(!openDrawer)}>
              <MenuRounded style={{ color: "white" }} />
            </IconButton>
            <IconButton style={{ color: "white" }}>
              <small style={{ fontSize: "small" }} className="fw-bold">
                GENZEE
              </small>
            </IconButton>
          </LogoContent>
        )}

        {/* visible on lg screens always */}
        {window.screen.availWidth > 500 && (
          <SearchBar>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <form className="d-flex gap-1">
                <Box>
                  <input
                    type="text"
                    placeholder={"search..."}
                    className="form-control w-100 border-0 text-secondary"
                  />
                </Box>

                <Box>
                  <IconButton type="submit">
                    <SearchRounded
                      sx={{ width: 20, height: 20, color: "white" }}
                    />
                  </IconButton>
                </Box>
              </form>
            </Box>
          </SearchBar>
        )}

        {/* show search bar on small devices when necessary */}
        {showMobileSearch && (
          <SearchBar>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <form className="d-flex gap-1 ps-5">
                <Box>
                  <input
                    type="text"
                    placeholder={"search..."}
                    className="form-control w-100 border-0 text-secondary"
                  />
                </Box>

                <Box>
                  <IconButton type="submit">
                    <SearchRounded
                      sx={{ width: 20, height: 20, color: "white" }}
                    />
                  </IconButton>
                </Box>
              </form>

              <IconButton onClick={handleShowMobileSearch}>
                <Close sx={{ width: 18, height: 18, color: "whitesmoke" }} />
              </IconButton>
            </Box>
          </SearchBar>
        )}

        <IconsContainer>
          {window.screen.availWidth < 500 && (
            <Box>
              {/* display when search not clicked */}
              {!showMobileSearch && (
                <IconButton onClick={handleShowMobileSearch}>
                  <SearchRounded style={{ color: "white" }} />
                </IconButton>
              )}
            </Box>
          )}
          {/* display when search not clicked */}
          {!showMobileSearch && (
            <>
              <Badge badgeContent={1} color="error">
                <Mail sx={{ width: 25, height: 25 }} />
              </Badge>
              &nbsp;
              <Avatar sx={{ width: 28, height: 28 }} src={devImage} />
              {/* show more icon if the device is tablet at portrati or is smartphone */}
            </>
          )}
        </IconsContainer>
      </GenzeeToolBar>

      {/* drawer  tablet and samall screen */}
      <Drawer open={openDrawer} onClose={(e) => setOpenDrawer(false)}>
        <Box
          width={300}
          height={"100%"}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <AppBar position="sticky" elevation={0} className="mb-2">
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
              }}
            >
              <Typography variant="body2">SHIMITA DOUGLAS</Typography>|
              <Typography variant="caption">7 Days Trial</Typography>
            </Toolbar>
          </AppBar>

          <BoxAvatarContent>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              gap={2}
            >
              <Avatar src={devImage} sx={{ width: 70, height: 70 }} />
            </Box>
            <Typography variant="body2">+254757450727</Typography>

            <Typography variant="body2">shimitadouglas@gmail.com</Typography>

            <Box width={280}>
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
            </Box>
          </BoxAvatarContent>

          <List>
            <ListItemButton onClick={handleReturnHome}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="body2">Homepage</Typography>}
              />
            </ListItemButton>

            <ListItemButton
              onClick={(e) => setOpenAccountMore(!openAccountMore)}
            >
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

                <ListItemButton sx={{ pl: 8 }} onClick={handleShowPremium}>
                  <ListItemIcon>
                    <MonetizationOn />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="body2">Premium</Typography>}
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
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
