import {
  AddCommentOutlined,
  ArchiveOutlined,
  ArchiveRounded,
  Favorite,
  FavoriteBorder,
  FlagCircle,
  FlagOutlined,
  MoreVert,
  PersonAddOutlined,
  PersonRounded,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Typography,
  CardActions,
  Checkbox,
  Tooltip,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import devImage from "../../images/dev.jpeg";

import { Image } from "react-bootstrap";
import AccordionComment from "./AccordionComment";

const CardFeed = () => {
  const [showComment, setShowComment] = useState(false);

  const handleShowReply = () => {
    setShowComment((prev) => !prev);
  };
  return (
    <Box>
      <Card elevation={0} className="w-100 mb-3 p-1 border rounded">
        <CardHeader
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
                  {" "}
                  <small>2 days ago</small>
                </Typography>
              </IconButton>

              <Tooltip title="follow" arrow>
                <Checkbox
                  icon={
                    <PersonAddOutlined
                      sx={{ color: "steelblue", width: 20, height: 20 }}
                    />
                  }
                  checkedIcon={
                    <PersonRounded
                      style={{ color: "steelblue", width: 20, height: 20 }}
                    />
                  }
                />
              </Tooltip>

              <Tooltip title="more" arrow>
                <IconButton aria-label="more">
                  <MoreVert />
                </IconButton>
              </Tooltip>
            </Box>
          }
          title="Shimmitah"
          subheader="@devshim"
        />
        <Box className="d-flex justify-content-center align-items-center">
          <Image
            className="rounded mb-1 w-100 shadow-sm"
            src={devImage}
            style={{
              maxHeight:
                window.screen.availWidth > 700 &&
                window.screen.availWidth < 1000
                  ? 550
                  : 300,
              minWidth:
                window.screen.availWidth > 700 &&
                window.screen.availWidth < 1000
                  ? 550
                  : 300,
            }}
          />
        </Box>

        {!showComment && (
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.This impressive paella is a perfect
              party dish and a fun meal to cook.
            </Typography>
          </CardContent>
        )}

        <CardActions disableSpacing className=" border-top rounded ">
          <Tooltip title="like" arrow>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              style={{ color: "steelblue" }}
            />
            <small style={{ fontSize: "small" }}>300k</small>
          </Tooltip>
          {/* &nbsp; | */}
          <Tooltip title="scam" arrow>
            <Checkbox
              icon={<FlagOutlined style={{ color: "steelblue" }} />}
              checkedIcon={<FlagCircle style={{ color: "steelblue" }} />}
            />
            <small style={{ fontSize: "small" }}>10</small>
          </Tooltip>
          {/* &nbsp; | */}
          <Tooltip title="archive" arrow>
            <Checkbox
              icon={<ArchiveOutlined style={{ color: "steelblue" }} />}
              checkedIcon={<ArchiveRounded style={{ color: "steelblue" }} />}
            />
            <small style={{ fontSize: "small" }}>2k</small>
          </Tooltip>
          {/* &nbsp; | */}

          <Box className="ms-1">
            <Tooltip title="comment">
              <Button
                color="inherit"
                onClick={handleShowReply}
                className="fw-normal"
                startIcon={
                  <AddCommentOutlined style={{ color: "steelblue" }} />
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
    </Box>
  );
};

export default CardFeed;
