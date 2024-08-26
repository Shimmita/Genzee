import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import React from "react";
import devImage from "../../images/dev.jpeg";

export default function TopDailyPosts() {
  return (
    <List sx={{ bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="image" src={devImage} />
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

      {/* display in screens larger than 1200 */}
      {window.screen.availWidth > 1200 && (
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
      )}
    </List>
  );
}
