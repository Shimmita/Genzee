import { Avatar, Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import React from "react";
import { Image } from "react-bootstrap";
import devImage from "../../images/dev.jpeg";

export default function FollowSuggetion() {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Card
        elevation={0}
        sx={{ width: 120, height: 125 }}
        className="border rounded"
      >
        <Box className="pt-1">
          <Box display={"flex"} justifyContent={"center"}>
            <Avatar>
              <Image width={36} src={devImage} />
            </Avatar>
          </Box>
          <Typography className="text-center" variant="body2" component="div">
            <small>Albert Einstein</small>
          </Typography>
          <Typography
            className="text-center mb-1"
            variant="body2"
            color="text.secondary"
          >
            <small>@AlbertStar</small>
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button size="small" variant="contained">
            <small style={{ fontSize: "xx-small", paddingTop: "1px" }}>
              Follow
            </small>
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
