import { Close, Search } from "@mui/icons-material";
import {
  Avatar,
  Box,
  IconButton,
  Modal,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import devImage from "../../images/dev.jpeg";

const StyledModalPost = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "10px",
});

const ModalMorePeople = ({ openPostModal, setOpenPostModal }) => {
  // handle the closing of the modal
  const handleCloseModal = () => setOpenPostModal(false);
  return (
    <StyledModalPost
      open={openPostModal}
      onClose={(e) => setOpenPostModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        width={400}
        p={2}
        borderRadius={2}
        bgcolor={"background.default"}
        color={"text.primary"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={2}
        >
          <Avatar src={devImage} sx={{ width: 36, height: 36 }} />

          <Typography className="text-center" variant="body1" component={"div"}>
            Find People
          </Typography>
          <IconButton onClick={handleCloseModal}>
            <Close />
          </IconButton>
        </Box>
        <hr />

        {/* toolbar like box */}
        <Box className="d-flex justify-content-center">
          {/* form for searching poople */}
          <form className="d-flex ps-5">
            <input
              type="text"
              className="form-control"
              placeholder={"search people..."}
            />

            <Tooltip title={"post"}>
              <IconButton type="submit">
                <Search color="primary" />
              </IconButton>
            </Tooltip>
          </form>
        </Box>
        <Box
          maxHeight={600}
          sx={{
            overflowX: "auto",
            // Hide scrollbar for Chrome, Safari and Opera
            "&::-webkit-scrollbar": {
              display: "none",
            },
            // Hide scrollbar for IE, Edge and Firefox
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          }}
        ></Box>
      </Box>
    </StyledModalPost>
  );
};

export default ModalMorePeople;
