import { Box } from "@mui/material";
import React from "react";
import CardFeed from "../custom/CardFeed";
import PeopleContainer from "../people/PeopleContainer";

const FeedDefaultContent = () => {
  return (
    <Box>
      <Box>
        <Box>
          {/* follow/connect people container */}
          <PeopleContainer />
        </Box>
      </Box>

      <CardFeed />
      <CardFeed />
      <CardFeed />
      <CardFeed />
      <CardFeed />
      <CardFeed />
      <CardFeed />
    </Box>
  );
};

export default FeedDefaultContent;
