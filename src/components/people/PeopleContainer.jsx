import { Box } from "@mui/material";
import React from "react";
import FollowSuggetion from "./FollowSuggestion";
import { GetScreenWidth } from "../utilities/GetScreenWidth";

const PeopleContainer = ({ items }) => {
  return (
    <Box
      sx={{
        width:GetScreenWidth(),
        display: "flex",
        overflowX: "auto",
        gap: 1,
        padding: 1,
        "&::-webkit-scrollbar": { display: "none" },
        "-ms-overflow-style": "none" /* IE and Edge */,
        "scrollbar-width": "none" /* Firefox */,
      }}
    >
      {items.map((item, index) => (
        <FollowSuggetion key={index} />
      ))}
      
    </Box>
  );
};

export default PeopleContainer;
