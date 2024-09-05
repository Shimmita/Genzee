import { Badge, CardActionArea, Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import React from "react";
import devImage from "../../images/dev.jpeg";
import { useSelector } from "react-redux";

export default function MessageWindow() {
  // redux states
  const { isDarkMode } = useSelector((state) => state.appUI);
  return (
    <List sx={{ bgcolor: "background.paper", mt: 1 }}>
      <Badge color="primary" badgeContent={1}>
        <CardActionArea>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="image" src={devImage} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography fontWeight={"bold"} variant="subtitle2">
                  Warrior Michael
                </Typography>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    fontWeight={"bold"}
                    color={isDarkMode ? "white" : "black"}
                  >
                    I'll be in your neighborhood doing errands this...
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </CardActionArea>
      </Badge>

      <Divider component={"li"} variant="inset" />

      <CardActionArea>
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
      </CardActionArea>

      <Divider component={"li"} variant="inset" />

      <CardActionArea>
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
      </CardActionArea>

      <Divider component={"li"} variant="inset" />

      <CardActionArea>
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
                >
                  Do you have Paris recommendations? Have…
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </CardActionArea>

      <Divider component={"li"} variant="inset" />

      <CardActionArea>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="image" src={devImage} />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="body2">Yahya Ishmael</Typography>}
            secondary={
              <React.Fragment>
                {"Do you have Paris recommendations? Have…"}
              </React.Fragment>
            }
          />
        </ListItem>
      </CardActionArea>

      <Divider component={"li"} variant="inset" />

      <CardActionArea>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="image" src={devImage} />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="body2">Yahya Ishmael</Typography>}
            secondary={
              <React.Fragment>
                {"Do you have Paris recommendations? Have…"}
              </React.Fragment>
            }
          />
        </ListItem>
      </CardActionArea>
    </List>
  );
}
