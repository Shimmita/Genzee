import { Box } from "@mui/material";
import React from "react";
// import PeopleContainer from "../people/PeopleContainer";
import FeedCardContainer from "./FeedCardContainer";
import CustomLandScape from "../utilities/CustomLandscape";

const FeedDefaultContent = () => {
  return (
    <Box>
      {/* <Box>
        
        <Box>
          <PeopleContainer />
        </Box>

      </Box> */}

      <Box mt={CustomLandScape() ? '11px' : "3px"}>
        <FeedCardContainer />
      </Box>
    </Box>
  );
};

export default FeedDefaultContent;
