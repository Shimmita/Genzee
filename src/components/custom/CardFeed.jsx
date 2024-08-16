import {
  Block,
  CommentBankOutlined,
  CommentBankRounded,
  DownloadOutlined,
  Favorite,
  FavoriteBorder,
  FlagOutlined,
  MoreVert,
  PersonAddOutlined,
  ThumbUpAltOutlined,
  ThumbUpRounded,
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

import { Image } from "react-bootstrap";
import AccordionComment from "./AccordionComment";
import PostData from "../data/PostData";
import { Link } from "react-router-dom";
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

  // fun to handle the showing of dotted lines for 280 above characters
  const handleDetailsLength = () => {
    const details = PostData && PostData.details;
    return details.length > 277 ? details.substring(0, 277) + "..." : details;
  };

  // fun to handle showing of the more button
  const handleShowMoreButton = () => {
    const details = PostData && PostData.details;
    return details.length > 277;
  };

  return (
    <Box>
      <Card elevation={0} className="w-100">
        <CardHeader
          sx={{
            padding: "0px",
            margin: "0px",
          }}
          avatar={
            <Tooltip title="profile" arrow>
              <IconButton>
                <Avatar aria-label="avatar">S</Avatar>
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
                  icon={<PersonAddOutlined sx={{ width: 20, height: 20 }} />}
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

        {/* description */}
        {!showComment && (
          <CardContent>
            <small>
              <Typography variant="body2" className="text-center w-100">
                <Divider>Artistic</Divider>
              </Typography>
            </small>
            <Typography color="text.primary" variant="caption">
              {handleDetailsLength()}
              {handleShowMoreButton() && (
                <span>
                  <Button
                    size="small"
                    variant="outlined"
                    sx={{ borderRadius: 5 }}
                  >
                    <Typography
                      color={"text.primary"}
                      variant="body2"
                      style={{
                        fontWeight: "bold",
                        fontSize: "xx-small",
                        paddingTop: "2px",
                        textTransform: "lowercase",
                      }}
                    >
                      more
                    </Typography>
                  </Button>
                </span>
              )}
            </Typography>
          </CardContent>
        )}

        {/* media */}
        <Image
          src={PostData.image}
          alt={"image"}
          style={{
            width: "100%",
            maxHeight: window.screen.availWidth > 600 ? "500px" : "350px",
            objectFit:'fill',
            borderRadius: "10px",
          }}
        />

        <Box display={"flex "} justifyContent={"end"} p={1}>
          <CardActions
            disableSpacing
            style={{
              gap: 2,
              paddingRight: window.screen.availWidth > 600 && "2rem",
            }}
            className="d-flex"
          >
            <Tooltip title="like" arrow>
              <Checkbox
                icon={<ThumbUpAltOutlined sx={{ width: 20, height: 20 }} />}
                checkedIcon={<ThumbUpRounded sx={{ width: 20, height: 20 }} />}
              />
              <small style={{ fontSize: "small" }}>20k</small>
            </Tooltip>

            <Tooltip title="favorite" arrow>
              <Checkbox
                icon={<FavoriteBorder sx={{ width: 20, height: 20 }} />}
                checkedIcon={<Favorite sx={{ width: 20, height: 20 }} />}
              />
              <small style={{ fontSize: "small" }}>50</small>
            </Tooltip>

            <Box>
              <Tooltip title={showComment ? "close" : "comment"} arrow>
                <Checkbox
                  onChange={handleShowReply}
                  icon={<CommentBankOutlined sx={{ width: 20, height: 20 }} />}
                  checkedIcon={
                    <CommentBankRounded sx={{ width: 20, height: 20 }} />
                  }
                />
                <small style={{ fontSize: "small" }}>33</small>
              </Tooltip>
            </Box>
          </CardActions>
        </Box>
        {/* show reply here when comment clicked */}
        {showComment && <AccordionComment />}
      </Card>

      <Divider component={"div"} className="my-3" />
      {/* show backdrop when more icon of the post is clicked */}
      <Backdrop open={openMoreVertPost} />
    </Box>
  );
};

export default CardFeed;
