import {
  Comment,
  Favorite,
  FavoriteBorder,
  Flag,
  MoreVert,
  PersonAdd,
  RemoveRedEye,
  RemoveRedEyeOutlined,
  Share,
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
  Badge,
} from "@mui/material";
import React from "react";
import devImage from "../../images/dev.jpeg";
import { Image } from "react-bootstrap";

const CardFeed = () => {
  return (
    <Box>
      <Card className="w-100 mb-3 shadow rounded ">
        <CardHeader
          avatar={
            <IconButton>
              <Avatar
                sx={{
                  bgcolor: "steelblue",
                }}
                aria-label="avatar"
              >
                R
              </Avatar>
            </IconButton>
          }
          action={
            <Box className="d-flex flex-row ">
              <IconButton>
                <Typography variant="body2">
                  {" "}
                  <small>2 days ago</small>
                </Typography>
              </IconButton>
              <IconButton>
                <PersonAdd style={{ color: "steelblue" }} />
              </IconButton>
              <IconButton aria-label="more">
                <MoreVert />
              </IconButton>
            </Box>
          }
          title="Shimmitah"
          subheader="@DevShim"
        />
        <Box className="d-flex justify-content-center align-items-center">
          <Image
            className="rounded"
            src={devImage}
            style={{
              height: window.screen.height > 1000 ? 450 : 300,
              width: "100%",
            }}
          />
        </Box>

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing className=" border-top ">
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<RemoveRedEyeOutlined />}
              checkedIcon={<RemoveRedEye style={{ color: "steelblue" }} />}
            />
            <small style={{ fontSize: "small" }}>200K</small>
          </IconButton>
          &nbsp; | &nbsp;
          <IconButton aria-label="flag">
            <Flag />
            <small style={{ fontSize: "small" }}>5</small>
          </IconButton>
          &nbsp; |
          <IconButton aria-label="share">
            <Share />
            <small style={{ fontSize: "small" }}>20</small>
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardFeed;
