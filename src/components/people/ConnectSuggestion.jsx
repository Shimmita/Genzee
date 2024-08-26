import { Avatar, Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import devImage from "../../images/dev.jpeg";

export default function ConnectSuggestion() {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Card
        elevation={0}
        sx={{ width: 120, height: 155 }}
        className="rounded border"
      >
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
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            size="small"
            sx={{ borderRadius: 5 }}
          >
            <small style={{ fontSize: "xx-small", paddingTop: "1px" }}>
              Connect
            </small>
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
