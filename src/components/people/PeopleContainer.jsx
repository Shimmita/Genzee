import { Box, Divider, IconButton } from "@mui/material";
import React from "react";
import FollowSuggetion from "./FollowSuggestion";
import { GetScreenWidth } from "../utilities/GetScreenWidth";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { PersonAdd } from "@mui/icons-material";
import ModalMorePeople from "./ModalMorePeople";
import ConnectSuggestion from "./ConnectSuggestion";

const PeopleContainer = () => {
  // for follow/connect people people
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
    <Box className="border-bottom border-top  mb-3">
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        className="p-1"
      >
        <Box>
          <ToggleButtonGroup
            color="primary"
            value={followConnect}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value={0}>
              <small style={{ fontSize: "x-small" }}>follow</small>
            </ToggleButton>
            <ToggleButton value={1}>
              <small style={{ fontSize: "x-small" }}>connect</small>
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Box display={"flex"}>
          <IconButton onClick={handleShowingModalMorePeople}>
            <PersonAdd color="primary" sx={{ width: 20, height: 20 }} />
          </IconButton>
        </Box>
      </Box>

      <Divider component={"div"} />

      <Box
        sx={{
          width: GetScreenWidth(),
          display: "flex",
          overflowX: "auto",
          gap: 1,
          padding: 1,
          "&::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {/* show follow if 0 else(1) show connect */}

        {followConnect === 0 ? (
          <>
            {items.map((item, index) => (
              <FollowSuggetion key={index} />
            ))}
          </>
        ) : (
          <>
            {items.map((item, index) => (
              <ConnectSuggestion key={index} />
            ))}
          </>
        )}
      </Box>

      {/* follow more people modal */}
      <ModalMorePeople
        openPostModal={openPostModal}
        setOpenPostModal={setOpenPostModal}
      />
    </Box>
  );
};

export default PeopleContainer;
