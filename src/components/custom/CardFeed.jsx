import {
  CommentBankOutlined,
  CommentBankRounded,
  Favorite,
  FavoriteBorder,
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
  Menu,
  Tooltip,
  Typography,
  CardActionArea,
} from "@mui/material";
import React from "react";

import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PostData from "../data/PostData";
import CardFeedMore from "./CardFeedMore";
const CardFeed = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMoreVertPost = Boolean(anchorEl);
  const navigate = useNavigate();

  // show reply in the post details page
  const handleReplyPost = () => {
    navigate("posts/details");
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

  // navigate to the post details page
  const handlePostDetails = () => {
    navigate("posts/details");
  };

  // display the user profile information
  const handleShowUserProfile = () => {
    navigate("users/profile");
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
              <IconButton onClick={handleShowUserProfile}>
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
                      <small
                        style={{ fontSize: "x-small", fontWeight: "bold" }}
                      >
                        following
                      </small>
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
                <CardFeedMore />
              </Menu>
            </Box>
          }
          title="Shimmitah"
          subheader="@devshim"
        />

        <CardActionArea onClick={handlePostDetails}>
          <CardContent>
            <small>
              <Typography
                variant="body2"
                component="div"
                className="text-center w-100"
              >
                <Divider>
                  {`${PostData.category} >> ${PostData.county}`}{" "}
                </Divider>
              </Typography>
            </small>

            <Typography color="text.secondary" variant="body2">
              {handleDetailsLength()}
              {handleShowMoreButton() && (
                <span>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={handlePostDetails}
                    sx={{ borderRadius: 5 }}
                  >
                    <Typography
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
        </CardActionArea>

        {/* media */}
        <Image
          src={PostData.image}
          alt={"image"}
          style={{
            width: "100%",
            maxHeight: window.screen.availWidth > 600 ? "500px" : "350px",
            objectFit: "fill",
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
                icon={<ThumbUpAltOutlined sx={{ width: 22, height: 22 }} />}
                checkedIcon={<ThumbUpRounded sx={{ width: 22, height: 22 }} />}
              />
              <small style={{ fontSize: "small" }}>20k</small>
            </Tooltip>

            <Tooltip title="favorite" arrow>
              <Checkbox
                icon={<FavoriteBorder sx={{ width: 22, height: 22 }} />}
                checkedIcon={<Favorite sx={{ width: 22, height: 22 }} />}
              />
              <small style={{ fontSize: "small" }}>50</small>
            </Tooltip>

            <Box>
              <Tooltip title={"comment"} arrow>
                <Checkbox
                  onChange={handleReplyPost}
                  icon={<CommentBankOutlined sx={{ width: 22, height: 22 }} />}
                  checkedIcon={
                    <CommentBankRounded sx={{ width: 22, height: 22 }} />
                  }
                />
                <small style={{ fontSize: "small" }}>33</small>
              </Tooltip>
            </Box>
          </CardActions>
        </Box>
      </Card>

      <Divider component={"div"} className="my-3" />
      {/* show backdrop when more icon of the post is clicked */}
      <Backdrop open={openMoreVertPost} />
    </Box>
  );
};

export default CardFeed;
