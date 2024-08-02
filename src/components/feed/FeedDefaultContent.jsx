import { Box } from "@mui/material";
import React from "react";
import CardFeed from "../custom/CardFeed";

const FeedDefaultContent = () => {
  return (
    <Box>
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
