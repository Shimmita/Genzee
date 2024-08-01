import {
  Mail,
  MenuRounded,
  MoreVert,
  AccountBox,
  BarChart,
  ContactPage,
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
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Backdrop,
  Badge,
  Box,
  Button,
  Collapse,
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

  const GenzeeToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const SearchBar = styled("div")(({ theme }) => ({
    backgroundColor: "#f2f2f2",
    padding: "0 15px",
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
  const handleCloseDrawer=(e) => {

    setOpenDrawer(false);
  }

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
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <InputBase
                placeholder="search..."
                sx={{
                  color: "grey",
                }}
              />
              <Button>
                <Typography variant="body2" sx={{ textTransform: "lowercase" }}>
                  search
                </Typography>
              </Button>
            </Box>
          </SearchBar>
        )}

        {/* show search bar on small devices when necessary */}
        {showMobileSearch && (
          <SearchBar>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <InputBase
                placeholder="search..."
                sx={{
                  color: "grey",
                }}
              />
              <Button>
                <Typography variant="body1" sx={{ textTransform: "lowercase" }}>
                  search
                </Typography>
              </Button>

              <IconButton onClick={handleShowMobileSearch}>
                <Close color="primary" />
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
              <Table aria-label="table" className="border">
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
            <ListItemButton LinkComponent={"a"} href="#home">
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
                <ListItemButton LinkComponent={"a"} href="#home" sx={{ pl: 8 }} onClick={handleCloseDrawer}>
                  <ListItemIcon>
                    <AllInclusive />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="body2">View All</Typography>}
                  />
                </ListItemButton>

                <ListItemButton LinkComponent={"a"} href="#home" sx={{ pl: 8 }} onClick={handleCloseDrawer}>
                  <ListItemIcon>
                    <BarChart />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body2">Statistics</Typography>
                    }
                  />
                </ListItemButton>

                <ListItemButton LinkComponent={"a"} href="#home" sx={{ pl: 8 }} onClick={handleCloseDrawer}>
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
                primary={<Typography variant="body2">Need Help</Typography>}
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
                <ListItemButton LinkComponent={"a"} href="#home" sx={{ pl: 8 }} onClick={handleCloseDrawer}>
                  <ListItemIcon>
                    <Email />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="body2">Email</Typography>}
                  />
                </ListItemButton>

                <ListItemButton LinkComponent={"a"} href="#home" sx={{ pl: 8 }} onClick={handleCloseDrawer}>
                  <ListItemIcon>
                    <QuestionMark />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="body2">Q & A</Typography>}
                  />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton LinkComponent={"a"} href="#home" onClick={handleCloseDrawer}>
              <ListItemIcon>
                <Lightbulb />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="body2">About</Typography>}
              />
            </ListItemButton>

            <ListItemButton LinkComponent={"a"} href="#home" onClick={handleCloseDrawer}>
              <ListItemIcon>
                <ContactPage />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="body2">Contacts</Typography>}
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
                <ListItemButton LinkComponent={"a"} href="#home" sx={{ pl: 8 }} onClick={handleCloseDrawer}>
                  <ListItemIcon>
                    <Download />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="body2">Download</Typography>}
                  />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton LinkComponent={"a"} href="#home">
              <ListItemIcon>
                <DarkMode />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="body2">Dark Mode</Typography>}
              />
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>

            {/* show account level status */}
            <AccountLevelStep />
          </List>
        </Stack>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
