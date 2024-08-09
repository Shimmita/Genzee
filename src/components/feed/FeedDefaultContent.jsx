import { Box } from "@mui/material";
import React from "react";
import CardFeed from "../custom/CardFeed";
import PeopleContainer from "../people/PeopleContainer";

const FeedDefaultContent = () => {
  return (
    <Box>
      <PeopleContainer/>
      <div className="mb-3"/>
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
