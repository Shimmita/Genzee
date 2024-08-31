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
  Divider,
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
import KenyaFlag from "../../images/KE.png";
import CountiesInKenya from "../data/Counties";
import PostAbout from "../data/PostAbout";
import PostPrivacy from "../data/PostPrivacy";
import CustomDeviceTablet from "../utilities/CustomDeviceTablet";
import CardPreview from "./CardPreview";
import FileInputToggle from "./FileInputToggle";

const StyledModalPost = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "5px",
  marginLeft: CustomDeviceTablet() && "34%",
});

const PostModal = ({ openPostModal, setOpenPostModal }) => {
  const [privacyView, setPrivacyView] = useState("");
  const [privacyComment, setPrivacyComment] = useState("");
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

  // control showing of the the input of the file either URL or from filesystem
  const [isURL, setIsUrl] = React.useState(true);

  return (
    <StyledModalPost
      open={openPostModal}
      onClose={(e) => setOpenPostModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        width={window.screen.availWidth < 600 ? "100%" : 550}
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

        <Box
          maxHeight={550}
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
                {/* divider here */}
                <Divider component={"div"} className="m-2" />
                <Box
                  gap={1}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  {/* flag */}
                  <Avatar
                    alt="flag"
                    src={KenyaFlag}
                    sx={{ width: 20, height: 20 }}
                  />

                  <Typography
                    variant="caption"
                    className="text-success p-1"
                    textAlign={"center"}
                  >
                    Post should be of significance to Kenyans !
                  </Typography>
                </Box>
                {/* divider here */}
              </Box>
              <Divider component={"div"} className="m-2" />

              <Box className="w-100 mb-3 ">
                <TextField
                  required
                  select
                  value={privacyView}
                  label="who should view this post"
                  fullWidth
                  onChange={(e) => setPrivacyView(e.target.value)}
                >
                  {PostPrivacy &&
                    PostPrivacy.map((privacy, index) => (
                      <MenuItem key={index} value={privacy}>
                        <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                          {index === 0 && <Visibility color="primary" />}
                          {index === 1 && <People color="primary" />}
                          {index === 2 && <LockRounded color="primary" />}
                          {index === 3 && <Visibility color="primary" />}
                          {index === 4 && <LockRounded color="primary" />}
                          <small style={{ fontSize: "small" }}>{privacy}</small>
                        </Box>
                      </MenuItem>
                    ))}
                </TextField>
              </Box>

              <Box className="w-100 mb-3 ">
                <TextField
                  required
                  select
                  value={privacyComment}
                  label="who should comment on this post"
                  fullWidth
                  onChange={(e) => setPrivacyComment(e.target.value)}
                >
                  {PostPrivacy &&
                    PostPrivacy.map((privacy, index) => (
                      <MenuItem key={index} value={privacy}>
                        <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                          {index === 0 && <Visibility color="primary" />}
                          {index === 1 && <People color="primary" />}
                          {index === 2 && <LockRounded color="primary" />}
                          <small style={{ fontSize: "small" }}>{privacy}</small>
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

              <Box className="mb-3 border rounded p-1">
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  p={1}
                >
                  {/* video from link is no limited to time  */}
                  {isURL ? (
                    <Typography variant="body2" color={"text.secondary"}>
                      Image/Video (optional)
                    </Typography>
                  ) : (
                    <Typography variant="body2" color={"text.secondary"}>
                      Image/Video 2min (optional)
                    </Typography>
                  )}

                  <Box>
                    <FileInputToggle setIsUrl={setIsUrl} />
                  </Box>
                </Box>

                {/* show input from filesystem or URL */}
                {isURL ? (
                  <Box>
                    <input
                      type="url"
                      placeholder="https://www.myimageorvideolink.com"
                      className="form-control rounded-0"
                    />
                  </Box>
                ) : (
                  <Box>
                    <input
                      type="file"
                      accept="image/*"
                      className="form-control"
                      onChange={handleFile}
                    />
                  </Box>
                )}
              </Box>

              <Box className="mb-3 ">
                <TextField
                  minRows={window.screen.availWidth <= 320 ? 2 : 5}
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
                  placeholder="what's on your mind ?"
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
