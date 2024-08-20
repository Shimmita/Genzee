import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import MyPostCard from "./MyPostCard";
function MyPost() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={6} sm={4} md={4}>
          <MyPostCard />
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
          <MyPostCard />
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
          <MyPostCard />
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
          <MyPostCard />
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
          <MyPostCard />
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
          <MyPostCard />
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
          <MyPostCard />
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
          <MyPostCard />
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
          <MyPostCard />
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
          <MyPostCard />
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
          <MyPostCard />
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
          <MyPostCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default MyPost;
