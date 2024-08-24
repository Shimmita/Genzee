import { Lock, People, Visibility } from "@mui/icons-material";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import ControlData from "../../../data/ControlData";

function PrivacySettings() {
  const [profileprivacy, setProfilePrivacy] = useState("");
  const [messagingprivacy, setMessagingPrivacy] = useState("");
  const [postsPrivacy, setPostPrivacy] = useState("");

  return (
    <Box>
      <Box className="w-100 mb-4 mt-2">
        <TextField
          select
          value={profileprivacy}
          label="who can view my profile"
          fullWidth
          onChange={(e) => setProfilePrivacy(e.target.value)}
        >
          {ControlData.Profile &&
            ControlData.Profile.map((privacy) => (
              <MenuItem key={privacy} value={privacy}>
                <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                  {privacy.includes("anyone") && <Visibility color="primary" />}
                  {privacy.includes("only") && <People color="primary" />}
                  {privacy.includes("nobody") && <Lock color="primary" />}
                  <small style={{ fontSize: "small" }}> {privacy}</small>
                </Box>
              </MenuItem>
            ))}
        </TextField>
      </Box>

      <Box className="w-100 mb-4">
        <TextField
          select
          value={messagingprivacy}
          label="who can send me messages"
          fullWidth
          onChange={(e) => setMessagingPrivacy(e.target.value)}
        >
          {ControlData &&
            ControlData.Messaging.map((privacy) => (
              <MenuItem key={privacy} value={privacy}>
                <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                  {privacy.includes("anyone") && <Visibility color="primary" />}
                  {privacy.includes("only") && <People color="primary" />}
                  {privacy.includes("nobody") && <Lock color="primary" />}
                  <small style={{ fontSize: "small" }}> {privacy}</small>
                </Box>
              </MenuItem>
            ))}
        </TextField>
      </Box>

      <Box className="w-100 mb-4">
        <TextField
          select
          value={postsPrivacy}
          label="who can comment on my posts"
          fullWidth
          onChange={(e) => setPostPrivacy(e.target.value)}
        >
          {ControlData &&
            ControlData.Posts.map((privacy) => (
              <MenuItem key={privacy} value={privacy}>
                <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                  {privacy.includes("anyone") && <Visibility color="primary" />}
                  {privacy.includes("only") && <People color="primary" />}
                  {privacy.includes("nobody") && <Lock color="primary" />}
                  <small style={{ fontSize: "small" }}> {privacy}</small>
                </Box>
              </MenuItem>
            ))}
        </TextField>
      </Box>

      <Box>
        <Button className="w-100">Update Privacy</Button>
      </Box>
    </Box>
  );
}

export default PrivacySettings;
