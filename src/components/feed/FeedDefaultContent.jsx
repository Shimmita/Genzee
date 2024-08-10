import { Box, Divider, IconButton } from "@mui/material";
import React from "react";
import CardFeed from "../custom/CardFeed";
import PeopleContainer from "../people/PeopleContainer";
import { Close, Expand } from "@mui/icons-material";
import ModalMorePeople from "../people/ModalMorePeople";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const FeedDefaultContent = () => {
  // for follow people
  const items = Array.from({ length: 10 }, (_, i) => i);

  const [openPostModal, setOpenPostModal] = React.useState(false);
  const [followConnect, setFollowConnect] = React.useState(0);

  // handle showing follow or connect
  const handleChange = (event, update) => {
    setFollowConnect(update);
  };
  // handle opening of the modal
  const handleShowingModalMorePeople = () => {
    setOpenPostModal(true);
  };

  return (
    <Box>
      <Box className="border-bottom border-top  mb-3">
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          className="p-1"
        >
          <Box  >
            <ToggleButtonGroup
              color="primary"
              value={followConnect}
              exclusive
              onChange={handleChange}
            >
              <ToggleButton value={0}>
                <small style={{fontSize:'x-small'}} >follow</small>
              </ToggleButton>
              <ToggleButton value={1}>
              <small style={{fontSize:'x-small'}}>connect</small>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>

          <Box display={"flex"}>
            <IconButton onClick={handleShowingModalMorePeople}>
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
        <Divider component={'div'} />
        {/* follow people container */}
        <PeopleContainer items={items} />
        {/* follow more people modal */}
        <ModalMorePeople
          openPostModal={openPostModal}
          setOpenPostModal={setOpenPostModal}
        />
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
