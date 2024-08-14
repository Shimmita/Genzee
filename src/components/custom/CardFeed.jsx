import {
  AddCommentOutlined,
  ArchiveOutlined,
  ArchiveRounded,
  Block,
  DownloadOutlined,
  Favorite,
  FavoriteBorder,
  FlagCircle,
  FlagOutlined,
  Link,
  MoreVert,
  PersonAddOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Backdrop,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  IconButton,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
// import devImage from "../../images/dev.jpeg";
import devImage from "../../images/mac.png";

import { Image } from "react-bootstrap";
import AccordionComment from "./AccordionComment";

const CardFeed = () => {
  const [showComment, setShowComment] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMoreVertPost = Boolean(anchorEl);

  const handleShowReply = () => {
    setShowComment((prev) => !prev);
  };

  const handleClickMoreVertPost = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Card elevation={0} className="w-100  rounded">
        <CardHeader
          sx={{
            padding: "0px",
            margin: "0px",
          }}
          avatar={
            <Tooltip title="profile" arrow>
              <IconButton>
                <Avatar
                  sx={{
                    bgcolor: "steelblue",
                  }}
                  aria-label="avatar"
                >
                  S
                </Avatar>
              </IconButton>
            </Tooltip>
          }
          action={
            <Box className="d-flex flex-row ">
              <IconButton disableRipple>
                <Typography variant="body2">
                  <small>2d</small>
                </Typography>
              </IconButton>

              <Tooltip title="follow" arrow>
                <Checkbox
                  icon={
                    <PersonAddOutlined
                      sx={{ color: "steelblue", width: 18, height: 18 }}
                    />
                  }
                  checkedIcon={
                    <Typography variant="body2">
                      <small>following</small>
                    </Typography>
                  }
                />
              </Tooltip>

              <Tooltip title="more" arrow>
                <IconButton
                  aria-label="more"
                  id="more-button"
                  aria-controls={openMoreVertPost ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openMoreVertPost ? "true" : undefined}
                  onClick={handleClickMoreVertPost}
                >
                  <MoreVert />
                </IconButton>
              </Tooltip>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMoreVertPost}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "more-button",
                }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem>
                  <ListItemButton LinkComponent={"a"} href="#home">
                    <ListItemText>
                      <FlagOutlined className="mx-2" />
                    </ListItemText>
                    <ListItemText primary={<small>report this post</small>} />
                  </ListItemButton>
                </MenuItem>

                <MenuItem>
                  <ListItemButton LinkComponent={"a"} href="#home">
                    <ListItemText>
                      <Link className="mx-2" />
                    </ListItemText>
                    <ListItemText primary={<small>copy this link</small>} />
                  </ListItemButton>
                </MenuItem>

                <MenuItem>
                  <ListItemButton LinkComponent={"a"} href="#home">
                    <ListItemText>
                      <DownloadOutlined className="mx-2" />
                    </ListItemText>
                    <ListItemText primary={<small>save this post</small>} />
                  </ListItemButton>
                </MenuItem>

                <MenuItem>
                  <ListItemButton LinkComponent={"a"} href="#home">
                    <ListItemText>
                      <PersonAddOutlined className="mx-2" />
                    </ListItemText>
                    <ListItemText primary={<small>follow devshim</small>} />
                  </ListItemButton>
                </MenuItem>

                <MenuItem>
                  <ListItemButton LinkComponent={"a"} href="#home">
                    <ListItemText>
                      <Block className="mx-2" />
                    </ListItemText>
                    <ListItemText primary={<small>block devshim</small>} />
                  </ListItemButton>
                </MenuItem>
              </Menu>
            </Box>
          }
          title="Shimmitah"
          subheader="@devshim"
        />
        {/* media */}
        <Image
          src={devImage}
          
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "contain",
            borderRadius:5,
            backgroundColor: '#f9f9f9'
          }}
        />

        {!showComment && (
          <CardContent>
            <small>
              <p className="text-center w-100">
                <Divider variant="middle" component="div">
                  Artistic
                </Divider>
              </p>
            </small>
            {/* <hr style={{paddingBottom:'0 1px'}}/> */}
            <Typography color="text.secondary" variant="body2">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests.Add 1 cup of frozen peas along with
              the mussels,if you like.This impressive paella is a perfect party
              dish and a fun meal to cook.This impressive paella is a perfect
              party dish and a fun meal to cook together with your guests.
            </Typography>
          </CardContent>
        )}

        <CardActions disableSpacing className="d-flex gap-1 ">
          <Tooltip title="like" arrow>
            <Checkbox
              icon={<FavoriteBorder sx={{ width: 20, height: 20 }} />}
              checkedIcon={<Favorite sx={{ width: 20, height: 20 }} />}
              style={{ color: "steelblue" }}
            />
            <small style={{ fontSize: "small" }}>300k</small>
          </Tooltip>
          {/* &nbsp; | */}
          <Tooltip title="scam" arrow>
            <Checkbox
              icon={<FlagOutlined sx={{ width: 20, height: 20 }} />}
              checkedIcon={<FlagCircle sx={{ width: 20, height: 20 }} />}
              style={{ color: "steelblue" }}
            />
            <small style={{ fontSize: "small" }}>10</small>
          </Tooltip>
          {/* &nbsp; | */}
          <Tooltip title="archive" arrow>
            <Checkbox
              icon={<ArchiveOutlined sx={{ width: 20, height: 20 }} />}
              checkedIcon={<ArchiveRounded sx={{ width: 20, height: 20 }} />}
              style={{ color: "steelblue" }}
            />
            <small style={{ fontSize: "small" }}>2k</small>
          </Tooltip>
          {/* &nbsp; | */}

          <Box className="ms-3">
            <Tooltip title="comment">
              <Button
                color="inherit"
                onClick={handleShowReply}
                className="fw-normal"
                startIcon={
                  <AddCommentOutlined
                    style={{ color: "steelblue", width: 20, height: 20 }}
                  />
                }
              >
                {showComment ? (
                  <small
                    className="fw-bold"
                    style={{
                      fontSize: "small",
                      textTransform: "lowercase",
                      color: "steelblue",
                    }}
                  >
                    close
                  </small>
                ) : (
                  <small
                    style={{ fontSize: "small", textTransform: "lowercase" }}
                  >
                    1k
                  </small>
                )}
              </Button>
            </Tooltip>
          </Box>
        </CardActions>
        {/* show reply here when comment clicked */}
        {showComment && <AccordionComment />}
      </Card>

      <Divider component={"div"} className="my-2" />
      {/* show backdrop when more icon of the post is clicked */}
      <Backdrop open={openMoreVertPost} />
    </Box>
  );
};

export default CardFeed;
