import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import {
  Badge,
  Box,
  Checkbox,
  Divider,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";
import {
  Reply,
  ThumbUpAltOutlined,
  ThumbUpAltRounded,
} from "@mui/icons-material";
import UserCommentReply from "./UserCommentReply";

export default function UserComment({ image, handleComment }) {
  const [showReply, setShowReply] = React.useState(false);

  const handleShowReply = () => {
    setShowReply((prev) => !prev);
    handleComment();
  };
  return (
    <List className="w-100" sx={{ bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={image} sx={{ width: 30, height: 30 }} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <small style={{ fontSize: "small", color: "steelblue" }}>
              @Michael
            </small>
          }
          secondary={
            <>
              <small style={{ fontSize: "small" }}>
                I'll be in your neighborhood doing errands see this now see it…
              </small>
              <Stack
                direction={"row"}
                display={"flex"}
                justifyContent={"flex-start"}
                alignContent={"center"}
              >
                <Tooltip title="reply">
                  <IconButton
                    sx={{ color: "steelblue" }}
                    onClick={handleShowReply}
                  >
                    {showReply ? (
                      <small
                        className="shadow-lg p-1"
                        style={{ color: "steelblue", fontSize: "small" }}
                      >
                        close
                      </small>
                    ) : (
                      <Badge badgeContent={1}>
                        <Reply
                          className="me-2"
                          sx={{ width: 15, height: 15, color: "steelblue" }}
                        />
                      </Badge>
                    )}
                  </IconButton>
                </Tooltip>

                <Tooltip title="like">
                  <Checkbox
                    sx={{ color: "steelblue" }}
                    icon={
                      <Badge badgeContent={3}>
                        <ThumbUpAltOutlined
                          className="me-2"
                          sx={{ color: "steelblue", width: 13, height: 13 }}
                        />
                      </Badge>
                    }
                    checkedIcon={
                      <Badge badgeContent={3}>
                        <ThumbUpAltRounded
                          className="me-2"
                          sx={{ color: "steelblue", width: 13, height: 13 }}
                        />
                      </Badge>
                    }
                  />
                </Tooltip>
              </Stack>
              {showReply && (
                <Box>
                  <UserCommentReply image={image} />
                  <UserCommentReply image={image} />
                  <UserCommentReply image={image} />
                  <UserCommentReply image={image} />
                </Box>
              )}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
