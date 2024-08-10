import { RefreshOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import useScrolledDown from "../hooks/useScrolledDown";
import { useSelector } from "react-redux";

const RefreshBox = () => {
  const { isScrolledDown } = useSelector((state) => state.appUI);

  // run the listening component hook
  useScrolledDown();
  if (isScrolledDown) {
    return;
  }

  return (
    <Box
      m={1}
      sx={{
        position: "fixed",
        top: "60%",
        right:
          window.screen.availWidth <= 500
            ? "-8%"
            : window.screen.availWidth > 1000
            ? "26%"
            : "-3%",
      }}
    >
      <Button
        sx={{ rotate: "270deg"}}
        size="small"
        variant="contained"
        endIcon={<RefreshOutlined />}
      >
        <Typography
          sx={{ textTransform: "capitalize" }}
          className="w-100 text-center "
          variant="body2"
        >
          Latest
        </Typography>
      </Button>
    </Box>
  );
};

export default RefreshBox;
