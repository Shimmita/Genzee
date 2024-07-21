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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
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
      className="shadow"
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
    >
      <Box position={"fixed"} >
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

          <Typography variant="body2">shimitadouglas@gmail.com</Typography>
        </BoxAvatarContent>
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
      </Box>
    </Box>
  );
};

export default Sidebar;
