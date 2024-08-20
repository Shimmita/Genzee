import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import devImage from "../../../../images/dev.jpeg";

export default function MyPostCard() {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height={window.screen.availWidth > 1000 ? "250" : "200"}
        image={devImage}
      />
      <CardContent>
        <Typography
          className="text-center"
          gutterBottom
          variant="body1"
          component="div"
        >
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <small>Edit</small>
        </Button>
        <Button size="small" color="error">
          <small>Delete</small>
        </Button>
      </CardActions>
    </Card>
  );
}
