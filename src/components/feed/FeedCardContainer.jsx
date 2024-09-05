import { RefreshRounded } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";
import CardFeed from "../custom/CardFeed";
import PeopleContainer from "../people/PeopleContainer";

const FeedCardContainer = () => {
  // for follow/connect people people
  const items = Array.from({ length: 50 }, (_, i) => i);

  return (
    <>
      {items &&
        items.map((item, index) => {
          return (
            <Box key={index}>
              {/* show connect/follow people at third index */}
              {index === 0 && (
                <Box bgcolor={"background.default"}>
                  <PeopleContainer />
                </Box>
              )}

              {/* feed card containing posts */}
              <CardFeed />

              {/* show refresh button when the item is last */}
              {index === items.length - 1 && (
                <Box display={"flex"} justifyContent={"center"} m={2}>
                  <Button
                    className="rounded-5"
                    size="small"
                    variant="contained"
                    startIcon={<RefreshRounded />}
                  >
                    More
                  </Button>
                </Box>
              )}
            </Box>
          );
        })}
    </>
  );
};

export default FeedCardContainer;
