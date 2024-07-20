import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

export default function UserCommentReply({ image }) {
  return (
    <List className="w-100 shadow-sm" sx={{ bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="user avatar" src={image} sx={{ width: 25, height: 25 }} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <small style={{ fontSize: "small", color: "steelblue" }}>
              @Michael
            </small>
          }
          secondary={
            <small style={{ fontSize: "small" }}>
              I'll be in your neighborhood doing errands see this.
            </small>
          }
        />
      </ListItem>
    </List>
  );
}
