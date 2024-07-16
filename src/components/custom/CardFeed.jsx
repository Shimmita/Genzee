import {
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
          <Tooltip title="like" arrow>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              style={{ color: "steelblue" }}
            />
            <small
              className="text-body-secondary"
              style={{ fontSize: "small" }}
            >
              25K
            </small>
          </Tooltip>

          {/* &nbsp; | &nbsp; */}
          <Tooltip title="scam" arrow>
            <Checkbox
              icon={<FlagOutlined style={{ color: "steelblue" }} />}
              checkedIcon={<FlagCircle style={{ color: "steelblue" }} />}
            />
            <small
              className="text-body-secondary"
              style={{ fontSize: "small" }}
            >
              5
            </small>
          </Tooltip>

          <Tooltip title="archive" arrow>
            <Checkbox
              icon={<ArchiveOutlined style={{ color: "steelblue" }} />}
              checkedIcon={<ArchiveRounded style={{ color: "steelblue" }} />}
            />
            <small
              className="text-body-secondary"
              style={{ fontSize: "small" }}
            >
              5
            </small>
          </Tooltip>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardFeed;
