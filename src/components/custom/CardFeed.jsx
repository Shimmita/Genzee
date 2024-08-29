import {
  AddCommentOutlined,
  Favorite,
  FavoriteBorder,
  MenuRounded,
  PersonAddRounded,
  VerifiedRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
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
      return details.length > 220
        ? details.substring(0, 220) + " ..."
        : details;
    // smaller screens less content
    return details.length > 105 ? details.substring(0, 105) + " ..." : details;
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
      <Card
        style={{ backgroundColor: openMoreVertPost && "lightgray" }}
        elevation={0}
        className="w-100 shadow mb-4 rounded p-1"
      >
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
                    icon={<PersonAddRounded sx={{ width: 20, height: 20 }} />}
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
                  <MenuRounded sx={{ width: 22, height: 22 }} />
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
          title={
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <Typography variant="body2">Shimmita</Typography>
              <VerifiedRounded color="primary" sx={{ width: 20, height: 20 }} />
            </Box>
          }
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
                  {PostData.category} &gt; &gt; {PostData.county}
                </Divider>
              </Typography>
            </>

            <Typography color={"text.secondary"} variant="body2">
              {handleDetailsLength()}
            </Typography>
          </CardContent>
        </CardActionArea>

        {/* media */}
        <Image
          src={PostData.image}
          alt={"image"}
          style={{
            width: "100%",
            maxHeight: window.screen.availWidth > 600 ? "450px" : "300px",
            objectFit: "fill",
            padding: window.screen.availWidth > 1300 && "5px",
            borderRadius: "10px",
            filter: openMoreVertPost && "grayscale(100%)",
          }}
        />

        <Box
          display={"flex "}
          p={1}
          justifyContent={"space-between"}
          alignItems={"center"}
          style={{
            paddingRight: window.screen.availWidth > 600 && "2rem",
          }}
        >
          <Box display={"flex"} alignItems={"center"}>
            <Tooltip title="favorite" arrow>
              <Checkbox
                icon={<FavoriteBorder sx={{ width: 23, height: 23 }} />}
                checkedIcon={
                  <Favorite sx={{ width: 23, height: 23, color: "#CF4B3F" }} />
                }
              />
            </Tooltip>
            <span>
              <Typography variant="body2" color={"text.secondary"}>
                You and 50 others liked
              </Typography>
            </span>
          </Box>

          <Box display={"flex"} alignItems={"center"}>
            <Tooltip title={"comment"} arrow>
              <Checkbox
                onChange={handleReplyPost}
                icon={<AddCommentOutlined sx={{ width: 20, height: 20 }} />}
              />
            </Tooltip>
            <span>
              <Typography variant="body2" color={"text.secondary"}>
                2k
              </Typography>
            </span>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default CardFeed;
