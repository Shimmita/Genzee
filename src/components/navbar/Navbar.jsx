import { Mail, MenuRounded, Mic, MoreVert } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Drawer,
  IconButton,
  InputBase,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  styled,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import devImage from "../../images/dev.jpeg";

const Navbar = () => {
  const [openMore, setOpenMore] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const GenzeeToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const SearchBar = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 15px",
    marginRight: ".5rem",
    borderRadius: theme.shape.borderRadius,
    width: window.screen.availWidth <= 500 ? "25%" : "30%",
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

  return (
    <AppBar position="sticky">
      <GenzeeToolBar>
        <LogoContent
          sx={{ display: { xs: "none", sm: "block", fontWeight: "bold" } }}
        >
          <IconButton style={{ color: "white" }}>
            <Typography variant="h6">GENZEE</Typography>
            <Mic
              sx={{
                width: 30,
                height: 30,
                marginRight: "1rem",
              }}
            />
          </IconButton>
        </LogoContent>

        <LogoContent
          display={"flex"}
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        >
          <IconButton onClick={(e) => setOpenDrawer(!openDrawer)}>
            <MenuRounded style={{ color: "white" }} />
          </IconButton>
          <IconButton style={{ color: "white" }}>
            <Typography>
              <small className="fw-bold">GENZEE</small>
            </Typography>
            <Mic />
          </IconButton>
        </LogoContent>

        <SearchBar>
          <InputBase
            placeholder="search..."
            sx={{
              color: "grey",
              fontSize: window.screen.availWidth > 1000 ? "medium" : "small",
            }}
          />
        </SearchBar>
        <IconsContainer>
          <Avatar sx={{ width: 28, height: 28 }} src={devImage} />|
          <Badge badgeContent={3} color="error">
            <Mail />
          </Badge>
          |
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

      {/* drawer samall screen */}
      <Drawer open={openDrawer} onClose={(e) => setOpenDrawer(false)}>
        <Stack>
          <Box p={2}>
            <Avatar src={devImage} sx={{ width: 50, height: 50 }} />
          </Box>
        </Stack>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
