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
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
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
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import devImage from "../../images/dev.jpeg";
import { Table } from "react-bootstrap";

const Navbar = ({ setMode, mode }) => {
  const [openMore, setOpenMore] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const [openAccountMore, setOpenAccountMore] = useState(false);
  const [openMobileApp, setOpenMobileApp] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const GenzeeToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const SearchBar = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 15px",
    marginRight: ".5rem",
    borderRadius: theme.shape.borderRadius,
    width: "35%",
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

  return (
    <AppBar position="sticky">
      <GenzeeToolBar>
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
            <Typography variant="h6" className="fw-bold">
              GENZEE
            </Typography>
            <Mic />
          </IconButton>
        </LogoContent>

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

        {window.screen.availWidth > 500 && (
          <SearchBar>
            <InputBase
              placeholder="search..."
              sx={{
                color: "grey",
                fontSize: "medium",
              }}
            />
          </SearchBar>
        )}

        <IconsContainer>
          {window.screen.availWidth < 500 && (
            <IconButton>
              <SearchRounded style={{ color: "white" }} />
            </IconButton>
          )}
          <Badge badgeContent={1} color="error">
            <Mail sx={{ width: 25, height: 25 }} />
          </Badge>
          &nbsp;
          <Avatar sx={{ width: 28, height: 28 }} src={devImage} />
          <IconButton onClick={(e) => setOpenMore(true)}>
            <MoreVert style={{ color: "white" }} />
          </IconButton>
        </IconsContainer>
      </GenzeeToolBar>
      <Menu
        id="more-menu"
        aria-labelledby="more-menu"
        open={openMore}
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
          <ListItemButton LinkComponent={"a"} href="#home">
            <ListItemIcon>
              <Switch />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Logout</MenuItem>
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
            <Toolbar>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography variant="body2">SHIMITA DOUGLAS</Typography>
              </Stack>
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
            <Typography variant="body2">0757450727</Typography>

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
                <ListItemButton LinkComponent={"a"} href="#home" sx={{ pl: 8 }}>
                  <ListItemIcon>
                    <AllInclusive />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="body2">View All</Typography>}
                  />
                </ListItemButton>
                <ListItemButton LinkComponent={"a"} href="#home" sx={{ pl: 8 }}>
                  <ListItemIcon>
                    <BarChart />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body2">Statistics</Typography>
                    }
                  />
                </ListItemButton>

                <ListItemButton LinkComponent={"a"} href="#home" sx={{ pl: 8 }}>
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
                <ListItemButton LinkComponent={"a"} href="#home" sx={{ pl: 8 }}>
                  <ListItemIcon>
                    <Email />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="body2">Email</Typography>}
                  />
                </ListItemButton>

                <ListItemButton LinkComponent={"a"} href="#home" sx={{ pl: 8 }}>
                  <ListItemIcon>
                    <QuestionMark />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="body2">Q & A</Typography>}
                  />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton LinkComponent={"a"} href="#home">
              <ListItemIcon>
                <Lightbulb />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="body2">About</Typography>}
              />
            </ListItemButton>

            <ListItemButton LinkComponent={"a"} href="#home">
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
                <ListItemButton LinkComponent={"a"} href="#home" sx={{ pl: 8 }}>
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
          </List>
        </Stack>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
