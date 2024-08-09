import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import FollowSuggetion from "./FollowSuggestion";

const PeopleContainer = () => {
  return (
    <Box
      sx={{
        position: "st",
        overflowX: "auto",
        // Hide scrollbar for Chrome, Safari and Opera
        "&::-webkit-scrollbar": {
          display: "none",
        },
        // Hide scrollbar for IE, Edge and Firefox
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      <Typography variant="caption" component={"div"} className="ms-1 mb-2">
        Follow Suggestion
      </Typography>
      <Stack direction={"row"} spacing={1}>
        <FollowSuggetion />
        <FollowSuggetion />
      </Stack>
    </Box>
  );
};

export default PeopleContainer;
