import { Box } from "@mui/material";
import React from "react";
import PeopleContainer from "../people/PeopleContainer";
import FeedCardContainer from "./FeedCardContainer";

const FeedDefaultContent = () => {
  return (
    <Box>
      <Box>
        <Box>
          {/* follow/connect people container */}
          <PeopleContainer />
        </Box>
      </Box>
      <Box>
        <FeedCardContainer />
      </Box>
    </Box>
  );
};

export default FeedDefaultContent;
