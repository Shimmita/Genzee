import {
  Flag,
  FlagCircle,
  Link,
  MoreVert,
  PersonAdd,
  RemoveRedEye,
  RemoveRedEyeOutlined,
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
                  icon={<PersonAdd />}
                  checkedIcon={<PersonAdd style={{ color: "steelblue" }} />}
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
          <Tooltip title="seen" arrow>
            <Checkbox
              icon={<RemoveRedEyeOutlined />}
              checkedIcon={<RemoveRedEye style={{ color: "steelblue" }} />}
            />
            <small style={{ fontSize: "small" }}>200K</small>
          </Tooltip>

          {/* &nbsp; | &nbsp; */}
          <Tooltip title="scam" arrow>
            <Checkbox
              icon={<Flag />}
              checkedIcon={<FlagCircle style={{ color: "steelblue" }} />}
            />
            <small style={{ fontSize: "small" }}>5</small>
          </Tooltip>
          {/* &nbsp; | */}

          <Tooltip title="share" arrow>
            <Checkbox
              icon={<Link />}
              checkedIcon={<Link />}
              style={{ color: "grey" }}
            />
            <small style={{ fontSize: "small" }}>20</small>
          </Tooltip>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardFeed;
