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
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  IconButton,
  Menu,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PostData from "../data/PostData";
import CustomDeviceTablet from "../utilities/CustomDeviceTablet";
import CardFeedMore from "./CardFeedMore";
const CardFeed = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMoreVertPost = Boolean(anchorEl);
  const navigate = useNavigate();

  const [isFriend, setIsFriend] = useState(true);

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
    // wider screens more content
    if (CustomDeviceTablet() || window.screen.width > 1000)
      return details.length > 220 ? details.substring(0, 220) : details;
    // smaller screens less content
    return details.length > 105 ? details.substring(0, 105) : details;
  };

  // fun to handle showing of the more button
  const handleShowMoreButton = () => {
    const details = PostData && PostData.details;
    // show more button in larger or wider screen
    if (CustomDeviceTablet() || window.screen.availWidth > 1000)
      return details.length > 220;
    // show more button in smaller screens
    return details.length > 105;
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
    <>
      <Card elevation={0} className="w-100 shadow mb-3 rounded-2 p-1">
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

              {/* displayed if user is friend */}
              {isFriend && (
                <Tooltip title="follow" arrow>
                  <Checkbox
                    onChange={() => setIsFriend(false)}
                    icon={<PersonAddOutlined sx={{ width: 20, height: 20 }} />}
                  />
                </Tooltip>
              )}

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
            <>
              <Typography
                variant="body2"
                component="div"
                gutterBottom
                className="text-center w-100"
              >
                <Divider>
                  {`${PostData.category} >> ${PostData.county}`}{" "}
                </Divider>
              </Typography>
            </>

            <Typography variant="body2">
              {handleDetailsLength()}
              {handleShowMoreButton() && (
                <span>
                  <Typography
                    variant="body2"
                    color={"text.secondary"}
                    display={"inline-block"}
                  >
                    ...more
                  </Typography>
                </span>
              )}
            </Typography>
          </CardContent>

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
        </CardActionArea>

        <Box display={"flex "} justifyContent={"end"} p={1}>
          <CardActions
            disableSpacing
            style={{
              gap: 2,
              paddingRight: window.screen.availWidth > 600 && "2rem",
            }}
          >
            <Tooltip title="like" arrow>
              <Checkbox
                icon={<ThumbUpAltOutlined sx={{ width: 23, height: 23 }} />}
                checkedIcon={<ThumbUpRounded sx={{ width: 23, height: 23 }} />}
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
      {/* show backdrop when more icon of the post is clicked */}
      <Backdrop open={openMoreVertPost} />
    </>
  );
};

export default CardFeed;
