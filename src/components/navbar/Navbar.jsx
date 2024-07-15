import { Mail, Mic, MoreVert, Search } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  styled,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import devImage from "../../images/dev.jpeg";

const Navbar = () => {
  const [openMore, setOpenMore] = useState(false);

  const NocturnalToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const SearchBar = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    marginLeft: "1rem",
    marginRight: ".5rem",
    borderRadius: theme.shape.borderRadius,
    width: window.screen.availWidth <= 500 ? "50%" : "30%",
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
      <NocturnalToolBar>
        <LogoContent>
          <IconButton style={{ color: "white" }}>
            <Mic
              sx={{
                display: { xs: "none", sm: "block" },
                width: 40,
                height: 40,
                marginRight: "1rem",
              }}
            />
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block", fontWeight: "bold" } }}
            >
              GENZEE
            </Typography>
          </IconButton>
        </LogoContent>

        <IconButton style={{ color: "white" }}>
          <Mic
            sx={{ display: { xs: "block", sm: "none" }, width: 40, height: 40 }}
          />
        </IconButton>

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
      </NocturnalToolBar>
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
    </AppBar>
  );
};

export default Navbar;
