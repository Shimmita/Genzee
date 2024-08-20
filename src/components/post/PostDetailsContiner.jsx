import { ArrowBack } from "@mui/icons-material";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleScrolledDown } from "../../redux/AppUI";
import PostCardDetails from "./PostCardDetails";
import { useNavigate } from "react-router-dom";
function PostDetailsContainer() {
  // go back exact place on the home page
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  // redux to stop showing of the speed dial
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleScrolledDown(true));
  });
  return (
    <Box height={"92vh"}>
      <Box display={"flex"} alignItems={"center"}>
        <Box>
          <IconButton onClick={handleHome}>
            <ArrowBack />
          </IconButton>
        </Box>
        <Box className="w-100 pe-4">
          <Typography className="text-center">Post Details</Typography>
        </Box>
      </Box>
      <Divider variant="fullWidth" component={"div"} />
      <Box
        height={"85vh"}
        sx={{
          overflowX: "auto",
          // Hide scrollbar for Chrome, Safari and Opera
          "&::-webkit-scrollbar": {
            display: "none",
          },
          // Hide scrollbar for IE, Edge and Firefox
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",

          // paddingLeft: window.screen.availWidth<370 && '20%'
        }}
      >
        <PostCardDetails />
      </Box>
    </Box>
  );
}

export default PostDetailsContainer;
