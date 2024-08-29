import {
  Add,
  Close,
  LockRounded,
  People,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
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
import CountiesInKenya from "../data/Counties";
import PostAbout from "../data/PostAbout";
import PostPrivacy from "../data/PostPrivacy";
import CustomDeviceTablet from "../utilities/CustomDeviceTablet";
import CardPreview from "./CardPreview";

const StyledModalPost = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "5px",
  marginLeft: CustomDeviceTablet() && "34%",
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
        width={550}
        p={1}
        borderRadius={2}
        bgcolor={"background.default"}
        color={"text.primary"}
      >
        {/* toolbar like box */}
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          marginLeft={1}
        >
          <Avatar
            alt="user image"
            src={devImage}
            variant="rounded"
            sx={{ width: 40, height: 40 }}
          />

          {/*  button for posting */}
          <Tooltip title={"post"}>
            <Button
              startIcon={<Add />}
              sx={{ borderRadius: 5 }}
              disableElevation
              className="ms-5 w-25"
              variant="contained"
              size="small"
            >
              Post
            </Button>
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
                  label="who should view this post"
                  fullWidth
                  onChange={(e) => setPrivacy(e.target.value)}
                >
                  {PostPrivacy &&
                    PostPrivacy.map((privacy, index) => (
                      <MenuItem key={index} value={privacy}>
                        <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                          {index===0 && (
                            <Visibility color="primary" />
                          )}
                          {index===1 && (
                            <People color="primary" />
                          )}
                           {index===2 && (
                            <LockRounded color="primary" />
                          )}
                          {index===3 && (
                            <Visibility color="primary" />
                          )}
                            {index===4 && (
                            <LockRounded color="primary" />
                          )}
                          <small style={{ fontSize: "small" }}>
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
                  label="County or Location"
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
                <Typography
                  variant="caption"
                  className="ms-2"
                  color={"text.secondary"}
                >
                  Image/Video (optional) video max length 2 min
                </Typography>

                <Box>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleFile}
                  />
                </Box>
              </Box>

              <Box className="mb-3 ">
                <TextField
                  minRows={5}
                  multiline
                  contentEditable={false}
                  error={description.length > 300}
                  id="outlined-required"
                  label={
                    <p>
                      {`description maximum ${
                        300 - description.length
                      } characters`}{" "}
                      *
                    </p>
                  }
                  fullWidth
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
