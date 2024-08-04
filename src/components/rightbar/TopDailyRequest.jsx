import React from "react";
import Avatar from "@mui/material/Avatar";
import devImage from "../../images/dev.jpeg";
import { AvatarGroup } from "@mui/material";

export default function FriendRequest() {
  return (
    <AvatarGroup total={24}>
      <Avatar alt="image" src={devImage} />
      <Avatar alt="image" src={devImage} />
      <Avatar alt="image" src={devImage} />
      <Avatar alt="image" src={devImage} />
    </AvatarGroup>
  );
}
