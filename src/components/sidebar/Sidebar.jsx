import {
  AccountBox,
  AllInclusive,
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
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import devImage from "../../images/dev.jpeg";

const Sidebar = ({ setMode, mode }) => {
  const [openAccountMore, setOpenAccountMore] = useState(false);
  const [openMobileApp, setOpenMobileApp] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const BoxAvatarContent = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
  });

  return (
    <Box
      flex={2}
      p={2}
      className='shadow'
      sx={{ display: { xs: "none", sm: "none", md: "block",} }}
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
            <Avatar src={devImage} sx={{ width: 80, height: 80 }} />

            <Typography
              fontWeight={"bold"}
              style={{ color: mode === "light" ? "steelblue" : "white" }}
            >
              SHIMITA DOUGLAS
            </Typography>
          </Box>

          <Typography>shimitadouglas@gmail.com</Typography>
        </BoxAvatarContent>

        <List>
          <ListItemButton LinkComponent={"a"} href="#home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>

          <ListItemButton
            LinkComponent={"a"}
            href="#home"
            onClick={(e) => setOpenAccountMore(!openAccountMore)}
          >
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Account" />{" "}
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
                <ListItemText  primary='View All'
                  /> 
              </ListItemButton>

              <ListItemButton LinkComponent={"a"} href="#home" sx={{ pl: 8 }}>
                <ListItemIcon>
                  <BarChart />
                </ListItemIcon>
                <ListItemText primary="Statistics" />
              </ListItemButton>

              <ListItemButton LinkComponent={"a"} href="#home" sx={{ pl: 8 }}>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Settings" />
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
            <ListItemText primary="Need Help" />
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
                <ListItemText primary="Email" />
              </ListItemButton>

              <ListItemButton LinkComponent={"a"} href="#home" sx={{ pl: 8 }}>
                <ListItemIcon>
                  <QuestionMark />
                </ListItemIcon>
                <ListItemText primary="Q & A" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton LinkComponent={"a"} href="#home">
            <ListItemIcon>
              <Lightbulb />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItemButton>

          <ListItemButton LinkComponent={"a"} href="#home">
            <ListItemIcon>
              <ContactPage />
            </ListItemIcon>
            <ListItemText primary="Contacts" />
          </ListItemButton>

          <ListItemButton
            LinkComponent={"a"}
            href="#home"
            onClick={(e) => setOpenMobileApp(!openMobileApp)}
          >
            <ListItemIcon>
              <Smartphone />
            </ListItemIcon>
            <ListItemText primary="Mobile App" />
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
                <ListItemText primary="Download" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton LinkComponent={"a"} href="#home">
            <ListItemIcon>
              <DarkMode />
            </ListItemIcon>
            <ListItemText primary="Dark Mode" />
            <Switch
              onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
            />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
