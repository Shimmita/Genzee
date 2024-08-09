import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Button, CardActions, IconButton } from "@mui/material";
import devImage from "../../images/dev.jpeg";
import { Close } from "@mui/icons-material";

export default function FollowSuggetion() {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Card elevation={0} sx={{ width: 130 }} className="rounded border">
        <Box display={"flex"} justifyContent={"flex-end"}>
          <IconButton>
            <Close color="primary" sx={{ width: 15, height: 15 }} />
          </IconButton>
        </Box>
        <CardContent>
          <Box display={"flex"} justifyContent={"center"}>
            <Avatar src={devImage} />
          </Box>
          <Typography
            className="text-center"
            gutterBottom
            variant="body2"
            component="div"
          >
            <small>Albert Einstein</small>
          </Typography>
          <Typography
            className="text-center"
            variant="body2"
            color="text.secondary"
          >
            <small>@AlbertStar</small>
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            disableElevation
            variant="contained"
            size="small"
            color="primary"
            sx={{ borderRadius: 5 }}
          >
            <small>Follow</small>
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
