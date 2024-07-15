import {
  AccountBox,
  BarChart,
  ContactPage,
  DarkMode,
  Download,
  Email,
  ExpandLess,
  ExpandMore,
  GroupAdd,
  Home,
  Lightbulb,
  PostAdd,
  QuestionMark,
  ReportGmailerrorred,
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
  Button,
} from "@mui/material";
import React, { useState } from "react";
import devImage from "../../images/dev.jpeg";
import { Table } from "react-bootstrap";

const Sidebar = () => {
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
      className="shadow"
      flex={2}
      p={1}
      sx={{ display: { xs: "none", sm: "block" } }}
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
            <Avatar src={devImage} sx={{ width: 70, height: 70 }} />
            <Typography color={"steelblue"} variant="body2" fontWeight={"bold"}>
              SHIMITA DOUGLAS
            </Typography>
          </Box>
          <Table className="  text-center ">
            <thead>
              <tr>
                <th>
                  <Button style={{ fontSize: "small" }}>Following</Button>
                </th>

                <th>
                  <Button style={{ fontSize: "small" }}>Followers</Button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10K</td>
                <td>100K</td>
              </tr>
            </tbody>
          </Table>
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
            {openAccountMore ? (
              <ExpandLess className="bg-body-secondary" />
            ) : (
              <ExpandMore />
            )}
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
                  <PostAdd />
                </ListItemIcon>
                <ListItemText primary="My Post" />
              </ListItemButton>

              <ListItemButton LinkComponent={"a"} href="#home" sx={{ pl: 8 }}>
                <ListItemIcon>
                  <GroupAdd />
                </ListItemIcon>
                <ListItemText primary="Groups" />
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

          <ListItemButton LinkComponent={"a"} href="#home">
            <ListItemIcon>
              <ReportGmailerrorred />
            </ListItemIcon>
            <ListItemText primary="Report" />
          </ListItemButton>

          <ListItemButton
            LinkComponent={"a"}
            href="#home"
            onClick={(e) => setOpenHelp(!openHelp)}
          >
            <ListItemIcon>
              <Support />
            </ListItemIcon>
            <ListItemText primary="Need Help" />
            {openHelp ? (
              <ExpandLess className="bg-body-secondary" />
            ) : (
              <ExpandMore />
            )}
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
            {openMobileApp ? (
              <ExpandLess className="bg-body-secondary" />
            ) : (
              <ExpandMore />
            )}
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
            <Switch />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
