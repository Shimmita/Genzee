import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Button, CardActions } from "@mui/material";
import devImage from "../../images/dev.jpeg";

export default function ConnectSuggestion() {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Card elevation={0} sx={{ width: 120, height: 170 }} className="rounded">
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
            size="small"
            variant="contained"
            color="primary"
            sx={{ borderRadius: 5 }}
          >
            <small style={{ fontSize: "xx-small" }}>connect</small>
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
