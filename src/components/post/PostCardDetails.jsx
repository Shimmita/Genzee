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
import React, { lazy, useState } from "react";

import { Image } from "react-bootstrap";
import PostData from "../data/PostData";
const AccordionComment = lazy(() => import("../custom/AccordionComment"));
const CardFeedMore = lazy(() => import("../custom/CardFeedMore"));

const PostCardDetails = () => {
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
      <Card elevation={0} className="w-100">
        <CardHeader
          sx={{
            padding: "0px",
            margin: "0px",
          }}
          avatar={
            <IconButton disabled>
              <Avatar aria-label="avatar">S</Avatar>
            </IconButton>
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

        {/* description */}
        {!showComment && (
          <CardContent>
            <small>
              <Typography gutterBottom variant="body2" className="text-center w-100">
                <Divider>
                  {`${PostData && PostData.category} >> ${
                    PostData && PostData.county
                  }`}
                </Divider>
              </Typography>
            </small>

            <Typography variant="body2">
              {PostData && PostData.details}
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
              <Tooltip title={showComment ? "close" : "comment"} arrow>
                <Checkbox
                  onChange={handleShowReply}
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
        {/* show reply here when comment clicked */}
        {showComment && <AccordionComment />}
      </Card>

      <Divider component={"div"} className="my-3" />
      {/* show backdrop when more icon of the post is clicked */}
      <Backdrop open={openMoreVertPost} />
    </Box>
  );
};

export default PostCardDetails;
