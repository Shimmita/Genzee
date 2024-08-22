import { Avatar, Box, Button } from "@mui/material";
import React from "react";
import devImage from "../../../../images/dev.jpeg";
import { Photo } from "@mui/icons-material";

function ProfileSettings() {
  return (
    <Box>
      <Box >
        <Box>
        <Avatar alt="icon" src={devImage} sx={{ width: 70, height: 70 }} />

        </Box>
        <Button
          color="inherit"
          startIcon={<Photo />}
          style={{ textTransform: "lowercase" }}
        >
          change
        </Button>
      </Box>
    </Box>
  );
}

export default ProfileSettings;
