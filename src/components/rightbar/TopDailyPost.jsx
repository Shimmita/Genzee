import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import { Expand } from "@mui/icons-material";
import devImage from "../../images/dev.jpeg";

export default function TopDailyPosts() {
  return (
    <List sx={{ bgcolor: "background.paper" }}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="image"  src={devImage} />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="body2">Warrior Michael</Typography>}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                ></Typography>
                {"I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <IconButton>
          <Expand sx={{ width: 20, height: 20 }} color="primary" />
        </IconButton>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="image" src={devImage} />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="body2">Vikran Krishna</Typography>}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                ></Typography>
                {"Wish I could come, but I'm out of town…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <IconButton>
          <Expand sx={{ width: 20, height: 20 }} color="primary" />
        </IconButton>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="image" src={devImage} />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="body2">Yahya Ishmael</Typography>}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                ></Typography>
                {"Do you have Paris recommendations? Have…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <IconButton>
          <Expand sx={{ width: 20, height: 20 }} color="primary" />
        </IconButton>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="image" src={devImage} />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="body2">Yahya Ishmael</Typography>}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                ></Typography>
                {"Do you have Paris recommendations? Have…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <IconButton>
          <Expand sx={{ width: 20, height: 20 }} color="primary" />
        </IconButton>
      </Box>
    </List>
  );
}
