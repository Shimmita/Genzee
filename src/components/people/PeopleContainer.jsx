import { PersonAdd } from "@mui/icons-material";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React from "react";
import Events from "../events/Events";
import { GetScreenWidth } from "../utilities/GetScreenWidth";
import ConnectSuggestion from "./ConnectSuggestion";
import FollowSuggetion from "./FollowSuggestion";
import ModalMorePeople from "./ModalMorePeople";

const PeopleContainer = () => {
  // for follow/connect people people
  const items = Array.from({ length: 10 }, (_, i) => i);

  const [openPostModal, setOpenPostModal] = React.useState(false);
  const [followConnect, setFollowConnect] = React.useState();
  // handle showing follow, connect or event
  const handleChange = (event, update) => {
    setFollowConnect(update);
  };
  // handle opening of the modal
  const handleShowingModalMorePeople = () => {
    setOpenPostModal(true);
  };

  return (
    <Box className="border-top shadow rounded mb-3 ">
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <ToggleButtonGroup
            value={followConnect}
            exclusive
            color="primary"
            onChange={handleChange}
          >
            {/* display only in small devices */}
            {window.screen.availWidth <= 700 && (
              <ToggleButton value={0}>
                <Typography fontSize={"smaller"} variant="body2">
                  Events
                </Typography>
              </ToggleButton>
            )}
            <ToggleButton value={1}>
              <Typography fontSize={"smaller"} variant="body2">
                follow <span className="ps-2">20</span>{" "}
              </Typography>
            </ToggleButton>
            <ToggleButton value={2}>
              <Typography fontSize={"smaller"} variant="body2">
                connect <span className="ps-2">10</span>{" "}
              </Typography>
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

      {/* followconnect empty then do not show else show */}
      {followConnect && (
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

          {followConnect === 1 ? (
            <>
              {items.map((item, index) => (
                <FollowSuggetion key={index} />
              ))}
            </>
          ) : followConnect === 2 ? (
            <>
              {items.map((item, index) => (
                <ConnectSuggestion key={index} />
              ))}
            </>
          ) : followConnect === 0 ? (
            <>
              <Events />
            </>
          ) : null}
        </Box>
      )}

      {/* follow more people modal */}
      <ModalMorePeople
        openPostModal={openPostModal}
        setOpenPostModal={setOpenPostModal}
      />
    </Box>
  );
};

export default PeopleContainer;
