import {
  Mail,
  MenuRounded,
  MoreVert,
  AccountBox,
  BarChart,
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
  SearchRounded,
  Mic,
  AllInclusive,
  Close,
  Logout,
  ArrowForwardOutlined,
  Report,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Backdrop,
  Badge,
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  styled,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import devImage from "../../images/dev.jpeg";
import AccountLevelStep from "../level/AccountLevel";
import { useDispatch, useSelector } from "react-redux";
import {
  showAccountStatistics,
  showAccountViewAll,
  showAccountSettings,
  resetAll,
  resetDarkMode,
  showHelpQuiz,
  showReportUser,
  showAssistEmail,
  showAbout,
  showDownloadPage,
} from "../../redux/AppUI";
import MobileRightbar from "../rightbar/MobileRightbar";

const Navbar = ({ setMode, mode }) => {
  const [openMore, setOpenMore] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const [openAccountMore, setOpenAccountMore] = useState(false);
  const [openMobileApp, setOpenMobileApp] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const [showMobileSearch, setShowMobileSearch] = useState(false);

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
    backgroundColor: "white",
    paddingBottom: "2px",
    paddingTop: "2px",
    paddingLeft: "8px",
    width: "40%",
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
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

  // close the drawer
  const handleCloseDrawer = (e) => {
    setOpenDrawer(false);
  };

  // trigger the showing of accounts status tab
  const handleShowViewAll = (e) => {
    // reset everything to default
    dispatch(resetAll());
    dispatch(showAccountViewAll());
    // close the drawer
    handleCloseDrawer();
  };

  // trigger the showing of statistics tab
  const handleShowStatistics = (e) => {
    // reset everything to default
    dispatch(resetAll());

    dispatch(showAccountStatistics());
    // close the drawer
    handleCloseDrawer();
  };

  // return home
  const handleReturnHome = () => {
    // reset everything to default
    dispatch(resetAll());

    // close the drawer
    handleCloseDrawer();
  };

  // show settings
  const handleShowSettings = () => {
    // reset everything to default
    dispatch(resetAll());

    dispatch(showAccountSettings());
    // close the drawer
    handleCloseDrawer();
  };

  // UI theme dark light teaking effect
  const handleShowDarkMode = () => {
    // alter the light/ dark mode
    dispatch(resetDarkMode());
  };

  // show frequent questions
  const handleShowQuestions = () => {
    dispatch(resetAll());
    dispatch(showHelpQuiz());
    handleCloseDrawer();
  };

  // handle show report user
  const handleShowReportUser = () => {
    dispatch(resetAll());
    dispatch(showReportUser());
    handleCloseDrawer();
  };

  // handle show assistance email
  const handleShowEmailAssist = () => {
    dispatch(resetAll());
    dispatch(showAssistEmail());
    handleCloseDrawer();
  };

  // handle show about page
  const handleShowAboutPage = () => {
    dispatch(resetAll());
    dispatch(showAbout());
    handleCloseDrawer();
  };

  // handle show download page
  const handleShowDownloadPage = () => {
    dispatch(resetAll());
    dispatch(showDownloadPage());
    handleCloseDrawer();
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
            <Mic />
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
            {window.screen.availWidth > 380 && <Mic />}{" "}
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
            <InputBase
              placeholder="search text ..."
              sx={{
                color: "grey",
              }}
            />

            <Divider
              variant="inset"
              orientation="vertical"
              component={"div"}
              flexItem
            />
            <IconButton>
              <SearchRounded color="primary" sx={{ width: 20, height: 20 }} />
            </IconButton>

            <IconButton onClick={handleShowMobileSearch}>
              <Close sx={{ width: 20, height: 20 }} color="primary" />
            </IconButton>
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
              <InputBase
                placeholder="search text ..."
                sx={{
                  color: "grey",
                }}
              />

              <Divider
                variant="inset"
                orientation="vertical"
                component={"div"}
                flexItem
              />
              <IconButton>
                <SearchRounded color="primary" sx={{ width: 18, height: 18 }} />
              </IconButton>

              <IconButton onClick={handleShowMobileSearch}>
                <Close sx={{ width: 18, height: 18 }} color="primary" />
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
              <IconButton onClick={(e) => setOpenMore(true)}>
                <MoreVert style={{ color: "white" }} />
              </IconButton>
            </>
          )}
        </IconsContainer>
      </GenzeeToolBar>

      {/* show backdrop when morevert icon is aclicked */}
      <Backdrop open={openMore} />
      <Menu
        id="more-menu"
        aria-labelledby="more-menu"
        open={openMore}
        className="mt-4"
        onClose={(e) => setOpenMore(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>
          <Button
            endIcon={<Logout sx={{ width: 20, height: 20 }} />}
            type="small"
          >
            <Typography variant="caption">logout</Typography>
          </Button>
        </MenuItem>
        <hr />
        <MenuItem>
          <small>
            privacy policy
            <ArrowForwardOutlined sx={{ width: 12, height: 12 }} />
          </small>
        </MenuItem>
        <MenuItem>
          <small>
            terms of service{" "}
            <ArrowForwardOutlined sx={{ width: 12, height: 12 }} />
          </small>
        </MenuItem>
      </Menu>



      {/* drawer  tablet and samall screen */}
      <Drawer open={openDrawer} onClose={(e) => setOpenDrawer(false)}>
        <Stack
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
              <Table aria-label="table" >
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
            <ListItemButton
              LinkComponent={"a"}
              href="#home"
              onClick={handleReturnHome}
            >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="body2">Homepage</Typography>}
              />
            </ListItemButton>

            <ListItemButton
              LinkComponent={"a"}
              href="#home"
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
                <ListItemButton
                  LinkComponent={"a"}
                  href="#home"
                  sx={{ pl: 8 }}
                  onClick={handleShowViewAll}
                >
                  <ListItemIcon>
                    <AllInclusive />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="body2">Status</Typography>}
                  />
                </ListItemButton>

                <ListItemButton
                  LinkComponent={"a"}
                  href="#home"
                  sx={{ pl: 8 }}
                  onClick={handleShowStatistics}
                >
                  <ListItemIcon>
                    <BarChart />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body2">Statistics</Typography>
                    }
                  />
                </ListItemButton>

                <ListItemButton
                  LinkComponent={"a"}
                  href="#home"
                  sx={{ pl: 8 }}
                  onClick={handleShowSettings}
                >
                  <ListItemIcon>
                    <Settings />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="body2">Settings</Typography>}
                  />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton
              LinkComponent={"a"}
              href="#home"
              onClick={(e) => setOpenHelp(!openHelp)}
            >
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
                <ListItemButton
                  LinkComponent={"a"}
                  href="#home"
                  sx={{ pl: 8 }}
                  onClick={handleShowReportUser}
                >
                  <ListItemIcon>
                    <Report />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body2">Report User </Typography>
                    }
                  />
                </ListItemButton>

                <ListItemButton
                  LinkComponent={"a"}
                  href="#home"
                  sx={{ pl: 8 }}
                  onClick={handleShowQuestions}
                >
                  <ListItemIcon>
                    <QuestionMark />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body2">Frequent Quizes</Typography>
                    }
                  />
                </ListItemButton>

                <ListItemButton
                  LinkComponent={"a"}
                  href="#home"
                  sx={{ pl: 8 }}
                  onClick={handleShowEmailAssist}
                >
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

            <ListItemButton
              LinkComponent={"a"}
              href="#home"
              onClick={handleShowAboutPage}
            >
              <ListItemIcon>
                <Lightbulb />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="body2">About</Typography>}
              />
            </ListItemButton>

            <ListItemButton
              LinkComponent={"a"}
              href="#home"
              onClick={(e) => setOpenMobileApp(!openMobileApp)}
            >
              <ListItemIcon>
                <Smartphone />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="body2">Mobile App</Typography>}
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
                <ListItemButton
                  LinkComponent={"a"}
                  href="#home"
                  sx={{ pl: 8 }}
                  onClick={handleShowDownloadPage}
                >
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
        </Stack>
      </Drawer>

      {/* drawer bottom small */}
      <MobileRightbar/>
    </AppBar>
  );
};

export default Navbar;
