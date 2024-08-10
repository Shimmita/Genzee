import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import CardFeed from "../custom/CardFeed";
import PeopleContainer from "../people/PeopleContainer";
import { Close, Expand } from "@mui/icons-material";

const FeedDefaultContent = () => {
  // for follow people
  const items = Array.from({ length: 10 }, (_, i) => i);

  return (
    <Box>
      <Box className="border-top border-bottom mb-3">
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            variant="body2"
            component={"div"}
            className="ps-2 pt-1 mb-2"
          >
            Follow People
          </Typography>

          <Box display={"flex"}>
            <IconButton>
              <Expand
                color="primary"
                sx={{ rotate: "90deg", width: 18, height: 18 }}
              />
            </IconButton>

            <IconButton>
              <Close
                color="primary"
                sx={{ rotate: "90deg", width: 18, height: 18 }}
              />
            </IconButton>
          </Box>
        </Box>

        <PeopleContainer items={items} />
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
