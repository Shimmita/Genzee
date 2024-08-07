import {
  Avatar,
  Box,
  IconButton,
  MenuItem,
  Modal,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import devImage from "../../images/dev.jpeg";
import PostPrivacy from "../data/PostPrivacy";
import {
  Add,
  Close,
  People,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import PostAbout from "../data/PostAbout";
import CountiesInKenya from "../data/Counties";
import CardPreview from "./CardPreview";

const StyledModalPost = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "5px",
});

const PostModal = ({ openPostModal, setOpenPostModal }) => {
  const [privacy, setPrivacy] = useState("");
  const [about, setAbout] = useState("");
  const [county, setCounty] = useState("");
  const [imagePath, setImagePath] = useState();
  const [description, setDescription] = useState("");
  const [showPreview, setShowPreview] = React.useState(false);

  const handleClickShowPreview = () => setShowPreview((show) => !show);

  const handleFile = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setImagePath(reader.result);
    };
  };

  return (
    <StyledModalPost
      open={openPostModal}
      onClose={(e) => setOpenPostModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        width={400}
        p={1}
        borderRadius={2}
        bgcolor={"background.default"}
        color={"text.primary"}
      >
        {/* toolbar like box */}
        <Box display={"flex"} alignItems={"center"} marginLeft={1}>
          <Avatar src={devImage} sx={{ width: 35, height: 35 }} />
          <Typography
            id="modal-modal-title"
            color={"gray"}
            variant="body1"
            component="h1"
            className="w-75"
            textAlign={"center"}
          >
            Create a Post
          </Typography>

          {/*  button for posting */}
          <Tooltip title={"post"}>
            <IconButton>
              <Add color="primary" />
            </IconButton>
          </Tooltip>

          {/* preview  */}

          <Tooltip title={"preview"}>
            <IconButton onClick={handleClickShowPreview}>
              {showPreview ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Tooltip>

          {/*close icon */}
          <Tooltip title={"close"}>
            <IconButton onClick={(e) => setOpenPostModal(false)}>
              <Close />
            </IconButton>
          </Tooltip>
        </Box>
        {/* divider here */}
        <hr />
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

            // paddingLeft: window.screen.availWidth<370 && '20%'
          }}
        >
          {showPreview ? (
            // show the preview
            <Box className="w-100 mt-2">
              <CardPreview description={description} imagePath={imagePath} />
            </Box>
          ) : (
            <>
              {/* show this if no preview clicked */}
              <Box className="w-100 mb-3 mt-2">
                <TextField
                  required
                  select
                  value={privacy}
                  label="privacy status of the post"
                  fullWidth
                  onChange={(e) => setPrivacy(e.target.value)}
                >
                  {PostPrivacy &&
                    PostPrivacy.map((privacy) => (
                      <MenuItem key={privacy} value={privacy}>
                        <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                          {privacy.includes("everyone") && (
                            <Visibility color="primary" />
                          )}
                          {privacy.includes("only") && (
                            <People color="primary" />
                          )}
                          <small style={{ fontSize: "small" }}>
                            {" "}
                            {privacy}
                          </small>
                        </Box>
                      </MenuItem>
                    ))}
                </TextField>
              </Box>

              <Box className="w-100 mb-3 ">
                <TextField
                  required
                  select
                  value={about}
                  label="posting about what content?"
                  fullWidth
                  onChange={(e) => setAbout(e.target.value)}
                >
                  {PostAbout &&
                    PostAbout.map((about) => (
                      <MenuItem key={about} value={about}>
                        <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                          {about.includes("everyone") && <Visibility />}
                          {about.includes("only") && <People />}
                          <small style={{ fontSize: "small" }}> {about}</small>
                        </Box>
                      </MenuItem>
                    ))}
                </TextField>
              </Box>

              <Box className="mb-3">
                <TextField
                  select
                  required
                  value={county}
                  label="location or place "
                  fullWidth
                  onChange={(e) => setCounty(e.target.value)}
                >
                  {CountiesInKenya &&
                    CountiesInKenya.map((county) => (
                      <MenuItem key={county} value={county}>
                        <small style={{ fontSize: "small" }}> {county}</small>
                      </MenuItem>
                    ))}
                </TextField>
              </Box>

              <Box className="mb-3">
                <div className="d-flex justify-content-center">
                  <small
                    className="text-secondary"
                    style={{ fontSize: "small" }}
                  >
                    provide an image for visualisation *
                  </small>
                </div>
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleFile}
                  />
                </div>
              </Box>

              <Box className="mb-3 ">
                <TextField
                  multiline
                  contentEditable={false}
                  error={description.length > 400}
                  id="outlined-required"
                  label={
                    <p>
                      {`description maximum ${
                        400 - description.length
                      } characters`}{" "}
                      *
                    </p>
                  }
                  fullWidth
                  value={description}
                  onChange={(e) => setDescription(e.target.value.toLowerCase())}
                  placeholder="write your description here..."
                />
              </Box>
            </>
          )}
        </Box>
      </Box>
    </StyledModalPost>
  );
};

export default PostModal;
